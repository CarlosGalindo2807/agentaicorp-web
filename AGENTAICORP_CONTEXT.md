# 🧠 AGENTAICORP — CONTEXTO MAESTRO
# Última actualización: 1 abril 2026
# Este archivo es la fuente de verdad del ecosistema AgentaiCorp.
# Pégalo al inicio de cualquier sesión de Claude Code en cualquier proyecto.

---

## 🏢 QUÉ ES AGENTAICORP
AgentaiCorp es una agencia de agentes de IA conversacionales especializados por sector.
Cada agente es un producto SaaS independiente con su propio repo, dominio y Supabase.
La web corporativa actúa como marketplace/showcase de todos los agentes.

---

## 🗺️ ECOSISTEMA COMPLETO

| Proyecto | Repo GitHub | URL producción | Carpeta local |
|----------|-------------|----------------|---------------|
| Web corporativa | CarlosGalindo2807/agentaicorp-web | agentaicorp.com | D:\agentaicorp-web |
| DentalAgent | CarlosGalindo2807/dental-agent | dental.agentaicorp.com | D:\dental-agent |

### Servicios compartidos
- **n8n Cloud:** agentaicorp.app.n8n.cloud
- **Email:** hola@agentaicorp.com (Zoho) / carlos@agentaicorp.com
- **DNS:** Namecheap — A @ 76.76.21.21 / CNAME www + dental → cname.vercel-dns.com
- **Vercel team:** agentai2

---

## 📦 PROYECTO 1 — agentaicorp-web

### Stack
- Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion
- Resend (emails de contacto)
- Vercel (deploy automático desde main)

### Páginas
- `/` — Home con 7 secciones: Nav, Hero, Galería agentes, Cómo funciona, Por qué nosotros, CTA final, Footer
- `/contacto` — Formulario con Resend → hola@agentaicorp.com
- `/privacidad` y `/terminos` — Páginas legales

### Componentes clave
- `lib/agents-config.ts` — FUENTE DE VERDAD de todos los agentes (añadir aquí cada nuevo agente)
- `components/agents-gallery.tsx` — Grid circular, DentalAgent con glow pulsante
- `components/nav.tsx` — Blur al scroll

### Agentes en agents-config.ts
| id | nombre | estado | url |
|----|--------|--------|-----|
| dental | DentalAgent 🦷 | available | dental.agentaicorp.com |
| legal | LegalAgent ⚖️ | coming_soon | null |
| realestate | RealEstateAgent 🏠 | coming_soon | null |
| hr | HRAgent 👥 | coming_soon | null |
| restaurant | RestaurantAgent 🍽️ | coming_soon | null |

### Variables de entorno (Vercel)
- `CONTACT_EMAIL` = hola@agentaicorp.com ✅
- `RESEND_API_KEY` = re_... ✅

### Estado actual
- ✅ Deploy activo en agentaicorp.com
- ✅ DNS configurado en Namecheap
- ✅ Docs en .claude/agents/ (frontend-developer.md, integrations-engineer.md, project-overview.md)
- ⏳ Verificar dominio agentaicorp.com en Resend para que lleguen emails de contacto

---

## 📦 PROYECTO 2 — dental-agent

### Stack
- Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui
- Supabase: susvlmyawrzbfgizfvjk.supabase.co (eu-west-1)
- Claude API: claude-sonnet-4-20250514
- WhatsApp BSP: 360dialog + Twilio Sandbox (dual, auto-detecta por Content-Type)
- n8n Cloud: 6 workflows configurados
- Stripe (pendiente integración pagos)

### Base de datos Supabase
- 10 tablas: clinicas, clinica_secrets, dentistas, pacientes, citas, conversaciones, tratamientos, user_clinica, historial_paciente, informes_paciente
- 26 RLS policies multi-tenant via clinica_id
- Migraciones 001-009 aplicadas en producción
- Seed data: Clínica Demo, 5 pacientes, 9 citas, 13 historiales clínicos, 6 informes
- Demo: admin@dental.com / Admin1234!

### Páginas dashboard
- `/` Overview con métricas reales
- `/citas` Tabla con filtros
- `/pacientes` Lista + búsqueda + detalle `/pacientes/[id]`
- `/conversaciones` Chat WhatsApp + detalle `/conversaciones/[id]`
- `/metricas` 6 métricas reales
- `/onboarding` Multi-step 3 pasos (force-dynamic ✅)
- `/login` Auth Supabase
- `/landing` Landing pública

