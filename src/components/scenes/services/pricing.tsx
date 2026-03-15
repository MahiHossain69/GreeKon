"use client";

import React from "react";
import { PricingSection } from "@/components/ui/pricing-cards";

const demoPlans = [
  {
    name: "Starter",
    price: "49",
    yearlyPrice: "39",
    period: "month",
    features: [
      "Custom UI Design",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Mobile Optimization",
      "1 Month Free Support",
    ],
    description: "Perfect for startups finding their digital voice.",
    buttonText: "Get Started",
    href: "#",
  },
  {
    name: "Growth",
    price: "99",
    yearlyPrice: "79",
    period: "month",
    features: [
      "Advanced UI/UX Design",
      "Up to 15 Pages",
      "E-commerce Ready",
      "Custom Animations",
      "Priority Support & Strategy",
    ],
    description: "Ideal for businesses ready to scale their presence.",
    buttonText: "Unlock Growth",
    href: "#",
    isPopular: true,
  },
  {
    name: "Elite",
    price: "199",
    yearlyPrice: "159",
    period: "month",
    features: [
      "Enterprise Grade Design",
      "Unlimited Pages",
      "Full API Integration",
      "Bespoke 3D Elements",
      "Dedicated Account Manager",
    ],
    description: "For leaders who demand digital perfection.",
    buttonText: "Become Elite",
    href: "#",
  },
];

const PricingScene = () => {
  return (
    <PricingSection
      plans={demoPlans}
      title="SIMPLE PLANS, ELITE RESULTS"
      description="TRANSPARENT PRICING TAILORED TO YOUR BRAND'S AMBITION."
    />
  );
};

export default PricingScene;
