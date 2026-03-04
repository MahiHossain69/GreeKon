import RippleButton from "@/components/ui/ripple-button";
import { Phone } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative w-full h-200 overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/hero/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Sidebar Welcome Text (Left) */}
      <div className="absolute left-8 lg:left-12 top-[22%] md:top-1/2 -translate-y-1/2 flex flex-col items-start gap-1 z-20">
        <p className="text-white text-[10px] md:text-[11px] uppercase font-inter tracking-widest font-medium leading-[1.2]">
          - Welcome to
        </p>
        <p className="text-white text-[10px] md:text-[11px] uppercase font-inter tracking-widest font-medium leading-[1.2]">
          nogescribe, where
        </p>
        <p className="text-white text-[10px] md:text-[11px] uppercase font-inter tracking-widest font-medium leading-[1.2]">
          too creativity.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[95%] w-full">
        <div className="relative flex flex-col items-center w-full">
          {/* Creative Agency - Positioned perfectly to frame the headline */}
          <h2 className="font-sacramento text-[#BFFF07] text-5xl md:text-6xl absolute -top-7.5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-80 whitespace-nowrap pointer-events-none">
            Creative Agency
          </h2>

          <h1 className="font-tanker text-white text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] sm:leading-[0.85] tracking-tight relative z-30">
            EMPOWERING WITH <br />
            CREATIVE BRILLIANCE
          </h1>
        </div>

        {/* Action Button - Ripple animation sizing */}
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <RippleButton
            className="bg-[#BFFF07] text-black font-tanker text-lg sm:text-xl lg:text-2xl px-10 sm:px-14 lg:px-16 py-3 sm:py-4 rounded-full uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(191,255,7,0.2)]"
            rippleColor="rgba(0,0,0,0.4)"
          >
            Contact Us
          </RippleButton>
        </div>
      </div>

      {/* Floating Phone Icon Button (Right) - Responsive position */}
      <div className="absolute right-4 md:right-8 lg:right-12 bottom-10 md:top-1/2 z-20">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#BFFF07] rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(191,255,7,0.3)] hover:scale-110 transition-transform duration-300">
          <Phone className="w-5 h-5 md:w-6 md:h-6 text-black fill-black" />
        </div>
      </div>

      {/* Bottom organic texture/overlay to match the leaf-like background in the image */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black via-transparent to-transparent opacity-40"></div>
    </section>
  );
}

export default HeroSection;
