import React from "react";
import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/scenes/contact/hero";
import ContactForm from "@/components/scenes/contact/contact-form";
import FooterSection from "@/components/scenes/home/footer";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ContactForm />
      <FooterSection />
    </main>
  );
};

export default ContactPage;
