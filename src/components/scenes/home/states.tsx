"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

const RollingNumber = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  const display = useTransform(springValue, (latest) => {
    const hasDecimal = value % 1 !== 0;
    const formatted = hasDecimal
      ? latest.toFixed(1)
      : Math.floor(latest).toLocaleString();
    return formatted + suffix;
  });

  return (
    <motion.span
      ref={ref}
      className="font-tanker text-[#1A2E26] text-4xl md:text-6xl min-w-[3ch] inline-block"
    >
      {display}
    </motion.span>
  );
};

const StarMask = ({ id, imageSrc }: { id: string; imageSrc: string }) => (
  <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
    <div
      className="w-full h-full overflow-hidden transition-transform duration-1000 group-hover:rotate-45"
      style={{ clipPath: `url(#star-mask-${id})` }}
    >
      <Image
        src={imageSrc}
        alt="Stat"
        width={80}
        height={80}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  </div>
);

const StatCard = ({ id, value, suffix, label, imageSrc }: any) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="group bg-white rounded-full px-6 py-4 md:px-10 md:py-6 flex items-center gap-6 md:gap-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-[550px]"
  >
    <StarMask id={id} imageSrc={imageSrc} />
    <div className="flex items-center justify-between grow gap-4">
      <RollingNumber value={value} suffix={suffix} />
      <span className="font-tanker text-[#1A2E26] text-sm md:text-base leading-tight uppercase max-w-[150px]">
        {label}
      </span>
    </div>
  </motion.div>
);

const StatesSection = () => {
  const stats = [
    {
      id: "1",
      value: 230,
      suffix: "+",
      label: "CLIENTS ACROSS THE WORLD",
      imageSrc: "/home/states/client.webp",
    },
    {
      id: "2",
      value: 1.4,
      suffix: "B+",
      label: "GLOBAL CLIENTELE",
      imageSrc: "/home/states/global.webp",
      isFloat: true,
    },
    {
      id: "3",
      value: 856,
      suffix: "+",
      label: "WORLDWIDE CLIENT NETWORK",
      imageSrc: "/home/states/worldwide.webp",
    },
    {
      id: "4",
      value: 28,
      suffix: "%",
      label: "INTERNATIONAL CLIENT BASE",
      imageSrc: "/home/states/international-client.webp",
    },
  ];

  return (
    <section className="bg-[#BFFF07] overflow-hidden py-20 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-4">
          <span className="font-sacramento text-[#ff8400] text-4xl md:text-6xl -mb-4">
            States
          </span>
          <h2 className="font-tanker text-[#1A2E26] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] uppercase">
            OUR ALL YEARS <br /> OF NUMBERS
          </h2>
          <p className="font-inter text-black text-base md:text-lg max-w-md leading-relaxed mt-4">
            Workplace productivity relates to the amount of work that certain
            period, a productivity work place.
          </p>
        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-6 md:gap-8 lg:items-end">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              id={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              imageSrc={stat.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesSection;
