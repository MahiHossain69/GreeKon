"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { X } from "lucide-react";
import {
  BgShapeFive,
  BgShapeFour,
  BgShapeOne,
  BgShapeThree,
  BgShapeTwo,
} from "./svgs";
import Link from "next/link";
import { Button } from "../ui/button";

// Register GSAP Plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

interface KineticNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KineticNavigation({ isOpen, onClose }: KineticNavigationProps) {
  // We need a ref for the parent container to scope GSAP
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial Setup & Hover Effects
  useEffect(() => {
    if (!containerRef.current) return;

    // Create custom easing
    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.7 });
      }
    } catch (e) {
      console.warn("CustomEase failed to load, falling back to default.", e);
      gsap.defaults({ ease: "power2.out", duration: 0.7 });
    }

    const ctx = gsap.context(() => {
      // Shape Hover
      const menuItems = containerRef.current!.querySelectorAll(
        ".menu-list-item[data-shape]",
      );
      const shapesContainer = containerRef.current!.querySelector(
        ".ambient-background-shapes",
      );

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer
          ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`)
          : null;

        if (!shape) return;

        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer
              .querySelectorAll(".bg-shape")
              .forEach((s) => s.classList.remove("active"));
          }
          shape.classList.add("active");

          gsap.fromTo(
            shapeEls,
            { scale: 0.5, opacity: 0, rotation: -10 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "back.out(1.7)",
              overwrite: "auto",
            },
          );
        };

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto",
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);

        (item as any)._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        };
      });
    }, containerRef);

    return () => {
      ctx.revert();
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(
          ".menu-list-item[data-shape]",
        );
        items.forEach((item: any) => item._cleanup && item._cleanup());
      }
    };
  }, []);

  // Menu Open/Close Animation Effect
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(
        ".nav-overlay-wrapper",
      );
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay");
      const bgPanels =
        containerRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link");
      const fadeTargets =
        containerRef.current!.querySelectorAll("[data-menu-fade]");

      const tl = gsap.timeline();

      if (isOpen) {
        // OPEN
        if (navWrap) navWrap.setAttribute("data-nav", "open");

        tl.set(navWrap, { display: "block" })
          .set(menu, { xPercent: 0 }, "<")
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
          .fromTo(
            bgPanels,
            { xPercent: 101 },
            { xPercent: 0, stagger: 0.12, duration: 0.575 },
            "<",
          )
          .fromTo(
            menuLinks,
            { yPercent: 140, rotate: 10 },
            { yPercent: 0, rotate: 0, stagger: 0.05 },
            "<+=0.35",
          );

        if (fadeTargets.length) {
          tl.fromTo(
            fadeTargets,
            { autoAlpha: 0, yPercent: 50 },
            { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" },
            "<+=0.2",
          );
        }
      } else {
        // CLOSE
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(overlay, { autoAlpha: 0 })
          .to(menu, { xPercent: 120 }, "<")
          .set(navWrap, { display: "none" });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isOpen]);

  // keydown Escape handling
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <div ref={containerRef} className="kinetic-nav-root">
      <section className="fullscreen-menu-container">
        <div data-nav="closed" className="nav-overlay-wrapper">
          <div className="overlay" onClick={onClose}></div>
          <nav className="menu-content">
            <div className="menu-bg">
              <div className="backdrop-layer first"></div>
              <div className="backdrop-layer second"></div>
              <div className="backdrop-layer"></div>

              {/* Abstract shapes container */}
              <div className="ambient-background-shapes">
                {/* Shape 1: Floating circles */}
                <BgShapeOne />

                {/* Shape 2: Wave pattern */}
                <BgShapeTwo />

                {/* Shape 3: Grid dots */}
                <BgShapeThree />

                {/* Shape 4: Organic blobs */}
                <BgShapeFour />

                {/* Shape 5: Diagonal lines */}
                <BgShapeFive />
              </div>
            </div>

            <div className="menu-content-wrapper">
              <div className="container mx-auto px-6 flex flex-col justify-center min-h-screen">
                <ul className="menu-list flex flex-col space-y-6">
                  <li className="menu-list-item overflow-hidden" data-shape="1">
                    <Link
                      href="/about-us"
                      className="nav-link w-inline-block block"
                    >
                      <p
                        className="nav-link-text font-tanker text-7xl md:text-9xl uppercase leading-none"
                        data-menu-fade
                      >
                        About us
                      </p>
                    </Link>
                  </li>
                  <li className="menu-list-item overflow-hidden" data-shape="2">
                    <Link
                      href="/our-work"
                      className="nav-link w-inline-block block"
                    >
                      <p
                        className="nav-link-text font-tanker text-7xl md:text-9xl uppercase leading-none"
                        data-menu-fade
                      >
                        Our work
                      </p>
                    </Link>
                  </li>
                  <li className="menu-list-item overflow-hidden" data-shape="3">
                    <Link
                      href="/services"
                      className="nav-link w-inline-block block"
                    >
                      <p
                        className="nav-link-text font-tanker text-7xl md:text-9xl uppercase leading-none"
                        data-menu-fade
                      >
                        Services
                      </p>
                    </Link>
                  </li>
                  <li className="menu-list-item overflow-hidden" data-shape="4">
                    <Link
                      href="/blog"
                      className="nav-link w-inline-block block"
                    >
                      <p
                        className="nav-link-text font-tanker text-7xl md:text-9xl uppercase leading-none"
                        data-menu-fade
                      >
                        Blog
                      </p>
                    </Link>
                  </li>
                  <li className="menu-list-item overflow-hidden" data-shape="5">
                    <Link
                      href="/contact"
                      className="nav-link w-inline-block block"
                    >
                      <p
                        className="nav-link-text font-tanker text-7xl md:text-9xl uppercase leading-none"
                        data-menu-fade
                      >
                        Contact us
                      </p>
                    </Link>
                  </li>
                  <li className="menu-list-item overflow-hidden" data-shape="5">
                    <Link href="/404" className="nav-link w-inline-block block">
                      <p
                        className="nav-link-text font-tanker text-7xl md:text-9xl uppercase leading-none"
                        data-menu-fade
                      >
                        404
                      </p>
                    </Link>
                  </li>
                </ul>

                {/* Close button inside menu for convenience */}
                <Button
                  onClick={onClose}
                  className="absolute flex z-100 top-8 right-8 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all group"
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
