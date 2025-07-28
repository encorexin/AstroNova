import type { SiteConfig } from '@/types/blog';

export const siteConfig: SiteConfig = {
  title: 'AstroNova',
  description: 'Modern blog built with Astro and Tailwind CSS',
  url: 'https://astro-nova-five.vercel.app/',
  author: {
    name: 'AstroNova',
    email: 'astro-nova@example.com',
    url: 'https://astro-nova-five.vercel.app/',
  },
  social: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Tags', href: '/tags/' },
    { name: 'Categories', href: '/categories/' },
    { name: 'About', href: '/about/' },
    { name: 'Performance', href: '/performance/' },
  ],

  // SEO configuration
  seo: {
    defaultImage: '/og-image.svg',
    twitterHandle: '@yourusername',
    siteName: 'AstroNova',
  },

  // Analytics configuration - set to null or your GA4 ID to enable
  googleAnalytics: null, // e.g: 'G-XXXXXXXXXX',

  // PWA configuration
  pwa: {
    name: 'AstroNova',
    shortName: 'AstroNova',
    themeColor: '#0ea5e9',
    backgroundColor: '#ffffff',
  },

  // Comments configuration
  giscus: {
    repo: 'yourusername/yourblog',
    repoId: 'your-repo-id',
    category: 'Blog Comments',
    categoryId: 'your-category-id',
    mapping: 'pathname',
    reactionsEnabled: '1',
    emitMetadata: '0',
    theme: 'preferred_color_scheme',
  },
};
