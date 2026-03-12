import type { Metadata, Viewport } from "next";
import "./whatsbot-premium.css";

export const metadata: Metadata = {
  title: "WhatsBot Premium | Automacao de WhatsApp Inteligente",
  description:
    "Automatize seu atendimento no WhatsApp e nunca mais perca vendas por demora. Atendimento 24/7, CRM integrado e muito mais.",
  keywords: [
    "whatsapp",
    "automacao",
    "chatbot",
    "atendimento",
    "vendas",
    "bot",
  ],
  authors: [{ name: "SOFX - Solucoes Digitais" }],
  openGraph: {
    title: "WhatsBot Premium | Automacao de WhatsApp Inteligente",
    description:
      "Automatize seu atendimento no WhatsApp e nunca mais perca vendas por demora.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#25D366",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
