import type { Lang } from './ui';

export const routes: Record<Lang, Record<string, string>> = {
  es: {
    home: '/',
    expeditions: '/#expeditions',
    training: '/#training',
    about: '/#about',
    contact: '#contact',
    terms: '/terminos-y-condiciones',
    calendar: '/calendario',
  },
  en: {
    home: '/en',
    expeditions: '/en#expeditions',
    training: '/en#training',
    about: '/en#about',
    contact: '#contact',
    terms: '/en/terms-and-conditions',
    calendar: '/en/calendar',
  },
};

export function r(lang: Lang, key: keyof (typeof routes)['es']): string {
  return routes[lang][key];
}

export function altLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
