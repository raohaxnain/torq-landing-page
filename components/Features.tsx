"use client";

import { useRef, useState } from "react";
import { TrendingUp, Star, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SWIPE_THRESHOLD_PX = 50;

  const features = [
    {
      id: 1,
      title: "INSIGHTS AGENT",
      description:
        "Analyzes your marketing and CRM data to surface the right audiences, real intent signals, and revenue opportunities — giving every downstream agent smarter inputs.",
      gradient: "from-lime-100 via-lime-50 to-yellow-50",
      icon: TrendingUp,
      image: "/stock images/Remove-background-data-analysis.png",
    },
  {
    id: 2,
    title: "OUTBOUND AGENT",
    description:
      "Turns intelligence into action by running personalized SMS, email, voice, and video outreach — activating audiences instantly and generating real-time engagement.",
    gradient: "from-purple-100 via-purple-50 to-pink-50",
    icon: Star,
    image: "/stock images/Remove background project (1).png",
  },
  {
    id: 3,
    title: "ADS OPTIMIZATION AGENT",
    description:
      "Optimizes your Google and Meta ad campaigns in real time — adjusting audiences, creative, and budget based on live performance signals. This agent ensures every dollar works harder, generating more qualified leads with less wasted spend.",
    gradient: "from-lime-100 via-lime-50 to-teal-50",
    icon: Zap,
    image: "/stock images/tile-3.png",
  },
  {
    id: 4,
    title: "APPOINTMENT AGENT",
    description:
      "Delivers hot, ready-to-talk prospects by engaging leads in real time and converting them into live call transfers or booked appointments directly on your calendar. Your team gets conversations.",
    gradient: "from-purple-100 via-purple-50 to-pink-50",
    icon: Star,
    image: "/stock images/tile-4.png",
  },
];

export default function Features() {
  const [activeCard, setActiveCard] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef(0);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
    setDragOffset(0);
  };

  const rafRef = useRef<number | null>(null);

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const currentX = event.touches[0].clientX;

    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      const delta = currentX - touchStartX.current;
      const containerWidth = mobileCarouselRef.current?.clientWidth || 1;
      const deltaPercent = (delta / containerWidth) * 100;
      setDragOffset(deltaPercent);
      rafRef.current = null;
    });
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const endX = event.changedTouches[0].clientX;
    const delta = endX - touchStartX.current;

    if (Math.abs(delta) > SWIPE_THRESHOLD_PX) {
      if (delta < 0 && activeCard < features.length - 1) {
        setActiveCard((prev) => prev + 1);
      } else if (delta > 0 && activeCard > 0) {
        setActiveCard((prev) => prev - 1);
      }
    }

    setDragOffset(0);
  };

  return (
    <section
      className="relative isolate bg-white py-16 sm:py-20 before:pointer-events-none before:absolute before:inset-x-0 before:-top-10 before:h-10 before:bg-gradient-to-b before:from-transparent before:via-white/70 before:to-white after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-10 after:h-10 after:bg-gradient-to-t after:from-transparent after:via-white/70 after:to-white"
      style={{
        borderTop: "1px solid transparent",
        borderBottom: "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with staggered layout */}
        <div className="mb-8 flex flex-col gap-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-slate-900">
            <div className="scroll-fade-up">
              <h2 className="text-4xl font-medium leading-tight sm:text-4xl lg:text-6xl lg:leading-tight">
                <span className="block bg-gradient-to-r from-black to-[#6259B9] bg-clip-text text-transparent">
                  The Future of Lead Generation
                </span>
                <span className="mt-2 block bg-gradient-to-r from-black to-[#6259B9] bg-clip-text text-transparent">
                  Is Powered by AI Agents
                </span>
              </h2>
              <Link href="/features">
                <button className="mt-6 hidden lg:inline-flex w-fit cursor-pointer items-center rounded-xl bg-lime-200 px-12 py-5 text-sm font-semibold uppercase tracking-[0.1em] text-slate-900 transition hover:bg-lime-100">
                  Our Agents
                </button>
              </Link>
            <Link href="/features">
            <button className="md:hidden mt-8 inline-flex w-fit cursor-pointer items-center rounded-xl bg-lime-200 px-8 py-5 text-sm font-semibold uppercase tracking-[0.1em] text-slate-900 transition hover:bg-lime-100">
              Our Agents
            </button>
            </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full mb-12 lg:mb-20">
          <p className="scroll-fade-up scroll-delay-1 flex flex-end max-w-xl text-base leading-relaxed text-slate-700 lg:text-lg">
            Torq connects to your CRM, ad platforms, and marketing tools, then
            transforms that scattered data into a single, actionable source of
            truth. From there, AI agents handle everything — analyzing patterns,
            generating creative, optimizing spend, and activating SMS, email,
            voice, and video outreach. Your pipeline stays full because the
            system never stops working.
          </p>
        </div>

        {/* Mobile / Tablet - Vertical Stack */}
        <div className="scroll-fade-up scroll-delay-2 flex flex-col gap-4 lg:hidden">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`relative rounded-3xl bg-gradient-to-br ${feature.gradient} p-6 pb-8`}
            >
              <div className="absolute right-6 top-4 text-5xl font-bold text-slate-900/20">
                0{feature.id}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-300">
                  <feature.icon className="h-6 w-6 text-slate-900" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-slate-900">
                  {feature.title}
                </span>
              </div>
              {feature.image && (
                <div className="flex items-center justify-center py-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="object-contain max-h-[150px]"
                  />
                </div>
              )}
              <p className="mt-6 text-sm leading-relaxed text-slate-900">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Carousel */}
        <div className="scroll-fade-up scroll-delay-2 relative hidden lg:block">
          <div className="flex items-stretch gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => setActiveCard(index)}
                className={`relative cursor-pointer rounded-3xl bg-gradient-to-br ${
                  feature.gradient
                } basis-0 transition-[flex-grow,flex-basis,opacity] duration-700 ease-in-out ${
                  activeCard === index
                    ? "flex-[2] min-h-[520px]"
                    : "flex-1 min-h-[520px] opacity-50 hover:opacity-70"
                }`}
              >
                <div
                  className={`absolute right-8 top-8 text-7xl font-bold transition-opacity duration-300 ${
                    activeCard === index
                      ? "text-slate-900/20"
                      : "text-slate-400/30"
                  }`}
                >
                  0{feature.id}
                </div>

                <div
                  className={`flex h-full flex-col justify-between p-8 transition-opacity duration-500 ${
                    activeCard === index
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime-300">
                      <feature.icon
                        className="h-7 w-7 text-slate-900"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      {feature.title}
                    </span>
                  </div>

                  {feature.image && (
                    <div className="flex-1 flex items-center justify-center py-4">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={400}
                        height={250}
                        className="object-contain max-h-[200px]"
                      />
                    </div>
                  )}

                  <p className="max-w-md text-base leading-relaxed text-slate-900">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeCard === index
                    ? "w-8 bg-slate-900"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
