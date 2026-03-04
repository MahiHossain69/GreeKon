"use client";

import Image from "next/image";

const MaskedImage = ({ src, maskId }: { src: string; maskId: string }) => (
  <div className="relative w-full aspect-square ">
    <div
      className="w-full h-full overflow-hidden"
      style={{ clipPath: `url(#${maskId})` }}
    >
      <Image src={src} alt="Creative Work" fill className="object-contain" />
    </div>
  </div>
);

const WhyUsSection = () => {
  return (
    <section className="bg-white py-20 lg:py-40 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex flex-col items-center">
        {/* Header Text */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <span className="font-sacramento text-[#ff3d00] text-5xl md:text-7xl -mb-4 relative z-10">
            Why Us??
          </span>
          <h2 className="font-tanker text-[#1A2E26] text-3xl md:text-5xl lg:text-[64px] leading-[1.1] max-w-4xl uppercase tracking-tight">
            WORKPLACE PRODUCTIVITY RELATES TO THE AMOUNT OF WORK THAT CERTAIN
            PERIOD. A PRODUCTIVITY WORK TO THE AMOUNT OF WORK THAT CERTAIN
            PERIOD.
          </h2>
        </div>

        {/* Images Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
          <MaskedImage
            src="/home/why-us/whyus-1.webp"
            maskId="whyus-mask-wavy"
          />
          <MaskedImage
            src="/home/why-us/whyus-2.webp"
            maskId="whyus-mask-infinity"
          />
          <MaskedImage
            src="/home/why-us/whyus-3.webp"
            maskId="whyus-mask-flower"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
