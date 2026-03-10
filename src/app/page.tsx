import Navbar from "@/components/layouts/Navbar";
import FeedbackSection from "@/components/scenes/home/feedback";
import HeroSection from "@/components/scenes/home/hero";
import LearnMoreSection from "@/components/scenes/home/learnmore";
import ProjectSection from "@/components/scenes/home/project";
import ServicesSection from "@/components/scenes/home/services";
import StatesSection from "@/components/scenes/home/states";
import WhyUsSection from "@/components/scenes/home/whyus";
import ClientSection from "@/components/scenes/home/client";
import AtmosphereSection from "@/components/scenes/home/atmosphere";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <LearnMoreSection />
        <ProjectSection />
        <ServicesSection />
        <StatesSection />
        <WhyUsSection />
        <FeedbackSection />
        <ClientSection />
        <AtmosphereSection />
      </main>
    </div>
  );
}
