"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon } from "@/components/shared/svgs";

const feedbacks = [
  {
    id: 1,
    text: "OUTSTANDING TEAM! THEIR UI/UX DESIGN COMPLETELY TRANSFORMED OUR APP. IT'S NOT ONLY BEAUTIFUL BUT INCREDIBLY USER-FRIENDLY.\"",
    name: "ANDREW SMITH",
    role: "Shioun co.",
    image: "/home/feedback/ANDREW SMITH.webp",
    rating: 4,
  },
  {
    id: 2,
    text: 'THE CREATIVITY AND ATTENTION TO DETAIL ARE UNMATCHED. THEY DELIVERED A PRODUCT THAT FAR EXCEEDED OUR EXPECTATIONS. HIGHLY RECOMMENDED!"',
    name: "BILLIE TYSON",
    role: "favian co.",
    image: "/home/feedback/BILLIE TYSON.webp",
    rating: 5,
  },
  {
    id: 3,
    text: 'A TRULY PROFESSIONAL EXPERIENCE FROM START TO FINISH. THEIR ABILITY TO CAPTURE OUR BRAND VISION WAS REMARKABLE. WE ARE THRILLED!"',
    name: "ALECAI JONATHON",
    role: "Visual Designer at Xlyo",
    image: "/home/feedback/ALECAI JONATHON.webp",
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </div>
  );
};

const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentFeedback = feedbacks[currentIndex];

  return (
    <section className="py-20 px-4 md:px-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h3 className="font-sacramento text-4xl md:text-5xl text-[#E86B4D] mb-[-15px]">
            Feedback
          </h3>
          <h2 className="font-tanker text-5xl md:text-8xl text-[#2F3E2F] leading-tight">
            FROM CUSTOMERS
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-gray-500 font-inter text-sm md:text-base leading-relaxed">
            The Digital Innovation Studio, a haven where innovation thrives and
            digital possibilities unfold endlessly. Here, we ignite
            imaginations, harnessing the power of technology to create immersive
            digital
          </p>
        </div>

        {/* Feedback Content */}
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl mx-auto px-4"
            >
              {/* Image Side */}
              <div className="relative w-full md:w-5/12 flex justify-center md:justify-end">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <div
                    className="absolute inset-0 bg-[#f0f0f0] overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(0 15%, 15% 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                  >
                    <Image
                      src={currentFeedback.image}
                      alt={currentFeedback.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-7/12 flex flex-col justify-center">
                <blockquote className="font-tanker text-3xl md:text-4xl lg:text-5xl text-[#2F3E2F] leading-[1.1] mb-8 uppercase">
                  {currentFeedback.text}
                </blockquote>

                <div className="flex flex-row items-end justify-between gap-6">
                  <div>
                    <h4 className="font-tanker text-2xl text-[#2F3E2F] tracking-wide">
                      {currentFeedback.name}
                    </h4>
                    <p className="text-gray-500 font-inter text-sm md:text-base">
                      {currentFeedback.role}
                    </p>
                  </div>
                  <StarRating rating={currentFeedback.rating} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
