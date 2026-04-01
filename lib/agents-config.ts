export type AgentStatus = "available" | "coming_soon";

export interface Agent {
  id: string;
  name: string;
  sector: string;
  emoji: string;
  description: string;
  color: string;
  status: AgentStatus;
  url: string | null;
}

export const AGENTS: Agent[] = [
  {
    id: "dental",
    name: "DentalAgent",
    sector: "Clínicas dentales",
    emoji: "🦷",
    description:
      "Gestión de citas, recordatorios y reseñas por WhatsApp para clínicas dentales",
    color: "#0ea5e9",
    status: "available",
    url: "https://dental.agentaicorp.com",
  },
  {
    id: "legal",
    name: "LegalAgent",
    sector: "Despachos de abogados",
    emoji: "⚖️",
    description:
      "Gestión de consultas, citas y documentación para despachos jurídicos",
    color: "#8b5cf6",
    status: "coming_soon",
    url: null,
  },
  {
    id: "realestate",
    name: "RealEstateAgent",
    sector: "Inmobiliarias",
    emoji: "🏠",
    description:
      "Atención a compradores, visitas y seguimiento de leads para inmobiliarias",
    color: "#f59e0b",
    status: "coming_soon",
    url: null,
  },
  {
    id: "hr",
    name: "HRAgent",
    sector: "Recursos Humanos",
    emoji: "👥",
    description:
      "Onboarding, FAQs de empresa y gestión de solicitudes para equipos de RRHH",
    color: "#10b981",
    status: "coming_soon",
    url: null,
  },
  {
    id: "restaurant",
    name: "RestaurantAgent",
    sector: "Restaurantes",
    emoji: "🍽️",
    description:
      "Reservas, menú del día y gestión de valoraciones para restaurantes",
    color: "#ef4444",
    status: "coming_soon",
    url: null,
  },
];
