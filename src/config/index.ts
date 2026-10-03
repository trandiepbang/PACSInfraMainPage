// Components import config from here. The ?raw imports let the dev server reload on YAML edits.
import pricingYaml from './pricing.yaml?raw';
import siteYaml from './site.yaml?raw';
import { parsePricing, parseSite } from './schema';

export const site = parseSite(siteYaml);

// Fill {supportEmail} in pricing CTA links from site.yaml, so the address lives in one place.
const withEmail = (url: string) => url.replaceAll('{supportEmail}', site.supportEmail);
const parsed = parsePricing(pricingYaml);
export const pricing = {
  ...parsed,
  tiers: parsed.tiers.map((t) => ({
    ...t,
    primaryCta: { ...t.primaryCta, url: withEmail(t.primaryCta.url) },
    secondaryCta: t.secondaryCta && { ...t.secondaryCta, url: withEmail(t.secondaryCta.url) },
  })),
};
export type { Pricing, Site, Tier } from './schema';
