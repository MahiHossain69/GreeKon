"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Mail, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D2316] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Vision */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link
                href="/"
                className="font-tanker text-white  text-3xl tracking-tight leading-none cursor-pointer"
              >
                <span className="text-[#BFFF07]">GREE</span>KON
              </Link>
            </div>
            <p className="text-xs font-tanker uppercase tracking-wider leading-relaxed max-w-[200px] opacity-90">
              TURNING YOUR DREAMS INTO OUR VISION.
            </p>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h3 className="font-tanker text-sm uppercase tracking-widest opacity-60">
              COMPANY
            </h3>
            <ul className="space-y-4 font-tanker text-lg tracking-tight">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-300 transition-opacity"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-300 transition-opacity"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-orange-300 transition-opacity"
                >
                  BLOG
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Pages Column */}
          <div className="space-y-6">
            <h3 className="font-tanker text-sm uppercase tracking-widest opacity-60">
              OTHER PAGES
            </h3>
            <ul className="space-y-4 font-tanker text-lg tracking-tight">
              <li>
                <Link
                  href="/projects"
                  className="hover:text-orange-300 transition-opacity"
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-orange-300 transition-opacity"
                >
                  CAREER
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-300 transition-opacity"
                >
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="hover:text-orange-300 transition-opacity"
                >
                  LICENSE
                </Link>
              </li>
            </ul>
          </div>

          {/* Profile Card */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12  overflow-hidden">
                <Image
                  src="/home/learn-more/male.webp"
                  alt="Rock Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-tanker text-lg tracking-tight leading-none mb-1">
                  ROCK JOHNSON
                </div>
                <div className="text-[10px] uppercase tracking-wider opacity-60 flex items-center gap-1">
                  LEAD SALES AT <span className="text-white">GREEKON</span>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-white/20 mb-4"></div>
            <div className="font-tanker text-2xl tracking-tight lg:text-right">
              LET'S WORK TOGETHER.
            </div>
          </div>
        </div>

        {/* Dynamic Let's Talk Button */}
        <div className="relative  group mb-16">
          <Link
            href="/contact"
            className="block w-full bg-[#D4F754] text-[#0D2316] relative overflow-hidden transition-all duration-700 ease-in-out clip-footer-btn min-h-[160px] md:min-h-[200px]"
          >
            {/* Front State: LET'S TALK */}
            <div className="absolute rounded-md inset-0 flex items-center justify-center gap-4 transition-all duration-700 ease-in-out group-hover:-translate-y-full">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-[#0D2316]/10">
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="font-tanker text-6xl md:text-8xl tracking-tight">
                LET'S TALK
              </span>
            </div>

            {/* Hover State: Contact Info */}
            <div className="absolute inset-0 flex items-center justify-center gap-6 md:gap-12 translate-y-full transition-all duration-700 ease-in-out group-hover:translate-y-0 bg-[#0D2316] text-[#D4F754]">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
                <span className="font-tanker text-3xl md:text-5xl tracking-tight">
                  HELLO@FINLAYSTUDIO.CO
                </span>
              </div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#D4F754]"></div>
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 md:w-8 md:h-8" />
                <span className="font-tanker text-3xl md:text-5xl tracking-tight">
                  FINLAY.STUDIO
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Subscription & Bottom Bar */}
        <div className="w-full h-px bg-white/10 mb-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          {/* Newsletter */}
          <div className="space-y-6 flex-1">
            <h3 className="font-tanker text-xl tracking-tight">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-xs uppercase tracking-widest opacity-60">
              subscribe to our exclusive news updates!
            </p>
            <div className="relative max-w-sm group">
              <Input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-transparent border-0 border-b border-white/20 py-3 text-xs uppercase tracking-[0.2em] outline-none rounded-none focus-visible:ring-0 focus-visible:border-[#D4F754] transition-colors placeholder:text-white/30"
              />
              <MoveRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Copyrights */}
          <div className="flex flex-col items-end gap-6 text-[10px] md:text-xs">
            <Button
              onClick={scrollToTop}
              className="flex bg-transparent hover:bg-transparent items-center gap-2 uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity group"
            >
              - CLICK TO GO TOP{" "}
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <div className="font-tanker text-xs md:text-sm tracking-widest opacity-80 uppercase text-right leading-relaxed">
              COPYRIGHT 2024 - <span className="text-[#D4F754]">©GREEKO</span> -
              POWERED BY WEBFLOW
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
