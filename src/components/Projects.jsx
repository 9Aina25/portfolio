import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLang } from "../lang.jsx";
import { projectsMeta } from "../content.js";
import { Head } from "./Sections.jsx";
import Icon from "./Icon.jsx";

const isVideo = (s) => /\.(mp4|webm|mov)$/i.test(s);
const mediaOf = (m) => [m.video, ...(m.gallery || [])].filter(Boolean);

function Cover({ items, title, empty }) {
  const img = items.find((s) => !isVideo(s));
  const vid = items.find(isVideo);
  return (
    <div className="cover">
      {img ? (
        <img src={img} alt={title} loading="lazy" />
      ) : vid ? (
        <video src={`${vid}#t=0.5`} preload="metadata" muted playsInline />
      ) : (
        <div className="cover-empty">
          <Icon name="image" size={28} />
          <span>{empty}</span>
        </div>
      )}
      {vid && (
        <span className="cover-play">
          <Icon name="play" size={20} />
        </span>
      )}
      {items.length > 1 && (
        <span className="cover-count">
          <Icon name="image" size={14} /> {items.length}
        </span>
      )}
    </div>
  );
}

function Lightbox({ title, items, stack, onClose }) {
  const { lang } = useLang();
  const fr = lang === "fr";
  const [i, setI] = useState(0);
  const last = items.length - 1;
  const src = items[i];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((v) => Math.min(last, v + 1));
      if (e.key === "ArrowLeft") setI((v) => Math.max(0, v - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [last, onClose]);

  return createPortal(
    <div className="lb" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="lb-box" onClick={(e) => e.stopPropagation()}>
        <header className="lb-head">
          <div>
            <strong>{title}</strong>
            <small>{i + 1} / {items.length}</small>
          </div>
          <button type="button" className="lb-x" onClick={onClose} aria-label={fr ? "Fermer" : "Close"}>
            <Icon name="x" size={22} />
          </button>
        </header>

        <div className="lb-stage">
          {isVideo(src) ? (
            <video key={src} src={src} controls autoPlay playsInline />
          ) : (
            <img key={src} src={src} alt={`${title} ${i + 1}`} />
          )}
          {last > 0 && (
            <>
              <button type="button" className="lb-nav prev" onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0} aria-label={fr ? "Précédent" : "Previous"}>
                <Icon name="arrow-left" size={22} />
              </button>
              <button type="button" className="lb-nav next" onClick={() => setI(Math.min(last, i + 1))} disabled={i === last} aria-label={fr ? "Suivant" : "Next"}>
                <Icon name="arrow-right" size={22} />
              </button>
            </>
          )}
        </div>

        {last > 0 && (
          <div className="lb-thumbs">
            {items.map((s, k) => (
              <button key={s + k} type="button" className={`lb-th ${k === i ? "on" : ""}`} onClick={() => setI(k)} aria-label={`${k + 1} / ${items.length}`}>
                {isVideo(s) ? <span className="lb-th-vid"><Icon name="play" size={18} /></span> : <img src={s} alt="" loading="lazy" />}
              </button>
            ))}
          </div>
        )}

        <ul className="chips lb-chips">
          {stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
}

export function Projects() {
  const { t, lang } = useLang();
  const p = t.projects;
  const [open, setOpen] = useState(null);
  const view = lang === "fr" ? "Voir en grand" : "View larger";

  return (
    <section className="container sec-projects" aria-labelledby="projects-t">
      <Head id="projects-t" title={p.title} />
      <div className="pgrid">
        {projectsMeta.map((m) => {
          const it = p.items[m.id];
          const items = mediaOf(m);
          const openIt = () => items.length && setOpen({ title: it.title, items, stack: m.stack });
          return (
            <article className="pcard" key={m.id}>
              <button type="button" className="pcard-open" onClick={openIt} aria-label={`${view} : ${it.title}`}>
                <Cover items={items} title={it.title} empty={p.slotImage} />
              </button>
              <div className="pcard-body">
                <h3 className="h-md">{it.title}</h3>
                <p className="pcard-sum">{it.summary}</p>
                <ul className="chips">
                  {m.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {items.length > 0 && (
                  <button type="button" className="btn btn-outline btn-sm" onClick={openIt}>
                    {view}
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
      {open && <Lightbox {...open} onClose={() => setOpen(null)} />}
    </section>
  );
}