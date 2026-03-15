import React from "react";
import Navbar from "@/components/layouts/Navbar";
import ServicesHero from "@/components/scenes/services/hero";
import FooterSection from "@/components/scenes/home/footer";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <ServicesHero />
      {/* Additional sections can be added here later */}
      <FooterSection />
    </main>
  );
};

export default ServicesPage;
