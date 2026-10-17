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

export const projectsMeta = [
  {
    id: "agria",
    stack: [
      "Flutter",
      "Dart",
      "FastAPI",
      "Python",
      "MongoDB",
      "CNN / ResNet50",
    ],
    video: "/projets/AgrIA/AgrIA.mp4",
    gallery: [],
  },
  {
    id: "diplomes",
    stack: ["Java", "Java Swing", "NetBeans", "MySQL"],
    video: "",
    gallery: [
      "/projets/GD/01.png",
      "/projets/GD/02.png",
      "/projets/GD/03.png",
      "/projets/GD/04.png",
      "/projets/GD/05.png",
    ],
  },
  {
    id: "facturation",
    stack: ["Symfony", "PHP", "Twig", "Tailwind CSS", "MySQL"],
    video: "",
    gallery: [
      "/projets/Facturation/01.png",
      "/projets/Facturation/02.png",
      "/projets/Facturation/03.png",
      "/projets/Facturation/04.png",
      "/projets/Facturation/05.png",
      "/projets/Facturation/06.png",
    ],
  },
];
export const i18n = {
  fr: {
    meta: { title: "Aina Natolotra, développeur web et logiciel" },
    skip: "Aller au contenu",
    nav: [
      { id: "accueil", label: "Accueil" },
      { id: "apropos", label: "À propos" },
      { id: "projets", label: "Projets" },
      { id: "contact", label: "Contact" },
    ],
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
    },
    about: {
      title: "Derrière le code, une envie de créer.",
      paragraphs: [
        "Je me forme en Génie Logiciel à l'ESP Antsirabe, avec un intérêt pour le développement web, logiciel et mobile.",
        "Mon stage au CISCO Antsirabe I, au service informatique, s'est traduit par une application de gestion des demandes de diplômes.",
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
    projects: {
      title: "Mes projets",
      slotImage: "Photo ou vidéo à ajouter",
      ui: {
        details: "Voir les détails",
        close: "Fermer la fenêtre",
        prev: "Image précédente",
        next: "Image suivante",
        show: "Afficher le média",
        about: "Description",
        tech: "Technologies utilisées",
        broken: "Média introuvable",
        empty: "Photo ou vidéo à ajouter",
        more: "autres technologies",
      },
      items: {
        agria: {
          title: "AgrIA",
          summary:
            "Application mobile d'aide au diagnostic des maladies des plantes à partir de photos, avec conseils de traitement.",
          description:
            "AgrIA est une application mobile qui aide à diagnostiquer les maladies des plantes à partir d'une simple photo. L'interface est développée avec Flutter et Dart. Les images sont analysées par un modèle de reconnaissance d'images CNN basé sur ResNet50, exposé par une API FastAPI en Python, puis l'application affiche le diagnostic avec des conseils de traitement. Les données sont stockées dans MongoDB.",
        },
        diplomes: {
          title: "Gestion des demandes de diplômes",
          summary:
            "Application de bureau de gestion des demandes de diplômes BEPC et CEPE.",
          description:
            "Application de bureau qui permet de gérer les demandes de diplômes BEPC et CEPE. Elle est développée en Java, avec une interface Java Swing créée sous NetBeans, et conserve les demandes dans une base de données MySQL. Ce projet a été réalisé pendant mon stage au service informatique du CISCO Antsirabe I.",
        },
        facturation: {
          title: "Application de facturation",
          summary:
            "Application web de gestion des clients, des produits et des factures, avec export PDF.",
          description:
            "Application web de facturation qui permet de gérer les clients, les produits et les factures, avec export des factures en PDF. Elle est développée avec Symfony et PHP, les pages utilisent Twig et Tailwind CSS, et les données sont enregistrées dans une base MySQL.",
        },
      },
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
  },

  en: {
    meta: { title: "Aina Natolotra, web and software developer" },
    skip: "Skip to content",
    nav: [
      { id: "accueil", label: "Home" },
      { id: "apropos", label: "About" },
      { id: "projets", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
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
    },
    about: {
      title: "Behind the code, a drive to create.",
      paragraphs: [
        "I'm studying Software Engineering at ESP Antsirabe, with an interest in web, software and mobile development.",
        "My internship at CISCO Antsirabe I, in the IT department, resulted in an application to manage diploma requests.",
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
    projects: {
      title: "My projects",
      slotImage: "Photo or video to add",
      ui: {
        details: "View details",
        close: "Close window",
        prev: "Previous image",
        next: "Next image",
        show: "Show media",
        about: "Description",
        tech: "Technologies used",
        broken: "Media not found",
        empty: "Photo or video to add",
        more: "more technologies",
      },
      items: {
        agria: {
          title: "AgrIA",
          summary:
            "Mobile app that helps diagnose plant diseases from photos, with treatment advice.",
          description:
            "AgrIA is a mobile app that helps diagnose plant diseases from a simple photo. The interface is built with Flutter and Dart. Images are analysed by a CNN image-recognition model based on ResNet50, served by a FastAPI API in Python, and the app then shows the diagnosis with treatment advice. Data is stored in MongoDB.",
        },
        diplomes: {
          title: "Diploma request management",
          summary:
            "Desktop application to manage BEPC and CEPE diploma requests for CISCO Antsirabe I.",
          description:
            "A desktop application to manage BEPC and CEPE diploma requests for CISCO Antsirabe I. It is built in Java with a Java Swing interface created in NetBeans, and keeps the requests in a MySQL database. This project was carried out during my internship in the IT department of CISCO Antsirabe I.",
        },
        facturation: {
          title: "Invoicing application",
          summary:
            "Web application to manage customers, products and invoices, with PDF export.",
          description:
            "A web invoicing application to manage customers, products and invoices, with PDF export of invoices. It is built with Symfony and PHP, the pages use Twig and Tailwind CSS, and data is saved in a MySQL database.",
        },
      },
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
  },
};
