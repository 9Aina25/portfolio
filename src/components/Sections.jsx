import { useLang } from "../lang.jsx";
import { Rise } from "./ui.jsx";
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
        {a.paragraphs[1] && <p className="text">{a.paragraphs[1]}</p>}
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