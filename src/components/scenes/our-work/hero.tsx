import React from "react";
import Image from "next/image";

const OurWorkHero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/hero/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <span className="font-sacramento text-[#BFFF07] text-6xl md:text-8xl lg:text-9xl mb-[-15px] md:mb-[-35px] block select-none">
          Projects
        </span>
        <h1 className="font-tanker text-white text-5xl md:text-8xl lg:text-[100px] leading-[0.9] tracking-tight uppercase">
          PROJECTS FOR BUSINESS <br className="hidden md:block" /> GROW BEYOND
          TIME
        </h1>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-20" />
    </section>
  );
};

export default OurWorkHero;
