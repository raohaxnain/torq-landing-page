"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PricingSection() {
  // Animations
  const headingRef = useScrollAnimation<HTMLHeadingElement>({ type: "fadeUp", duration: 1 });
  const textRef = useScrollAnimation<HTMLParagraphElement>({ type: "fadeUp", duration: 1, delay: 0.2 });
  const buttonRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", duration: 1, delay: 0.4 });

  return (
    <section className="relative overflow-hidden py-20 text-white sm:py-24 lg:py-32 -mt-10 md:-mt-16 lg:-mt-24 z-10">
      <div className="absolute top-0 left-1/2 -z-10 h-full w-[300%] -translate-x-1/2 rounded-t-[100%] overflow-hidden sm:w-[150%]">
        <Image
          src="/background/Torq-gradients-green-purple-07.avif"
          alt=""
          fill
          sizes="100vw"
          quality={60}
          className="object-cover"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.4em] text-black sm:text-sm">
          Our Pricing
        </div>

        <h2
          ref={headingRef}
          className="mb-8 text-center text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl"
          style={{ letterSpacing: "-0.6px" }}
        >
          <span className="bg-gradient-to-r from-black to-[#6259B9] bg-clip-text text-transparent">
            Pay Us Only for Leads Ready to Talk to Your Sales Team
          </span>
        </h2>

        <p ref={textRef} className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-black sm:text-xl">
          No upfront costs. No hidden fees. You only pay for qualified leads
          that are ready to engage with your business. Our AI-driven platform
          ensures every dollar you spend delivers real value.
        </p>

        <div ref={buttonRef} className="flex justify-center">
          <a
            href="/contact-us"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-lime-200 px-12 py-5 text-sm font-bold uppercase tracking-[0.1em] text-slate-900 shadow-lg transition-all duration-300 hover:bg-lime-300 hover:scale-105 active:scale-95 sm:px-16 sm:py-6 sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
