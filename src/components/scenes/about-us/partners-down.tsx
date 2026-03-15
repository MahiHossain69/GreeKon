"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const statItems = [
  {
    value: "98%",
    label: "INTERNATIONAL CLIENT BASE",
    image: "/home/states/international-client.webp",
  },
  {
    value: "230+",
    label: "CLIENTS ACROSS THE WORLD",
    image: "/home/states/client.webp",
  },
  {
    value: "$1.4B+",
    label: "GLOBAL CLIENTELE",
    image: "/home/states/global.webp",
  },
  {
    value: "856+",
    label: "WORLDWIDE CLIENT NETWORK",
    image: "/home/states/worldwide.webp",
  },
];

const StatCapsule = ({ item }: { item: (typeof statItems)[0] }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="flex items-center bg-white rounded-full pl-3 pr-10 py-3 min-w-max shadow-[0_15px_40px_rgba(0,0,0,0.08)] mx-6 border border-[#1A2E26]/5 cursor-pointer group transition-all duration-300"
  >
    {/* Image container - slightly smaller and more refined */}
    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-5 shadow-sm border-2 border-white">
      <Image
        src={item.image}
        alt={item.label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-115"
      />
    </div>
    
    <div className="flex items-center gap-5">
      {/* Value - Tanker font, slightly more compact tracking */}
      <span className="font-tanker text-[#1A2E26] text-5xl md:text-6xl tracking-tight leading-none">
        {item.value}
      </span>
      
      {/* Label - Inter font, bold, more breathing room, no max-width to prevent overflow issues */}
      <span className="font-inter font-bold text-[#1A2E26] text-[10px] md:text-xs leading-[1.2] uppercase tracking-[0.05em] whitespace-nowrap">
        {item.label}
      </span>
    </div>
  </motion.div>
);


const PartnersDownSection = () => {
  // Use more items for a smoother loop
  const repeatedItems = [
    ...statItems,
    ...statItems,
    ...statItems,
    ...statItems,
  ];

  return (
    <section className="relative h-[650px] md:h-[750px] lg:h-[850px] w-full overflow-hidden group/section">
      {/* Background Image with Parallax-like effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/about-us/partners-down/partners-down-bg.webp"
          alt="Office background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient overlay to enhance readability and depth */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/10" />
      </motion.div>

      {/* Ticker Container - positioned at the bottom with better spacing */}
      <div className="absolute bottom-20 left-0 w-full z-10 overflow-hidden py-5">
        <motion.div
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            duration: 45, // Even slower for elegance
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
          style={{ width: "fit-content" }}
        >
          {repeatedItems.map((item, index) => (
            <StatCapsule key={index} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Edge fade for the marquee - slightly wider for smoother transition */}
      <div className="absolute inset-y-0 left-0 w-48 bg-linear-to-r from-black/5 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-black/5 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default PartnersDownSection;
