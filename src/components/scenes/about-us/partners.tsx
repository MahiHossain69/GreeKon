"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "JASPER MIKE COLE",
    role: "CEO, Flowbeam Systems",
    image: "/about-us/partners/JASPER MIKE COLE.avif",
    bgColor: "bg-[#1A2E26]",
  },
  {
    name: "EDDIE PETTERSON",
    role: "Thryve Wellness",
    image: "/about-us/partners/EDDIE PETTERSON.avif",
    bgColor: "bg-[#F4D160]",
  },
  {
    name: "RONAN ASHFORD",
    role: "Quantex Robotics",
    image: "/about-us/partners/RONAN ASHFORD.avif",
    bgColor: "bg-[#1A2E26]",
  },
  {
    name: "ELI KEVIN NAVARRO",
    role: "VerraLens Media",
    image: "/about-us/partners/ELI KEVIN NAVARRO.avif",
    bgColor: "bg-[#CAFF33]",
  },
  {
    name: "MICHALE SHERNOY",
    role: "VerraLens Media",
    image: "/about-us/partners/MICHALE SHERNOY.avif",
    bgColor: "bg-white",
  },
  {
    name: "JASPER MIKE COLE",
    role: "CEO, Flowbeam Systems",
    image: "/about-us/partners/JASPER MIKE COLE.avif",
    bgColor: "bg-[#1A2E26]",
  },
];

const PartnersSection = () => {
  return (
    <section className="bg-[#FBF9F1] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sacramento text-[#E8613C] text-4xl md:text-5xl lg:text-6xl mb-[-10px] relative z-10"
          >
            Partners
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-tanker text-[#1A2E26] text-4xl md:text-6xl lg:text-[70px] uppercase tracking-tight"
          >
            MEET THE TEAM
          </motion.h2>
        </div>

        {/* Team Grid/Row */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 overflow-x-auto pb-10 scrollbar-hide">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-w-[280px] lg:min-w-auto lg:w-1/6 group cursor-pointer"
            >
              {/* Image Container */}
              <div
                className={`relative aspect-square overflow-hidden mb-6 ${member.bgColor}`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>

              {/* Info */}
              <div className="space-y-1">
                <h4 className="font-tanker text-[#1A2E26] text-xl md:text-2xl leading-tight">
                  {member.name}
                </h4>
                <p className="font-inter text-[#1A2E26]/60 text-xs md:text-sm uppercase font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
