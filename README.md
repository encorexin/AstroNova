# Astro Nova

A production-ready, lightning-fast blog built with Astro and Tailwind CSS. Astro Nova demonstrates modern web development best practices with comprehensive performance optimization, accessibility standards, and developer experience enhancements.

## 🌟 Overview

Astro Nova is a fully-featured technical blog showcasing advanced Astro capabilities, WCAG 2.1 AAA accessibility compliance, and cutting-edge web performance techniques. This project serves as both a functional blog and a reference implementation for building high-performance content-driven websites.

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
- 🎯 **Performance Monitoring** - Built-in performance optimization
- 📦 **PWA Ready** - Service worker, offline support, and app manifest

### User Experience
- 📖 **Reading Progress** - Visual progress indicator with accurate time estimates
- 🔖 **Reading Time** - Precise reading time calculation for technical content
- 🖼️ **Image Optimization** - Responsive images with WebP/AVIF support and lazy loading
- ♿ **WCAG 2.1 AAA** - Industry-leading accessibility compliance with comprehensive keyboard navigation and screen reader optimization

## 🚀 Quick Start

### Prerequisites
- **Node.js**: 18.0.0 or higher (LTS recommended)
- **Package Manager**: pnpm (required for optimal performance)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/astro-nova.git
   cd astro-nova
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
  title: "Astro Nova",
  description: "A production-ready technical blog showcasing modern web development practices with Astro",
  url: "https://astro-nova-demo.vercel.app",
  baseUrl: "/",
  
  // Author Information
  author: {
    name: "Astro Nova Team",
    email: "team@astro-nova.dev",
    url: "https://astro-nova.dev",
    avatar: "/images/avatar.png",
    bio: "Building exceptional web experiences with modern technologies",
  },
  
  // Social Links
  social: {
    github: "https://github.com/astro-nova/astro-nova",
    twitter: "https://twitter.com/astro_nova_dev",
    linkedin: "https://linkedin.com/company/astro-nova",
    rss: "/rss.xml",
  },
  
  // SEO & Analytics
  seo: {
    defaultImage: "/og-astro-nova.png",
    twitterHandle: "@astro_nova_dev",
    analytics: {
      google: "G-DEMO-ANALYTICS-ID",
    },
  },
  
  // Navigation
  nav: [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Categories", url: "/categories" },
    { name: "Tags", url: "/tags" },
  ],
  
  // Comments
  comments: {
    provider: "giscus",
    giscus: {
      repo: "astro-nova/astro-nova",
      repoId: "demo-repo-id",
      category: "Blog Comments",
      categoryId: "demo-category-id",
    },
  },
};```

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

#### Vercel (Recommended)
Deploy directly from GitHub with zero configuration:

1. Import your repository on [Vercel](https://vercel.com)
2. Use default Astro settings
3. Deploy with automatic CI/CD

#### Netlify
Configure with netlify.toml:

```toml
[build]
  command = "pnpm build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
  PNPM_VERSION = "8"
```

#### GitHub Pages
Use the official Astro GitHub Action:

```yaml
# .github/workflows/deploy.yml
name: Deploy Astro Nova to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install, build, and upload your site
        uses: withastro/action@v2
```

### Environment Variables
Create `.env` file:

```bash
# Analytics (Optional)
GOOGLE_ANALYTICS_ID=G-YOUR-ANALYTICS-ID

# Comments (Optional)
GISCUS_REPO=your-username/your-repo
GISCUS_REPO_ID=your-repo-id
GISCUS_CATEGORY_ID=your-category-id
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

Contributions are welcome! This project serves as a reference implementation, so improvements that enhance the demonstration of modern web development practices are particularly valuable.

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/description
   ```
3. **Make your changes**
4. **Verify code quality**
   ```bash
   pnpm lint
   pnpm type-check
   pnpm format
   ```
5. **Submit a pull request**

### Contribution Guidelines
- Maintain TypeScript strict mode compliance
- Ensure WCAG 2.1 AAA accessibility standards
- Follow performance optimization best practices
- Update relevant documentation
- Include appropriate test cases for new features

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

This project demonstrates the power of the modern web ecosystem:

- [Astro](https://astro.build) - Revolutionary island architecture for optimal performance
- [Tailwind CSS](https://tailwindcss.com) - Efficient utility-first styling system
- [TypeScript](https://typescriptlang.org) - Type-safe development experience
- [Vercel](https://vercel.com) - Seamless deployment and edge optimization

---

**Built to showcase modern web development excellence**
