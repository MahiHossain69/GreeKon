import React from "react";
import Navbar from "@/components/layouts/Navbar";
import OurWorkHero from "@/components/scenes/our-work/hero";
import ProjectsSection from "@/components/scenes/our-work/projects";
import FooterSection from "@/components/scenes/home/footer";
import FeedbackSection from "@/components/scenes/our-work/feedback";

const OurWorkPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-black">
      <Navbar />
      <OurWorkHero />
      <ProjectsSection />
      <FeedbackSection />
      <FooterSection />
    </main>
  );
};

export default OurWorkPage;
