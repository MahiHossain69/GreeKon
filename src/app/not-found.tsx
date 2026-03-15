import React from "react";
import Link from "next/link";
import { RetroTvError } from "@/components/ui/404-error-page";
import Navbar from "@/components/layouts/Navbar";
import FooterSection from "@/components/scenes/home/footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <div className="grow flex flex-col items-center justify-center py-20">
        <div className="scale-75 md:scale-100 lg:scale-125">
          <RetroTvError errorCode="404" errorMessage="NOT FOUND" />
        </div>

        <div className="text-center mt-20 md:mt-32">
          <p className="font-inter text-gray-500 mb-8 max-w-md mx-auto">
            THE PAGE YOU'RE LOOKING FOR HAS VAPORIZED INTO THE DIGITAL ETHER. IT
            MIGHT HAVE NEVER EXISTED, OR PERHAPS IT'S JUST SHY.
          </p>

          <Link
            href="/"
            className="inline-block bg-[#BFFF07] text-black font-tanker px-10 py-4 text-xl hover:bg-white transition-colors duration-300"
          >
            GO BACK HOME
          </Link>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
