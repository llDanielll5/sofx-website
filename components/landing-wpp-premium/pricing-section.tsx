"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, Rocket, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Ideal para pequenos negócios que estão começando",
    icon: Sparkles,
    features: [
      "Até 500 mensagens/mês",
      "1 número de WhatsApp",
      "Fluxos de conversa básicos",
      "Relatórios simples",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    description: "Para empresas que buscam escalar seu atendimento",
    icon: Rocket,
    features: [
      "Mensagens ilimitadas",
      "Ate 3 números de WhatsApp",
      "Fluxos de conversa avançados",
      "Suporte prioritário",
      "CRM integrado",
      "Relatórios detalhados",
      "Integração com APIs",
      "SLA não Prioritário",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Solução completa para grandes operações",
    icon: Crown,
    features: [
      "Tudo do Professional",
      "Números ilimitados",
      "Integração IA (Inteligência Artificial)",
      "Integração com Sistemas Existentes",
      "Gerente de conta dedicado",
      "Customizações exclusivas",
      "SLA Prioritário",
    ],
    highlight: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="planos" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Escolha o plano{" "}
            <span className="text-primary">ideal para voce</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada negócio e único. Faça um orçamento personalizado e descubra
            qual plano se encaixa melhor nas suas necessidades.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${plan.highlight ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div
                className={`relative h-full p-8 rounded-2xl border transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-primary/10 to-card border-primary shadow-xl shadow-primary/10"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <plan.icon className="w-7 h-7" />
                </div>

                {/* Plan Info */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">
                    Sob consulta
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.highlight ? "bg-primary/20" : "bg-secondary"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.highlight ? "text-primary" : "text-primary"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full font-semibold group/btn ${
                    plan.highlight ? "" : "variant-outline"
                  }`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  <a href="#orcamento">
                    Fazer Orçamento
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-12"
        >
          Todos os planos incluem atualizacoes gratuitas e garantia de
          satisfacao.
        </motion.p>
      </div>
    </section>
  );
}
