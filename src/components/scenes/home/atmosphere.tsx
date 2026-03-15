"use client";

import React from "react";
import InfiniteGallery from "@/components/shared/3d-gallery-photography";
import { CurveGridShape } from "@/components/shared/svgs";

const sampleImages = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
    alt: "Office Space 1",
  },
  {
    src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&auto=format&fit=crop&q=80",
    alt: "Office Space 2",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&auto=format&fit=crop&q=80",
    alt: "Meeting Room",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80",
    alt: "Collaborative Space",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop&q=80",
    alt: "Modern Tech Hub",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop&q=80",
    alt: "Creative Lounge",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    alt: "Team Meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=80",
    alt: "Innovation Hall",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop&q=80",
    alt: "Reception",
  },
  {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&auto=format&fit=crop&q=80",
    alt: "Workspace",
  },
];

const AtmosphereSection = () => {
  return (
    <section className="relative w-full h-[calc(100vh-120px)] bg-[#0A1A14] overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <CurveGridShape />
      </div>

      <div className="absolute inset-0 z-0 opacity-80">
        <InfiniteGallery
          images={sampleImages}
          speed={0.8}
          visibleCount={10}
          loop={false}
          className="h-full w-full"
          fadeSettings={{
            fadeIn: { start: 0.1, end: 0.3 },
            fadeOut: { start: 0.7, end: 0.9 },
          }}
          blurSettings={{
            blurIn: { start: 0.0, end: 0.2 },
            blurOut: { start: 0.8, end: 1.0 },
            maxBlur: 4.0,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 pointer-events-none">
        <h3 className="font-sacramento text-4xl md:text-6xl text-[#CAFF33] mb-[-10px] md:mb-[-15px]">
          Atmosphere
        </h3>
        <h2 className="font-tanker text-5xl md:text-8xl lg:text-9xl text-white leading-tight tracking-tight uppercase">
          UNPARALLELED VIBE
        </h2>
        <div className="max-w-2xl mx-auto mt-8 md:mt-12">
          <p className="text-gray-300 font-inter text-sm md:text-lg leading-relaxed opacity-80">
            Workplace productivity relates to the amount of work that certain{" "}
            <br className="hidden md:block" />
            period. a productivity work place
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none opacity-40">
        <p className="text-white font-inter text-[10px] uppercase tracking-[0.2em]">
          Scroll or drag to explore the space
        </p>
      </div>
    </section>
  );
};

export default AtmosphereSection;
