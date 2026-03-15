"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Send } from "lucide-react";
import ShimmerButton from "@/components/shared/shimmer-button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@greekon.com",
    href: "mailto:hello@greekon.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Innovation Drive, Silicon Valley, CA",
    href: "#",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.greekon.com",
    href: "https://www.greekon.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactForm = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 transform origin-top-right z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Left Side: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="w-full lg:w-5/12 space-y-12 flex flex-col justify-center"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="font-tanker text-[#2F3E2F] text-6xl md:text-8xl uppercase leading-[0.9] mb-8"
              >
                GET IN <br />
                <span className="text-[#BFFF07] drop-shadow-sm">TOUCH</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-gray-500 font-inter text-xl leading-relaxed max-w-md"
              >
                Ready to elevate your digital presence? Reach out directly or
                fill out the form. We usually respond within 24 hours.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
            >
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-5 p-4 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-[#BFFF07] group-hover:border-[#BFFF07] transition-all duration-500">
                      <Icon className="w-6 h-6 text-[#BFFF07] group-hover:text-black transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 font-tanker uppercase text-xs tracking-[0.2em] mb-1">
                        {item.label}
                      </h4>
                      <Link
                        href={item.href}
                        className="text-[#2F3E2F] font-inter text-xl font-medium hover:text-[#BFFF07] transition-colors"
                      >
                        {item.value}
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white border border-gray-100 p-8 md:p-16 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] relative overflow-hidden group">
              {/* Subtle top-right accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#BFFF07]/5 rounded-bl-full z-0" />

              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <Label className="text-[#2F3E2F] font-tanker uppercase text-xs tracking-widest ml-1 opacity-60">
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      className="h-14 bg-gray-50/50 border-gray-100 rounded-2xl px-6 text-[#2F3E2F] font-inter text-lg focus:bg-white focus:border-[#BFFF07] focus-visible:ring-4 focus-visible:ring-[#BFFF07]/10 transition-all duration-300 placeholder:text-gray-400 outline-none ring-0"
                      placeholder="John Doe"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-3">
                    <Label className="text-[#2F3E2F] font-tanker uppercase text-xs tracking-widest ml-1 opacity-60">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      className="h-14 bg-gray-50/50 border-gray-100 rounded-2xl px-6 text-[#2F3E2F] font-inter text-lg focus:bg-white focus:border-[#BFFF07] focus-visible:ring-4 focus-visible:ring-[#BFFF07]/10 transition-all duration-300 placeholder:text-gray-400 outline-none ring-0"
                      placeholder="hello@world.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-3">
                  <Label className="text-[#2F3E2F] font-tanker uppercase text-xs tracking-widest ml-1 opacity-60">
                    Project Subject
                  </Label>
                  <Input
                    type="text"
                    className="h-14 bg-gray-50/50 border-gray-100 rounded-2xl px-6 text-[#2F3E2F] font-inter text-lg focus:bg-white focus:border-[#BFFF07] focus-visible:ring-4 focus-visible:ring-[#BFFF07]/10 transition-all duration-300 placeholder:text-gray-400 outline-none ring-0"
                    placeholder="E-commerce Website Design"
                  />
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <Label className="text-[#2F3E2F] font-tanker uppercase text-xs tracking-widest ml-1 opacity-60">
                    Message Details
                  </Label>
                  <Textarea
                    rows={6}
                    className="min-h-[150px] bg-gray-50/50 border-gray-100 rounded-2xl p-6 text-[#2F3E2F] font-inter text-lg focus:bg-white focus:border-[#BFFF07] focus-visible:ring-4 focus-visible:ring-[#BFFF07]/10 transition-all duration-300 resize-none placeholder:text-gray-400 outline-none ring-0"
                    placeholder="Tell us about your goals and timeline..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button className="w-full h-16 rounded-2xl font-tanker uppercase tracking-wider text-xl bg-[#a7dd04] hover:bg-[#759a07] text-black border-none shadow-[0_20px_40px_-15px_rgba(191,255,7,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(191,255,7,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]">
                    <span className="flex items-center justify-center gap-3">
                      Launch Inquiry
                      <Send className="w-6 h-6 rotate-15" />
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
