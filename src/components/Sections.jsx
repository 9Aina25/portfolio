import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "../lang.jsx";
import { skills } from "../content.js";
import { Rise, Ph } from "./ui.jsx";
import Icon from "./Icon.jsx";

export function Head({ id, title, intro }) {
  return (
    <div className="sec-head">
      <h2 id={id} className="h-xl">
        <Rise>{title}</Rise>
      </h2>
      {intro && <p className="sec-intro">{intro}</p>}
    </div>
  );
}

export function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section className="container about" aria-labelledby="about-t">
      <div>
        <h2 id="about-t" className="h-xl about-title">
          <Rise>{a.title}</Rise>
        </h2>
        <ul className="values">
          {a.values.map((v) => (
            <li key={v.title}>
              <span className="ico-tile">
                <Icon name={v.icon} />
              </span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="about-body">
        <p className="lead">{a.paragraphs[0]}</p>
        {a.paragraphs.slice(1).map((p) => (
          <p key={p} className="text">
            {p}
          </p>
        ))}
        <dl className="facts">
          {a.facts.map((f) => (
            <div key={f.k}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = useLang();
  const s = t.skills;
  return (
    <section className="container" aria-labelledby="skills-t">
      <Head id="skills-t" title={s.title} intro={s.intro} />
      <div className="skills-grid">
        {skills.map((g) => (
          <div key={g.id} className="sk">
            <div className="sk-head">
              <span className="ico-tile">
                <Icon name={g.icon} />
              </span>
              <h3>{s.groups[g.id]}</h3>
            </div>
            <ul className="sk-items">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Journey() {
  const { t } = useLang();
  const j = t.journey;
  const reduce = useReducedMotion();
  return (
    <section className="container" aria-labelledby="journey-t">
      <Head id="journey-t" title={j.title} intro={j.intro} />
      <ol className="steps">
        <span className="steps-line" aria-hidden="true">
          <motion.span
            className="steps-fill"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </span>
        {j.items.map((it) => (
          <li className="step" key={it.title}>
            <span className="step-dot" aria-hidden="true" />
            <span className="step-date">
              <Ph>{it.date}</Ph>
            </span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Beyond() {
  const { t } = useLang();
  const b = t.beyond;
  return (
    <section className="container" aria-labelledby="beyond-t">
      <Head id="beyond-t" title={b.title} intro={b.intro} />
      <ul className="beyond-grid">
        {b.items.map((it) => (
          <li key={it.title}>
            <span className="ico-tile">
              <Icon name={it.icon} />
            </span>
            <div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
