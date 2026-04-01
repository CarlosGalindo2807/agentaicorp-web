import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-semibold">
            Agentai<span className="text-accent">Corp</span>
          </p>
          <p className="text-xs text-muted mt-1">
            Agentes de IA para el mundo real
          </p>
        </div>

        <div className="flex gap-6 text-sm text-muted">
          <Link href="/contacto" className="hover:text-foreground transition-colors">
            Contacto
          </Link>
          <Link href="/privacidad" className="hover:text-foreground transition-colors">
            Privacidad
          </Link>
          <Link href="/terminos" className="hover:text-foreground transition-colors">
            Términos
          </Link>
        </div>

        <p className="text-xs text-muted">© 2026 AgentaiCorp</p>
      </div>
    </footer>
  );
}
