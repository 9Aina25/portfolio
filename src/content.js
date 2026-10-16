export const isPlaceholder = (v) => typeof v === "string" && v.includes("[");

export const links = {
  github: "https://github.com/9Aina25",
  linkedin: "https://www.linkedin.com/in/aina-natolotra-95b604439/",
  email: "ainanatolotra925@gmail.com",
  cv: "/CV AINA Natolotra.pdf",
};

export const person = {
  name: "Aina Natolotra",
  first: "Aina",
  last: "Natolotra",
  initials: "AN",
  photo: "/IMG_6149.jpeg",
};

export const featured = [
  "Python",
  "React",
  "Node.js",
  "Flutter",
  "Java",
  "MongoDB",
];

// Technologies (identiques dans les deux langues)
export const skills = [
  {
    id: "languages",
    icon: "code",
    items: ["Java", "JavaScript", "Python", "PHP"],
  },
  { id: "frontend", icon: "monitor", items: ["HTML", "CSS", "React"] },
  {
    id: "backend",
    icon: "server",
    items: ["Node.js", "Express", "FastAPI", "Symfony"],
  },
  { id: "mobile", icon: "smartphone", items: ["Flutter", "Dart"] },
  { id: "databases", icon: "database", items: ["MySQL", "SQLite", "MongoDB"] },
  {
    id: "tools",
    icon: "tool",
    items: ["Git", "GitHub", "VS Code", "NetBeans"],
  },
];

export const projectsMeta = [
  {
    id: "agria",
    device: "phone",
    stack: ["Flutter", "FastAPI", "MongoDB", "CNN / ResNet50"],
    github: "https://github.com/9Aina25/agria",
    demo: "",
    gallery: [
      "public/projets/Screenshot_20260615-135421",
      "public/projets/Screenshot 2026-10-15 182850.png",
    ],
    video: "public/projets/AgrIA.mp4",
  },
  {
    id: "diplomes",
    device: "desktop",
    stack: ["Java", "Swing", "Base de données"],
    github: "https://github.com/[pseudo]/gestion-diplomes",
    demo: "",
    gallery: ["public/projets/Screenshot 2026-10-15 180422.png", "", ""],
    video: "",
  },
  {
    id: "facturation",
    device: "browser",
    stack: ["Symfony", "React", "MySQL"],
    github: "https://github.com/[pseudo]/facturation",
    demo: "",
    gallery: ["", "", ""],
    video: "",
  },
];

