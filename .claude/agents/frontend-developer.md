# Frontend Developer — agentaicorp-web

## Stack

- **Next.js 14** App Router (v14.2.35)
- **TypeScript** strict mode
- **Tailwind CSS** v3.4
- **Framer Motion** v12.38
- Fuente: Inter (via `next/font/google`)

## Paleta de colores (tailwind.config.ts)

| Token        | Valor    | Uso                      |
|-------------|----------|--------------------------|
| background  | #080808  | Fondo principal          |
| surface     | #111111  | Tarjetas, inputs         |
| border      | #222222  | Bordes sutiles           |
| foreground  | #ffffff  | Texto principal          |
| muted       | #888888  | Texto secundario         |
| accent      | #7c3aed  | Violeta — CTAs, acentos  |
| cyan        | #06b6d4  | Cyan — gradiente hero    |

Estilo: dark premium, tipo Linear/Vercel. Sin bordes redondeados excesivos. Espaciado generoso.

## Paginas

| Ruta          | Archivo                    | Tipo      | Descripcion                                       |
|---------------|----------------------------|-----------|----------------------------------------------------|
| `/`           | `app/page.tsx`             | Static    | Home con 7 secciones (nav, hero, galeria, como funciona, por que, CTA, footer) |
| `/contacto`   | `app/contacto/page.tsx`    | Static    | Formulario de contacto (client component)          |
| `/privacidad` | `app/privacidad/page.tsx`  | Static    | Politica de privacidad                             |
| `/terminos`   | `app/terminos/page.tsx`    | Static    | Terminos y condiciones                             |
| `/api/contacto` | `app/api/contacto/route.ts` | Dynamic | API Route POST — envia email via Resend           |

## Componentes (components/)

| Archivo               | Directiva      | Descripcion                                              |
|-----------------------|----------------|----------------------------------------------------------|
| `nav.tsx`             | `"use client"` | Navbar fija con blur al scroll                           |
| `hero.tsx`            | `"use client"` | Hero con gradientes, grid pattern, animaciones Framer    |
| `agents-gallery.tsx`  | `"use client"` | Grid circular de agentes con glow pulsante en DentalAgent |
| `how-it-works.tsx`    | `"use client"` | 3 pasos horizontales con iconos SVG y lineas conectoras  |
| `why-us.tsx`          | `"use client"` | 4 cards de ventajas con iconos                           |
| `cta-final.tsx`       | `"use client"` | CTA "Tu sector no esta aqui?" con link a /contacto       |
| `footer.tsx`          | Server         | Footer con logo, links legales, copyright 2026           |

## Fuente de verdad de agentes

`lib/agents-config.ts` — exporta `AGENTS: Agent[]` con tipos `AgentStatus`, `Agent`.
Cada agente tiene: id, name, sector, emoji, description, color, status, url.
Los componentes `agents-gallery.tsx` y `app/contacto/page.tsx` consumen este array.

## Animaciones

- **Framer Motion**: fade-in + slide-up en hero, galeria, secciones (viewport: once)
- **CSS custom** (globals.css):
  - `.glow-ring`: pulso de sombra animado (2.5s) — usado en DentalAgent
  - `.float-animation`: flotacion suave (6s) — disponible pero no usada actualmente

## Deploy

- **Plataforma**: Vercel
- **Proyecto Vercel**: `agentaicorp-web` (team `agentai2`)
- **URL produccion**: https://agentaicorp.com
- **URL Vercel**: https://agentaicorp-web.vercel.app
- **GitHub**: CarlosGalindo2807/agentaicorp-web (branch `main`, auto-deploy)
- **DNS** (Namecheap): A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`

## Fecha de creacion

1 de abril de 2026
