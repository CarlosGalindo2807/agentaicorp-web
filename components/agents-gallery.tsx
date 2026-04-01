"use client";

import { motion } from "framer-motion";
import { AGENTS } from "@/lib/agents-config";

export function AgentsGallery() {
  return (
    <section id="agentes" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Nuestros agentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted text-center mb-16 max-w-lg mx-auto"
        >
          Cada agente está diseñado para las necesidades específicas de su
          sector
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-4 group"
            >
              {/* Circle avatar */}
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center bg-surface border-2 cursor-default ${
                  agent.status === "available" ? "glow-ring" : ""
                }`}
                style={
                  {
                    borderColor: agent.color,
                    "--glow-color": `${agent.color}44`,
                  } as React.CSSProperties
                }
              >
                <span className="text-4xl sm:text-5xl">{agent.emoji}</span>
              </motion.div>

              {/* Name */}
              <div className="text-center">
                <p className="font-semibold text-sm">{agent.name}</p>
                <p className="text-xs text-muted mt-0.5">{agent.sector}</p>
              </div>

              {/* Description on hover — visible below circle */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center max-w-[180px]">
                <p className="text-xs text-muted leading-relaxed">
                  {agent.description}
                </p>
                {agent.status === "available" && agent.url ? (
                  <a
                    href={agent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs font-medium px-4 py-1.5 rounded-md transition-colors"
                    style={{
                      backgroundColor: `${agent.color}20`,
                      color: agent.color,
                    }}
                  >
                    Ver {agent.name} &rarr;
                  </a>
                ) : (
                  <span className="inline-block mt-3 text-xs text-muted/60 bg-surface border border-border px-3 py-1 rounded-md">
                    Próximamente
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
