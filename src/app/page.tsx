import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/scenes/home/hero";
import LearnMoreSection from "@/components/scenes/home/learnmore";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <LearnMoreSection />
      </main>
    </div>
  );
}
