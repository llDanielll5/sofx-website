import { ContactEmail } from "@/src/templates/emails/contact-email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || "";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from =
      process.env.CONTACT_FROM_EMAIL || "Sofx Site <onboarding@resend.dev>";

    if (!to) {
      return NextResponse.json(
        { error: "CONTACT_TO_EMAIL não configurado." },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Novo contato de ${name} - Site Sofx`,
      react: ContactEmail({
        name,
        email,
        phone,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erro ao enviar o e-mail." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: "Mensagem enviada com sucesso.",
    });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 },
    );
  }
}
