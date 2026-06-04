export const languages = [
  {
    code: "en",
    label: "English",
    description: "Articles, publications, media appearances, and curriculum vitae.",
  },
  {
    code: "es",
    label: "Español",
    description: "Artículos, publicaciones, presencia en medios y currículum.",
  },
] as const;

export type Lang = (typeof languages)[number]["code"];

export type NavItem = {
  href: string;
  label: string;
  matchPrefixes?: string[];
};

type SiteSectionMap = {
  welcome: string;
  home: string;
  blog: string;
  publications: string;
  media: string;
  cv: string;
  contact: string;
};

type SiteCopy = {
  siteTitle: string;
  myName: string;
  backToTopLabel: string;
  welcomeLabel: string;   
  homeLabel: string;
  blogLabel: string;
  publicationsLabel: string;
  mediaLabel: string;
  cvLabel: string;
  menuLabel: string;
  switchLanguageLabel: string;
  homeIntro: string;
  blogIntro: string;
  recentPostsLabel: string;
  latestPostsLabel: string;
  viewAllLabel: string;
  exploreLabel: string;
  contactLabel: string;
  languageSelectorLabel: string;
  themeToggleLabel: string;
  switchToDarkModeLabel: string;
  switchToLightModeLabel: string;
  footerUpdatedLabel: string;
  footerDisclaimer: string;
  footerLicenseLead: string;
  footerLicenseLinkLabel: string;
  footerTrademarkNotice: string;
};

export type MediaHubItem = {
  title: string;
  description: string;
  href: string;
};

export const sectionRoutes: Record<Lang, SiteSectionMap> = {
  en: {
    welcome: "/",
    home: "/en/",
    blog: "/en/blog/",
    publications: "/en/pages/publications/",
    media: "/en/pages/media-presence/",
    cv: "/en/pages/cv-english/",
    contact: "/en/pages/contact-me/",
  },
  es: {
    welcome: "/",
    home: "/es/",
    blog: "/es/blog/",
    publications: "/es/pages/publicaciones/",
    media: "/es/pages/presencia-en-medios/",
    cv: "/es/pages/curriculum/",
    contact: "/es/pages/contacto/",
  },
};

export const siteCopy: Record<Lang, SiteCopy> = {
  en: {
    siteTitle: "Raúl Arrabales Moreno, PhD",
    myName: "Raúl Arrabales Moreno",
    backToTopLabel: "Back to Top",
    welcomeLabel: "Welcome",
    homeLabel: "Home",
    blogLabel: "Blog",
    publicationsLabel: "Books",
    mediaLabel: "Media",
    cvLabel: "CV",
    menuLabel: "Main menu",
    switchLanguageLabel: "Switch language",
    homeIntro: "Personal website, blog, books, and research-related writing.",
    blogIntro: "Writing on artificial intelligence, consciousness, psychology, and related topics.",
    recentPostsLabel: "Recent posts",
    latestPostsLabel: "The Latest",
    viewAllLabel: "View all",
    exploreLabel: "Explore",
    contactLabel: "Contact",
    languageSelectorLabel: "Language selector",
    themeToggleLabel: "Theme toggle",
    switchToDarkModeLabel: "Switch to dark mode",
    switchToLightModeLabel: "Switch to light mode",
    footerUpdatedLabel: "Last updated",
    footerDisclaimer: "My posts are my own views and do not necessarily represent the views of my employer.",
    footerLicenseLead: "by Raúl Arrabales Moreno. Work licensed under a",
    footerLicenseLinkLabel: "Creative Commons Licence (CC BY-NC-SA 3.0)",
    footerTrademarkNotice: "All logos and trademarks are property of their respective owner.",
  },
  es: {
    siteTitle: "Raúl Arrabales Moreno, PhD",
    myName: "Raúl Arrabales Moreno",
    backToTopLabel: "Volver arriba",
    welcomeLabel: "Bienvenida",
    homeLabel: "Inicio",
    blogLabel: "Blog",
    publicationsLabel: "Libros",
    mediaLabel: "Medios",
    cvLabel: "CV",
    menuLabel: "Menú principal",
    switchLanguageLabel: "Cambiar idioma",
    homeIntro: "Web personal, blog, libros y publicaciones relacionadas con la investigación.",
    blogIntro: "Artículos sobre inteligencia artificial, consciencia, psicología y temas afines.",
    recentPostsLabel: "Entradas recientes",
    latestPostsLabel: "Lo último",
    viewAllLabel: "Ver todo",
    exploreLabel: "Explorar",
    contactLabel: "Contacto",
    languageSelectorLabel: "Selector de idioma",
    themeToggleLabel: "Selector de tema",
    switchToDarkModeLabel: "Cambiar a modo oscuro",
    switchToLightModeLabel: "Cambiar a modo claro",
    footerUpdatedLabel: "Última actualización",
    footerDisclaimer:
      "Mis publicaciones reflejan mis opiniones personales y no representan necesariamente las de mi empleador.",
    footerLicenseLead: "por Raúl Arrabales Moreno. Obra licenciada bajo una",
    footerLicenseLinkLabel: "Licencia Creative Commons (CC BY-NC-SA 3.0)",
    footerTrademarkNotice: "Todos los logotipos y marcas registradas pertenecen a sus respectivos propietarios.",
  },
};

