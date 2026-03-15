import React from "react";
import Navbar from "@/components/layouts/Navbar";
import ServicesHero from "@/components/scenes/services/hero";
import PricingScene from "@/components/scenes/services/pricing";
import FeedbackScene from "@/components/scenes/services/feedback";
import FooterSection from "@/components/scenes/home/footer";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <ServicesHero />
      <PricingScene />
      <FeedbackScene />
      <FooterSection />
    </main>
  );
};

export default ServicesPage;
