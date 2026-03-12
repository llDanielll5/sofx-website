"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Sparkles, Shield, Headphones } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description:
      "Nosso bot utiliza IA avançada para entender e responder seus clientes de forma natural e eficiente.",
  },
  {
    icon: Sparkles,
    title: "Personalização Total",
    description:
      "Configure fluxos de conversa, mensagens e respostas de acordo com as necessidades do seu negocio.",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description:
      "Seus dados e conversas estão protegidos com criptografia de ponta a ponta.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description:
      "Nossa equipe esta sempre disponível para ajudar você a tirar o máximo do WhatsBot.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Sobre o WhatsBot Premium
            </span>

            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Saiba como o WhatsBot Premium pode{" "}
              <span className="text-primary">
                transformar seus atendimentos
              </span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              O WhatsBot Premium é a solução completa para empresas que desejam
              escalar seu atendimento sem perder a qualidade. Automatize
              respostas, capture leads e converta mais vendas, tudo de forma
              inteligente e personalizada.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />

              {/* Área do celular */}
              <div className="relative aspect-[9/18]">
                {/* Fundo da tela com wallpaper */}
                <div className="absolute inset-[6.2%] overflow-hidden rounded-[2.5rem] bg-black">
                  <Image
                    src="/images/whatsapp/wallpaper-dark.png"
                    alt="Fundo de conversa estilo WhatsApp"
                    fill
                    className="object-cover opacity-30"
                    priority
                  />

                  <div className="absolute inset-0 bg-black/35" />

                  {/* Header fake do WhatsApp */}
                  <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#202c33]/95 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#2568d3]">
                        SOFX
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          SOFX - Soluções Digitais
                        </p>
                        <p className="text-xs text-white/60">online</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-white/70">
                      <div className="h-5 w-5 rounded-full border border-white/40" />
                      <div className="h-5 w-5 rounded-full border border-white/40" />
                      <div className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_6px_0_0_rgba(255,255,255,0.7),0_-6px_0_0_rgba(255,255,255,0.7)]" />
                    </div>
                  </div>

                  {/* Conversa */}
                  <div className="absolute inset-x-0 bottom-0 top-[72px] z-20 flex flex-col justify-start gap-4 px-4 py-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                        C
                      </div>

                      <div className="max-w-[78%] rounded-2xl rounded-tl-none bg-[#202c33] px-4 py-3 shadow-lg">
                        <p className="text-sm text-white">
                          Olá! Gostaria de saber mais sobre os produtos.
                        </p>
                        <span className="mt-1 block text-xs text-white/50">
                          10:30
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 }}
                      className="flex items-start justify-end gap-3"
                    >
                      <div className="max-w-[78%] rounded-2xl rounded-tr-none bg-[#25D366] px-4 py-3 shadow-lg">
                        <p className="text-sm text-[#0b141a]">
                          Olá! Seja bem-vindo! Ficarei feliz em ajudar. Qual
                          produto você gostaria de conhecer?
                        </p>
                        <span className="mt-1 block text-xs text-[#0b141a]/70">
                          10:30
                        </span>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
                        <Bot className="h-4 w-4 text-[#0b141a]" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                        C
                      </div>

                      <div className="rounded-2xl rounded-tl-none bg-[#202c33] px-4 py-3 shadow-lg">
                        <div className="flex gap-1">
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: 0,
                            }}
                            className="h-2 w-2 rounded-full bg-white/50"
                          />
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: 0.2,
                            }}
                            className="h-2 w-2 rounded-full bg-white/50"
                          />
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: 0.4,
                            }}
                            className="h-2 w-2 rounded-full bg-white/50"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Moldura do celular */}
                <Image
                  src="/images/whatsapp/phone-mockup.png"
                  alt="Mockup de celular"
                  fill
                  className="pointer-events-none z-30 object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
