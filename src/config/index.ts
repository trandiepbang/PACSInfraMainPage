// Components import config from here. The ?raw imports let the dev server reload on YAML edits.
import pricingYaml from './pricing.yaml?raw';
import siteYaml from './site.yaml?raw';
import { parsePricing, parseSite } from './schema';

export const pricing = parsePricing(pricingYaml);
export const site = parseSite(siteYaml);
export type { Pricing, Site, Tier } from './schema';
