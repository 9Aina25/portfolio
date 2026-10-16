import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLang } from "../lang.jsx";
import { answer } from "../assistant.js";
import Icon from "./Icon.jsx";

async function ask(message, lang) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 6000);
  try {
    const res = await fetch("/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, lang }),
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error("api");
    return await res.json();
  } catch {
    // Serveur indisponible (hébergement statique) : même moteur, côté navigateur.
    return answer(message, lang);
  } finally {
    clearTimeout(timer);
  }
}

export default function Assistant() {
  const { t, lang } = useLang();
  const a = t.assistant;
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [messages, busy, reduce]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = async (text) => {
    const msg = text.trim();
    if (!msg || busy) return;
    setMessages((m) => [...m, { role: "user", text: msg }]);
    setInput("");
    setBusy(true);
    const [res] = await Promise.all([ask(msg, lang), new Promise((r) => setTimeout(r, 450))]);
    setMessages((m) => [...m, { role: "bot", text: res.text, links: res.links || [] }]);
    setBusy(false);
  };

  return (
    <div className="assistant">
      <AnimatePresence>
        {open && (
          <motion.section
            className="chat"
            role="dialog"
            aria-label={a.name}
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <header className="chat-head">
              <span className="chat-avatar" aria-hidden="true">
                <Icon name="chat" size={18} />
              </span>
              <div>
                <strong>{a.name}</strong>
                <small>{a.subtitle}</small>
              </div>
              <button type="button" className="chat-x" onClick={() => setOpen(false)} aria-label={a.close}>
                <Icon name="x" size={20} />
              </button>
            </header>

            <div className="chat-list" ref={listRef} aria-live="polite">
              <div className="bubble bot">
                {a.welcome.map((w) => (
                  <p key={w}>{w}</p>
                ))}
              </div>
              {messages.length === 0 && (
                <div className="try">
                  <p>{a.try}</p>
                  {a.suggestions.map((s) => (
                    <button key={s} type="button" onClick={() => send(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`bubble ${m.role}`}>
                  {m.text.split("\n").map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                  {m.links?.length > 0 && (
                    <div className="bubble-links">
                      {m.links.map((l) => (
                        <a
                          key={l.href + l.label}
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          onClick={() => !l.href.startsWith("http") && setOpen(false)}
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {busy && (
                <div className="bubble bot typing" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
              )}
            </div>

            <form
              className="chat-form"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={a.placeholder}
                aria-label={a.placeholder}
                maxLength={300}
              />
              <button type="submit" aria-label={a.send} disabled={busy || !input.trim()}>
                <Icon name="send" size={18} />
              </button>
            </form>
            <p className="chat-note">{a.note}</p>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="fab"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? a.close : a.open}
      >
        <Icon name={open ? "x" : "chat"} size={24} />
      </button>
    </div>
  );
}
