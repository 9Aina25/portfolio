import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { answer } from "../src/assistant.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.set("trust proxy", 1);
app.use(cors());
app.use(express.json({ limit: "20kb" }));

// Limite simple en mémoire : max requêtes par adresse IP et par fenêtre de temps.
function limiter({ windowMs, max }) {
  const hits = new Map();
  setInterval(() => {
    const now = Date.now();
    for (const [ip, list] of hits) {
      const kept = list.filter((t) => now - t < windowMs);
      kept.length ? hits.set(ip, kept) : hits.delete(ip);
    }
  }, windowMs).unref();
  return (req, res, next) => {
    const now = Date.now();
    const list = (hits.get(req.ip) || []).filter((t) => now - t < windowMs);
    if (list.length >= max) return res.status(429).json({ error: "rate_limited" });
    list.push(now);
    hits.set(req.ip, list);
    next();
  };
}

// Formulaire de contact : enregistré dans server/messages.json.
// TODO : brancher un envoi d'email (nodemailer) si vous le souhaitez.
app.post("/api/contact", limiter({ windowMs: 10 * 60 * 1000, max: 5 }), (req, res) => {
  const { name, email, subject, message, website } = req.body || {};

  // Champ piège : un robot le remplit, un visiteur ne le voit pas.
  if (website) return res.json({ ok: true });

  if (![name, email, subject, message].every((v) => typeof v === "string" && v.trim())) {
    return res.status(400).json({ error: "missing_fields" });
  }
  if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
    return res.status(400).json({ error: "invalid_email" });
  }

  const file = path.join(__dirname, "messages.json");
  let messages = [];
  try {
    messages = JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    // fichier absent : on commence une nouvelle liste
  }
  messages.push({
    name: name.trim().slice(0, 100),
    email: email.trim().slice(0, 150),
    subject: subject.trim().slice(0, 150),
    message: message.trim().slice(0, 2000),
    date: new Date().toISOString(),
  });
  try {
    fs.writeFileSync(file, JSON.stringify(messages, null, 2));
  } catch {
    return res.status(500).json({ error: "server" });
  }
  res.json({ ok: true });
});

// Assistant : répond uniquement à partir des informations du portfolio.
// Aucune clé d'API n'est nécessaire. Pour brancher un vrai modèle d'IA plus tard,
// gardez la clé ici, côté serveur, et envoyez-lui le contenu de src/content.js comme contexte.
app.post("/api/assistant", limiter({ windowMs: 60 * 1000, max: 20 }), (req, res) => {
  const { message, lang } = req.body || {};
  if (typeof message !== "string" || !message.trim() || message.length > 300) {
    return res.status(400).json({ error: "invalid_message" });
  }
  res.json(answer(message, lang === "en" ? "en" : "fr"));
});

// Sert le site compilé (après `npm run build`)
const dist = path.join(__dirname, "..", "dist");
app.use(express.static(dist));
app.get("*", (req, res) => {
  res.sendFile(path.join(dist, "index.html"));
});

app.listen(PORT, () => console.log(`Serveur sur http://localhost:${PORT}`));
