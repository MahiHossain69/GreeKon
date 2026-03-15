"use client";

import React from "react";
import Image from "next/image";
import RippleButton from "@/components/shared/ripple-button";
import { motion } from "framer-motion";

const LogoItem1 = () => (
  <div className="flex items-center gap-2 group cursor-default">
    <div className="flex flex-col leading-[1.1]">
      <span className="font-tanker text-white text-lg tracking-tight">
        Logo
      </span>
    </div>
  </div>
);

const LogoItem2 = () => (
  <div className="group cursor-default">
    <span className="font-tanker text-white text-4xl tracking-tighter">
      Logo
    </span>
  </div>
);

const LogoItem3 = () => (
  <div className="flex items-center gap-2 group cursor-default">
    <span className="font-tanker text-white text-3xl">Logo</span>
  </div>
);

const LogoItem4 = () => (
  <div className="flex items-center gap-2 group cursor-default">
    <span className="font-tanker text-white text-3xl">Logo</span>
  </div>
);

const LogoItem5 = () => (
  <div className="flex items-center gap-1 group cursor-default leading-none">
    <span className="font-tanker text-white text-2xl uppercase">Logo</span>
  </div>
);

const LogoItem6 = () => (
  <div className="group cursor-default">
    <span className="font-tanker text-white text-4xl tracking-tight uppercase">
      Logo
    </span>
  </div>
);

const LogoItem7 = () => (
  <div className="flex items-center gap-2 group cursor-default">
    <div className="flex flex-col leading-[1.1]">
      <span className="font-tanker text-white text-lg tracking-tight">
        Logo
      </span>
    </div>
  </div>
);

const LearnMoreSection = () => {
  return (
    <section className="bg-[#061611] py-16 md:py-24 lg:py-32 px-4 md:px-8 flex flex-col items-center overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-[1400px] w-full flex flex-col items-center text-center">
        {/* Headline with exact design match */}
        <h2 className="font-tanker text-white text-[10vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[6vw] xl:text-[80px] leading-none md:leading-[0.95] tracking-tight uppercase flex flex-col items-center">
          {/* Line 1 */}
          <span className="flex items-center justify-center flex-wrap gap-x-2 md:gap-x-4">
            UNCOVER
            <span className="flex flex-col items-start text-left  text-[#BFFF07] px-1.5 py-0.5 md:px-2 md:py-1 rounded-[2px]  transform -translate-y-1">
              <span className="text-[20px] md:text-[35px] font-bold leading-none tracking-tight">
                - WELCOME
              </span>
              <span className="text-[20px] md:text-[35px] font-bold leading-none tracking-tight">
                TO OUR SITE
              </span>
            </span>
            BEST SOLUTIONS FOR UNIQUE TOOLS.
          </span>

          {/* Line 2 */}
          <span className="flex items-center justify-center flex-wrap gap-x-3 md:gap-x-5">
            A PRODUCTIVITY WORK
            <span className="relative w-[1.2em] h-[1.2em] md:w-[62px] md:h-[56px] inline-flex items-center justify-center">
              <div className="absolute inset-0  overflow-hidden">
                <Image
                  src="/home/learn-more/male.webp"
                  alt="Male productivity"
                  fill
                  className="object-cover scale-110"
                />
              </div>
            </span>
            PLACE WORKPLACE
          </span>

          {/* Line 3 */}
          <span className="flex items-center justify-center flex-wrap gap-x-3 md:gap-x-5">
            PRODUCTIVITY
            <span className="relative w-[93px] h-[65px] inline-flex items-center justify-center">
              <div className="absolute inset-0  overflow-hidden">
                <Image
                  src="/home/learn-more/female.webp"
                  alt="Female productivity"
                  fill
                  className="object-cover"
                />
              </div>
            </span>
            RALATES TO THE AMOUNT OF
          </span>

          {/* Line 4 */}
          <span>WORK THAT RELATES TO THE AMOUNT.</span>
        </h2>

        {/* Action Button */}
        <div className="mt-12 md:mt-20">
          <RippleButton
            className="bg-[#BFFF07] text-black font-tanker text-lg md:text-xl lg:text-2xl px-12 md:px-16 py-4 md:py-5 rounded-full uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_10px_40px_rgba(191,255,7,0.2)]"
            rippleColor="orange"
          >
            Learn more about us
          </RippleButton>
        </div>
      </div>

      {/* Logo Row with Infinite Marquee */}
      <div className="mt-28 md:mt-40 w-full overflow-hidden opacity-40">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* First set of logos */}
          <div className="flex items-center gap-16 md:gap-24 px-8">
            <LogoItem1 />
            <LogoItem2 />
            <LogoItem3 />
            <LogoItem4 />
            <LogoItem5 />
            <LogoItem6 />
            <LogoItem7 />
          </div>
          {/* Second set for seamless loop */}
          <div className="flex items-center gap-16 md:gap-24 px-8">
            <LogoItem1 />
            <LogoItem2 />
            <LogoItem3 />
            <LogoItem4 />
            <LogoItem5 />
            <LogoItem6 />
            <LogoItem7 />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearnMoreSection;
