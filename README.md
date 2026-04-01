# AgentaiCorp Web

Web corporativa de [AgentaiCorp](https://agentaicorp.com) — agencia de agentes de IA especializados por sector.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS**
- **Framer Motion**
- **Resend** (emails de contacto)

## Estructura

```
app/
  page.tsx              # Home (hero, galeria, como funciona, por que, CTA)
  contacto/page.tsx     # Formulario de contacto
  privacidad/page.tsx   # Politica de privacidad
  terminos/page.tsx     # Terminos y condiciones
  api/contacto/route.ts # API Route — envia email via Resend
components/             # Componentes de UI (nav, hero, gallery, etc.)
lib/
  agents-config.ts      # Fuente de verdad de todos los agentes
```

## Agentes

| ID | Nombre | Sector | Estado | URL |
|---|---|---|---|---|
| dental | DentalAgent | Clinicas dentales | Disponible | dental.agentaicorp.com |
| legal | LegalAgent | Despachos de abogados | Proximamente | — |
| realestate | RealEstateAgent | Inmobiliarias | Proximamente | — |
| hr | HRAgent | Recursos Humanos | Proximamente | — |
| restaurant | RestaurantAgent | Restaurantes | Proximamente | — |

Para anadir un nuevo agente, edita `lib/agents-config.ts`.

## Setup local

```bash
npm install
cp .env.example .env.local
# Edita .env.local con tus claves
npm run dev
```

## Variables de entorno

| Variable | Descripcion |
|---|---|
| `CONTACT_EMAIL` | Email destino del formulario de contacto |
| `RESEND_API_KEY` | API key de [Resend](https://resend.com) |

## Despliegue

El proyecto se despliega en **Vercel**. Cada push a `main` genera un deploy automatico.

- Produccion: `agentaicorp.com`
- Cada agente tiene su propio subdominio: `{id}.agentaicorp.com`
