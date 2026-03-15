import React from "react";
import HeroSection from "@/components/scenes/about-us/hero";
import OurSiteSection from "@/components/scenes/about-us/our-site";
import { Logos3 } from "@/components/blocks/logos3";
import WhyWe from "@/components/scenes/about-us/why-we";
import MemberSection from "@/components/scenes/about-us/member";
import PartnersSection from "@/components/scenes/about-us/partners";
import Navbar from "@/components/layouts/Navbar";
import FooterSection from "@/components/scenes/home/footer";
import PartnersDownSection from "@/components/scenes/about-us/partners-down";

const AboutPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-black">
      <Navbar />
      <HeroSection />
      <OurSiteSection />
      <Logos3 heading="Worked With" />
      <WhyWe />
      <MemberSection />
      <PartnersSection />
      <PartnersDownSection />
      <FooterSection />
    </main>
  );
};

export default AboutPage;