export const i18n = {
  fr: {
    meta: { title: "Aina Natolotra, développeur web et logiciel" },
    skip: "Aller au contenu",
    nav: [
      { id: "accueil", label: "Accueil" },
      { id: "apropos", label: "À propos" },
      { id: "competences", label: "Compétences" },
      { id: "projets", label: "Projets" },
      { id: "parcours", label: "Parcours" },
      { id: "autre", label: "Au-delà du code" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Me contacter",
    menu: { open: "Ouvrir le menu", close: "Fermer le menu" },
    lang: { label: "Langue" },
    theme: {
      toDark: "Activer le mode sombre",
      toLight: "Activer le mode clair",
    },
    hero: {
      status: "Ouvert aux opportunités",
      role: "Développeur web & logiciel",
      intro:
        "Étudiant en Génie Logiciel à l'ESP Antsirabe, je m'intéresse à la conception d'applications web, mobiles et logicielles. J'aime transformer des idées en solutions pratiques, apprendre de nouvelles technologies et développer des projets répondant à des besoins réels.",
      projects: "Découvrir mes projets",
      cv: "Télécharger mon CV",
      contact: "Me contacter",
      devices: {
        web: "Facturation",
        desktop: "Demandes de diplômes",
        mobile: "AgrIA",
      },
    },
    about: {
      title: "Derrière le code, une envie de créer.",
      paragraphs: [
        "Je me forme en Génie Logiciel à l'ESP Antsirabe, avec un intérêt pour le développement web, logiciel et mobile.",
        "Mon stage au CISCO Antsirabe I, au service informatique, s'est traduit par une application de gestion des demandes de diplômes.",
        "Ma façon de travailler : apprendre, analyser les besoins, concevoir, puis améliorer.",
        "Mon objectif : participer à la création de solutions numériques utiles et continuer à progresser comme développeur.",
      ],
      facts: [
        { k: "Formation", v: "Génie Logiciel, ESP Antsirabe" },
        { k: "Stage", v: "CISCO Antsirabe I, service informatique" },
        { k: "Domaines", v: "Web, mobile, logiciel" },
      ],
      values: [
        {
          icon: "trending",
          title: "Apprentissage continu",
          text: "Je cherche à progresser à chaque projet et à découvrir de nouvelles technologies.",
        },
        {
          icon: "target",
          title: "Résolution de problèmes",
          text: "J'analyse le besoin avant de concevoir une solution adaptée.",
        },
        {
          icon: "users",
          title: "Esprit d'équipe",
          text: "J'aime échanger, partager les idées et apprendre des autres.",
        },
      ],
    },
    skills: {
      title: "Mes compétences",
      intro:
        "Les technologies que j'utilise et que je peux expliquer en entretien.",
      groups: {
        languages: "Langages",
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        databases: "Bases de données",
        tools: "Outils",
      },
    },
    projects: {
      title: "Mes projets",
      intro:
        "Trois applications, trois contextes : mobile et IA, bureau, web. Chaque projet a sa fiche détaillée.",
      details: "Voir les détails",
      github: "Code source",
      demo: "Démonstration",
      video: "Démonstration vidéo",
      back: "Tous les projets",
      next: "Projet suivant",
      prev: "Projet précédent",
      linkMissing: "Lien à ajouter",
      slotImage: "Emplacement de la capture d'écran",
      slotVideo: "Emplacement de la vidéo de démonstration",
      fiche: "Fiche du projet",
      labels: { context: "Contexte", status: "État", stack: "Technologies" },
      tabs: {
        overview: "Présentation",
        features: "Fonctionnalités",
        tech: "Technologies",
        challenges: "Difficultés",
        gallery: "Captures",
        video: "Vidéo",
      },
      sections: {
        problem: "Le problème",
        objectives: "Objectifs et utilisateurs",
        audience: "Utilisateurs concernés",
        features: "Fonctionnalités développées",
        tech: "Technologies et rôle",
        challenges: "Difficultés et solutions",
        gallery: "Captures d'écran",
        video: "Vidéo de présentation",
        links: "Liens",
      },
      items: {
        agria: {
          title: "AgrIA",
          kind: "Application mobile et intelligence artificielle",
          summary:
            "Application d'aide au diagnostic des maladies des plantes à partir de photos, avec conseils de traitement et de prévention.",
          context: "Projet académique",
          status: "[À préciser : terminé, en cours ou prototype]",
          tags: ["Mobile", "IA"],
          problem:
            "Reconnaître une maladie sur une plante demande de l'expérience. AgrIA propose une aide au diagnostic à partir d'une simple photo, avec des conseils de traitement et de prévention.",
          objectives:
            "Aider à identifier rapidement un problème sur une plante et à adopter les bons gestes de traitement et de prévention.",
          audience:
            "[Utilisateurs visés : agriculteurs, jardiniers, étudiants…]",
          features: [
            "Diagnostic d'une maladie à partir d'une photo de la plante",
            "Résultat du diagnostic avec conseils de traitement et de prévention",
            "Historique des diagnostics",
          ],
          tech: [
            { n: "Flutter", r: "Interface de l'application mobile" },
            {
              n: "FastAPI",
              r: "API qui reçoit les images et renvoie le diagnostic",
            },
            { n: "MongoDB", r: "Stockage des données" },
            {
              n: "CNN / ResNet50",
              r: "Modèle de classification des images de plantes",
            },
          ],
          challenges:
            "[Difficultés et solutions : qualité du jeu de données, précision du modèle, intégration du modèle dans l'API…]",
          gallery: [
            "Galerie de l'application",
            "Résultat du diagnostic",
            "Historique des diagnostics",
          ],
          videoCaption: "Démonstration de l'application",
        },
        diplomes: {
          title: "Gestion des demandes de diplômes",
          kind: "Application de bureau, projet de stage",
          summary:
            "Application de gestion des demandes de diplômes BEPC et CEPE pour le CISCO Antsirabe I.",
          context: "Projet de stage",
          status: "[À préciser : terminé, en cours ou prototype]",
          tags: ["Bureau"],
          problem:
            "Le CISCO Antsirabe I traite des demandes de diplômes BEPC et CEPE. L'application centralise leur suivi dans un outil dédié.",
          objectives:
            "Faciliter l'enregistrement et le suivi des demandes pour le personnel du CISCO Antsirabe I.",
          audience: "Personnel du CISCO Antsirabe I",
          features: [
            "[Fonctionnalité 1 : par exemple l'enregistrement des demandes]",
            "[Fonctionnalité 2 : par exemple la recherche et le suivi]",
            "[Fonctionnalité 3 : par exemple l'impression ou l'export]",
          ],
          tech: [
            { n: "Java", r: "Langage de l'application" },
            { n: "Swing", r: "Interface graphique de bureau" },
            {
              n: "Base de données",
              r: "[Précisez le système : MySQL, SQLite…] Stockage des demandes",
            },
          ],
          challenges: "[Difficultés et solutions rencontrées pendant le stage]",
          gallery: [
            "Capture d'écran 1",
            "Capture d'écran 2",
            "Capture d'écran 3",
          ],
          videoCaption: "Démonstration de l'application",
        },
        facturation: {
          title: "Application de facturation",
          kind: "Application web",
          summary:
            "Gestion des clients, des produits, des factures et des lignes de facturation.",
          context: "[Contexte : académique, personnel…]",
          status: "[À préciser : terminé, en cours ou prototype]",
          tags: ["Web"],
          problem:
            "Émettre et suivre des factures oblige à relier clients, produits et lignes de facturation. L'application regroupe ces éléments dans une seule interface.",
          objectives:
            "Simplifier la gestion des clients, des produits et des factures.",
          audience: "[Utilisateurs visés]",
          features: [
            "Gestion des clients",
            "Gestion des produits",
            "Création de factures avec leurs lignes de facturation",
            "Export de la facture en PDF",
            "Tableau de bord",
          ],
          tech: [
            { n: "Symfony", r: "API et logique métier côté serveur" },
            { n: "React", r: "Interface web" },
            {
              n: "MySQL",
              r: "Base de données relationnelle (clients, produits, factures)",
            },
          ],
          challenges: "[Difficultés et solutions rencontrées]",
          gallery: [
            "Tableau de bord",
            "Facture au format PDF",
            "Capture d'écran",
          ],
          videoCaption: "Démonstration de l'application",
        },
      },
    },
    journey: {
      title: "Mon parcours",
      intro: "Les étapes qui m'ont amené jusqu'ici.",
      items: [
        {
          title: "Formation",
          text: "Génie Logiciel, ESP Antsirabe.",
          date: "[Période]",
        },
        {
          title: "Expérience professionnelle",
          text: "Stage d'observation au CISCO Antsirabe I, service informatique.",
          date: "[Période]",
        },
        {
          title: "Projets académiques et personnels",
          text: "Applications développées, apprentissages et réalisations.",
          date: "[Période]",
        },
        {
          title: "Aujourd'hui",
          text: "Développement de compétences et recherche d'opportunités professionnelles.",
          date: "En cours",
        },
      ],
    },
    beyond: {
      title: "Au-delà du code",
      intro: "Ce qui nourrit ma façon de travailler.",
      items: [
        {
          icon: "book",
          title: "Veille et apprentissage",
          text: "Découverte de nouvelles technologies et amélioration continue.",
        },
        {
          icon: "layers",
          title: "Créativité",
          text: "Conception d'interfaces simples et agréables.",
        },
        {
          icon: "compass",
          title: "Culture générale",
          text: "Curiosité pour les sciences, les nouvelles idées et les innovations.",
        },
        {
          icon: "target",
          title: "Résolution de problèmes",
          text: "Recherche de solutions adaptées à des besoins réels.",
        },
        {
          icon: "users",
          title: "Collaboration",
          text: "Capacité à échanger, partager les idées et apprendre des autres.",
        },
      ],
    },
    contact: {
      title: "Un poste, un stage, une question ?",
      intro: "Écrivez-moi. Je réponds dès que possible.",
      fields: {
        name: "Nom",
        email: "Adresse email",
        subject: "Sujet",
        message: "Message",
      },
      send: "Envoyer le message",
      sending: "Envoi en cours",
      ok: "Message envoyé. Merci, je vous réponds bientôt.",
      errors: {
        missing_fields: "Remplissez tous les champs avant d'envoyer.",
        invalid_email:
          "Cette adresse email semble incorrecte. Vérifiez-la et réessayez.",
        rate_limited:
          "Trop d'envois en peu de temps. Réessayez dans quelques minutes.",
        generic:
          "Le message n'a pas pu être envoyé. Réessayez ou écrivez directement par email.",
      },
      links: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Email professionnel",
        cv: "Télécharger le CV (PDF)",
      },
    },
    footer: {
      tagline:
        "Conçu et développé par Aina Natolotra. Des idées, du code et des solutions utiles.",
      links: "Liens",
    },
    assistant: {
      name: "Assistant Aina",
      subtitle: "Assistant virtuel du portfolio",
      open: "Ouvrir l'assistant",
      close: "Fermer l'assistant",
      welcome: [
        "Bonjour ! Bienvenue sur le portfolio d'Aina.",
        "Je peux vous présenter son parcours, ses compétences, ses projets et ses réalisations.",
      ],
      try: "Essayez une question :",
      suggestions: [
        "Présente-moi le projet AgrIA",
        "Quelles sont ses compétences ?",
        "Quel est son parcours ?",
        "Comment contacter Aina ?",
      ],
      placeholder: "Écrire un message...",
      send: "Envoyer",
      note: "Réponses fondées sur les informations de ce portfolio.",
    },
  },

  en: {
    meta: { title: "Aina Natolotra, web and software developer" },
    skip: "Skip to content",
    nav: [
      { id: "accueil", label: "Home" },
      { id: "apropos", label: "About" },
      { id: "competences", label: "Skills" },
      { id: "projets", label: "Projects" },
      { id: "parcours", label: "Journey" },
      { id: "autre", label: "Beyond code" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Get in touch",
    menu: { open: "Open menu", close: "Close menu" },
    lang: { label: "Language" },
    theme: { toDark: "Switch to dark mode", toLight: "Switch to light mode" },
    hero: {
      status: "Open to opportunities",
      role: "Web & software developer",
      intro:
        "I'm a Software Engineering student at ESP Antsirabe, interested in designing web, mobile and software applications. I like turning ideas into practical solutions, learning new technologies and building projects that answer real needs.",
      projects: "Explore my projects",
      cv: "Download my CV",
      contact: "Get in touch",
      devices: {
        web: "Invoicing",
        desktop: "Diploma requests",
        mobile: "AgrIA",
      },
    },
    about: {
      title: "Behind the code, a drive to create.",
      paragraphs: [
        "I'm studying Software Engineering at ESP Antsirabe, with an interest in web, software and mobile development.",
        "My internship at CISCO Antsirabe I, in the IT department, resulted in an application to manage diploma requests.",
        "The way I work: learn, analyse needs, design, then improve.",
        "My goal: help build useful digital solutions and keep growing as a developer.",
      ],
      facts: [
        { k: "Education", v: "Software Engineering, ESP Antsirabe" },
        { k: "Internship", v: "CISCO Antsirabe I, IT department" },
        { k: "Fields", v: "Web, mobile, software" },
      ],
      values: [
        {
          icon: "trending",
          title: "Continuous learning",
          text: "I aim to grow with every project and to discover new technologies.",
        },
        {
          icon: "target",
          title: "Problem solving",
          text: "I analyse the need before designing a fitting solution.",
        },
        {
          icon: "users",
          title: "Team spirit",
          text: "I enjoy exchanging ideas and learning from others.",
        },
      ],
    },
    skills: {
      title: "My skills",
      intro: "The technologies I use and can explain in an interview.",
      groups: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        databases: "Databases",
        tools: "Tools",
      },
    },
    projects: {
      title: "My projects",
      intro:
        "Three applications, three contexts: mobile and AI, desktop, web. Each project has its own detail page.",
      details: "View details",
      github: "Source code",
      demo: "Demo",
      video: "Video demo",
      back: "All projects",
      next: "Next project",
      prev: "Previous project",
      linkMissing: "Link to add",
      slotImage: "Screenshot placeholder",
      slotVideo: "Demo video placeholder",
      fiche: "Project sheet",
      labels: { context: "Context", status: "Status", stack: "Technologies" },
      tabs: {
        overview: "Overview",
        features: "Features",
        tech: "Technologies",
        challenges: "Challenges",
        gallery: "Screenshots",
        video: "Video",
      },
      sections: {
        problem: "The problem",
        objectives: "Goals and users",
        audience: "Target users",
        features: "Features built",
        tech: "Technologies and role",
        challenges: "Challenges and solutions",
        gallery: "Screenshots",
        video: "Presentation video",
        links: "Links",
      },
      items: {
        agria: {
          title: "AgrIA",
          kind: "Mobile application and artificial intelligence",
          summary:
            "An app that helps diagnose plant diseases from photos, with treatment and prevention advice.",
          context: "Academic project",
          status: "[To specify: finished, in progress or prototype]",
          tags: ["Mobile", "AI"],
          problem:
            "Recognising a plant disease takes experience. AgrIA offers diagnosis help from a simple photo, with treatment and prevention advice.",
          objectives:
            "Help identify a plant problem quickly and adopt the right treatment and prevention steps.",
          audience: "[Target users: farmers, gardeners, students…]",
          features: [
            "Disease diagnosis from a photo of the plant",
            "Diagnosis result with treatment and prevention advice",
            "Diagnosis history",
          ],
          tech: [
            { n: "Flutter", r: "Mobile app interface" },
            {
              n: "FastAPI",
              r: "API that receives images and returns the diagnosis",
            },
            { n: "MongoDB", r: "Data storage" },
            { n: "CNN / ResNet50", r: "Plant image classification model" },
          ],
          challenges:
            "[Challenges and solutions: dataset quality, model accuracy, integrating the model into the API…]",
          gallery: ["App gallery", "Diagnosis result", "Diagnosis history"],
          videoCaption: "App demonstration",
        },
        diplomes: {
          title: "Diploma request management",
          kind: "Desktop application, internship project",
          summary:
            "A desktop application to manage BEPC and CEPE diploma requests for CISCO Antsirabe I.",
          context: "Internship project",
          status: "[To specify: finished, in progress or prototype]",
          tags: ["Desktop"],
          problem:
            "CISCO Antsirabe I handles BEPC and CEPE diploma requests. The application brings their follow-up into one dedicated tool.",
          objectives:
            "Make it easier for CISCO Antsirabe I staff to record and follow requests.",
          audience: "CISCO Antsirabe I staff",
          features: [
            "[Feature 1: for example recording requests]",
            "[Feature 2: for example search and follow-up]",
            "[Feature 3: for example printing or export]",
          ],
          tech: [
            { n: "Java", r: "Application language" },
            { n: "Swing", r: "Desktop graphical interface" },
            {
              n: "Database",
              r: "[Specify the system: MySQL, SQLite…] Request storage",
            },
          ],
          challenges: "[Challenges and solutions met during the internship]",
          gallery: ["Screenshot 1", "Screenshot 2", "Screenshot 3"],
          videoCaption: "App demonstration",
        },
        facturation: {
          title: "Invoicing application",
          kind: "Web application",
          summary:
            "Management of customers, products, invoices and invoice lines.",
          context: "[Context: academic, personal…]",
          status: "[To specify: finished, in progress or prototype]",
          tags: ["Web"],
          problem:
            "Issuing and tracking invoices means linking customers, products and invoice lines. The application brings them together in one interface.",
          objectives:
            "Simplify the management of customers, products and invoices.",
          audience: "[Target users]",
          features: [
            "Customer management",
            "Product management",
            "Invoice creation with invoice lines",
            "Invoice export to PDF",
            "Dashboard",
          ],
          tech: [
            { n: "Symfony", r: "Server-side API and business logic" },
            { n: "React", r: "Web interface" },
            {
              n: "MySQL",
              r: "Relational database (customers, products, invoices)",
            },
          ],
          challenges: "[Challenges and solutions met]",
          gallery: ["Dashboard", "Invoice as PDF", "Screenshot"],
          videoCaption: "App demonstration",
        },
      },
    },
    journey: {
      title: "My journey",
      intro: "The steps that brought me here.",
      items: [
        {
          title: "Education",
          text: "Software Engineering, ESP Antsirabe.",
          date: "[Period]",
        },
        {
          title: "Professional experience",
          text: "Observation internship at CISCO Antsirabe I, IT department.",
          date: "[Period]",
        },
        {
          title: "Academic and personal projects",
          text: "Applications built, lessons learned and achievements.",
          date: "[Period]",
        },
        {
          title: "Today",
          text: "Building skills and looking for professional opportunities.",
          date: "Ongoing",
        },
      ],
    },
    beyond: {
      title: "Beyond code",
      intro: "What shapes the way I work.",
      items: [
        {
          icon: "book",
          title: "Watching and learning",
          text: "Discovering new technologies and improving continuously.",
        },
        {
          icon: "layers",
          title: "Creativity",
          text: "Designing simple and pleasant interfaces.",
        },
        {
          icon: "compass",
          title: "General knowledge",
          text: "Curiosity for science, new ideas and innovation.",
        },
        {
          icon: "target",
          title: "Problem solving",
          text: "Looking for solutions that fit real needs.",
        },
        {
          icon: "users",
          title: "Collaboration",
          text: "Exchanging ideas, sharing them and learning from others.",
        },
      ],
    },
    contact: {
      title: "A job, an internship, a question?",
      intro: "Write to me. I reply as soon as I can.",
      fields: {
        name: "Name",
        email: "Email address",
        subject: "Subject",
        message: "Message",
      },
      send: "Send message",
      sending: "Sending",
      ok: "Message sent. Thank you, I will reply soon.",
      errors: {
        missing_fields: "Fill in every field before sending.",
        invalid_email:
          "This email address looks incorrect. Check it and try again.",
        rate_limited:
          "Too many messages in a short time. Try again in a few minutes.",
        generic:
          "The message could not be sent. Try again or write directly by email.",
      },
      links: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Professional email",
        cv: "Download the CV (PDF)",
      },
    },
    footer: {
      tagline:
        "Designed and built by Aina Natolotra. Ideas, code and useful solutions.",
      links: "Links",
    },
    assistant: {
      name: "Aina's assistant",
      subtitle: "Portfolio virtual assistant",
      open: "Open the assistant",
      close: "Close the assistant",
      welcome: [
        "Hello! Welcome to Aina's portfolio.",
        "I can walk you through his background, skills, projects and achievements.",
      ],
      try: "Try a question:",
      suggestions: [
        "Tell me about the AgrIA project",
        "What are his skills?",
        "What is his background?",
        "How can I contact Aina?",
      ],
      placeholder: "Write a message...",
      send: "Send",
      note: "Answers are based on the information in this portfolio.",
    },
  },
};
