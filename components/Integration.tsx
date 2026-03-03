"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const firstRow = [
  "AI-Powered Lead Scoring",
  "Real-Time Analytics Dashboard",
  "Automated Email Sequences",
  "CRM Integration",
  "Predictive Customer Insights",
  "Multi-Channel Attribution",
];

const secondRow = [
  "Smart Audience Targeting",
  "Conversion Optimization",
  "Behavior Tracking",
  "Lead Qualification",
  "Campaign Performance Reports",
  "Sales Pipeline Management",
];

const thirdRow = [
  "Marketing Automation",
  "Lead Nurturing Campaigns",
  "ROI Tracking & Analytics",
  "A/B Testing Optimization",
  "Customer Journey Mapping",
  "Revenue Attribution",
];

const repeatItems = (items: string[]) => [...items, ...items];

export default function Integration() {
  // Animations
  const labelRef = useScrollAnimation<HTMLDivElement>({ type: "fadeIn", duration: 1 });
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ type: "fadeUp", duration: 1, delay: 0.2 });
  const textRef = useScrollAnimation<HTMLParagraphElement>({ type: "fadeUp", duration: 1, delay: 0.4 });
  const buttonRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", duration: 1, delay: 0.6 });

  return (
    <section
      className="relative overflow-hidden font-Inter bg-center bg-cover bg-white z-10 bg-no-repeat py-16 sm:pt-[283px] sm:pb-[151px]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background/partner-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNgYGD4DwABBAEAe1ko+AAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="mx-auto max-w-[1312px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-12 space-y-6">
          <div
            ref={labelRef}
            className="text-[20px] uppercase tracking-[-0.2px] text-black font-medium"
          >
            comprehensive integration partners
          </div>

          <h2
            ref={titleRef}
            className="text-3xl font-medium text-gradient pb-8 tracking-[-4px] sm:text-4xl lg:text-[80px]"
          >
            Your Reliable Partner For Success–Integrating Made Simple
          </h2>

          <p className='text-[26px] pb-12 max-w-[1080px] mx-auto font-normal leading-[150%] tracking-[-1px] text-gray-1000'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate deleniti atque corrupti quos.</p>


          <div ref={buttonRef}>
            <Link href="/contact-us">
              <button className="cursor-pointer min-w-[273px] rounded-xl bg-lime-200 px-6 py-5 text-lg font-bold uppercase tracking-[0.1em] text-slate-900 transition-all duration-300 hover:bg-lime-100 hover:scale-[1.02] hover:shadow-lg active:scale-95">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Carousel - Full Width */}
      <div
        className="mt-12 space-y-6 overflow-hidden sm:mt-[126px]"
      >
        {/* First Row - Scroll Left */}
        <div className="relative flex overflow-hidden">
          <div
            className="flex whitespace-nowrap animate-scroll-left"
          >
            {repeatItems(firstRow).map((text, index) => (
              <div
                key={`first-${index}`}
                className="mx-2 inline-flex items-center gap-6 rounded-xl  bg-white px-5 py-2 text-2xl font-medium uppercase tracking-[0.1em] text-black sm:mx-3 sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.3em]"
              >
                <div className="h-4 w-4 rounded-full bg-[#D5FC9A]" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scroll Right */}
        <div className="relative flex overflow-hidden">
          <div
            className="flex whitespace-nowrap animate-scroll-right"
          >
            {repeatItems(secondRow).map((text, index) => (
              <div
                key={`second-${index}`}
                className="mx-2 inline-flex items-center gap-6 rounded-xl  bg-white px-5 py-2 text-2xl font-medium uppercase tracking-[0.1em] text-black sm:mx-3 sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.3em]"
              >
                <div className="h-4 w-4 rounded-full bg-[#D5FC9A]" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Third Row - Scroll Left */}
        <div className="relative flex overflow-hidden">
          <div
            className="flex whitespace-nowrap animate-scroll-left"
          >
            {repeatItems(thirdRow).map((text, index) => (
              <div
                key={`third-${index}`}
                className="mx-2 inline-flex items-center gap-6 rounded-xl  bg-white px-5 py-2 text-2xl font-medium uppercase tracking-[0.1em] text-black sm:mx-3 sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.3em]"
              >
                <div className="h-4 w-4 rounded-full bg-[#D5FC9A]" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
