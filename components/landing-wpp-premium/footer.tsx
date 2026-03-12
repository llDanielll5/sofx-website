"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

const footerLinks = {
  produto: [
    { label: "Recursos", href: "#vantagens" },
    { label: "Planos", href: "#planos" },
    { label: "Depoimentos", href: "#depoimentos" },
    // { label: "FAQ", href: "#" },
  ],
  empresa: [
    { label: "Sobre Nos", href: "#sobre" },
    { label: "Blog", href: "#" },
    // { label: "Carreiras", href: "#" },
    { label: "Contato", href: "#orcamento" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#" },
    { label: "Politica de Privacidade", href: "#" },
    { label: "LGPD", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/sofxdigital",
    label: "Instagram",
  },
  // { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contato@sofx.com.br", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <MessageCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                WhatsBot<span className="text-primary">Premium</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Transforme seu atendimento no WhatsApp com automação inteligente.
              Mais vendas, menos esforço.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+5500000000000"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(61) 93505-4682</span>
              </a>
              <a
                href="mailto:contato@whatsbot.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contato@sofx.com.br</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Brasil</span>
              </div>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 pb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {new Date().getFullYear()} WhatsBot Premium. Todos os direitos
              reservados.
              <br />
              <span className="text-xs">
                Desenvolvido por{" "}
                <a
                  href="https://sofx.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  SOFX - Soluções Digitais
                  <ExternalLink className="w-3 h-3" />
                </a>
              </span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Storyset Attribution
      <div className="border-t border-border py-4">
        <p className="text-center text-xs text-muted-foreground">
          Ilustracoes por{" "}
          <a
            href="https://storyset.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Storyset
          </a>
        </p>
      </div> */}
    </footer>
  );
}
