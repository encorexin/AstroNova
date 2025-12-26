import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const pages = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
description: z.string(),
}),
});

export const collections = {
blog,
pages,
};
