import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { nombre, email, empresa, sector, mensaje } = await request.json();

    if (!nombre || !email || !sector || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail = process.env.CONTACT_EMAIL || "carlos@agentaicorp.com";

    await resend.emails.send({
      from: "AgentaiCorp <noreply@agentaicorp.com>",
      to: contactEmail,
      replyTo: email,
      subject: `Nuevo contacto: ${nombre} — ${sector}`,
      html: `
        <h2>Nuevo contacto desde agentaicorp.com</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa || "No especificada"}</p>
        <p><strong>Sector:</strong> ${sector}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el email" },
      { status: 500 }
    );
  }
}
