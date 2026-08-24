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
    // `workplace` also routes the project under /work/ - see pages/work/[workplace].astro
    workplace: z.string().optional(),
    // Header metadata. `company` is only needed when it differs from `workplace`
    // (or when there is no workplace); `year` falls back to the year in `date`.
    role: z.string().optional(),
    company: z.string().optional(),
    year: z.string().optional(),
    protected: z.boolean().optional(),
    // Framing questions shown under the hero. Currently only rendered by
    // QuantcoLayout - see layouts/QuantcoLayout.astro
    questions: z.array(z.string()).optional(),
    // Header "Focus" values. Falls back to `tags`, which is kept for the
    // listing cards where the shorter labels read better
    focus: z.array(z.string()).optional(),
    // Heading shown on the project page itself. Falls back to `title`, which
    // stays the label used by the homepage and /projects listing cards
    pageTitle: z.string().optional(),
  })
});

export const collections = {
  projects
};
