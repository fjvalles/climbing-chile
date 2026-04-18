export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.expeditions': 'Expediciones',
    'nav.training': 'Formación',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.book': 'Reservar',

    'hero.eyebrow': 'Guías de montaña · Santiago de Chile',
    'hero.title': 'La cordillera\nes tuya.\nNosotros te guiamos.',
    'hero.subtitle': 'Expediciones, escalada, formación técnica y logística a medida en los Andes. Diseñado para ti.',
    'hero.cta.primary': 'Ver expediciones',
    'hero.cta.secondary': 'Escríbenos',

    'section.services': 'Qué hacemos',
    'section.services.title': 'Montaña, sin atajos.',
    'section.expeditions': 'Próximas salidas',
    'section.expeditions.title': 'Expediciones abiertas',
    'section.expeditions.all': 'Ver todas',
    'section.training': 'Formación',
    'section.training.title': 'Cursos y formaciones técnicas',
    'section.about': 'Nosotros',
    'section.about.title': 'Guías certificados, obsesión por los detalles.',
    'section.cta.title': '¿Tienes un plan?\nNosotros nos encargamos.',
    'section.cta.subtitle': 'Logística, permisos, equipamiento, transporte y guiado. Solo trae tu mochila.',

    'card.difficulty': 'Dificultad',
    'card.duration': 'Duración',
    'card.season': 'Temporada',
    'card.location': 'Ubicación',
    'card.details': 'Ver detalles',
    'card.book': 'Reservar',
    'card.open': 'Reservas abiertas',
    'card.soon': 'Próximamente',

    'contact.title': 'Hablemos',
    'contact.subtitle': 'Cuéntanos tu idea. Te respondemos en menos de 24h.',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Teléfono (opcional)',
    'contact.form.subject': '¿Qué te interesa?',
    'contact.form.subject.expedition': 'Una expedición',
    'contact.form.subject.training': 'Un curso o formación',
    'contact.form.subject.tailor': 'Viaje a medida',
    'contact.form.subject.other': 'Otro',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar',
    'contact.form.sending': 'Enviando…',
    'contact.form.success': 'Gracias. Te responderemos pronto.',
    'contact.form.error': 'Algo salió mal. Inténtalo de nuevo o escríbenos por WhatsApp.',

    'footer.tagline': 'Climbing & Mountain Guides.\nBased in Santiago de Chile.',
    'footer.nav': 'Navegación',
    'footer.contact': 'Contacto',
    'footer.follow': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',

    'about.values.title': 'Lo que nos mueve',
    'about.value1.title': 'Seguridad primero',
    'about.value1.body': 'No garantizamos cumbres; garantizamos que vuelves a casa.',
    'about.value2.title': 'Experiencias a medida',
    'about.value2.body': 'Cada grupo es único. Cada itinerario también.',
    'about.value3.title': 'Montaña responsable',
    'about.value3.body': 'Leave No Trace. Respeto a la montaña y a quienes viven en ella.',

    'lang.switch': 'English',
  },
  en: {
    'nav.home': 'Home',
    'nav.expeditions': 'Expeditions',
    'nav.training': 'Training',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.book': 'Book',

    'hero.eyebrow': 'Mountain Guides · Santiago de Chile',
    'hero.title': 'The Andes\nare yours.\nWe guide you.',
    'hero.subtitle': 'Expeditions, climbing, technical training and tailor-made logistics in the Andes. Built for you.',
    'hero.cta.primary': 'See expeditions',
    'hero.cta.secondary': 'Talk to us',

    'section.services': 'What we do',
    'section.services.title': 'Mountains, no shortcuts.',
    'section.expeditions': 'Upcoming trips',
    'section.expeditions.title': 'Open expeditions',
    'section.expeditions.all': 'See all',
    'section.training': 'Training',
    'section.training.title': 'Technical courses & training',
    'section.about': 'About',
    'section.about.title': 'Certified guides. Obsessed with the details.',
    'section.cta.title': 'Got a plan?\nWe handle the rest.',
    'section.cta.subtitle': 'Logistics, permits, gear, transport and guiding. Just bring your pack.',

    'card.difficulty': 'Difficulty',
    'card.duration': 'Duration',
    'card.season': 'Season',
    'card.location': 'Location',
    'card.details': 'Details',
    'card.book': 'Book',
    'card.open': 'Booking open',
    'card.soon': 'Coming soon',

    'contact.title': "Let's talk",
    'contact.subtitle': 'Tell us your idea. We reply within 24h.',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone (optional)',
    'contact.form.subject': 'What are you interested in?',
    'contact.form.subject.expedition': 'An expedition',
    'contact.form.subject.training': 'A course or training',
    'contact.form.subject.tailor': 'Tailor-made trip',
    'contact.form.subject.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.sending': 'Sending…',
    'contact.form.success': "Thanks. We'll be in touch soon.",
    'contact.form.error': 'Something went wrong. Try again or WhatsApp us.',

    'footer.tagline': 'Climbing & Mountain Guides.\nBased in Santiago de Chile.',
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow',
    'footer.rights': 'All rights reserved.',

    'about.values.title': 'What drives us',
    'about.value1.title': 'Safety first',
    'about.value1.body': "We can't promise summits; we promise you get home.",
    'about.value2.title': 'Tailor-made experiences',
    'about.value2.body': 'Every group is unique. Every itinerary too.',
    'about.value3.title': 'Responsible mountaineering',
    'about.value3.body': 'Leave No Trace. Respect the mountain and its people.',

    'lang.switch': 'Español',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}
