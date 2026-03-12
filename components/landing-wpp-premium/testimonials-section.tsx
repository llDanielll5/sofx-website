"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Pedro Benevides A.",
    role: "Presidente, CEMIC - Centro Médico de Implantes C.",
    content:
      "O WhatsBot Premium revolucionou nosso atendimento. Antes perdiamos muitos atendimentos por demora, agora respondemos instantaneamente e temos integração personalizada de nossos agendamentos, acelerando o atendimento em 80%.",
    rating: 5,
    avatar: "PB",
  },
  {
    name: "Gabrielli D. Araújo",
    role: "Dona, Gamer Hamburgueria",
    content:
      "Incrivel que consegui acelerar as vendas da minha empresa e vender melhor que na minha página pública no app de delivery brasileiro",
    rating: 5,
    avatar: "GA",
  },
  {
    name: "Julia Costa",
    role: "Gerente, Loja de Roupas",
    content:
      "Fantastico! Agora consigo atender todos os clientes mesmo fora do horario comercial. As vendas pelo WhatsApp aumentaram significativamente.",
    rating: 5,
    avatar: "JC",
  },
  {
    name: "Raimundo Janio A.",
    role: "Dono, Dourado Restaurante",
    content:
      "Eu era contra tecnologia, mas quando me apresentaram a automação Whatsapp, fiquei impressionado com a facilidade ao atender nossos clientes e vender as refeições em nosso restaurante. Estou muito feliz.",
    rating: 5,
    avatar: "RJ",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="depoimentos" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

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
            Avaliacoes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 500 empresas ja transformaram seu atendimento com o WhatsBot
            Premium
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative p-8 md:p-12 rounded-3xl bg-card border border-border"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60"
        >
          {["+10", "+1M", "99.9%", "24/7"].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                {stat}
              </p>
              <p className="text-sm text-muted-foreground">
                {index === 0 && "Empresas"}
                {index === 1 && "Mensagens/mes"}
                {index === 2 && "Uptime"}
                {index === 3 && "Suporte"}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
