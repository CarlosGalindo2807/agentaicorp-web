"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CtaFinal() {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          ¿Tu sector no está aquí?
        </h2>
        <p className="text-muted mb-8">
          Estamos creando agentes para nuevos sectores constantemente.
          Cuéntanos tu caso y diseñamos uno para ti.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center h-12 px-8 bg-accent hover:bg-accent/90 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Cuéntanos tu caso
        </Link>
      </motion.div>
    </section>
  );
}
