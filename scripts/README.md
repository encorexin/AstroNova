# Article Creation Command

## Usage

Run the following command to create a new blog post:

```bash
pnpm newpost
```

## Interactive Prompts

The command will guide you through entering the following information:

1. **Article Title** (required) - Will automatically generate the filename
2. **Article Description** (required) - Brief description of the article content
3. **Category** (default: Technical) - Article category
4. **Tags** (comma-separated) - List of relevant tags
5. **Hero Image** (optional) - Hero image path
6. **Draft Status** (y/N) - Whether to mark as draft

## Filename Generation Rules

- Automatically converted to kebab-case format
- Example: "My New Post" → `my-new-post.md`

## Automatic Frontmatter Generation

Created articles will automatically include the following frontmatter:

```yaml
---
title: 'Article Title'
description: 'Article Description'
publishedAt: '2024-XX-XX'
category: 'Category'
tags:
  - 'tag1'
  - 'tag2'
draft: false
heroImage: '/images/hero.svg'  # If hero image is provided
---
```

## Article Template

Created articles include a preset content structure:

- Introduction section
- Main content (divided into multiple parts)
- Conclusion
- References

## File Location

New articles will be saved to:
```
src/content/blog/article-title.md
```