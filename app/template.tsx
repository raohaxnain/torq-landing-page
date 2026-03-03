"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    // Reset overlay to visible state immediately
    gsap.set(overlay, { 
      opacity: 1,
      display: "block" 
    });

    // Animate out
    const ctx = gsap.context(() => {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
        },
      });
    });

    return () => ctx.revert();
  }, [pathname]); // Re-run on path change, though Template remounts anyway on navigation

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] bg-slate-950 pointer-events-none"
        aria-hidden="true"
      />
      {children}
    </>
  );
}
