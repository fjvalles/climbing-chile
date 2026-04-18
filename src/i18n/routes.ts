import type { Lang } from './ui';

export const routes: Record<Lang, Record<string, string>> = {
  es: {
    home: '/',
    expeditions: '/expediciones',
    training: '/formacion',
    about: '/nosotros',
    contact: '/contacto',
  },
  en: {
    home: '/en',
    expeditions: '/en/expeditions',
    training: '/en/training',
    about: '/en/about',
    contact: '/en/contact',
  },
};

export function r(lang: Lang, key: keyof (typeof routes)['es']): string {
  return routes[lang][key];
}

export function altLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
