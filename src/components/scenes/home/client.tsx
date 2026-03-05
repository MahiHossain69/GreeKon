"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  SliderArrow,
  FlowerMask,
  ArrowIconLeft,
  ArrowIconRight,
} from "@/components/shared/svgs";
import { Button } from "@/components/ui/button";

const cities = [
  {
    id: 1,
    name: "NEW YORK",
    subText: "PRODUCTIVITY INCREASE AVG",
    description:
      "WorlD place productivity ralates to the of work that certain period.",
    image: "/home/why-us/whyus-1.webp",
    teamCount: "40+",
    welcomeText: "- WELCOME TO NOGESCRIBE, WHERE TOO CREATIVITY.",
  },
  {
    id: 2,
    name: "LONDON",
    subText: "CREATIVE HUB EXCELLENCE",
    description:
      "Design excellence meets strategic innovation in the heart of the city.",
    image: "/home/why-us/whyus-2.webp",
    teamCount: "25+",
    welcomeText: "- DESIGNING THE FUTURE IN THE HEART OF LONDON.",
  },
  {
    id: 3,
    name: "TOKYO",
    subText: "TECH INNOVATION LEAD",
    description:
      "Pioneering the next generation of digital solutions and interfaces.",
    image: "/home/why-us/whyus-3.webp",
    teamCount: "60+",
    welcomeText: "- WHERE TECHNOLOGY MEETS ARTISTIC PRECISION.",
  },
];

const ClientSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cities.length) % cities.length);
  };

  const currentCity = cities[currentIndex];

  return (
    <section className="relative bg-[#CAFF33] py-24 px-4 md:px-8 overflow-hidden min-h-[700px] flex items-center">
      <FlowerMask />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="absolute top-0 left-0 md:relative md:mb-12">
          <p className="font-sacramento text-6xl text-[#2F3E2F] mb-0 ">
            Top cities
          </p>
          <h2 className="font-tanker text-5xl md:text-7xl lg:text-8xl text-[#2F3E2F] leading-[0.9] mt-[-10px]">
            GREEKON <br /> EXPANDS TO 04 <br /> CITIES
          </h2>
        </div>

        {/* Central Content */}
        <div className="relative mt-20 md:mt-0 flex flex-col md:flex-row items-center justify-center">
          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-0 z-30 pointer-events-none">
            <Button
              onClick={prevSlide}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center hover:bg-[#2F3E2F] group transition-colors pointer-events-auto bg-transparent group"
            >
              <ArrowIconLeft
                direction="left"
                className="w-6 h-6 text-[#2F3E2F] group-hover:text-white"
              />
            </Button>
            <Button
              onClick={nextSlide}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center hover:bg-[#2F3E2F] group transition-colors pointer-events-auto bg-transparent group"
            >
              <ArrowIconRight
                direction="right"
                className="w-6 h-6 text-[#2F3E2F] group-hover:text-white"
              />
            </Button>
          </div>

          {/* Masked Image and Info Card */}
          <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-[80%] h-[80%] md:w-full md:h-full"
              >
                {/* Masked Image */}
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src={currentCity.image}
                    alt={currentCity.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Info Card - Overlaid on image bottom-left */}
                <div className="absolute bottom-4 left-[-10%] md:left-0 bg-[#162C21] text-white p-6 md:p-8 w-[250px] md:w-[350px] z-20">
                  <h3 className="font-tanker text-4xl md:text-5xl mb-4 tracking-wider">
                    {currentCity.name}
                  </h3>
                  <p className="font-tanker text-sm md:text-base text-gray-300 uppercase mb-4">
                    {currentCity.subText}
                  </p>
                  <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed">
                    {currentCity.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Left Stats */}
        <div className="absolute left-8 bottom-12 hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-tanker text-7xl text-[#2F3E2F]">
                {currentCity.teamCount}
              </p>
              <p className="font-tanker text-xs text-[#2F3E2F]/60 uppercase tracking-widest mt-2">
                TEAM MEMBERS
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Stats */}
        <div className="absolute right-0 top-1/4 hidden lg:block text-right">
          <p className="font-tanker text-8xl text-[#2F3E2F]">98%</p>
          <p className="font-tanker text-xs text-[#2F3E2F]/60 uppercase tracking-widest mt-2">
            CLIENTS ACROSS THE WORLD
          </p>
        </div>

        {/* Top-Right Office Badge Overlay */}
        <div className="absolute top-0 right-0 hidden md:block z-30">
          <div className="relative w-48 h-48 lg:w-48 lg:h-48 flex items-center">
            {/* Wavy Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/home/why-us/whyus-1.webp"
                alt="Office Space"
                fill
                className="object-contain"
              />
            </div>
            {/* Pill Badge */}
            <div className="absolute left-[-20%] bg-[#0A1A14] text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl z-40">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CAFF33]"></span>
              <span className="font-inter font-semibold tracking-tight text-lg">
                Office Space
              </span>
            </div>
          </div>
        </div>

        {/* Bottom-Right Welcome Text */}
        <div className="absolute bottom-12 right-0 hidden md:block max-w-[200px] text-right">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="font-tanker text-[10px] md:text-xs text-[#2F3E2F]/70 leading-normal uppercase"
            >
              {currentCity.welcomeText}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
