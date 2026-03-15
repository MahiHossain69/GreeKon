"use client";
import { FC, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Types
interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

interface iCardProps extends iCardItem {
  i: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}

// Components
const Card: FC<iCardProps> = ({
  title,
  description,
  tag,
  color,
  textColor,
  i,
  src,
  link,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Parallax for the internal image
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  // Stacking scale effect - only scales down when the NEXT card is coming
  const scale = useTransform(progress, range, [1, targetScale]);

  // Shadow overlay to darken as it goes behind
  const opacity = useTransform(progress, range, [1, 0.6]);

  return (
    <div
      ref={container}
      className=" flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(${i * 25}px)`, // Slight offset for stacking depth
        }}
        className="relative flex flex-col h-[75vh] md:h-[90vh] w-[95vw] max-w-[1800px] items-center justify-center mx-auto overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-[40px]"
      >
        {/* Background Image Container */}
        <motion.div style={{ opacity }} className="absolute inset-0 z-0">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={src}
              alt={title}
              fill
              priority={i === 0}
            />
          </motion.div>
          {/* Subtle vignette/gradient for depth */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" />
        </motion.div>

        {/* Centered Interaction - Clean Reference Match */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <motion.a
            href={link}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#BFFF07",
              color: "#000",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 text-white font-inter font-medium px-8 py-4 flex items-center gap-3 shadow-2xl transition-all duration-300 rounded-full"
          >
            <span className="text-sm uppercase tracking-[0.2em] font-bold">
              See Project
            </span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </motion.a>
        </div>

        {/* Top-Left Indicator */}
        <div className="absolute top-12 left-12 z-20 flex items-center gap-4">
          <div className="h-px w-8 bg-white/40" />
          <span className="font-tanker text-white/50 text-xl tracking-[0.3em]">
            0{i + 1}
          </span>
        </div>

        {/* Bottom-Left Title Overlay */}
        <div className="absolute bottom-12 left-12 z-20">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-[#BFFF07] font-sacramento text-4xl block mb-2">
              {tag}
            </span>
            <h3 className="font-tanker text-white text-4xl md:text-6xl uppercase leading-none tracking-tighter">
              {title}
            </h3>
          </motion.div>
        </div>

        {/* Corner Detail (Visual Flair) */}
        <div className="absolute top-12 right-12 z-20 opacity-30">
          <div className="w-12 h-12 border-t border-r border-white/50" />
        </div>
      </motion.div>
    </div>
  );
};

interface iCardSlideProps {
  items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative py-1">
      {items.map((project, i) => {
        // Each card scales down slightly when the NEXT cards come
        // Range should start earlier for earlier cards
        const targetScale = 1 - (items.length - i) * 0.04;
        const startRange = i * (1 / items.length);

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[startRange, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export { CardsParallax, type iCardItem };
