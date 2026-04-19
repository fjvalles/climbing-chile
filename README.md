# Climbing Chile

[![Netlify Status](https://api.netlify.com/api/v1/badges/e1e90a43-6c29-4a74-b6fb-271b607df6c9/deploy-status)](https://app.netlify.com/projects/climbing-chile/deploys)

Sitio web oficial de [Climbing Chile](https://www.instagram.com/climbingchile_cl) — guías de montaña, expediciones, escalada y formación técnica en los Andes.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro 6](https://astro.build) — generación estática (SSG) con View Transitions |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) con tokens de marca personalizados |
| UX | Navegación fluida, CTAs pegajosos en móvil y filtrado dinámico |
| Idiomas | i18n ES / EN — español en `/`, inglés en `/en/*` |
| CMS | [Decap CMS](https://decapcms.org) vía Netlify Identity + Git Gateway |
| Hosting | [Netlify](https://netlify.com) — hosting, formularios y gestión de identidad |
| Formularios | Netlify Forms (integrado, sin dependencias externas) |
| Seguridad | Security headers en `netlify.toml` (CSP, HSTS, X-Frame-Options…) |

## Características destacadas

- **Navegación Fluida:** Uso de `View Transitions` de Astro para transiciones suaves entre páginas sin recargar el estado del navegador.
- **Optimización Móvil:** Menú colapsable persistente, CTAs "sticky" en las vistas de detalle y tarjetas interactivas en el calendario.
- **Calendario Dinámico:** Filtrado instantáneo por tipo de actividad (Expedición o Formación) con actualización en tiempo real.
- **Booking Unificado:** Integración directa con WhatsApp para reservas, con mensajes preconfigurados según la actividad y el idioma.
- **SEO & Performance:** Generación estática completa, imágenes optimizadas y cabeceras de seguridad rigurosas.

## Estructura

```
src/
├── assets/            # Assets UI fuera del content pipeline (ej: logo)
├── components/        # Header (sticky), Footer, Hero, cards y secciones
├── content/
│   ├── assets/        # Imágenes usadas por expediciones, cursos y equipo
│   ├── expeditions/   # Una entrada Markdown por expedición
│   ├── courses/       # Una entrada Markdown por curso
│   ├── team/          # Una entrada Markdown por persona del equipo
│   └── site/          # Configuración global: contacto, hero, footer, etc.
├── content.config.ts  # Schemas Zod para todas las colecciones
├── i18n/              # Diccionarios ES/EN y mapa de rutas por idioma
├── layouts/Base.astro # Layout raíz: View Transitions, SEO, fuentes
├── pages/             # Rutas Astro
│   ├── index.astro    # Home ES
│   ├── calendario.astro
│   ├── expediciones/[slug].astro
│   ├── formacion/[slug].astro
│   ├── terminos-y-condiciones.astro
│   └── en/            # Home EN, calendario EN, detail pages EN, terms EN
└── styles/global.css  # Tokens de diseño + utilidades globales
public/
├── admin/             # Decap CMS — accesible en /admin
├── uploads/           # Imágenes subidas desde el CMS
├── hero-bg.mp4        # Video local del hero
└── robots.txt
```

## Rutas principales

- `/` home en español
- `/en` home en inglés
- `/#expeditions`, `/#training`, `/#about` navegación por anclas en home
- `/calendario` y `/en/calendar`
- `/expediciones/[slug]` y `/en/expeditions/[slug]`
- `/formacion/[slug]` y `/en/training/[slug]`
- `/terminos-y-condiciones` y `/en/terms-and-conditions`

## Desarrollo local

Requisitos:

- Node.js `>= 22.12.0`

Comandos:

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
```

## CMS de Netlify / Decap

El proyecto usa [Decap CMS](https://decapcms.org) con:

- `backend: git-gateway`
- autenticación por `Netlify Identity`
- flujo de publicación: simple (guardado directo en `main`)

La URL del CMS es:

- Producción: `https://<tu-dominio>/admin/`
- En Netlify deploy previews: `https://<deploy-preview-url>/admin/`

### Qué se puede editar desde el CMS

Todas las colecciones están 100% alineadas con el código:

- `Expediciones`: campos completos incluyendo itinerarios, inclusiones y galerías.
- `Cursos`: campos completos incluyendo itinerarios, requisitos y galerías.
- `Equipo`: perfiles de guías y certificaciones.
- `Configuración del sitio`: contacto y redes sociales.

### Cómo dar acceso a un editor

1. Entrar al panel del sitio en Netlify.
2. Ir a `Identity`.
3. Si Identity no está activado, activarlo.
4. En `Registration preferences`, definir quién puede entrar.
   Normalmente conviene mantener invitación manual.
5. En `Services`, asegurarse de que `Git Gateway` esté habilitado.
6. Invitar al usuario editor desde la sección `Identity > Invite users`.
7. El editor recibirá un email para crear contraseña.

Notas:

- Sin `Identity` + `Git Gateway`, el CMS no podrá guardar cambios en el repositorio.
- Si el login abre con token de invitación o recuperación, el sitio ya redirige automáticamente al flujo correcto de `/admin/`.

### Cómo entrar al CMS como editor

1. Abrir `/admin/`.
2. Elegir login con Netlify Identity.
3. Ingresar email y contraseña.
4. Entrar a la colección deseada.

### Cómo editar contenido

#### Expediciones

Cada entrada corresponde a un archivo Markdown dentro de `src/content/expeditions/`.

Campos importantes:

- `Destacada`: define si aparece en el home
- `Título`, `Resumen`, `Ubicación`, `Temporada`: siempre en ES y EN
- `País`, `Duración`, `Dificultad`, `Estado`
- `Precio desde`, `Moneda`
- `Imagen portada`
- `Galería`
- `Fechas disponibles`
- `Incluye` / `No incluye`
- `Itinerario`
- `Orden`
- `Contenido`

Buenas prácticas:

- completar siempre español e inglés
- usar una portada horizontal/vertical de buena calidad
- mantener consistencia en `season`, `status` y `order`
- si una expedición debe destacarse en home, activar `Destacada`

#### Cursos

Cada entrada corresponde a un archivo Markdown dentro de `src/content/courses/`.

Campos completos:

- `Destacado`: define si aparece en el home.
- `Título`, `Resumen`, `Ubicación`: siempre en ES y EN.
- `Nivel`, `Duración`, `Precio desde`, `Moneda`.
- `Cupos máximos`, `Requisitos`.
- `Imagen portada` y `Galería`.
- `Incluye` / `No incluye`.
- `Itinerario`.
- `Orden` y `Contenido`.

#### Equipo

Cada entrada corresponde a un archivo Markdown dentro de `src/content/team/`.

Campos:

- `Nombre`
- `Rol` en ES y EN
- `Bio` en ES y EN
- `Foto`
- `Certificaciones`
- `Orden`

#### Configuración del sitio

Archivo administrado:

- `src/content/site/config.md`

Desde ahí se puede editar:

- WhatsApp
- WhatsApp visible
- Email
- Instagram
- Dirección ES / EN

### Cómo crear una nueva entrada

1. Entrar a la colección.
2. Hacer click en `New`.
3. Completar los campos obligatorios.
4. Guardar como draft o enviar a revisión.

Con `editorial_workflow`, el CMS no publica directamente en una sola acción:

- `Draft`: borrador inicial
- `In review`: listo para revisión
- `Ready`: listo para publicar/mergear

Dependiendo del setup de Netlify/Decap, esto crea commits o ramas editoriales manejadas por Git Gateway.

### Cómo actualizar imágenes desde el CMS

- Las imágenes subidas desde el CMS van a `public/uploads`
- Luego se referencian públicamente como `/uploads/...`

Recomendaciones:

- usar `.webp` si es posible
- no subir archivos gigantes si no hace falta
- mantener nombres simples y descriptivos

### Cómo editar contenido fuera del CMS

También se puede editar directo en el repo:

- expediciones: `src/content/expeditions/*.md`
- cursos: `src/content/courses/*.md`
- equipo: `src/content/team/*.md`
- config global: `src/content/site/config.md`
- assets del content pipeline: `src/content/assets/*`

Después de editar:

```bash
npm run build
```

## Paleta de marca

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-brand-yellow` | `#F2C200` | Acento principal, CTAs |
| `--color-ink` | `#0B0B0B` | Texto y fondos oscuros |
| `--color-bone` | `#F7F5F0` | Fondo base |
| `--color-stone` | `#6B6B6B` | Texto secundario |

Tipografía: **Archivo Black** (display) + **Inter** (cuerpo).
