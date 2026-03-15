"use client";

import React from "react";
import {
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
} from "../../shared/animated-video-on-scroll";
import Image from "next/image";

const MemberSection = () => {
  return (
    <section className="bg-white">
      <ContainerScroll className="h-auto py-4">
        <ContainerSticky className="flex flex-col items-center justify-center bg-white px-4 md:px-6">
          <ContainerInset className="relative w-full max-w-7xl aspect-9/12 md:aspect-video rounded-2xl md:rounded-3xl group overflow-hidden">
            <Image
              src="/about-us/member/member.avif"
              alt="Team members"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Badge overlay */}
            <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-5 md:px-10 py-2.5 md:py-4 rounded-xl md:rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="font-tanker text-[#CAFF33] text-xl md:text-4xl lg:text-5xl tracking-tight uppercase whitespace-nowrap">
                  030+ MEMBERS ONSITE
                </h3>
              </div>
            </div>
          </ContainerInset>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
};

export default MemberSection;
