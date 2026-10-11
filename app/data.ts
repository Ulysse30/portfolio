// Toutes les informations du portfolio sont centralisées ici.
// Modifiez ces valeurs pour personnaliser le site avec votre profil.

export const profile = {
  name: "Ulysse Rautureau",
  title: "Développeur logiciel",
  tagline:
    "Je conçois et développe des applications web robustes, du prototype au déploiement en production.",
  status: "Ouvert aux opportunités",
  location: "France",
  email: "ulysse.rautureau30@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resumeUrl: "",
};

export type FocusArea = {
  title: string;
  description: string;
  accent: "iris" | "orchid" | "wine" | "coral" | "lime";
};

export const focusAreas: FocusArea[] = [
  {
    title: "Frontend",
    description: "Interfaces réactives et accessibles avec React, Next.js et TypeScript.",
    accent: "iris",
  },
  {
    title: "Backend & API",
    description: "Services robustes et APIs performantes avec Node.js, Python et SQL.",
    accent: "wine",
  },
  {
    title: "DevOps",
    description: "Intégration continue, conteneurs et déploiements automatisés.",
    accent: "orchid",
  },
  {
    title: "Bonnes pratiques",
    description: "Code propre, tests et revues de code pour un logiciel durable.",
    accent: "lime",
  },
];

export const about = `Passionné par le développement logiciel, j'aime construire des produits complets,
de l'architecture backend à l'interface utilisateur. J'accorde une attention particulière
à la qualité du code, à la performance et à l'expérience utilisateur.`;

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "SQL",
  "Git",
  "Docker",
  "CI/CD",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Nom du projet 1",
    description:
      "Décrivez ici le problème résolu, votre rôle et les résultats obtenus.",
    tags: ["Next.js", "TypeScript"],
    link: "",
    repo: "",
  },
  {
    title: "Nom du projet 2",
    description:
      "Décrivez ici le problème résolu, votre rôle et les résultats obtenus.",
    tags: ["Python", "API"],
    link: "",
    repo: "",
  },
  {
    title: "Nom du projet 3",
    description:
      "Décrivez ici le problème résolu, votre rôle et les résultats obtenus.",
    tags: ["React", "Node.js"],
    link: "",
    repo: "",
  },
];

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Intitulé du poste",
    organization: "Nom de l'entreprise",
    period: "2024 — Présent",
    description: "Principales missions et réalisations sur ce poste.",
  },
  {
    role: "Intitulé du poste précédent",
    organization: "Nom de l'entreprise",
    period: "2022 — 2024",
    description: "Principales missions et réalisations sur ce poste.",
  },
];

export const education: ExperienceItem[] = [
  {
    role: "Nom du diplôme",
    organization: "Nom de l'école / université",
    period: "20XX — 20XX",
    description: "Spécialisation, mentions ou projets marquants.",
  },
];
