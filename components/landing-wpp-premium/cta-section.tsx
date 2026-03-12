"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Video,
  BookOpen,
  Download,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: FileText,
    title: "E-book Gratuito",
    description: "Guia completo: Como automatizar seu atendimento em 7 dias",
    cta: "Baixar Agora",
  },
  {
    icon: Video,
    title: "Webinar Exclusivo",
    description: "Assista nossa masterclass sobre conversao no WhatsApp",
    cta: "Assistir Gratis",
  },
  {
    icon: BookOpen,
    title: "Case de Sucesso",
    description: "Veja como a TechStore aumentou 300% suas vendas",
    cta: "Ler Case",
  },
];

const benefits = [
  "Aumente suas vendas em ate 300%",
  "Atenda clientes 24 horas por dia",
  "Reduza custos operacionais",
  "Escale sem aumentar equipe",
];

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Resources Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Transforme Sua Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Pare hoje de <span className="text-primary">perder clientes</span>
            </h2>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group/btn"
                >
                  {resource.cta}
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-y-0.5" />
                </Button>
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-emerald-600" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
                  Pronto para transformar seu atendimento?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Junte-se a mais de 500 empresas que já automatizaram suas
                  vendas e atendimento com o WhatsBot Premium.
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                      <span className="text-primary-foreground/90">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 font-semibold group"
                >
                  <a href="#orcamento">
                    Fazer Meu Orcamento
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Right Content - Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2s", label: "Tempo medio de resposta" },
                  { value: "300%", label: "Aumento em conversoes" },
                  { value: "24/7", label: "Atendimento disponivel" },
                  { value: "10+", label: "Clientes satisfeitos" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-primary-foreground/70">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
