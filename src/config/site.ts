import type { SiteConfig } from '@/types/blog';

export const siteConfig: SiteConfig = {
  title: 'AstroNova',
  description: '现代化的博客，使用 Astro 和 Tailwind CSS 构建',
  url: 'https://yourblog.com',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    url: 'https://yourblog.com',
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
  googleAnalytics: null, // 例如: 'G-XXXXXXXXXX',

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
