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

type NavItem = {
  href: string;
  label: string;
};

type SiteSectionMap = {
  home: string;
  blog: string;
  publications: string;
  media: string;
  cv: string;
};

type SiteCopy = {
  siteTitle: string;
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
  exploreLabel: string;
};

export const sectionRoutes: Record<Lang, SiteSectionMap> = {
  en: {
    home: "/en/",
    blog: "/en/blog/",
    publications: "/en/pages/2015/publications/",
    media: "/en/pages/2025/media-presence/",
    cv: "/en/pages/2015/cv-english/",
  },
  es: {
    home: "/es/",
    blog: "/es/blog/",
    publications: "/es/pages/2016/publicaciones/",
    media: "/es/pages/2025/presencia-en-medios/",
    cv: "/es/pages/2016/curriculum/",
  },
};

export const siteCopy: Record<Lang, SiteCopy> = {
  en: {
    siteTitle: "Raúl Arrabales",
    homeLabel: "Home",
    blogLabel: "Blog",
    publicationsLabel: "Publications",
    mediaLabel: "Media Presence",
    cvLabel: "CV",
    menuLabel: "Main menu",
    switchLanguageLabel: "Switch language",
    homeIntro: "Personal website, blog, books, and research-related writing.",
    blogIntro: "Writing on artificial intelligence, consciousness, psychology, and related topics.",
    recentPostsLabel: "Recent posts",
    exploreLabel: "Explore",
  },
  es: {
    siteTitle: "Raúl Arrabales",
    homeLabel: "Inicio",
    blogLabel: "Blog",
    publicationsLabel: "Publicaciones",
    mediaLabel: "Presencia en medios",
    cvLabel: "CV",
    menuLabel: "Menú principal",
    switchLanguageLabel: "Cambiar idioma",
    homeIntro: "Web personal, blog, libros y publicaciones relacionadas con la investigación.",
    blogIntro: "Artículos sobre inteligencia artificial, consciencia, psicología y temas afines.",
    recentPostsLabel: "Entradas recientes",
    exploreLabel: "Explorar",
  },
};

export function getNavItems(lang: Lang): NavItem[] {
  const copy = siteCopy[lang];
  const routes = sectionRoutes[lang];

  return [
    { href: routes.blog, label: copy.blogLabel },
    { href: routes.publications, label: copy.publicationsLabel },
    { href: routes.media, label: copy.mediaLabel },
    { href: routes.cv, label: copy.cvLabel },
  ];
}

export function getOtherLanguage(lang: Lang): Lang {
  return lang === "en" ? "es" : "en";
}
