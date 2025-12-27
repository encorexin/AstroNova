---
title: 'Getting Started with Astro - Part 2: Components'
description: 'Learn how to create and use components in Astro, including Astro components and integrating UI frameworks.'
publishedAt: 2024-02-05
category: 'Technical'
tags: ['astro', 'tutorial', 'components', 'react']
heroImage: '/images/astro-tutorial-2.svg'
featured: false
series:
  name: 'Astro Tutorial Series'
  order: 2
---

# Building Components in Astro

Welcome to Part 2 of our Astro tutorial series! Today we'll explore the powerful component system that makes Astro so flexible.

## Astro Components

Astro components (`.astro` files) are the foundation of your site:

```astro
---
// Component Script (JavaScript)
const greeting = "Hello, World!";
const items = ["Apple", "Banana", "Cherry"];
---

<!-- Component Template (HTML) -->
<div class="greeting">
  <h1>{greeting}</h1>
  <ul>
    {items.map(item => <li>{item}</li>)}
  </ul>
</div>

<style>
  .greeting {
    padding: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 8px;
  }
</style>
```

## Component Props

Pass data to components using props:

```astro
---
// Card.astro
export interface Props {
  title: string;
  description: string;
  href?: string;
}

const { title, description, href } = Astro.props;
---

<article class="card">
  <h2>{title}</h2>
  <p>{description}</p>
  {href && <a href={href}>Learn more →</a>}
</article>
```

Using the component:

```astro
---
import Card from '../components/Card.astro';
---

<Card 
  title="My Card" 
  description="This is a reusable card component"
  href="/learn-more"
/>
```

## Slots for Content Projection

Use slots to pass content into components:

```astro
---
// Layout.astro
---
<html>
  <head>
    <slot name="head" />
  </head>
  <body>
    <header>
      <slot name="header">Default Header</slot>
    </header>
    <main>
      <slot /> <!-- Default slot -->
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </body>
</html>
```

## Using UI Framework Components

Astro supports multiple frameworks:

```astro
---
import ReactCounter from '../components/Counter.jsx';
import VueCard from '../components/Card.vue';
import SvelteButton from '../components/Button.svelte';
---

<!-- Use client:* directives for interactivity -->
<ReactCounter client:load />
<VueCard client:visible />
<SvelteButton client:idle />
```

### Client Directives

| Directive | When it Loads |
|-----------|---------------|
| `client:load` | Immediately on page load |
| `client:idle` | When browser is idle |
| `client:visible` | When component enters viewport |
| `client:media` | When media query matches |
| `client:only` | Client-side only (no SSR) |

## Component Organization

Keep your components organized:

```
src/components/
├── common/        # Shared components
│   ├── Button.astro
│   └── Card.astro
├── layout/        # Layout components
│   ├── Header.astro
│   └── Footer.astro
└── features/      # Feature-specific
    ├── BlogCard.astro
    └── SearchBox.astro
```

## Next Steps

In Part 3, we'll cover:
- File-based routing
- Dynamic routes
- API endpoints

---

*This is Part 2 of the Astro Tutorial Series. [← Back to Part 1](/blog/astro-tutorial-intro) | [Continue to Part 3 →](/blog/astro-tutorial-routing)*
