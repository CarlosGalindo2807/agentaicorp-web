# Project Overview — AgentaiCorp

## Que es AgentaiCorp

AgentaiCorp es una agencia de agentes de IA conversacional especializados por sector.
Cada agente esta disenado para las necesidades especificas de una industria:
clinicas dentales, despachos de abogados, inmobiliarias, recursos humanos, restaurantes, etc.

La propuesta de valor: automatizar la atencion al cliente sin codigo, activo en 24 horas.

## Este proyecto: agentaicorp-web

Web corporativa que presenta la empresa, muestra el catalogo de agentes disponibles y
captura leads via formulario de contacto.

- **URL**: https://agentaicorp.com
- **GitHub**: CarlosGalindo2807/agentaicorp-web
- **Vercel**: proyecto `agentaicorp-web`, team `agentai2`

## Relacion con dental-agent

`dental-agent` es el primer agente desplegado. Es un proyecto independiente con su propio
repositorio y deploy en Vercel.

- **dental-agent URL**: https://dental.agentaicorp.com
- **dental-agent GitHub**: CarlosGalindo2807/dental-agent
- **dental-agent Vercel**: proyecto `dental-agent-u32z`, team `agentai2`

La web corporativa (este proyecto) enlaza a dental.agentaicorp.com desde la galeria de agentes.

## Agentes actuales (lib/agents-config.ts)

| ID          | Nombre          | Sector                | Status       | URL                                |
|-------------|-----------------|----------------------|--------------|------------------------------------|
| dental      | DentalAgent     | Clinicas dentales    | available    | https://dental.agentaicorp.com     |
| legal       | LegalAgent      | Despachos de abogados | coming_soon | —                                  |
| realestate  | RealEstateAgent | Inmobiliarias        | coming_soon  | —                                  |
| hr          | HRAgent         | Recursos Humanos     | coming_soon  | —                                  |
| restaurant  | RestaurantAgent | Restaurantes         | coming_soon  | —                                  |

## Patron de escalado

Cada nuevo agente sigue este patron:

1. Crear repositorio `CarlosGalindo2807/{sector}-agent`
2. Deploy en Vercel como proyecto nuevo
3. Asignar subdominio `{id}.agentaicorp.com` al proyecto en Vercel
4. Configurar CNAME `{id}` → `cname.vercel-dns.com` en Namecheap
5. Actualizar `lib/agents-config.ts` en agentaicorp-web: cambiar status a `"available"` y poner url
6. Push a main → deploy automatico de la web corporativa

## Ecosistema completo

| Servicio                  | URL / Host                              | Proposito                                 |
|---------------------------|-----------------------------------------|-------------------------------------------|
| Web corporativa           | https://agentaicorp.com                 | Landing, catalogo de agentes, contacto    |
| DentalAgent dashboard     | https://dental.agentaicorp.com          | Dashboard/app del agente dental           |
| n8n (automatizaciones)    | https://agentaicorp.app.n8n.cloud       | Workflows de automatizacion               |
| Supabase (dental)         | https://susvlmyawrzbfgizfvjk.supabase.co | Base de datos del agente dental         |

## DNS (Namecheap)

| Tipo   | Host     | Valor                    | Proyecto destino     |
|--------|----------|--------------------------|----------------------|
| A      | @        | 76.76.21.21              | agentaicorp-web      |
| CNAME  | www      | cname.vercel-dns.com     | agentaicorp-web      |
| CNAME  | dental   | cname.vercel-dns.com     | dental-agent-u32z    |

## Fecha

Proyecto creado el 1 de abril de 2026.
