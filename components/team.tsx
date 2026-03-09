"use client";

import { useEffect, useRef, useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const team = [
  {
    name: "Daniel Mota",
    role: "Founder & CEO",
    description:
      "Especialista em desenvolvimento Full Stack, apaixonado por criar soluções inovadoras e eficientes, com experiência em diversas tecnologias e linguagens de programação. Inspirado por desafios complexos, Daniel lidera a SOFX com visão estratégica e foco na excelência técnica desde 2022. Sempre trazendo melhores práticas e tendências do mercado para entregar resultados de alta qualidade aos nossos clientes.",
    image: "/images/team/dan.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/danielmota-fullstack/",
      github: "https://github.com/llDanielll5",
      email: "danielmotabenevides@gmail.com",
    },
  },
  {
    name: "Franco Victor Ribeiro",
    role: "Full Stack Developer",
    description:
      "Desenvolvedor Full Stack com experiência em diversas tecnologias; Ele é um membro valioso da equipe da SOFX, contribuindo com sua expertise técnica para o sucesso dos nossos clientes. ",
    image: "/images/team/franco.png",
    social: {
      linkedin: "https://www.linkedin.com/in/francovictorribeiro/",
      github: "https://github.com/francovictor-dev",
      // email: "socio2@sofx.com.br",
    },
  },
  {
    name: "Cleyson Barbosa",
    role: "Full Stack Developer",
    description:
      "Desenvolvedor Full Stack especialista em Soluções de servidores, cloud, infraestrutura e segurança. Com visão estratégica, crítica e técnica, é um desenvolvedor de ponta que consegue trazer resultados eficientes para os clientes.",
    image: "/images/team/cleyson.png",
    social: {
      linkedin: "https://www.linkedin.com/in/cleyson-barbosa-7b4245162/",
      github: "https://github.com/cleyxds",
      // email: "socio3@sofx.com.br",
    },
  },
];

export function Team() {
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
      id="socios"
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 text-[#00ff88] text-sm font-medium mb-4">
            Equipe
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-poppins)] mb-6">
            <span className="text-[#f0f0f5]">Nossa </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#6366f1]">
              Equipe
            </span>
          </h2>
          <p className="text-lg text-[#a0a0b0] leading-relaxed">
            Conheça as pessoas por trás da SOFX.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-[#12121a]/50 border border-[#1a1a2e] hover:border-[#00d4ff]/30 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#6366f1] p-0.5">
                <div className="w-full h-full rounded-full bg-[#12121a] flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-[#00d4ff]">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#f0f0f5] mb-1 font-[var(--font-poppins)]">
                  {member.name}
                </h3>
                <p className="text-[#00d4ff] text-sm font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-[#a0a0b0] text-sm mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center transition-all duration-300 hover:bg-[#0077B5] hover:text-[#f0f0f5]"
                  >
                    <Linkedin className="w-4 h-4 text-[#a0a0b0] hover:text-[#f0f0f5]" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center transition-all duration-300 hover:bg-[#333] hover:text-[#f0f0f5]"
                  >
                    <Github className="w-4 h-4 text-[#a0a0b0] hover:text-[#f0f0f5]" />
                  </a>
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center transition-all duration-300 hover:bg-[#00d4ff] hover:text-[#050508]"
                    >
                      <Mail className="w-4 h-4 text-[#a0a0b0] hover:text-[#050508]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
