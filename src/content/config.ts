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
}),
});

export const collections = {
blog,
};
