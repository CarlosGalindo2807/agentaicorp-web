import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AgentaiCorp — Agentes de IA especializados por sector",
  description:
    "Automatiza la atención al cliente de tu negocio con agentes de IA conversacional especializados. Sin código. Activo en 24h.",
  openGraph: {
    title: "AgentaiCorp — Agentes de IA especializados por sector",
    description:
      "Automatiza la atención al cliente de tu negocio con agentes de IA conversacional especializados.",
    url: "https://agentaicorp.com",
    siteName: "AgentaiCorp",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
