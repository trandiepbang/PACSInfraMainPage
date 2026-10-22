import { localizePath, type Locale } from '../i18n';
import { ui } from '../i18n/ui';

export function useCaseLinks(locale: Locale) {
  const t = ui[locale].nav;
  return [
    { href: '/use-cases/clinics', label: t.clinics },
    { href: '/use-cases/research', label: t.research },
    { href: '/use-cases/developers', label: t.developers },
  ].map((l) => ({ ...l, href: localizePath(l.href, locale) }));
}

export function mainNav(locale: Locale) {
  const t = ui[locale].nav;
  return [
    { href: '/security', label: t.security },
    { href: '/technology', label: t.technology },
    { href: '/how-it-works', label: t.howItWorks },
    { href: '/pricing', label: t.pricing },
  ].map((l) => ({ ...l, href: localizePath(l.href, locale) }));
}
