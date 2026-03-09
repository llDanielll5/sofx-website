import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SOFX - Soluções Digitais | Software House",
  description:
    "Transformamos suas ideias em soluções digitais inovadoras. Desenvolvimento de aplicativos, sistemas sob demanda, automação com IA e muito mais.",
  keywords: [
    "software house",
    "desenvolvimento web",
    "aplicativos móveis",
    "automação",
    "inteligência artificial",
    "sistemas sob demanda",
  ],
  authors: [{ name: "SOFX" }],
  generator: "Next.js",
  openGraph: {
    title: "SOFX - Soluções Digitais",
    description: "Transformamos suas ideias em soluções digitais inovadoras.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${poppins.variable}  bg-[#050508] text-[#f0f0f5]`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
