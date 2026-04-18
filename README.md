# Climbing Chile

[![Netlify Status](https://api.netlify.com/api/v1/badges/e1e90a43-6c29-4a74-b6fb-271b607df6c9/deploy-status)](https://app.netlify.com/projects/climbing-chile/deploys)

Sitio web oficial de [Climbing Chile](https://www.instagram.com/climbingchile_cl) — guías de montaña, expediciones, escalada y formación técnica en los Andes.

Stack:

- **Astro 6** (SSG) + **Tailwind CSS v4**
- **i18n** ES / EN (ES por defecto en `/`, EN en `/en/...`)
- **Decap CMS** vía Git Gateway — edición en el browser, cero costo
- **Netlify** (hosting + Identity + formularios opcionales)
- **Formspree / Web3Forms** para el formulario de contacto (configurable)

## Requisitos

- Node.js ≥ 22.12 (archivo `.tool-versions` con `nodejs 25.9.0`)
- npm

## Desarrollo local

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # genera ./dist
npm run preview      # sirve ./dist
```

## Estructura

```
src/
├── components/        # Header, Footer, Hero, Cards…
├── content/
│   ├── expeditions/   # Markdown por expedición (editable en CMS)
│   ├── courses/       # Markdown por curso
│   ├── team/          # Markdown por persona
│   └── site/          # Configuración global (contactos)
├── content.config.ts  # Schemas Zod (colecciones tipadas)
├── i18n/              # Diccionarios ES/EN + rutas
├── layouts/Base.astro
├── pages/             # Rutas ES: /, /expediciones, /formacion, /nosotros, /contacto
│   └── en/            # Rutas EN: /en, /en/expeditions, /en/training, /en/about, /en/contact
└── styles/global.css  # Tokens de marca + Tailwind
public/
├── admin/             # Decap CMS (index.html + config.yml)
├── uploads/           # Imágenes subidas desde el CMS
└── robots.txt
```

## Contenido vía CMS (Decap)

Una vez desplegado en Netlify:

1. En Netlify → **Site settings → Identity** → Enable Identity.
2. Registration: **Invite only**. Invita tu email.
3. Services → **Git Gateway** → Enable.
4. Visita `https://tu-dominio/admin` y haz login.
5. Edita expediciones, cursos, equipo y datos de contacto. Cada publicación hace commit al repo y redespliega.

## Formulario de contacto

El formulario envía a `site.formEndpoint` (editable desde el CMS). Opciones gratuitas:

- [Formspree](https://formspree.io) — 50 envíos/mes free
- [Web3Forms](https://web3forms.com) — 250 envíos/mes free
- [Netlify Forms](https://docs.netlify.com/forms/setup/) — 100 envíos/mes free (agregar `data-netlify="true"` al `<form>` si usas esto)

Copia el endpoint y pégalo en el CMS en **Configuración del sitio → Endpoint formulario**.

## Deploy en Netlify (costo cero)

1. Sube el repo a GitHub.
2. Netlify → **Add new site → Import from Git** → selecciona el repo.
3. Build command y publish dir ya están en `netlify.toml`.
4. Habilita Identity + Git Gateway (ver sección CMS).
5. Apunta tu dominio (ej: `climbingchile.cl`).

## Reemplazar placeholders

Las imágenes actuales son SVG placeholder (`src/content/assets/placeholder-*.svg`). Reemplázalas desde el CMS subiendo fotos reales — cada expedición / curso / persona tiene un campo `cover` / `photo` editable.

Datos de contacto (WhatsApp, email, Instagram) también se editan desde **Configuración del sitio** en el CMS.

## Paleta de marca

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-brand-yellow` | `#F2C200` | Acento, CTAs |
| `--color-ink` | `#0B0B0B` | Texto, fondos oscuros |
| `--color-bone` | `#F7F5F0` | Fondo base |
| `--color-stone` | `#6B6B6B` | Texto secundario |

Tipografía: **Archivo Black** (display) + **Inter** (body).
