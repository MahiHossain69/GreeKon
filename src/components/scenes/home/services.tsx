"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  images: string[];
}

const services: ServiceItem[] = [
  {
    id: "branding",
    number: "01",
    title: "BRANDING",
    images: ["/home/services/branding-1.jpg", "/home/services/branding-2.jpg"],
  },
  {
    id: "website",
    number: "02",
    title: "WEBSITE",
    images: ["/home/services/website-1.jpg", "/home/services/website-2.jpg"],
  },
  {
    id: "marketing",
    number: "03",
    title: "MARKETING",
    images: [
      "/home/services/marketing-1.jpg",
      "/home/services/marketing-2.jpg",
    ],
  },
  {
    id: "design",
    number: "04",
    title: "DESIGN",
    images: ["/home/services/design-1.jpg", "/home/services/design-2.jpg"],
  },
];

const ServiceRow = ({ service }: { service: ServiceItem }) => {
  return (
    <Link
      href={`/services/${service.id}`}
      className="group relative w-full border-b border-[#1A2E26]/10 last:border-none block cursor-pointer transition-all duration-300"
    >
      {/* Lime Background on Hover */}
      <div className="absolute inset-0 bg-[#BFFF07] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center z-0" />

      <div className="relative z-10 flex items-center justify-between py-12 md:py-16 px-4 md:px-10 transition-colors duration-500">
        <div className="flex items-center gap-12 md:gap-32 w-full">
          <span className="font-tanker text-[#1A2E26] text-xl md:text-2xl opacity-100 min-w-[2ch]">
            {service.number}
          </span>
          <h2 className="font-tanker text-[#1A2E26] text-[45px] md:text-[90px] lg:text-[110px] leading-[0.8] tracking-tighter uppercase transition-opacity duration-300">
            {service.title}
          </h2>
        </div>

        <div className="shrink-0 relative z-20">
          <ArrowRight
            className="w-12 h-12 md:w-20 md:h-20 text-[#1A2E26] transition-all duration-500 group-hover:scale-110"
            strokeWidth={1.2}
          />
        </div>
      </div>

      {/* Floating Image Reveal - Perfect Positioning */}
      <div className="pointer-events-none absolute right-[10%] md:right-[20%] top-1/2 -translate-y-1/2 z-50 w-[200px] h-[150px] md:w-[450px] md:h-[320px] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)">
        <div className="relative w-full h-full rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white/10">
          <Image
            src={service.images[0]}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 200px, 450px"
          />
        </div>
      </div>
    </Link>
  );
};

function ServicesSection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 mb-10 md:mb-16">
        <span className="font-tanker text-[#1A2E26] text-xl md:text-4xl uppercase tracking-wider">
          (SERVICE)
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col w-full">
        {services.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
