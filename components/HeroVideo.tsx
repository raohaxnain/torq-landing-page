"use client";

import { useRef, useEffect } from "react";

interface HeroVideoProps {
  poster?: string;
}

export default function HeroVideo({ poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-[340px] aspect-square lg:aspect-[9/16] overflow-hidden rounded-[40px] border border-white/20 bg-slate-900">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        className="h-full w-full object-cover"
      >
        <source src="/optimized/banner-veo.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
    </div>
  );
}
