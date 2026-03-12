"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Settings,
  RefreshCw,
  Clock,
  Zap,
  BarChart3,
} from "lucide-react";

const advantages = [
  {
    icon: MessageSquare,
    title: "+ Atendimento",
    description:
      "Consiga realizar diversos atendimentos ao mesmo tempo, sem deixar nenhum cliente esperando.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Settings,
    title: "+ Facilidade",
    description:
      "Com o autoatendimento você tem mais tempo para pensar nas suas estratégias de Marketing e crescimento.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: RefreshCw,
    title: "+ Atualizado",
    description:
      "Você também tem a liberdade de atualizá-lo a qualquer momento com nossa equipe!",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "+ Constância",
    description:
      "Com o nosso autoatendimento, voce atenderá seus clientes 24 horas por dia todos os 7 dias da semana!",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: Zap,
    title: "+ Rapidez",
    description:
      "Consequentemente com seu Whatsapp automatizado, você não perderá mais vendas, por demora de atendimento.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: BarChart3,
    title: "+ CRM com Leads",
    description:
      "Tenha um painel só seu dos resultados de seu Whatsapp, e monte sua estratégia de marketing com os gráficos!",
    color: "from-teal-500 to-emerald-600",
  },
];

export function AdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vantagens" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />

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
            Vantagens
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Por que escolher o{" "}
            <span className="text-primary">WhatsBot Premium</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como nossa solução pode revolucionar o atendimento da sua
            empresa
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <advantage.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
