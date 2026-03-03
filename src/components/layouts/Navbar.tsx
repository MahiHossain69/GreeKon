"use client";

import React, { useState } from "react";
import { ShoppingBag, Menu as MenuIcon } from "lucide-react";
import { KineticNavigation } from "../ui/sterling-gate-kinetic-navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md text-white w-full border-b border-white/10 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="font-tanker  text-3xl tracking-tight leading-none cursor-pointer"
            >
              <span className="text-[#BFFF07]">GREE</span>KON
            </Link>
          </div>

          {/* Center Section - Hidden on mobile, flex on desktop */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-2 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#BFFF07] group-hover:scale-125 transition-transform"></span>
              <Link
                href="/"
                className="font-tanker cursor-pointer text-sm tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity"
              >
                Toronto. Canada
              </Link>
            </div>
            <div className="flex items-center space-x-2 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#BFFF07] group-hover:scale-125 transition-transform"></span>
              <Link
                href="mailto:[EMAIL_ADDRESS]"
                className="font-tanker cursor-pointer text-sm tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity"
              >
                hello@greekon.com
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Shopping Bag with Shadcn Badge */}
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-7 h-7 stroke-[1.5] group-hover:text-[#BFFF07] transition-colors" />
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-2 bg-[#BFFF07] text-black text-[10px] h-5 w-5 rounded-full flex items-center justify-center p-0 border-none font-bold"
              >
                0
              </Badge>
            </div>

            {/* Menu - Using Shadcn Button aesthetic */}
            <Button
              variant="ghost"
              className="flex items-center space-x-3 h-auto p-0 hover:bg-transparent text-white hover:text-[#BFFF07] transition-all"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="font-tanker text-2xl tracking-wide uppercase">
                Menu
              </span>
              <div className="flex flex-col space-y-1.5">
                <span className="w-6 h-[2px] bg-current transition-all"></span>
                <span className="w-6 h-[2px] bg-current transition-all"></span>
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Kinetic Navigation Overlay */}
      <KineticNavigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
