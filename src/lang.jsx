import { createContext, useContext, useEffect, useState } from "react";
import { i18n } from "./content.js";

const Ctx = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    // stockage indisponible : on se fie à la langue du navigateur
  }
  return (navigator.language || "fr").toLowerCase().startsWith("en") ? "en" : "fr";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = i18n[lang].meta.title;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignoré
    }
  }, [lang]);

  return <Ctx.Provider value={{ lang, setLang, t: i18n[lang] }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
