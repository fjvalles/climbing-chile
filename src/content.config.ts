import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localized = z.object({ es: z.string(), en: z.string() });

const expeditions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/expeditions' }),
  schema: ({ image }) =>
    z.object({
      title: localized,
      summary: localized,
      location: localized,
      country: z.enum(['CL', 'PE', 'AR', 'BO']).default('CL'),
      durationDays: z.number().int().positive(),
      difficulty: z.enum(['easy', 'moderate', 'demanding', 'difficult', 'expedition']),
      season: localized,
      maxSpots: z.number().int().positive().optional(),
      priceFrom: z.number().optional(),
      currency: z.enum(['USD', 'CLP']).default('USD'),
      featured: z.boolean().default(false),
      status: z.enum(['open', 'soon', 'closed']).default('open'),
      cover: image(),
      gallery: z.array(image()).default([]),
      dates: z
        .array(
          z.object({
            start: z.coerce.date(),
            end: z.coerce.date(),
            spots: z.number().int().nonnegative().optional(),
          })
        )
        .default([]),
      includes: z.object({ es: z.array(z.string()), en: z.array(z.string()) }).optional(),
      excludes: z.object({ es: z.array(z.string()), en: z.array(z.string()) }).optional(),
      itinerary: z
        .array(
          z.object({
            day: z.number().int().positive(),
            title: localized,
            body: localized,
          })
        )
        .default([]),
      order: z.number().default(100),
    }),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: ({ image }) =>
    z.object({
      title: localized,
      summary: localized,
      level: z.enum(['intro', 'intermediate', 'advanced']),
      durationDays: z.number().int().positive(),
      location: localized,
      priceFrom: z.number().optional(),
      currency: z.enum(['USD', 'CLP']).default('CLP'),
      maxStudents: z.number().int().positive().optional(),
      requirements: z.object({ es: z.array(z.string()), en: z.array(z.string()) }).optional(),
      includes: z.object({ es: z.array(z.string()), en: z.array(z.string()) }).optional(),
      excludes: z.object({ es: z.array(z.string()), en: z.array(z.string()) }).optional(),
      itinerary: z
        .array(
          z.object({
            day: z.number().int().positive(),
            title: localized,
            body: localized,
          })
        )
        .default([]),
      cover: image(),
      gallery: z.array(image()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: localized,
      bio: localized,
      photo: image(),
      certifications: z.array(z.string()).default([]),
      order: z.number().default(100),
    }),
});

const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: ({ image }) =>
    z.object({
      whatsapp: z.string(),
      whatsappDisplay: z.string(),
      email: z.string().email(),
      instagram: z.string().url(),
      address: localized,
      logo: image(),
      logoText: z.object({
        top: z.string(),
        bottom: z.string(),
      }),
      hero: z.object({
        eyebrow: localized,
        title: localized,
        subtitle: localized,
      }),
      about: z.object({
        title: localized,
        values: z.array(z.object({
          title: localized,
          body: localized,
        })).max(3),
      }),
      testimonials: z.object({
        eyebrow: localized,
        title: localized,
      }),
      cta: z.object({
        title: localized,
        subtitle: localized,
      }),
      footer: z.object({
        tagline: localized,
        locations: localized,
      }),
    }),
});

export const collections = { expeditions, courses, team, site };
