import { getPricing, pricing, type Tier } from '../config';
import type { Locale } from '../i18n';
import { ui } from '../i18n/ui';

export function formatPrice(amount: number, currency = pricing.currency): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}

export const billingLabel = (billing: Tier['billing'], locale: Locale = 'en') => ui[locale].billing[billing];

/** e.g. "Self-Hosted, first year $2,000 one-time" */
export const pricingSummary = (locale: Locale = 'en') =>
  getPricing(locale)
    .tiers.map((t) => `${t.name} ${formatPrice(t.price)} ${billingLabel(t.billing, locale)}`)
    .join(locale === 'zh-tw' ? '、' : ', ');

export const lowestPrice = () => formatPrice(Math.min(...pricing.tiers.map((t) => t.price)));
