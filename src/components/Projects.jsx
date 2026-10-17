import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLang } from "../lang.jsx";
import { projectsMeta } from "../content.js";
import { Head } from "./Sections.jsx";
import Icon from "./Icon.jsx";
import "../dialog.css";

const isVideo = (s) => /\.(mp4|webm|mov|ogg)$/i.test(s);
const mediaOf = (m) => [m.video, ...(m.gallery || [])].filter(Boolean);
const MAX_BADGES = 6;

function Cover({ items, ui }) {
  const [failed, setFailed] = useState(false);
  const img = items.find((s) => !isVideo(s));
  const vid = items.find(isVideo);
  const empty = failed || (!img && !vid);
  return (
    <div className="cover">
      {empty ? (
        <div className="cover-empty">
          <Icon name="image" size={28} />
          <span>{failed ? ui.broken : ui.empty}</span>
        </div>
      ) : img ? (
        <img src={img} alt="" loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <video src={`${vid}#t=0.5`} preload="metadata" muted playsInline onError={() => setFailed(true)} />
      )}
      {!empty && vid && (
        <span className="cover-play">
          <Icon name="play" size={18} />
        </span>
      )}
      {!empty && items.length > 1 && (
        <span className="cover-count">
          <Icon name="image" size={14} />
          {items.length}
        </span>
      )}
    </div>
  );
}

function Gallery({ items, title, ui }) {
  const len = items.length;
  const [i, setI] = useState(0);
  const [bad, setBad] = useState({});
  const thumbs = useRef(null);
  const touchX = useRef(null);
  const go = (n) => setI(((n % len) + len) % len);
  const src = items[i];

  useEffect(() => {
    if (len < 2) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") setI((v) => (v + 1) % len);
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + len) % len);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [len]);

  useEffect(() => {
    const box = thumbs.current;
    const el = box?.children[i];
    if (box && el) box.scrollTo({ left: el.offsetLeft - (box.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
  }, [i]);

  useEffect(() => {
    [i - 1, i + 1].forEach((k) => {
      const s = items[(k + len) % len];
      if (s && !isVideo(s)) new Image().src = s;
    });
  }, [i, items, len]);

  const markBad = () => setBad((b) => ({ ...b, [src]: true }));

  return (
    <div className="gal" role="group" aria-roledescription="carousel" aria-label={title}>
      <div
        className="gal-stage"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (len > 1 && Math.abs(dx) > 45) go(i + (dx < 0 ? 1 : -1));
        }}
      >
        {bad[src] ? (
          <div className="gal-bad">
            <Icon name="image" size={30} />
            <span>{ui.broken}</span>
          </div>
        ) : isVideo(src) ? (
          <video key={src} src={src} controls playsInline preload="metadata" onError={markBad} />
        ) : (
          <img key={src} src={src} alt={`${title}, ${i + 1} / ${len}`} onError={markBad} />
        )}
        {len > 1 && (
          <>
            <button type="button" className="gal-nav prev" onClick={() => go(i - 1)} aria-label={ui.prev}>
              <Icon name="arrow-left" size={22} />
            </button>
            <button type="button" className="gal-nav next" onClick={() => go(i + 1)} aria-label={ui.next}>
              <Icon name="arrow-right" size={22} />
            </button>
            <span className="gal-count" aria-live="polite">
              {i + 1} / {len}
            </span>
          </>
        )}
      </div>

      {len > 1 && (
        <div className="gal-thumbs" ref={thumbs}>
          {items.map((s, k) => (
            <button
              key={s}
              type="button"
              className={`gal-th ${k === i ? "on" : ""}`}
              onClick={() => go(k)}
              aria-label={`${ui.show} ${k + 1} / ${len}`}
              aria-current={k === i ? "true" : undefined}
            >
              {isVideo(s) ? (
                <span className="gal-th-vid">
                  <Icon name="play" size={18} />
                </span>
              ) : (
                <img src={s} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Details({ id, onClose }) {
  const { t } = useLang();
  const p = t.projects;
  const ui = p.ui;
  const meta = projectsMeta.find((m) => m.id === id);
  const it = p.items[id];
  const items = mediaOf(meta);
  const panel = useRef(null);
  const closeBtn = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus({ preventScroll: true });

    const onKey = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const nodes = panel.current?.querySelectorAll('button:not([disabled]), a[href], video[controls], [tabindex]:not([tabindex="-1"])');
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  return createPortal(
    <div
      className="dlg"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dlg-panel" role="dialog" aria-modal="true" aria-labelledby="dlg-title" ref={panel}>
        <header className="dlg-head">
          <h3 id="dlg-title">{it.title}</h3>
          <button type="button" className="dlg-x" onClick={onClose} ref={closeBtn} aria-label={ui.close} title={ui.close}>
            <Icon name="x" size={22} />
          </button>
        </header>

        <div className="dlg-body">
          {items.length ? (
            <Gallery items={items} title={it.title} ui={ui} />
          ) : (
            <div className="gal-stage gal-bad">
              <Icon name="image" size={30} />
              <span>{ui.empty}</span>
            </div>
          )}
          <div className="dlg-text">
            <h4>{ui.about}</h4>
            <p>{it.description || it.summary}</p>
            <h4>{ui.tech}</h4>
            <ul className="chips">
              {meta.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const ui = p.ui;
  const [openId, setOpenId] = useState(null);
  const close = useCallback(() => setOpenId(null), []);

  return (
    <section className="container sec-projects" aria-labelledby="projects-t">
      <Head id="projects-t" title={p.title} />
      <div className="pgrid">
        {projectsMeta.map((m) => {
          const it = p.items[m.id];
          const extra = m.stack.length - MAX_BADGES;
          const open = () =>setOpenId(m.id);
          return (
            <article className="pcard" key={m.id}>
              <button type="button" className="pcard-open" onClick={open} aria-label={`${ui.details} : ${it.title}`}>
                <Cover items={mediaOf(m)} ui={ui} />
              </button>
              <div className="pcard-body">
                <h3 className="h-md">{it.title}</h3>
                <p className="pcard-sum">{it.summary}</p>
                <ul className="chips">
                  {m.stack.slice(0, MAX_BADGES).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                  {extra > 0 && (
                    <li className="chip-more" aria-label={`+${extra} ${ui.more}`}>
                      +{extra}
                    </li>
                  )}
                </ul>
                <button type="button" className="btn btn-primary btn-sm pcard-btn" onClick={open}>
                  {ui.details}
                </button>
              </div>
            </article>
          );
        })}
      </div>
      {openId && <Details id={openId} onClose={close} />}
    </section>
  );
}