export function getNavItems(lang: Lang): NavItem[] {
  const copy = siteCopy[lang];
  const routes = sectionRoutes[lang];

  const mediaMatchPrefixes =
    lang === "es"
      ? [
          routes.media,
          "/es/pages/podcast/",
          "/es/pages/conferencias/",
          "/es/pages/medios/",
          "/es/pages/proximos-eventos/",
        ]
      : [
          routes.media,
          "/en/pages/podcast/",
          "/en/pages/invited-talks/",
          "/en/pages/media-appearances/",
          "/en/pages/upcoming-events/",
        ];

  return [
    { href: routes.blog, label: copy.blogLabel },
    { href: routes.publications, label: copy.publicationsLabel },
    { href: routes.media, label: copy.mediaLabel, matchPrefixes: mediaMatchPrefixes },
    { href: routes.cv, label: copy.cvLabel },
  ];
}

export function getOtherLanguage(lang: Lang): Lang {
  return lang === "en" ? "es" : "en";
}

export function getMediaHubItems(lang: Lang): MediaHubItem[] {
  const routes = sectionRoutes[lang];

  if (lang === "es") {
    return [
      {
        title: "Pódcast",
        description:
          "Conversaciones sobre inteligencia artificial, tecnología y psicología, con espacio para ideas más personales y experimentales.",
        href: "/es/pages/podcast/",
      },
      {
        title: "Conferencias",
        description:
          "Charlas invitadas, ponencias y sesiones públicas sobre IA, psicología y transformación tecnológica.",
        href: "/es/pages/conferencias/",
      },
      {
        title: "Entrevistas",
        description:
          "Apariciones en medios, entrevistas y cobertura pública relacionada con investigación, divulgación y práctica profesional.",
        href: "/es/pages/medios/",
      },
      {
        title: "Próximos Eventos",
        description:
          "Una vista rápida de conferencias y encuentros próximos para seguir la actividad pública más reciente.",
        href: "/es/pages/proximos-eventos/",
      },
    ];
  }

  return [
    {
      title: "Podcast",
      description:
        "Conversations about artificial intelligence, technology, and psychology, including more personal and experimental threads.",
      href: "/en/pages/podcast/",
    },
    {
      title: "Invited Talks",
      description:
        "Public talks, keynote sessions, and invited appearances on AI, psychology, and technological change.",
      href: "/en/pages/invited-talks/",
    },
    {
      title: "Interviews",
      description:
        "Media appearances, interviews, and public coverage connected to research, writing, and professional work.",
      href: "/en/pages/media-appearances/",
    },
    {
      title: "Upcoming Events",
      description:
        "A quick overview of upcoming conferences and events for following current public activity.",
      href: "/en/pages/upcoming-events/",
    },
  ];
}
