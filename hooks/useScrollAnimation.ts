"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  type?: "fadeUp" | "fadeIn" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale";
  duration?: number;
  delay?: number;
  start?: string;
  once?: boolean;
  y?: number;
  x?: number;
  scale?: number;
  stagger?: number;
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>({
  type = "fadeUp",
  duration = 1,
  delay = 0,
  start = "top 85%",
  once = true,
  y = 30,
  x = 0,
  scale = 0.95,
  stagger = 0,
}: ScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Ensure element is visible without animation
      gsap.set(element, { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const initialVars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      };

      if (stagger > 0) {
        initialVars.stagger = stagger;
      }

      switch (type) {
        case "fadeUp":
          initialVars.y = y;
          break;
        case "fadeDown":
          initialVars.y = -y;
          break;
        case "fadeLeft":
          initialVars.x = x || 30;
          break;
        case "fadeRight":
          initialVars.x = x || -30;
          break;
        case "scale":
          initialVars.scale = scale;
          break;
        case "fadeIn":
        default:
          break;
      }

      gsap.from(element, initialVars);
    }, ref);

    return () => ctx.revert();
  }, [type, duration, delay, start, once, y, x, scale, stagger]);

  return ref;
}
