import { useState } from "react";
import { useLang } from "../lang.jsx";
import { links, person, isPlaceholder } from "../content.js";
import { Head } from "./Sections.jsx";
import Icon from "./Icon.jsx";
import { LangSwitch, ThemeToggle } from "./Header.jsx";

function LinkRow({ icon, label, href, value }) {
  const off = !href || isPlaceholder(href);
  const body = (
    <>
      <span className="ico-tile sm">
        <Icon name={icon} size={18} />
      </span>
      <span className="lr-text">
        <strong>{label}</strong>
        {value && <small className={off ? "ph" : ""}>{value}</small>}
      </span>
    </>
  );
  return off ? (
    <li className="link-row is-off" aria-disabled="true">
      {body}
    </li>
  ) : (
    <li>
      <a className="link-row" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {body}
      </a>
    </li>
  );
}

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const empty = { name: "", email: "", subject: "", message: "", website: "" };
  const [form, setForm] = useState(empty);
  const [state, setState] = useState({ kind: "idle", text: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setState({ kind: "sending", text: "" });
    try {
      if (form.website) return; // robot détecté
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "ec6154bd-854c-43a5-8631-5c7b66ab85b5",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        setState({ kind: "error", text: c.errors.generic });
        return;
      }
      setState({ kind: "ok", text: c.ok });
      setForm(empty);
    } catch {
      setState({ kind: "error", text: c.errors.generic });
    }
  };

  const mailHref = isPlaceholder(links.email) ? "" : `mailto:${links.email}`;

  return (
    <section className="container contact-grid" aria-labelledby="contact-t">
      <div>
        <Head id="contact-t" title={c.title} intro={c.intro} />
        <ul className="link-list">
          <LinkRow icon="linkedin" label={c.links.linkedin} href={links.linkedin} value={links.linkedin.replace("https://www.", "")} />
          <LinkRow icon="github" label={c.links.github} href={links.github} value={links.github.replace("https://", "")} />
          <LinkRow icon="mail" label={c.links.email} href={mailHref} value={links.email} />
          <LinkRow icon="download" label={c.links.cv} href={links.cv} />
        </ul>
      </div>

      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="field-row">
          <div className="field">
            <label htmlFor="f-name">{c.fields.name}</label>
            <input id="f-name" name="name" autoComplete="name" value={form.name} onChange={onChange} required />
          </div>
          <div className="field">
            <label htmlFor="f-email">{c.fields.email}</label>
            <input id="f-email" type="email" name="email" autoComplete="email" value={form.email} onChange={onChange} required />
          </div>
        </div>
        <div className="field">
          <label htmlFor="f-subject">{c.fields.subject}</label>
          <input id="f-subject" name="subject" value={form.subject} onChange={onChange} required />
        </div>
        <div className="field">
          <label htmlFor="f-message">{c.fields.message}</label>
          <textarea id="f-message" name="message" rows="4" value={form.message} onChange={onChange} required />
        </div>
        {/* Champ piège pour les robots : invisible pour les visiteurs */}
        <input className="hp" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" value={form.website} onChange={onChange} />
        <div className="form-foot">
          <button className="btn btn-primary" disabled={state.kind === "sending"}>
            {state.kind === "sending" ? c.sending : c.send}
          </button>
          <p className={`form-msg ${state.kind}`} role="status" aria-live="polite">
            {state.kind === "ok" && <Icon name="check" size={18} />}
            {state.kind === "error" && <Icon name="alert" size={18} />}
            {state.text}
          </p>
        </div>
      </form>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const ext = (href, label) =>
    isPlaceholder(href) ? (
      <span className="is-off">{label}</span>
    ) : (
      <a href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  return (
    <footer className="footer">
      <div className="container footer-in">
        <p className="footer-brand">
          <strong>{person.name}</strong>
          <span className="footer-tag">{t.footer.tagline}</span>
        </p>
        <nav className="footer-links" aria-label={t.footer.links}>
  <a href="#projets">{t.nav.find((n) => n.id === "projets")?.label}</a>
  <a href="#contact">{t.nav.find((n) => n.id === "contact")?.label}</a>
  {ext(links.linkedin, "LinkedIn")}
  {ext(links.github, "GitHub")}
</nav>
        <div className="footer-end">
          <LangSwitch />
          <ThemeToggle />
          <small>© {new Date().getFullYear()}</small>
        </div>
      </div>
    </footer>
  );
}
