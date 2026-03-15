import React from "react";
import Navbar from "@/components/layouts/Navbar";
import BlogHero from "@/components/scenes/blog/hero";
import Articles from "@/components/scenes/blog/articles";
import FooterSection from "@/components/scenes/home/footer";

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <BlogHero />
      <Articles />
      <FooterSection />
    </main>
  );
};

export default BlogPage;
