import type { Lang } from './ui';

const routes: Record<Lang, Record<string, string>> = {
  es: {
    home: '/',
    expeditions: '/#expeditions',
    training: '/#training',
    about: '/#about',
    testimonials: '/#testimonials',
    custom_plan: '/#custom-plan',
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

function normalizePath(path: string): string {
  if (!path) return '/';

  const [pathname, hash = ''] = path.split('#');
  const normalizedPathname =
    pathname === '/' ? '/' : pathname.replace(/\/+$/, '') || '/';

  return hash ? `${normalizedPathname}#${hash}` : normalizedPathname;
}

export function getAltPath(currentPath: string, lang: Lang): string {
  const alt = altLang(lang);
  const normalizedCurrentPath = normalizePath(currentPath);

  const directRoute = Object.entries(routes[lang]).find(
    ([, path]) => normalizePath(path) === normalizedCurrentPath
  );
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

  if (normalizedCurrentPath.startsWith(detailPrefixes[lang].expeditions)) {
    const slug = normalizedCurrentPath.slice(detailPrefixes[lang].expeditions.length);
    return `${detailPrefixes[alt].expeditions}${slug}`;
  }

  if (normalizedCurrentPath.startsWith(detailPrefixes[lang].training)) {
    const slug = normalizedCurrentPath.slice(detailPrefixes[lang].training.length);
    return `${detailPrefixes[alt].training}${slug}`;
  }

  if (normalizedCurrentPath === '/404') {
    return lang === 'es' ? '/en/404' : '/404';
  }

  return lang === 'es'
    ? `/en${normalizedCurrentPath === '/' ? '' : normalizedCurrentPath}`
    : normalizedCurrentPath.replace(/^\/en/, '') || '/';
}
