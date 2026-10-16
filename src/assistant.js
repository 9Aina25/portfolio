// Moteur de l'assistant : il ne répond qu'à partir des informations de content.js.
// Il est utilisé par le serveur (/api/assistant) et, en secours, directement dans le navigateur.
import { i18n, projectsMeta, skills, links, isPlaceholder } from "./content.js";

const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const real = (u) => u && !isPlaceholder(u);

const S = {
  fr: {
    greet: "Bonjour ! Posez-moi une question sur le parcours, les compétences ou les projets d'Aina.",
    thanks: "Avec plaisir. Une autre question sur le portfolio ?",
    fallback:
      "Je n'ai pas cette information dans le portfolio. Je peux parler du parcours, des compétences, des projets ou du contact d'Aina.",
    projects: (n) => `Aina présente trois projets : ${n}.`,
    skills: "Voici ses compétences :",
    techIn: (tech, cat) => `${tech} fait partie des compétences d'Aina (${cat}).`,
    usedIn: (l) => ` Il est utilisé dans : ${l}.`,
    notUsed: " Aucun des projets présentés ici ne l'utilise pour l'instant.",
    stack: "Technologies",
    journey: "Voici son parcours :",
    contact: "Vous pouvez écrire à Aina avec le formulaire de contact. Ses autres liens sont ci-dessous.",
    cv: "Vous pouvez télécharger le CV d'Aina ici.",
    intern:
      "Aina a fait un stage d'observation au CISCO Antsirabe I, au service informatique. Il y a développé une application de gestion des demandes de diplômes BEPC et CEPE.",
    l: {
      contact: "Formulaire de contact",
      cv: "Télécharger le CV",
      projects: "Voir les projets",
      details: "Voir la fiche du projet",
      about: "Lire la présentation",
      skills: "Voir les compétences",
      journey: "Voir le parcours",
    },
  },
  en: {
    greet: "Hello! Ask me about Aina's background, skills or projects.",
    thanks: "My pleasure. Any other question about the portfolio?",
    fallback:
      "I don't have that information in the portfolio. I can talk about Aina's background, skills, projects or how to contact him.",
    projects: (n) => `Aina presents three projects: ${n}.`,
    skills: "Here are his skills:",
    techIn: (tech, cat) => `${tech} is part of Aina's skills (${cat}).`,
    usedIn: (l) => ` It is used in: ${l}.`,
    notUsed: " None of the projects shown here uses it for now.",
    stack: "Technologies",
    journey: "Here is his background:",
    contact: "You can write to Aina with the contact form. His other links are below.",
    cv: "You can download Aina's CV here.",
    intern:
      "Aina did an observation internship at CISCO Antsirabe I, in the IT department. He built an application to manage BEPC and CEPE diploma requests there.",
    l: {
      contact: "Contact form",
      cv: "Download the CV",
      projects: "See the projects",
      details: "View the project page",
      about: "Read the introduction",
      skills: "See the skills",
      journey: "See the journey",
    },
  },
};

export function answer(message, lang = "fr") {
  const L = lang === "en" ? "en" : "fr";
  const t = i18n[L];
  const s = S[L];
  const q = norm(String(message || "")).slice(0, 300);

  const projectAnswer = (id) => {
    const meta = projectsMeta.find((p) => p.id === id);
    const it = t.projects.items[id];
    return {
      text: `${it.title}. ${it.summary}\n${s.stack} : ${meta.stack.join(", ")}.`,
      links: [{ label: s.l.details, href: `#/projets/${id}` }],
    };
  };

  if (/merci|thank/.test(q)) return { text: s.thanks };
  if (/^(bonjour|bonsoir|salut|hello|hi|hey)\b/.test(q) && q.length < 25) return { text: s.greet };

  if (/stage|intern|cisco/.test(q)) return { text: s.intern, links: [{ label: s.l.details, href: "#/projets/diplomes" }] };
  if (/agria|plante|plant|maladie|disease/.test(q)) return projectAnswer("agria");
  if (/diplome|bepc|cepe/.test(q)) return projectAnswer("diplomes");
  if (/factur|invoice|billing/.test(q)) return projectAnswer("facturation");

  // Une technologie précise
  for (const g of skills) {
    for (const item of g.items) {
      const pattern = esc(norm(item)).replace(/\\\./g, "\\.?");
      if (new RegExp(`(^|[^a-z0-9])${pattern}($|[^a-z0-9+])`).test(q)) {
        const used = projectsMeta
          .filter((p) => p.stack.some((x) => x.toLowerCase() === item.toLowerCase()))
          .map((p) => t.projects.items[p.id].title);
        const text = s.techIn(item, t.skills.groups[g.id]) + (used.length ? s.usedIn(used.join(", ")) : s.notUsed);
        const ids = projectsMeta.filter((p) => used.includes(t.projects.items[p.id].title)).map((p) => p.id);
        return { text, links: ids.map((id) => ({ label: t.projects.items[id].title, href: `#/projets/${id}` })) };
      }
    }
  }

  if (/projet|project|realis|travaux|work|achievement/.test(q)) {
    const names = projectsMeta.map((p) => t.projects.items[p.id].title).join(", ");
    return {
      text: s.projects(names),
      links: [
        ...projectsMeta.map((p) => ({ label: t.projects.items[p.id].title, href: `#/projets/${p.id}` })),
      ],
    };
  }

  if (/competence|skill|techno|stack|langage|language|outil|tool|savoir/.test(q)) {
    const lines = skills.map((g) => `${t.skills.groups[g.id]} : ${g.items.join(", ")}`).join("\n");
    return { text: `${s.skills}\n${lines}`, links: [{ label: s.l.skills, href: "#competences" }] };
  }

  if (/parcours|formation|etude|study|studies|background|career|education|ecole|school|journey|experience/.test(q)) {
    const lines = t.journey.items.map((i) => `${i.title} : ${i.text}`).join("\n");
    return { text: `${s.journey}\n${lines}`, links: [{ label: s.l.journey, href: "#parcours" }] };
  }

  if (/\bcv\b|resume|curriculum/.test(q)) return { text: s.cv, links: [{ label: s.l.cv, href: links.cv }] };

  if (/contact|joindre|ecrire|email|mail|reach|linkedin|github|write/.test(q)) {
    const out = [{ label: s.l.contact, href: "#contact" }];
    if (real(links.linkedin)) out.push({ label: "LinkedIn", href: links.linkedin });
    if (real(links.github)) out.push({ label: "GitHub", href: links.github });
    return { text: s.contact, links: out };
  }

  if (/qui|who|present|about|propos|profil|aina/.test(q)) {
    return { text: t.hero.intro, links: [{ label: s.l.about, href: "#apropos" }] };
  }

  return { text: s.fallback, links: [{ label: s.l.projects, href: "#projets" }] };
}
