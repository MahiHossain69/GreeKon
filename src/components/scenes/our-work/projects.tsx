import React from "react";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

const projectItems: iCardItem[] = [
  {
    title: "Brand Guidelines",
    description: "Visual identity and brand strategy for modern agencies",
    tag: "Creative",
    src: "/our-work/project-1.jpg",
    link: "#",
    color: "#0a0a0a",
    textColor: "white",
  },
  {
    title: "Project Atmosphere",
    description: "Immersive digital experiences with 3D elements",
    tag: "Digital",
    src: "/our-work/project-2.jpg",
    link: "#",
    color: "#0a0a0a",
    textColor: "white",
  },
  {
    title: "Visual Identity",
    description: "Crafting unique visual stories for global brands",
    tag: "Design",
    src: "/our-work/project-3.jpg",
    link: "#",
    color: "#0a0a0a",
    textColor: "white",
  },
  {
    title: "Strategic Growth",
    description: "Data-driven marketing and user acquisition",
    tag: "Strategy",
    src: "/our-work/project-4.jpg",
    link: "#",
    color: "#0a0a0a",
    textColor: "white",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-white py-32 overflow-visible">
      <div className="max-w-[1920px] mx-auto px-4 mb-20 text-center">
        <span className="font-sacramento text-[#BFFF07] text-5xl block mb-4">
          Latest Work
        </span>
        <h2 className="font-tanker text-black text-6xl md:text-8xl lg:text-[120px] uppercase leading-none">
          Selected Projects
        </h2>
      </div>
      <CardsParallax items={projectItems} />
    </section>
  );
};

export default ProjectsSection;
