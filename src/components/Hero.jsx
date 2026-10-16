import { useLang } from "../lang.jsx";
import { person, links, featured } from "../content.js";
import { Rise } from "./ui.jsx";
import Icon from "./Icon.jsx";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="container hero" aria-labelledby="hero-name">
      <div className="hero-copy">
        <p className="status">
          <span className="dot" aria-hidden="true" />
          {t.hero.status}
        </p>
        <h1 id="hero-name" className="hero-name">
          <Rise>{person.first}</Rise>
          <Rise delay={0.1}>{person.last}</Rise>
        </h1>
        <p className="hero-role">{t.hero.role}</p>
        <p className="hero-intro">{t.hero.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projets">
            {t.hero.projects}
          </a>
          <a className="btn btn-outline" href={links.cv} download>
            <Icon name="download" size={18} />
            {t.hero.cv}
          </a>
          <a className="btn btn-text" href="#contact">
            {t.hero.contact}
          </a>
        </div>
      </div>

      <aside className="profile">
        <div className="profile-top">
          <div className="avatar">{person.photo ? <img src={person.photo} alt={person.name} /> : <span>{person.initials}</span>}</div>
          <div>
            <strong>{person.name}</strong>
            <small>{t.hero.role}</small>
          </div>
        </div>
        <dl className="profile-facts">
          {t.about.facts.map((f) => (
            <div key={f.k}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
        <ul className="chips">
          {featured.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
