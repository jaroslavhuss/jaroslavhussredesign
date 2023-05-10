import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text:"Domů",
      href: getPermalink('/'),
    },
    {
      text: 'Články',
      links:[
        {
          text: 'Všechny články',
          href: getBlogPermalink('/'),
        },
        {
          text: 'Kodérství',
          href: getPermalink('/kategorie/koderstvi/'),
        },
        {
          text: 'Online marketing',
          href: getPermalink('/kategorie/onlmarket/'),
        },
        {
          text: 'Osobní',
          href: getPermalink('/kategorie/osobni/'),
        },
        {
          text: 'Wordpress',
          href: getPermalink('/kategorie/wp/'),
        }
      ]
    },
    {
      text: 'Online marketing',
      href:"/zakladni-kurz-online-marketingu/"
    },
    {
      text:"Jak se naučit programovat",
      href: getPermalink('/jak-se-naucit-programovat-kompletni-kurz-moderniho-programovani/'),
    },
  ],
  actions: [
   
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'O cookies', href: getPermalink('/o-cookies/') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/jaksenaucitprogramovat' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm"></span>
     <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://jaroslavhuss.cz"> jaroslavhuss.cz</a> ${new Date().getFullYear()}
  `,
};
