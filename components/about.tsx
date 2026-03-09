"use client";

import { useEffect, useRef, useState } from "react";
import { Code, Lightbulb, Rocket, Users, Bot, FileLock } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description:
      "Integrando IA para criar soluções inteligentes e personalizadas para o seu negócio.",
  },
  // {
  //   icon: Lightbulb,
  //   title: "Inovação",
  //   description:
  //     "Desenvolvemos soluções criativas e inovadoras para os desafios do seu negócio.",
  // },
  {
    icon: Code,
    title: "Tecnologia",
    description:
      "Utilizamos as tecnologias mais modernas do mercado para garantir qualidade.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Nossos sistemas são otimizados para máxima performance e escalabilidade.",
  },
  // {
  //   icon: Users,
  //   title: "Parceria",
  //   description:
  //     "Trabalhamos lado a lado com nossos clientes em cada etapa do projeto.",
  // },
  {
    icon: FileLock,
    title: "Segurança",
    description:
      "Implementamos medidas de segurança avançadas para proteger seus dados e sistemas.",
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/5 text-[#6366f1] text-sm font-medium mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-poppins)] mb-6">
            <span className="text-[#f0f0f5]">Somos a </span>

            <img
              src="/images/logo-transparent.png"
              alt="Logo"
              className="inline h-10 w-auto"
            />
          </h2>
          <p className="text-lg text-[#a0a0b0] leading-relaxed">
            Uma software house focada em transformar ideias em realidade
            digital. Com expertise em desenvolvimento web, mobile e automação,
            criamos soluções que impulsionam o crescimento dos nossos clientes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group gradient-border p-6 rounded-xl hover:scale-105 transition-all duration-500 cursor-default ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00d4ff]/20 to-[#6366f1]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-[#00d4ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#f0f0f5] mb-2 font-[var(--font-poppins)]">
                {feature.title}
              </h3>
              <p className="text-[#a0a0b0] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div
          className={`mt-16 text-center max-w-4xl mx-auto p-8 rounded-2xl glass transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-2xl text-[#f0f0f5] font-medium leading-relaxed">
            &ldquo;Nossa missão é{" "}
            <span className="text-[#00d4ff]">impulsionar negócios</span> através
            de tecnologia de ponta, entregando soluções que fazem a{" "}
            <span className="text-[#6366f1]">diferença</span>.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
