import { useEffect, useRef, useState } from "react";
import { LangProvider, useLang } from "./lang.jsx";
import { ThemeProvider } from "./theme.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { About } from "./components/Sections.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact, Footer } from "./components/Contact.jsx";

const BLOCKS = [
  { id: "accueil", Page: Hero },
  { id: "apropos", Page: About },
  { id: "projets", Page: Projects },
  { id: "contact", Page: Contact },
];

function Site() {
  const { t } = useLang();
  const [active, setActive] = useState("accueil");
  const scroller = useRef(null);

  useEffect(() => {
    const root = scroller.current;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { root, rootMargin: "-45% 0px -50% 0px" }
    );
    BLOCKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const onScroll = () => {
      if (root.scrollTop + root.clientHeight >= root.scrollHeight - 4) setActive("contact");
    };
    root.addEventListener("scroll", onScroll);
    const id = window.location.hash.slice(1);
    if (BLOCKS.some((b) => b.id === id)) document.getElementById(id)?.scrollIntoView();
    return () => {
      io.disconnect();
      root.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="app">
      <a className="skip" href="#main">{t.skip}</a>
      <Header active={active} />
      <main id="main" className="view" ref={scroller} tabIndex={-1}>
        {BLOCKS.map(({ id, Page }) => (
          <div key={id} id={id} className="block">
            <Page />
          </div>
        ))}
      </main>
      <Footer />
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