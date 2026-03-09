"use client";

import { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  Globe,
  Layers,
  MessageSquare,
  Bot,
  Brain,
  Server,
  Layout,
  Gamepad2,
  Database,
  Cloud,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Aplicativos Móveis",
    description:
      "Desenvolvimento de apps nativos e híbridos para iOS e Android com design moderno e performance excepcional.",
    color: "#00d4ff",
  },
  {
    icon: Globe,
    title: "Sites e Landing Pages",
    description:
      "Criação de sites institucionais, e-commerces e landing pages otimizadas para conversão.",
    color: "#6366f1",
  },
  {
    icon: Layers,
    title: "Sistemas sob Demanda",
    description:
      "Desenvolvimento de sistemas personalizados para atender às necessidades específicas do seu negócio.",
    color: "#00ff88",
  },
  {
    icon: MessageSquare,
    title: "Automação WhatsApp",
    description:
      "Chatbots inteligentes e automações para WhatsApp que melhoram o atendimento ao cliente.",
    color: "#00d4ff",
  },
  {
    icon: Bot,
    title: "Automação por IA",
    description:
      "Processos automatizados com inteligência artificial para otimizar operações e reduzir custos.",
    color: "#6366f1",
  },
  {
    icon: Brain,
    title: "Implementações de IA",
    description:
      "Integração de modelos de IA em seus sistemas para análise de dados, predições e muito mais.",
    color: "#00ff88",
  },
  {
    icon: Server,
    title: "Servidores e Infraestrutura",
    description:
      "Configuração e gerenciamento de servidores, deploy e infraestrutura em nuvem.",
    color: "#00d4ff",
  },
  {
    icon: Layout,
    title: "SPAs e PWAs",
    description:
      "Aplicações web progressivas e single-page apps com experiência fluida e offline-first.",
    color: "#6366f1",
  },
  {
    icon: Gamepad2,
    title: "Criação de Jogos",
    description:
      "Desenvolvimento de jogos 2D/3D para web, mobile e desktop com engines modernas.",
    color: "#00ff88",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description:
      "Modelagem, otimização e migração de bancos de dados relacionais e NoSQL.",
    color: "#00d4ff",
  },
  {
    icon: Cloud,
    title: "Soluções Cloud",
    description:
      "Arquitetura e implementação de soluções em nuvem com AWS, GCP e Azure.",
    color: "#6366f1",
  },
  {
    icon: Shield,
    title: "Segurança Digital",
    description:
      "Implementação de protocolos de segurança, autenticação e proteção de dados.",
    color: "#00ff88",
  },
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 text-[#00d4ff] text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-poppins)] mb-6">
            <span className="text-[#f0f0f5]">Soluções </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#6366f1]">
              completas
            </span>
            <span className="text-[#f0f0f5]"> para seu negócio</span>
          </h2>
          <p className="text-lg text-[#a0a0b0] leading-relaxed">
            Oferecemos uma ampla gama de serviços tecnológicos para atender
            todas as suas necessidades digitais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-xl bg-[#12121a]/50 border border-[#1a1a2e] hover:border-[${service.color}]/50 transition-all duration-500 cursor-default overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}10 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}05 100%)`,
                  }}
                >
                  <service.icon
                    className="w-6 h-6"
                    style={{ color: service.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-[#f0f0f5] mb-2 font-[var(--font-poppins)] group-hover:text-[#00d4ff] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#a0a0b0] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
