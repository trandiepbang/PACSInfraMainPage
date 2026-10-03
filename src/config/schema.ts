import { parse } from 'yaml';
import { z } from 'zod';

const cta = z.strictObject({
  label: z.string().min(1),
  url: z.string().min(1),
});

const tier = z.strictObject({
  id: z.string().regex(/^[a-z0-9-]+$/, 'use lowercase letters, numbers and hyphens'),
  name: z.string().min(1),
  price: z.number().nonnegative(),
  billing: z.enum(['one-time', 'yearly', 'monthly']),
  highlight: z.boolean().default(false),
  badge: z.string().min(1).optional(),
  description: z.string().min(1),
  features: z.array(z.string().min(1)).min(1),
  note: z.string().min(1).optional(),
  primaryCta: cta,
  secondaryCta: cta.optional(),
});

export const pricingSchema = z
  .strictObject({
    currency: z
      .string()
      .length(3)
      .refine((code) => Intl.supportedValuesOf('currency').includes(code.toUpperCase()), {
        message: 'must be an ISO 4217 currency code such as USD, EUR or GBP',
      }),
    foundingOffer: z.strictObject({
      enabled: z.boolean(),
      text: z.string().min(1),
    }),
    tiers: z.array(tier).min(1).max(3, 'the pricing layout supports at most 3 tiers'),
    licenceSummary: z.string().min(1),
    faq: z.array(z.strictObject({ q: z.string().min(1), a: z.string().min(1) })),
  })
  .superRefine((data, ctx) => {
    const seen = new Set<string>();
    data.tiers.forEach((t, i) => {
      if (seen.has(t.id)) {
        ctx.addIssue({ code: 'custom', path: ['tiers', i, 'id'], message: `duplicate tier id "${t.id}"` });
      }
      seen.add(t.id);
    });
  });

export const socialIcons = ['github', 'linkedin', 'x.com', 'mastodon', 'youtube'] as const;

export const siteSchema = z.strictObject({
  name: z.string().min(1),
  url: z.url().refine((u) => !u.endsWith('/'), 'leave off the trailing slash'),
  tagline: z.string().min(1),
  description: z.string().min(1),
  supportEmail: z.email(),
  demoUrl: z.string().min(1),
  bookingUrl: z.string().min(1),
  social: z.array(
    z.strictObject({
      label: z.string().min(1),
      icon: z.enum(socialIcons),
      href: z.url(),
    }),
  ),
});

export type Pricing = z.infer<typeof pricingSchema>;
export type Tier = Pricing['tiers'][number];
export type Site = z.infer<typeof siteSchema>;

function load<T extends z.ZodType>(file: string, raw: string, schema: T): z.infer<T> {
  let data: unknown;
  try {
    data = parse(raw);
  } catch (err) {
    throw new Error(`\n\n${file} is not valid YAML:\n${(err as Error).message}\n`);
  }
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(`\n\n${file} failed validation:\n${z.prettifyError(result.error)}\n`);
  }
  return result.data;
}

export const parsePricing = (raw: string) => load('src/config/pricing.yaml', raw, pricingSchema);
export const parseSite = (raw: string) => load('src/config/site.yaml', raw, siteSchema);

/** Paths of every string value that still contains "TODO", for the build-time reminder. */
export function findTodos(value: unknown, path = ''): string[] {
  if (typeof value === 'string') return value.includes('TODO') ? [path] : [];
  if (Array.isArray(value)) return value.flatMap((v, i) => findTodos(v, `${path}[${i}]`));
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => findTodos(v, path ? `${path}.${k}` : k));
  }
  return [];
}
