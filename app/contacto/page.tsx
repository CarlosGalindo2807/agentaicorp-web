"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AGENTS } from "@/lib/agents-config";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      sector: (form.elements.namedItem("sector") as HTMLSelectElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full h-12 px-4 bg-surface border border-border rounded-lg text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors";

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/"
              className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
            >
              &larr; Volver
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contacto</h1>
            <p className="text-muted mb-10">
              Cuéntanos sobre tu negocio y te proponemos la mejor solución.
            </p>

            {status === "sent" ? (
              <div className="p-6 rounded-lg border border-accent/30 bg-accent/5 text-center">
                <p className="font-semibold mb-1">Mensaje enviado</p>
                <p className="text-sm text-muted">
                  Te responderemos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-1.5">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    className={inputClasses}
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium mb-1.5">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    className={inputClasses}
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="sector" className="block text-sm font-medium mb-1.5">
                    Sector
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    required
                    className={inputClasses}
                  >
                    <option value="">Selecciona un sector</option>
                    {AGENTS.map((agent) => (
                      <option key={agent.id} value={agent.sector}>
                        {agent.emoji} {agent.sector}
                      </option>
                    ))}
                    <option value="Otro">Otro sector</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    className={`${inputClasses} h-auto py-3 resize-none`}
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Error al enviar. Inténtalo de nuevo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full h-12 bg-accent hover:bg-accent/90 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
