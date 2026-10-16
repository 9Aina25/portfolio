import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LangProvider, useLang } from "./lang.jsx";
import { ThemeProvider } from "./theme.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { About } from "./components/Sections.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact, Footer } from "./components/Contact.jsx";
import Assistant from "./components/Assistant.jsx";

const PAGES = { accueil: Hero, apropos: About, projets: Projects, contact: Contact };

const parse = () => {
  const id = window.location.hash.slice(1);
  return PAGES[id] ? id : "accueil";
};

function Site() {
  const { t } = useLang();
  const [section, setSection] = useState(parse);
  const reduce = useReducedMotion();
  const scroller = useRef(null);
  const Page = PAGES[section];

  useEffect(() => {
    const on = () => setSection(parse());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);

  useEffect(() => {
    scroller.current?.scrollTo(0, 0);
  }, [section]);

  return (
    <div className="app">
      <a className="skip" href="#main">{t.skip}</a>
      <Header active={section} />
      <main id="main" className="view" ref={scroller} tabIndex={-1}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={section}
            className="view-in"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            transition={{ duration: 0.3 }}
          >
            <Page />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Assistant />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Site />
      </LangProvider>
    </ThemeProvider>
  );
}