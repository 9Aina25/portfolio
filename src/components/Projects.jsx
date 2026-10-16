import { useLang } from "../lang.jsx";
import { projectsMeta } from "../content.js";
import { MediaSlot } from "./ui.jsx";
import { Head } from "./Sections.jsx";

export function Projects() {
  const { t } = useLang();
  const p = t.projects;
  return (
    <section className="container sec-projects" aria-labelledby="projects-t">
      <Head id="projects-t" title={p.title} />
      <div className="pgrid">
        {projectsMeta.map((m) => {
          const it = p.items[m.id];
          const photo = m.gallery?.find(Boolean);
          const isVideo = !!m.video;
          return (
            <article className="pcard" key={m.id}>
              <h3 className="h-md">{it.title}</h3>
              <p className="pcard-sum">{it.summary}</p>
              <MediaSlot src={isVideo ? m.video : photo} caption="" video={isVideo} t={p} />
            </article>
          );
        })}
      </div>
    </section>
  );
}