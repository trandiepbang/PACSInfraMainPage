import { pricing, type Tier } from '../config';

export function formatPrice(amount: number, currency = pricing.currency): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}

const billingSuffix: Record<Tier['billing'], string> = {
  'one-time': 'one-time',
  yearly: 'per year',
  monthly: 'per month',
};

export const billingLabel = (billing: Tier['billing']) => billingSuffix[billing];

/** e.g. "Self-Hosted $2,500 one-time, Deployed $6,000 one-time" */
export const pricingSummary = () =>
  pricing.tiers.map((t) => `${t.name} ${formatPrice(t.price)} ${billingLabel(t.billing)}`).join(', ');

export const lowestPrice = () => formatPrice(Math.min(...pricing.tiers.map((t) => t.price)));
