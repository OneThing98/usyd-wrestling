"use client";

import { useState } from "react";
import Link from "next/link";
import { mockHeroSlides } from "@/lib/mock-data";

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = mockHeroSlides;

  function goToSlide(index: number) {
    setCurrentSlide(index);
  }

  function nextSlide() {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent z-10" />

      <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
        <span className="text-white/20 font-display text-6xl uppercase">
          Slide Image
        </span>
      </div>

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase">
          {slide.title}
        </h1>
        {slide.subtitle && (
          <p className="mt-3 text-xl md:text-2xl text-gray-200 max-w-2xl">
            {slide.subtitle}
          </p>
        )}
        {slide.ctaText && slide.ctaLink && (
          <div className="mt-6">
            <Link
              href={slide.ctaLink}
              className="inline-block bg-secondary text-dark font-display font-bold uppercase px-8 py-3 text-sm tracking-wider hover:bg-secondary/90 transition-colors"
            >
              {slide.ctaText}
            </Link>
          </div>
        )}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-dark/50 hover:bg-dark/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-dark/50 hover:bg-dark/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === currentSlide ? "bg-secondary" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
