import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurSiteSection = () => {
  return (
    <section className="bg-white py-20 lg:py-40 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <span className="font-tanker text-[#1A2E26] text-sm md:text-base tracking-[0.2em] mb-12 uppercase block">
          - WELCOME TO OUR SITE
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Image Area */}
          <div className="lg:col-span-5 flex mx-auto lg:mx-0 flex-col items-start">
            <div className="relative w-50 max-w-[450px] aspect-square group">
              {/* Image Container */}
              <div className="w-50 h-full relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/home/learn-more/male.webp"
                  alt="Professional working"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* HOME Button */}
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-20">
                <Link
                  href="/"
                  className="bg-[#0D2316] text-[#CAFF33] font-tanker text-xl px-10 py-5 rounded-full tracking-widest shadow-xl hover:bg-[#1A2E26] transition-colors block"
                >
                  HOME
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start pt-10 lg:pt-0">
            <h2 className="font-tanker text-[#1A2E26] text-4xl md:text-6xl leading-[0.95] tracking-tight mb-8 uppercase">
              UNCOVER BEST SOLUTIONS FOR UNIQUE TOOLS. A PRODUCTIVITY WORK PLACE
              WORLPLACE PRODUCTIVITY RALATES TO THE AMOUNT OF WORK THAT RELATES
              TO THE AMOUNT.
            </h2>

            <div className="max-w-2xl">
              <p className="font-inter text-[#1A2E26]/70 text-base md:text-base font-medium leading-relaxed">
                Workplace productivity refers to the amount of work completed
                within a specific period of time. It is a key measure of how
                efficiently tasks and goals are achieved in a professional
                setting. A productive workplace enables employees to maximize
                output while minimizing wasted time and effort. It involves
                effective time management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSiteSection;
