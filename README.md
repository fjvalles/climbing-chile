# Climbing Chile

[![Netlify Status](https://api.netlify.com/api/v1/badges/e1e90a43-6c29-4a74-b6fb-271b607df6c9/deploy-status)](https://app.netlify.com/projects/climbing-chile/deploys)

Sitio web oficial de [Climbing Chile](https://www.instagram.com/climbingchile_cl) — guías de montaña, expediciones, escalada y formación técnica en los Andes.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro 6](https://astro.build) — generación estática (SSG) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) con tokens de marca personalizados |
| Idiomas | i18n ES / EN — español en `/`, inglés en `/en/*` |
| CMS | [Decap CMS](https://decapcms.org) vía Netlify Identity + Git Gateway |
| Hosting | [Netlify](https://netlify.com) — hosting, formularios y gestión de identidad |
| Formularios | Netlify Forms (integrado, sin dependencias externas) |
| Seguridad | Security headers en `netlify.toml` (CSP, HSTS, X-Frame-Options…) |

## Estructura

```
src/
├── components/        # Header, Footer, Hero, Cards, páginas compuestas
├── content/
│   ├── expeditions/   # Una entrada Markdown por expedición
│   ├── courses/       # Una entrada Markdown por curso
│   ├── team/          # Una entrada Markdown por persona del equipo
│   └── site/          # Configuración global: contacto, redes, etc.
├── content.config.ts  # Schemas Zod para todas las colecciones
├── i18n/              # Diccionarios ES/EN y mapa de rutas por idioma
├── layouts/Base.astro # Layout raíz: meta SEO, fuentes, header, footer
├── pages/             # Rutas ES: /, /expediciones, /formacion, /nosotros, /contacto
│   └── en/            # Rutas EN: /en, /en/expeditions, /en/training, /en/about, /en/contact
└── styles/global.css  # Tokens de diseño + utilidades globales
public/
├── admin/             # Decap CMS — accesible en /admin
├── uploads/           # Imágenes subidas desde el CMS
└── robots.txt
```

## Paleta de marca

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-brand-yellow` | `#F2C200` | Acento principal, CTAs |
| `--color-ink` | `#0B0B0B` | Texto y fondos oscuros |
| `--color-bone` | `#F7F5F0` | Fondo base |
| `--color-stone` | `#6B6B6B` | Texto secundario |

Tipografía: **Archivo Black** (display) + **Inter** (cuerpo).