### Agente IA
- Modo PACIENTE: 6 tools (getAvailableSlots, createAppointment, cancelAppointment, getPatientAppointments, getClinicInfo, saveConversationMessage)
- Modo DENTISTA: 7 tools (agenda, historial, proxima cita, resenas, metricas, informe, archivado)
- Webhook: dental.agentaicorp.com/api/webhooks/whatsapp (soporta 360dialog + Twilio)
- API agente: dental.agentaicorp.com/api/agent/chat

### n8n workflows (agentaicorp.app.n8n.cloud)
| Workflow | ID | Estado |
|----------|----|--------|
| Recordatorio 48h | BfU2YICQwCm4oAWr | ⏳ Inactivo (falta DIALOG360_API_KEY) |
| Recordatorio 2h | QhBNg1K5qY1SWifH | ⏳ Inactivo |
| Followup post-visita | SROsSnOCIipZbRy1 | ⏳ Inactivo |
| Bienvenida nuevo paciente | aSpToE07LDNImHAu | ⏳ Inactivo |
| Solicitud reseña Google | J9KTAx8CkmA7G6vN | ⏳ Inactivo |

### Variables de entorno (Vercel dental-agent)
- `NEXT_PUBLIC_SUPABASE_URL` ✅
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` ✅
- `SUPABASE_SERVICE_ROLE_KEY` ✅
- `ANTHROPIC_API_KEY` ✅
- `DIALOG360_API_KEY` ⏳ pendiente
- `DIALOG360_WEBHOOK_SECRET` ⏳ pendiente
- `TWILIO_ACCOUNT_SID` ✅ (ACd38cef...7c, sin trailing newline)
- `TWILIO_AUTH_TOKEN` ✅
- `TWILIO_SANDBOX_NUMBER` ✅ (whatsapp:+14155238886)

### Estado actual
- ✅ Deploy activo en dental.agentaicorp.com
- ✅ Dashboard funcional con datos reales + historico + informes
- ✅ Agente IA verificado E2E: modo paciente + modo dentista (7/7 tools)
- ✅ Build fix: force-dynamic en /onboarding/layout.tsx
- ✅ Webhook WhatsApp soporta Twilio Sandbox y 360dialog (auto-detecta por Content-Type)
- ✅ Modo dentista: agenda, historial, informes, metricas, pacientes archivados
- ✅ Historial clínico enriquecido + informes paciente + exportar CSV
- ✅ Fix webhook Twilio: teléfono con +, TwiML vacío, búsqueda paciente normalizada
- ✅ Twilio env vars configuradas en Vercel (SID, AUTH_TOKEN, SANDBOX_NUMBER)
- ✅ Fix firma Twilio Sandbox: valida AccountSid en vez de X-Twilio-Signature
  → Para producción: activar TWILIO_VERIFY_SIGNATURE=true
- ✅ Fix env vars Vercel: echo añadía \\n, recreadas con printf (sin trailing newline)
- ✅ Webhook test OK: STATUS 200 + TwiML vacío desde curl
- ✅ Fix normalización teléfono: getConversation + handleMessage buscan con/sin +
  → Causa del "error técnico": datos existentes con 34... no matcheaban con +34...
- ⏳ WhatsApp real: Meta BM en revisión (apelación 1 abril, 24-48h)

---

## 🔲 PENDIENTES GLOBALES (por orden de prioridad)

1. **Twilio Sandbox** — Registrarse en twilio.com, configurar vars en Vercel, probar E2E
2. **Meta BM** — Comprobar si restricción levantada (2 abril) → 360dialog
3. **Resend dominio** — Verificar agentaicorp.com en Resend para emails
4. **Primer cliente** — Demo con clínica dental real
5. **Stripe** — Integrar pagos (cuando haya primer cliente)
6. **Whisper** — Transcripción audio para mensajes de voz

---

## 📏 REGLAS DE ORO

1. **Nunca mezclar código** entre proyectos — cada uno en su carpeta
2. **agents-config.ts** es la única fuente de verdad para añadir agentes nuevos
3. **Nuevo agente** = repo nuevo + subdominio {id}.agentaicorp.com + entrada en agents-config.ts
4. **Secrets** nunca en código — siempre en Vercel env vars
5. **Actualizar este archivo** al final de cada sesión con cambios importantes
