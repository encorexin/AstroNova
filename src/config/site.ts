import type { SiteConfig } from '@/types/blog';

export const siteConfig: SiteConfig = {
  title: 'AstroNova',
  description: 'Modern blog built with Astro and Tailwind CSS',
  url: 'https://nova.encorexin.online/',
  author: {
    name: 'AstroNova',
    email: 'astro-nova@example.com',
    url: 'https://nova.encorexin.online/',
  },
  social: {
    github: 'https://github.com/encorexin',
    twitter: 'https://twitter.com/encorexin',
    linkedin: 'https://linkedin.com/in/encorexin',
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Archives', href: '/archives/' },
    { name: 'Tags', href: '/tags/' },
    { name: 'Categories', href: '/categories/' },
    { name: 'Friends', href: '/friends/' },
    { name: 'About', href: '/about/' },
  ],

  // SEO configuration
  seo: {
    defaultImage: '/og-image.svg',
    twitterHandle: '@yourusername',
    siteName: 'AstroNova',
  },

  // Analytics configuration - set to null or your GA4 ID to enable
  googleAnalytics: 'G-S23YDK9JK6', // e.g: 'G-XXXXXXXXXX',

  // PWA configuration
  pwa: {
    name: 'AstroNova',
    shortName: 'AstroNova',
    themeColor: '#0ea5e9',
    backgroundColor: '#ffffff',
  },

  // Comments configuration
  giscus: {
    repo: 'encorexin/AstroNova',
    repoId: 'R_kgDOPT2eLQ',
    category: 'Announcements',
    categoryId: 'DIC_kwDOPT2eLc4CtfLK',
    mapping: 'pathname',
    reactionsEnabled: '1',
    emitMetadata: '0',
    theme: 'light', // Default theme, will be dynamically updated based on current theme
  },
};
