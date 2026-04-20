import type { Lang } from './ui';

export const routes: Record<Lang, Record<string, string>> = {
  es: {
    home: '/',
    expeditions: '/#expeditions',
    training: '/#training',
    about: '/#about',
    testimonials: '/#testimonials',
    custom_plan: '/#custom-plan',
    contact: '#contact',
    terms: '/terminos-y-condiciones',
    calendar: '/calendario',
    privacy: '/privacidad',
  },
  en: {
    home: '/en',
    expeditions: '/en#expeditions',
    training: '/en#training',
    about: '/en#about',
    testimonials: '/en#testimonials',
    custom_plan: '/en#custom-plan',
    contact: '#contact',
    terms: '/en/terms-and-conditions',
    calendar: '/en/calendar',
    privacy: '/en/privacy',
  },
};

export function r(lang: Lang, key: keyof (typeof routes)['es']): string {
  return routes[lang][key];
}

export function altLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export function getAltPath(currentPath: string, lang: Lang): string {
  const alt = altLang(lang);

  const directRoute = Object.entries(routes[lang]).find(([, path]) => path === currentPath);
  if (directRoute) {
    const [key] = directRoute;
    return routes[alt][key];
  }

  const detailPrefixes = {
    es: {
      expeditions: '/expediciones/',
      training: '/formacion/',
    },
    en: {
      expeditions: '/en/expeditions/',
      training: '/en/training/',
    },
  } as const;

  if (currentPath.startsWith(detailPrefixes[lang].expeditions)) {
    const slug = currentPath.slice(detailPrefixes[lang].expeditions.length);
    return `${detailPrefixes[alt].expeditions}${slug}`;
  }

  if (currentPath.startsWith(detailPrefixes[lang].training)) {
    const slug = currentPath.slice(detailPrefixes[lang].training.length);
    return `${detailPrefixes[alt].training}${slug}`;
  }

  return lang === 'es'
    ? `/en${currentPath === '/' ? '' : currentPath}`
    : currentPath.replace(/^\/en/, '') || '/';
}
