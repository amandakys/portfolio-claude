import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    thumbnail: image().optional(),
    casestudy: z.boolean().optional(),
    parent: z.string().optional(),
    showOnHomepage: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    workplace: z.string().optional(),
    protected: z.boolean().optional(),
  })
});

export const collections = {
  projects
};
