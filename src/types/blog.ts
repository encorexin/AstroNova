export interface BlogPost {
  id: string;
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  category: string;
  slug: string;
  readingTime: number;
  heroImage?: string;
  draft?: boolean;
}

export interface BlogMetadata {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  heroImage?: string;
  draft?: boolean;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    url: string;
  };
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  navigation: NavigationItem[];
  seo: {
    defaultImage: string;
    twitterHandle: string;
    siteName: string;
  };
  googleAnalytics: string | null;
  pwa: {
    name: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
  };
  giscus: {
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
    mapping: string;
    reactionsEnabled: string;
    emitMetadata: string;
    theme: string;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface Tag {
  name: string;
  count: number;
  slug: string;
}

export interface Category {
  name: string;
  count: number;
  slug: string;
}

export interface SearchResult {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  category: string;
}

export interface ThemeConfig {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'sm' | 'base' | 'lg';
  animations: boolean;
}

export interface TableOfContentsItem {
  depth: number;
  text: string;
  slug: string;
}

export type ReadingProgress = {
  scrollPercentage: number;
  readingTimeRemaining: number;
};

export interface ShareData {
  url: string;
  title: string;
  text: string;
}
