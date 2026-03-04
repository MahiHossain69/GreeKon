"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "BRAND GUIDELINES",
    category: "Branding, Identity",
    image: "/home/projects/p1.png",
  },
  {
    id: 2,
    title: "MERAK",
    category: "Identity, Product Design",
    image: "/home/projects/p2.png",
  },
  {
    id: 3,
    title: "CACDUS",
    category: "Photography, Nature",
    image: "/home/projects/p3.png",
  },
  {
    id: 4,
    title: "SQUADE",
    category: "Web Design, Brand",
    image: "/home/projects/p4.png",
  },
  {
    id: 5,
    title: "EVENINGZO",
    category: "product ui, Web Design, 3D Design",
    image: "/home/projects/p4.png",
  },
  {
    id: 6,
    title: "BLUSTARE",
    category: "Brand Identify, Web Design, product ui",
    image: "/home/projects/p1.png",
  },
  {
    id: 7,
    title: "FALKIN",
    category: "Brand Identify, Web Design",
    image: "/home/projects/p3.png",
  },
  {
    id: 8,
    title: "QUIRK",
    category: "Web Design, product ui",
    image: "/home/projects/p2.png",
  },
];

const ProjectSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ctx = gsap.context(() => {
      // Horizontal scroll on desktop
      const totalWidth = section.scrollWidth;
      const viewportWidth = window.innerWidth;
      const xDist = -(totalWidth - viewportWidth);

      gsap.to(section, {
        x: xDist,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white overflow-hidden py-10 md:py-0">
      <div ref={triggerRef} className="flex flex-col">
        {/* Header Section */}
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="font-tanker text-[#1A2E26] text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] leading-[0.85] uppercase">
            PRESENTING OUR <br /> CREATIVE PROJECT
          </h2>
          <div className="max-w-xs flex flex-col items-start md:items-end gap-6">
            <p className="text-[#1A2E26]/80 text-sm md:text-base leading-relaxed md:text-right">
              A productivity work place Workplace productivity relates to the
              amount of work
            </p>
            <Button className="group relative bg-[#1A2E26] flex items-center justify-center rounded-full px-10 py-4 overflow-hidden transition-all duration-300">
              <span className="relative z-10 font-tanker text-white text-lg uppercase transition-colors duration-300 group-hover:text-black">
                VIEW ALL PROJECT
              </span>
              <div className="absolute inset-0 bg-[#BFFF07] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Button>
          </div>
        </div>

        {/* Projects Slider */}
        <div
          ref={sectionRef}
          className="relative flex flex-row gap-6 md:gap-10 px-4 md:px-10 pb-20 md:pb-32 w-max"
        >
          {projects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <div className="relative cursor-pointer w-[85vw] sm:w-[50vw] md:w-[42vw] lg:w-[32vw] xl:w-[28vw] shrink-0 flex flex-col gap-6 group">
                <div className="relative aspect-[4/3.2] rounded-[16px] md:rounded-[24px] overflow-hidden bg-[#F5F5F5] transition-shadow duration-500 group-hover:shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 pb-2">
                  <h3 className="font-tanker text-[#1A2E26] text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[#1A2E26]/60 text-xs md:text-sm font-medium tracking-wide">
                    {project.category}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
