# AstroNova

A modern, lightning-fast blog theme built with Astro and Tailwind CSS. AstroNova combines elegant design with exceptional performance, featuring a comprehensive suite of tools for content creators and developers.

## 🌟 Overview

AstroNova is a production-ready blog template that prioritizes speed, accessibility, and user experience. Built on Astro's island architecture, it delivers exceptional performance scores while maintaining beautiful aesthetics and robust functionality.

## ✨ Key Features

### Performance & Core Features
- ⚡ **Astro Islands** - Zero JavaScript by default, islands architecture for optimal performance
- 🎯 **Perfect Lighthouse Scores** - 100/100 on Performance, Accessibility, Best Practices, and SEO
- 📱 **Mobile-First Design** - Responsive layout that works beautifully on all devices
- 🌙 **Advanced Dark Mode** - System preference detection with manual toggle and smooth transitions
- 🔍 **Advanced SEO** - Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- 📊 **Web Analytics** - Built-in support for Google Analytics, Umami, and Plausible

### Content Management
- 📝 **Markdown & MDX Support** - Full support for Markdown, MDX, and content collections
- 🏷️ **Advanced Taxonomy** - Categories, tags, and custom taxonomies with filtering
- 🔍 **Full-Text Search** - Instant search across all content with highlighting
- 📰 **RSS & Atom Feeds** - Auto-generated RSS 2.0, Atom 1.0, and JSON feeds
- 🔄 **Content Drafts** - Draft mode for unpublished content

### Developer Experience
- 🛠️ **TypeScript Ready** - Full TypeScript support with strict mode
- 🎨 **Design System** - Comprehensive design tokens and component library
- 🧪 **Testing Suite** - Unit tests and E2E tests configured
- 🎯 **Performance Budgets** - Built-in performance monitoring and budgets
- 📦 **PWA Ready** - Service worker, offline support, and app manifest

### User Experience
- 📖 **Reading Progress** - Visual progress indicator with time estimates
- 🔖 **Reading Time** - Automatic reading time calculation
- 🖼️ **Image Optimization** - Automatic responsive images with lazy loading
- ♿ **WCAG 2.1 AA** - Fully accessible with keyboard navigation and screen reader support
- 🌐 **i18n Ready** - Internationalization support with date formatting

## 🚀 Quick Start

### Prerequisites
- **Node.js**: 18.0.0 or higher
- **Package Manager**: pnpm (recommended), npm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/encorexin/astronova.git
   cd astronova
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:4321`

## 📝 Content Management

### Creating Content

#### Blog Posts
Create `.md` or `.mdx` files in `src/content/blog/`:

```yaml
---
title: "Building Modern Web Applications with Astro"
description: "Learn how to leverage Astro's island architecture for blazing-fast websites"
publishedAt: 2024-01-15
updatedAt: 2024-01-20
category: "Development"
tags: ["astro", "performance", "web-vitals"]
heroImage: "/images/astro-performance.jpg"
draft: false
featured: true
readingTime: 8
---

