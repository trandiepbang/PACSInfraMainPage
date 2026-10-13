// Components import config from here. The ?raw imports let the dev server reload on YAML edits.
import pricingYaml from './pricing.yaml?raw';
import siteYaml from './site.yaml?raw';
import { parsePricing, parseSite } from './schema';
import type { Locale } from '../i18n';
import { pricingZhTw } from '../i18n/pricing';

export const site = parseSite(siteYaml);

export const pricing = parsePricing(pricingYaml);

/** Pricing with its words in the given language. Numbers and links always come from pricing.yaml. */
export function getPricing(locale: Locale): typeof pricing {
  if (locale === 'en') return pricing;
  const zh = pricingZhTw;
  return {
    ...pricing,
    licenceSummary: zh.licenceSummary ?? pricing.licenceSummary,
    foundingOffer: { ...pricing.foundingOffer, text: zh.foundingOffer ?? pricing.foundingOffer.text },
    tiers: pricing.tiers.map((t) => {
      const z = zh.tiers[t.id] ?? {};
      return {
        ...t,
        name: z.name ?? t.name,
        description: z.description ?? t.description,
        features: z.features ?? t.features,
        note: t.note && (z.note ?? t.note),
        badge: t.badge && (z.badge ?? t.badge),
        callout: t.callout && (z.callout ?? t.callout),
      };
    }),
    faq: pricing.faq.map((f, i) => ({ q: zh.faqQuestions[i] ?? f.q, a: zh.faqAnswers[i] ?? f.a })),
  };
}

export type { Pricing, Site, Tier } from './schema';
