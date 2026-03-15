import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/hero/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="font-sacramento text-[#BFFF07] text-4xl md:text-5xl lg:text-6xl block mb-2">
          Contact
        </span>
        <h1 className="font-tanker text-white text-5xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tighter">
          LETS TALK
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
