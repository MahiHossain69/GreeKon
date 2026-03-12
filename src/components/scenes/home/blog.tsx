import React from "react";
import Image from "next/image";

const blogs = [
  {
    title: "BUILD A HIGH-CONVERTING LANDING PAGE: TIPS FROM PROS",
    date: "01 Jun 2025",
    image: "/home/blog/landing-page.png",
  },
  {
    title: "EMAIL MARKETING IN 2025: PERSONALIZATION YOU ADMIRE",
    date: "01 May 2025",
    image: "/home/blog/email-marketing.png",
  },
  {
    title: "GUIDELINES: THE SECRET WEAPON FOR CON MARKETING",
    date: "06 Apr 2025",
    image: "/home/blog/guidelines.png",
  },
];

const BlogSection = () => {
  return (
    <section className="py-30 px-6 md:px-12 lg:px-24 bg-white font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <div className="relative inline-block">
            <span className="font-sacramento text-[#E85C33] text-4xl md:text-7xl absolute -top-14 left-1/2 -translate-x-1/2 opacity-70 z-0 select-none whitespace-nowrap">
              Blogs
            </span>
            <h2 className="font-tanker text-[#0D2316] text-5xl md:text-7xl lg:text-[90px] leading-none relative z-10 tracking-tight">
              READ OUR BLOGS
            </h2>
          </div>

          <p className="mt-8 max-w-2xl mx-auto text-[#0D2316] text-sm md:text-base opacity-90 leading-relaxed font-inter">
            At the core of our approach are three key areas of expertise that
            drive impactful results. Explore how our strategy, creativity, and
            technology work together to fuel your growth.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="relative aspect-4/3 overflow-hidden mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="font-inter text-xs md:text-sm text-[#0D2316] opacity-70 mb-3 uppercase tracking-wider font-medium">
                {blog.date}
              </p>
              <h3 className="font-tanker text-[#0D2316] text-xl lg:text-[28px] leading-tight uppercase tracking-tight mb-4 min-h-14">
                {blog.title}
              </h3>
              <div className="relative w-full h-px bg-black/10">
                <div className="absolute top-0 left-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
