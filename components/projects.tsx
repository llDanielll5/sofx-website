"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ALL_PROJECTS } from "@/src/_mock/projects";

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof ALL_PROJECTS)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const scrollToIndex = useCallback((index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / ALL_PROJECTS.length;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  }, []);

  const handlePrev = () => {
    const newIndex =
      activeIndex > 0 ? activeIndex - 1 : ALL_PROJECTS.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      activeIndex < ALL_PROJECTS.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  const openModal = (project: (typeof ALL_PROJECTS)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev < selectedProject.images.length - 1 ? prev + 1 : 0,
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : selectedProject.images.length - 1,
      );
    }
  };

  // add automatic scrolling every 5 seconds
  useEffect(() => {
    // reset carousel to first project when it reaches the end
    if (activeIndex === ALL_PROJECTS.length - 1) {
      scrollToIndex(0);
    }
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 text-[#00ff88] text-sm font-medium mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-poppins)] mb-6">
            <span className="text-[#f0f0f5]">Projetos </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#6366f1]">
              desenvolvidos
            </span>
          </h2>
          <p className="text-lg text-[#a0a0b0] leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="border-[#1a1a2e] bg-[#12121a] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 text-[#f0f0f5]"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="border-[#1a1a2e] bg-[#12121a] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 text-[#f0f0f5]"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Projects Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ALL_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`flex-shrink-0 w-[350px] md:w-[400px] snap-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#12121a] to-[#0a0a12] border border-[#1a1a2e] rounded-2xl" />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15 0%, transparent 50%)`,
                  }}
                />

                {/* Content */}
                <div className="relative p-6">
                  {/* Project Preview */}
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-[#1a1a2e]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#050508]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#00d4ff] font-medium">
                        Ver Detalhes
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-[#1a1a2e] text-[#a0a0b0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-2 font-[var(--font-poppins)] group-hover:text-[#00d4ff] transition-colors"
                    style={{ color: "#f0f0f5" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#a0a0b0] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Link */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#6366f1]"
                    style={{ color: project.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visitar Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {ALL_PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#00d4ff]"
                  : "bg-[#1a1a2e] hover:bg-[#00d4ff]/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050508]/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0a0a12] rounded-2xl border border-[#1a1a2e] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#12121a] text-[#f0f0f5] hover:bg-[#00d4ff]/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Carousel */}
            <div className="relative h-64 md:h-96 bg-[#12121a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-center"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#050508]/80 text-[#f0f0f5] hover:bg-[#00d4ff]/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#050508]/80 text-[#f0f0f5] hover:bg-[#00d4ff]/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? "w-6 bg-[#00d4ff]"
                        : "bg-[#f0f0f5]/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full border"
                    style={{
                      borderColor: `${selectedProject.color}50`,
                      color: selectedProject.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#f0f0f5] mb-4 font-[var(--font-poppins)]">
                {selectedProject.title}
              </h3>

              <p className="text-[#a0a0b0] mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <Button
                asChild
                className="bg-[#00d4ff] text-[#050508] hover:bg-[#00d4ff]/90"
              >
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar Projeto
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
