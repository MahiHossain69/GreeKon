import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-200 overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/hero/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <span className="font-sacramento text-[#BFFF07] text-6xl md:text-8xl lg:text-9xl mb-[-20px] md:mb-[-40px] block select-none">
          About Us
        </span>
        <h1 className="font-tanker text-white text-5xl md:text-8xl lg:text-[110px] leading-[0.9] tracking-tight uppercase">
          WHERE VISION MEETS <br className="hidden md:block" /> CREATIVE
          BRILLIANCE
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
