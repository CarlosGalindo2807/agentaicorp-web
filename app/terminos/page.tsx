import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones — AgentaiCorp",
};

export default function TerminosPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <article className="max-w-2xl mx-auto prose-invert">
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
          >
            &larr; Volver
          </Link>

          <h1 className="text-3xl font-bold mb-8">Términos y Condiciones</h1>

          <div className="space-y-6 text-sm text-muted leading-relaxed">
            <p>Última actualización: abril 2026</p>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. Objeto
              </h2>
              <p>
                Estos términos regulan el uso del sitio web agentaicorp.com y
                los servicios ofrecidos por AgentaiCorp.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. Servicios
              </h2>
              <p>
                AgentaiCorp ofrece agentes de inteligencia artificial
                conversacional especializados por sector. Los servicios
                específicos, precios y condiciones se acuerdan individualmente
                con cada cliente.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Propiedad intelectual
              </h2>
              <p>
                Todos los contenidos de este sitio web (textos, diseños,
                logotipos, código) son propiedad de AgentaiCorp y están
                protegidos por las leyes de propiedad intelectual aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Limitación de responsabilidad
              </h2>
              <p>
                AgentaiCorp no garantiza la disponibilidad ininterrumpida del
                sitio web. Los agentes de IA son herramientas de asistencia y
                no sustituyen la supervisión humana.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Contacto
              </h2>
              <p>
                Para cualquier consulta sobre estos términos, contacta en{" "}
                <a
                  href="mailto:carlos@agentaicorp.com"
                  className="text-accent hover:underline"
                >
                  carlos@agentaicorp.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
