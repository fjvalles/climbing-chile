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
            start: z.string(),
            end: z.string(),
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

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    text: localized,
    name: z.string(),
    initials: z.string(),
    color: z.string().default('#2a3e55'),
    expedition: localized,
    order: z.number().default(100),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: ({ image }) =>
    z.discriminatedUnion('type', [
      z.object({
        type: z.literal('header'),
        logo: image(),
        logoText: z.object({ top: z.string(), bottom: z.string() }),
        bookButton: localized,
      }),
      z.object({
        type: z.literal('hero'),
        eyebrow: localized,
        title: localized,
        subtitle: localized,
        primaryButton: localized,
        secondaryButton: localized,
      }),
      z.object({
        type: z.literal('about'),
        title: localized,
        values: z.array(z.object({ title: localized, body: localized })).max(3),
      }),
      z.object({
        type: z.literal('testimonials'),
        eyebrow: localized,
        title: localized,
      }),
      z.object({
        type: z.literal('cta'),
        title: localized,
        subtitle: localized,
        button: localized,
      }),
      z.object({
        type: z.literal('footer'),
        tagline: localized,
        locations: localized,
        whatsapp: z.string(),
        whatsappDisplay: z.string(),
        email: z.string().email(),
        instagram: z.string().url(),
        address: localized,
      }),
    ]),
});

export const collections = { expeditions, courses, team, testimonials, site };
