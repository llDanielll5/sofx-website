"use client";

import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Github,
  Mail,
  Phone,
  Heart,
  MessageCircle,
} from "lucide-react";

const footerLinks = {
  empresa: [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Tecnologias", href: "#tecnologias" },
  ],
  servicos: [
    { label: "Aplicativos Móveis", href: "#servicos" },
    { label: "Sites e Landing Pages", href: "#servicos" },
    { label: "Sistemas sob Demanda", href: "#servicos" },
    { label: "Automação com IA", href: "#servicos" },
  ],
  contato: [
    {
      label: "contato@sofx.com.br",
      href: "mailto:contato@sofx.com.br",
      icon: Mail,
    },
    {
      label: "+55 (61) 93505-4682",
      href: "https://wa.me/5561935054682",
      icon: MessageCircle,
    },
  ],
};

const socialLinks = [
  // { icon: Linkedin, href: "#", label: "LinkedIn" },
  {
    icon: Instagram,
    href: "https://instagram.com/sofxdigital",
    label: "Instagram",
  },
  // { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050508] border-t border-[#1a1a2e]">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/white-logo.png"
                alt="SOFX Logo"
                className="w-32 h-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-[#a0a0b0] text-sm leading-relaxed mb-6">
              Transformamos suas ideias em soluções digitais inovadoras.
              Software house especializada em desenvolvimento web, mobile e
              automação com IA.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[#12121a] border border-[#1a1a2e] flex items-center justify-center transition-all duration-300 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10"
                >
                  <social.icon
                    className="w-4 h-4 text-[#a0a0b0] "
                    style={{ color: "#E4405F" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Empresa */}
          <div>
            <h4 className="text-[#f0f0f5] font-semibold mb-6 font-[var(--font-poppins)]">
              Empresa
            </h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#a0a0b0] text-sm hover:text-[#6366f1] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Serviços */}
          <div>
            <h4 className="text-[#f0f0f5] font-semibold mb-6 font-[var(--font-poppins)]">
              Serviços
            </h4>
            <ul className="space-y-4">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#a0a0b0] text-sm hover:text-[#6366f1] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-[#f0f0f5] font-semibold mb-6 font-[var(--font-poppins)]">
              Contato
            </h4>
            <ul className="space-y-4">
              {footerLinks.contato.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-[#a0a0b0] text-sm hover:text-[#6366f1] transition-colors"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#1a1a2e] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6c737f] text-sm text-center md:text-left">
            &copy; {currentYear} SOFX - Soluções Digitais. Todos os direitos
            reservados.
          </p>
          <p className="text-[#6c737f] text-sm flex items-center gap-1">
            Feito com{" "}
            <Heart className="w-4 h-4 text-[#ff4444] fill-[#ff4444]" /> no
            Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
