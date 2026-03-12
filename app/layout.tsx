import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} bg-[#050508] text-[#f0f0f5]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
