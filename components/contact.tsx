"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
} from "lucide-react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d4ff]/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 text-[#00d4ff] text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-poppins)] mb-6">
            <span className="text-[#f0f0f5]">Vamos </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#6366f1]">
              Conversar?
            </span>
          </h2>
          <p className="text-lg text-[#a0a0b0] leading-relaxed">
            Entre em contato conosco e transforme sua ideia em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-[#f0f0f5] mb-8 font-[var(--font-poppins)]">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <div>
                  <h4 className="text-[#f0f0f5] font-medium mb-1">E-mail</h4>
                  <a
                    href="mailto:contato@sofx.com.br"
                    className="text-[#a0a0b0] hover:text-[#00d4ff] transition-colors"
                  >
                    contato@sofx.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#6366f1]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#6366f1]" />
                </div>
                <div>
                  <h4 className="text-[#f0f0f5] font-medium mb-1">Telefone</h4>
                  <a
                    href="https://wa.me/5561935054657"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0a0b0] hover:text-[#6366f1] transition-colors"
                  >
                    +55 (61) 93505-4657
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00ff88]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#00ff88]" />
                </div>
                <div>
                  <h4 className="text-[#f0f0f5] font-medium mb-1">
                    Localização
                  </h4>
                  <p className="text-[#a0a0b0]">Brasil - Remoto</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="text-[#f0f0f5] font-medium mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: Instagram,
                    href: "https://instagram.com/sofxdigital",
                    color: "#E4405F",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#12121a] border border-[#1a1a2e] flex items-center justify-center transition-all duration-300 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/5"
                  >
                    <social.icon
                      className="w-5 h-5"
                      style={{ color: social.color }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#f0f0f5] mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-[#1a1a2e] text-[#f0f0f5] placeholder-[#6c737f] focus:outline-none focus:border-[#00d4ff] transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#f0f0f5] mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-[#1a1a2e] text-[#f0f0f5] placeholder-[#6c737f] focus:outline-none focus:border-[#00d4ff] transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#f0f0f5] mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-[#1a1a2e] text-[#f0f0f5] placeholder-[#6c737f] focus:outline-none focus:border-[#00d4ff] transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#f0f0f5] mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-[#1a1a2e] text-[#f0f0f5] placeholder-[#6c737f] focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
                  placeholder="Descreva seu projeto..."
                />
              </div>

              <Button
                type="submit"
                className="cursor-pointer w-full bg-[#6366f1] text-[#ffffff] hover:bg-[#6366f1]/90 font-semibold py-6 neon-glow"
              >
                Enviar Mensagem
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
