"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyWe = () => {
  const cards = [
    {
      id: "01",
      title: "CREATIVE EXCELLENCE",
      description:
        "Focus on cutting-edge design, user-centric aesthetics, and innovative ideas that capture attention and deliver impact.",
      className: "bg-white text-black self-end lg:mb-20",
      delay: 0.2,
      position: "lg:absolute lg:top-1/4 lg:right-10",
    },
    {
      id: "02",
      title: "TECHNICAL EXPERTISE",
      description:
        "Highlight your ability to implement advanced technology, seamless functionality, and scalability.",
      className:
        "bg-black/40 backdrop-blur-md text-white border border-white/10",
      delay: 0.4,
      position: "lg:absolute lg:bottom-1/4 lg:left-10",
    },
    {
      id: "03",
      title: "STRATEGIC FOCUS",
      description:
        "Emphasize your ability to create data-driven strategies that align design and technology with client goals.",
      className:
        "bg-black/40 backdrop-blur-md text-white border border-white/10",
      delay: 0.6,
      position: "lg:absolute lg:bottom-5 lg:right-1/4",
    },
  ];

  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden flex flex-col items-center bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: "url('/about-us/why-we/why-we-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Header Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sacramento text-[#CAFF33] text-5xl md:text-7xl mb-[-20px] relative z-10"
          >
            Why We?
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-tanker text-white text-5xl md:text-8xl lg:text-[100px] leading-none mb-8"
          >
            THREE PILLARS OF <br /> SUCCESS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-inter text-white/70 max-w-3xl mx-auto text-sm md:text-base leading-relaxed"
          >
            At the core of our approach are three key areas of expertise that
            drive impactful results. Explore how our strategy, creativity, and
            technology work together to fuel your growth.
          </motion.p>
        </div>

        {/* Interactive Graphic & Cards Area */}
        <div className="relative w-full max-w-6xl min-h-[600px] flex flex-col lg:block items-center justify-center">
          {/* Central Cube Graphic */}
          <div className="flex justify-center items-center mb-10 lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 border-2 border-[#CAFF33]/30 rounded-full blur-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Simulated 3D Cube / Hexagon using SVGs */}
                <Image
                  src="/about-us/why-we/cube.webp"
                  alt="Cube"
                  fill
                  className="w-full h-full drop-shadow-[0_0_15px_rgba(202,255,51,0.3)]"
                />
              </div>
            </motion.div>
          </div>

          {/* Cards */}
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: index === 1 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: card.delay }}
              className={`p-8 rounded-xl max-w-sm text-left shadow-2xl z-20 mb-8 lg:mb-0 ${card.className} ${card.position}`}
            >
              <h4 className="font-tanker text-xl md:text-2xl mb-4 tracking-wider">
                {card.title}
              </h4>
              <p className="font-inter text-sm md:text-base opacity-90 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
