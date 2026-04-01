"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/15 rounded-full blur-[128px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          Agentes de IA{" "}
          <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
            especializados
          </span>{" "}
          para cada sector
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Automatiza la atención al cliente de tu negocio con IA
          conversacional. Sin código. Activo en 24h.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#agentes"
            className="inline-flex items-center justify-center h-12 px-8 bg-accent hover:bg-accent/90 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Ver agentes
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center h-12 px-8 border border-border hover:border-muted/50 text-muted hover:text-foreground text-sm font-medium rounded-lg transition-colors"
          >
            Contactar
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
