# Integrations Engineer — agentaicorp-web

## API de contacto

- **Endpoint**: `POST /api/contacto`
- **Archivo**: `app/api/contacto/route.ts`
- **Proveedor de email**: [Resend](https://resend.com)
- **Paquete**: `resend` v6.10

### Flujo

1. El formulario en `/contacto` envia JSON con: nombre, email, empresa, sector, mensaje
2. La API Route valida campos obligatorios (nombre, email, sector, mensaje)
3. Instancia `new Resend(process.env.RESEND_API_KEY)` dentro del handler (lazy init para evitar error en build)
4. Envia email via `resend.emails.send()` con:
   - From: `AgentaiCorp <noreply@agentaicorp.com>`
   - To: valor de `CONTACT_EMAIL`
   - ReplyTo: email del usuario
   - Subject: `Nuevo contacto: {nombre} — {sector}`
   - Body: HTML con los datos del formulario

### Variables de entorno en Vercel

| Variable         | Valor                      | Entorno     | Estado        |
|-----------------|----------------------------|-------------|---------------|
| `CONTACT_EMAIL` | `hola@agentaicorp.com`     | Production  | Configurada   |
| `RESEND_API_KEY` | (placeholder)             | Production  | Pendiente — reemplazar con clave real |

### Dominio Resend

Para que el `from: noreply@agentaicorp.com` funcione, el dominio `agentaicorp.com` debe estar verificado en Resend:
1. Ir a https://resend.com/domains
2. Anadir `agentaicorp.com`
3. Configurar los DNS records (TXT, CNAME) que Resend indique
4. Verificar

**Estado**: pendiente de verificacion.

### Archivos .env

- `.env.example`: template con `CONTACT_EMAIL` y `RESEND_API_KEY`
- `.env.local`: archivo local (gitignored), mismo formato
- `.env*.local` esta en `.gitignore`
