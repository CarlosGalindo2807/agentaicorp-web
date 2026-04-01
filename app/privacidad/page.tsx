import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad — AgentaiCorp",
};

export default function PrivacidadPage() {
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

          <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>

          <div className="space-y-6 text-sm text-muted leading-relaxed">
            <p>Última actualización: abril 2026</p>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. Responsable del tratamiento
              </h2>
              <p>
                AgentaiCorp es responsable del tratamiento de los datos
                personales recogidos a través de este sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. Datos que recogemos
              </h2>
              <p>
                Recogemos los datos que nos proporcionas voluntariamente a
                través del formulario de contacto: nombre, email, empresa,
                sector y mensaje.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Finalidad
              </h2>
              <p>
                Los datos se utilizan exclusivamente para responder a tu
                consulta y, en su caso, elaborar una propuesta comercial
                personalizada.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Conservación
              </h2>
              <p>
                Los datos se conservan durante el tiempo necesario para
                atender tu solicitud y, como máximo, durante los plazos
                legalmente establecidos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Derechos
              </h2>
              <p>
                Puedes ejercer tus derechos de acceso, rectificación,
                supresión y portabilidad escribiendo a{" "}
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
