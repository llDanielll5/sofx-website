"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern z-0" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-[120px] animate-pulse-neon" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[rgb(99, 102, 241)]/20 rounded-full blur-[120px] animate-pulse-neon" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff88]/10 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-[#00d4ff] font-medium">
              Inovação Digital
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold font-[var(--font-poppins)] leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#6366f1] to-[#ffffff] animate-gradient">
              transformamos suas ideias
            </span>
            <br />
            <span className="text-[#f0f0f5]">em </span>
            <span className="text-[#ffffff] ">SOLUÇÕES DIGITAIS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#a0a0b0] max-w-2xl mx-auto mb-10 leading-relaxed">
            Somos uma software house especializada em desenvolvimento de
            aplicativos, sistemas sob demanda, automação com IA e soluções
            tecnológicas inovadoras.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#ffffff] text-[#050508] hover:text-[#ffffff] hover:bg-[#6366f1]/90 font-semibold px-8 py-6 text-base group"
            >
              <Link href="#projetos">
                Ver Projetos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-[#f0f0f5] font-semibold px-8 py-6 text-base neon-border-purple"
            >
              <Link href="#contato">
                <Code2 className="mr-2 w-5 h-5" />
                Iniciar Projeto
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "7+", label: "Projetos Entregues" },
              { value: "100%", label: "Clientes Satisfeitos" },
              { value: "15+", label: "Tecnologias" },
              { value: "24/7", label: "Suporte" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#6366f1] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#a0a0b0]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-[#6366f1]/50 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-[#6366f1] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
