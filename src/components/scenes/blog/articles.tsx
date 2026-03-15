"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "BUILD A HIGH-CONVERTING LANDING PAGE: TIPS FROM PROS",
    date: "May 29, 2025",
    image: "/blog/article-1.jpg",
  },
  {
    id: 2,
    title: "EMAIL MARKETING IN 2025: PERSONALIZATION YOU ADMIRE",
    date: "May 31, 2025",
    image: "/blog/article-2.jpg",
  },
  {
    id: 3,
    title: "GUIDELINES: THE SECRET WEAPON FOR CON MARKETING",
    date: "May 31, 2025",
    image: "/blog/article-3.jpg",
  },
  {
    id: 4,
    title: "STRATEGIES FOR SCALING YOUR DIGITAL AGENCY IN 2026",
    date: "June 05, 2025",
    image: "/blog/article-4.jpg",
  },
  {
    id: 5,
    title: "THE ART OF MINIMALIST UI: LESS IS INDEED MORE",
    date: "June 10, 2025",
    image: "/blog/article-5.jpg",
  },
  {
    id: 6,
    title: "MASTERING SEO: BEYOND THE BASICS IN 2025",
    date: "June 15, 2025",
    image: "/blog/article-6.jpg",
  },
  {
    id: 7,
    title: "AI IN DESIGN: FRIEND OR FOE FOR CREATIVES?",
    date: "June 20, 2025",
    image: "/blog/article-7.jpg",
  },
  {
    id: 8,
    title: "SOCIAL MEDIA TRENDS THAT WILL DOMINATE NEXT YEAR",
    date: "June 25, 2025",
    image: "/blog/article-8.jpg",
  },
  {
    id: 9,
    title: "THE FUTURE OF HANDHELD DEVICES: A DESIGN PERSPECTIVE",
    date: "June 30, 2025",
    image: "/blog/article-9.jpg",
  },
];

const BlogCard = ({ article }: { article: (typeof articles)[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-4/3 overflow-hidden mb-4">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* "Down Hover" Effect: A subtle overlay that slides down or appears */}
        <div className="absolute inset-0 bg-[#BFFF07]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="space-y-2">
        <p className="text-gray-500 font-inter text-sm">{article.date}</p>
        <h3 className="font-tanker text-[#2F3E2F] text-2xl md:text-3xl leading-none uppercase tracking-tight transition-colors duration-300 group-hover:text-black">
          {article.title}
        </h3>
        {/* Animated Line */}
        <div className="pt-6">
          <div className="h-px w-full bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Articles = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
