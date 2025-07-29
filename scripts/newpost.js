#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

async function createNewPost() {
  try {
    console.log('📝 Creating New Blog Post\n');

    const title = await question('Article Title: ');
    if (!title.trim()) {
      console.error('❌ Title cannot be empty');
      process.exit(1);
    }

    const description = await question('Article Description: ');
    const category = await question('Category (default: Technical): ') || 'Technical';
    const tags = await question('Tags (comma-separated): ');
    const heroImage = await question('Hero Image Path (optional, e.g., /images/hero.svg): ');
    const isDraft = (await question('Mark as draft? (y/N): ')).toLowerCase() === 'y';

    const today = new Date();
    const formattedDate = formatDate(today);
    const fileName = `${toKebabCase(title)}.md`;
    const filePath = path.join('src', 'content', 'blog', fileName);

    const tagArray = tags.split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const frontmatter = {
      title: title.trim(),
      description: description.trim(),
      publishedAt: formattedDate,
      category: category.trim(),
      tags: tagArray,
      draft: isDraft
    };

    if (heroImage.trim()) {
      frontmatter.heroImage = heroImage.trim();
    }

    const yamlFrontmatter = Object.entries(frontmatter)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key}:\n${value.map(v => `  - '${v}'`).join('\n')}`;
        } else if (typeof value === 'string') {
          return `${key}: '${value}'`;
        } else {
          return `${key}: ${value}`;
        }
      })
      .join('\n');

    const content = `---
${yamlFrontmatter}
---

## Introduction

Write your article introduction here...

## Main Content

### Part 1

Start your content here...

### Part 2

Continue your content here...

## Conclusion

Summarize your key points...

## References

- [Reference Link 1](https://example.com)
- [Reference Link 2](https://example.com)
`;

    fs.writeFileSync(filePath, content);
    console.log(`✅ Article created successfully: ${filePath}`);
    console.log(`📅 Published Date: ${formattedDate}`);
    console.log(`🏷️  Tags: ${tagArray.join(', ')}`);
    console.log(`📂 Draft Status: ${isDraft ? 'Yes' : 'No'}`);

  } catch (error) {
    console.error('❌ Error creating article:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

createNewPost();