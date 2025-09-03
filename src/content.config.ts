import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const guide = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/guide" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    rank: z.enum([
      "Novice", "Recruit", "Apprentice", "Initiate", "Journeyman", "Journeywoman",
      "Master", "Grandmaster", "Legendary", "Hero", "Knight", "Lord", "Lady",
      "Baron", "Baroness", "Count", "Countess", "Duke", "Duchess", 
      "Grand Duke", "Grand Duchess", "Archduke", "Archduchess", "Viceroy", 
      "Elder", "Sage", "Fabled"
    ]),
    area: z.string(),
    order: z.number().optional(), // For custom ordering within areas
  }),
});

export const collections = { guide };
