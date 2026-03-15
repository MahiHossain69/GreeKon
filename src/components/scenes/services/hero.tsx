"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax & Overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/home/hero/hero.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-sacramento text-[#BFFF07] text-4xl md:text-6xl block mb-2 md:mb-4">
            Pricing Plan
          </span>
          <h1 className="font-tanker text-white text-4xl md:text-7xl lg:text-[100px] uppercase leading-[0.9] tracking-tight">
            JUST ONE EASY PLAN <br className="hidden md:block" />
            THAT FITS YOUR NEEDS
          </h1>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-5" />
    </section>
  );
};

export default ServicesHero;
