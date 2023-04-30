import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'jaroslavhuss.cz',

  origin: 'https://jaroslavhuss.cz',
  basePathname: '/',
  trailingSlash: false,

  title: 'Web o programatickém marketingu - Jaroslav Huss',
  description:
    'Vítejte na webu Jaroslava Husse, který se týká hlavně programatického marketingu - programování, wordpress, javascript, adwords, google analytics a další.',
  defaultImage: defaultImage,

  defaultTheme: 'light:only', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'cs',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('cs', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%year%/%month%/%day%/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'clanky', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'kategorie', // Category main path /category/some-category
      noindex: false,
      disabled: false,
    },

    tag: {
      pathname: 'tagy', // Tag main path /tag/some-tag
      noindex: false,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
