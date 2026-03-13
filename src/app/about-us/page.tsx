import React from "react";
import HeroSection from "@/components/scenes/about-us/hero";
import OurSiteSection from "@/components/scenes/about-us/our-site";
import { Logos3 } from "@/components/blocks/logos3";
import Navbar from "@/components/layouts/Navbar";
import FooterSection from "@/components/scenes/home/footer";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <OurSiteSection />
      <Logos3 heading="Worked With" />
      <FooterSection />
    </main>
  );
};

export default AboutPage;
