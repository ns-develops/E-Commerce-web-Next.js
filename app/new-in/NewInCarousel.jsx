"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import "./NewInCarousel.css"; 

export default function NewInCarousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${curr === index ? "active" : "inactive"}`}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="carousel-navigation">
        <button onClick={prev} className="carousel-nav-button">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="carousel-nav-button">
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`carousel-dot ${curr === i ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