Your content here...
```

#### Frontmatter Schema
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title |
| `description` | string | ✅ | SEO description |
| `publishedAt` | date | ✅ | Original publish date |
| `updatedAt` | date | ❌ | Last update date |
| `category` | string | ✅ | Primary category |
| `tags` | array | ❌ | Related tags |
| `heroImage` | string | ❌ | Hero image path |
| `draft` | boolean | ❌ | Hide from production |
| `featured` | boolean | ❌ | Show in featured section |
| `readingTime` | number | ❌ | Manual reading time override |

### Content Collections
- **Blog Posts**: `src/content/blog/`
- **Pages**: `src/pages/*.astro`
- **Assets**: `public/images/`, `public/videos/`

## ⚙️ Configuration

### Site Configuration
Edit `src/config/site.ts` for global settings:

```typescript
export const siteConfig = {
  // Site Identity
  title: "AstroNova",
  description: "Modern blog template built with Astro",
  url: "https://astronova.dev",
  baseUrl: "/",
  
  // Author Information
  author: {
    name: "Your Name",
    email: "hello@yourdomain.com",
    url: "https://yourdomain.com",
    avatar: "/images/avatar.jpg",
    bio: "Full-stack developer and content creator",
  },
  
  // Social Links
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    mastodon: "https://mastodon.social/@yourusername",
    rss: "/rss.xml",
  },
  
  // SEO & Analytics
  seo: {
    defaultImage: "/og-image.png",
    twitterHandle: "@yourusername",
    analytics: {
      google: "G-XXXXXXXXXX",
      umami: {
        src: "https://umami.example.com/script.js",
        id: "your-website-id",
      },
    },
  },
  
  // Navigation
  nav: [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "About", url: "/about" },
    { name: "Categories", url: "/categories" },
    { name: "Tags", url: "/tags" },
  ],
  
  // Comments
  comments: {
    provider: "giscus", // giscus, disqus, or utterances
    giscus: {
      repo: "yourusername/yourrepo",
      repoId: "your-repo-id",
      category: "General",
      categoryId: "your-category-id",
    },
  },
};
```

### Design System
Customize the design system in `tailwind.config.mjs`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fefce8',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
};
```

### Performance Configuration
Edit `src/config/performance.js`:

```javascript
export const performanceConfig = {
  // Image optimization
  images: {
    formats: ['webp', 'avif'],
    sizes: [640, 768, 1024, 1280, 1920],
    quality: 85,
  },
  
  // Web Vitals targets
  webVitals: {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    fcp: 1800,
    tti: 3500,
  },
  
  // PWA settings
  pwa: {
    enabled: true,
    cacheFirstRoutes: ['/blog/*', '/categories/*'],
    runtimeCaching: true,
  },
};
```

## 🎨 Customization

### Adding New Pages
Create `.astro` files in `src/pages/`:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';

const title = "Custom Page";
const description = "Your custom page description";
---

<BaseLayout {title} {description}>
  <div class="container py-12">
    <h1 class="text-4xl font-bold">Your Content</h1>
  </div>
</BaseLayout>
```

### Component Library
- **Base Components**: `src/components/`
- **Layout Components**: `src/layouts/`
- **Utility Functions**: `src/utils/`

### Styling
- **Global Styles**: `src/styles/globals.css`
- **CSS Variables**: Custom properties for theming
- **Tailwind Config**: `tailwind.config.mjs`

## 🚀 Deployment

### Static Hosting
Build optimized static assets:

```bash
pnpm build
```

### Deployment Platforms

#### Netlify
```bash
# netlify.toml
[build]
  command = "pnpm build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

#### Vercel
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "devCommand": "pnpm dev"
}
```

#### GitHub Pages
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v2
```

### Environment Variables
Create `.env` file:

```bash
# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
UMAMI_WEBSITE_ID=your-website-id

# Comments
GISCUS_REPO=yourusername/yourrepo
GISCUS_REPO_ID=your-repo-id
```

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format with Prettier |
| `pnpm type-check` | TypeScript checking |
| `pnpm test` | Run test suite |
| `pnpm test:e2e` | Run E2E tests |

### Project Structure

```
astronova/
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── ui/         # UI primitives
│   │   └── forms/      # Form components
│   ├── content/        # Content collections
│   │   ├── blog/       # Blog posts
│   │   └── config.ts   # Content config
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript definitions
│   └── utils/          # Utility functions
├── public/             # Static assets
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── tsconfig.json       # TypeScript config
```

### Content Collections Schema

#### Blog Post Schema
```typescript
interface BlogPost {
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  category: string;
  tags?: string[];
  heroImage?: string;
  draft?: boolean;
  featured?: boolean;
}
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   pnpm test
   pnpm lint
   pnpm type-check
   ```
5. **Submit a pull request**

### Contribution Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation
- Ensure accessibility standards
- Include performance considerations

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://typescriptlang.org) - Type safety and developer experience
- [Vercel](https://vercel.com) - Deployment platform
- [Netlify](https://netlify.com) - Static hosting

---

**Built with ❤️ using modern web technologies**
