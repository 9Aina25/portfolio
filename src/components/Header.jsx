import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "../lang.jsx";
import { useTheme } from "../theme.jsx";
import { person } from "../content.js";
import Icon from "./Icon.jsx";

export const NAV = ["accueil", "apropos", "projets", "contact"];

export function LangSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="lang" role="group" aria-label={t.lang.label}>
      {["fr", "en"].map((l) => (
        <button key={l} type="button" lang={l} aria-pressed={lang === l} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  const dark = theme === "dark";
  return (
    <button type="button" className="theme-btn" onClick={toggle} aria-label={dark ? t.theme.toLight : t.theme.toDark} title={dark ? t.theme.toLight : t.theme.toDark}>
      <Icon name={dark ? "sun" : "moon"} size={18} />
    </button>
  );
}

export default function Header({ active }) {
  const { t } = useLang();
  const reduce = useReducedMotion();
  return (
    <header className="hdr">
      <div className="container hdr-in">
        <a href="#accueil" className="brand">
          <span className="brand-mark" aria-hidden="true">{person.initials}</span>
          <span className="brand-name">{person.name}</span>
        </a>

        <nav className="tabs" aria-label="Navigation">
          {t.nav.filter((n) => NAV.includes(n.id)).map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? "on" : ""} aria-current={active === n.id ? "page" : undefined}>
              {active === n.id && (
                <motion.span layoutId="tab-ind" className="tab-ind" transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }} />
              )}
              <span className="tab-label">{n.label}</span>
            </a>
          ))}
        </nav>

        <div className="hdr-tools">
          <LangSwitch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}