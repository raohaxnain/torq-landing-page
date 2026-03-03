"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const stats = [
  {
    value: "-50%",
    label: "Cost Per Lead",
    hasAnimation: true,
    targetValue: 50,
    prefix: "-",
    suffix: "%",
  },
  {
    value: "24/7",
    label: "Work Hours",
    hasAnimation: false,
  },
  {
    value: "+89%",
    label: "Increased Sales",
    hasAnimation: true,
    targetValue: 89,
    prefix: "+",
    suffix: "%",
  },
  {
    value: "+10M",
    label: "Revenue Generated\nfor Customers",
    hasAnimation: true,
    targetValue: 10,
    prefix: "+",
    suffix: "M",
  },
];

export default function StatsSection() {
  const [animatedValues, setAnimatedValues] = useState<(number | null)[]>([null, null, null, null]);
  const containerRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const hasTriggeredRef = useRef(false);

  // Count-up animation effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasTriggeredRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;

          stats.forEach((stat, index) => {
            if (stat.hasAnimation && stat.targetValue) {
              const duration = 2000;
              const steps = 60;
              const increment = stat.targetValue / steps;
              let currentStep = 0;

              const timer = setInterval(() => {
                currentStep++;
                const newValue = Math.min(increment * currentStep, stat.targetValue);

                setAnimatedValues((prev) => {
                  const updated = [...prev];
                  updated[index] = newValue;
                  return updated;
                });

                if (currentStep >= steps) {
                  clearInterval(timer);
                }
              }, duration / steps);

              timersRef.current.push(timer);
            }
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      timersRef.current.forEach((timer) => clearInterval(timer));
      timersRef.current = [];
    };
  }, []);

  return (
    <section id="stats-section" className="relative -mt-16 overflow-hidden pb-16 pt-24 sm:-mt-20 sm:pb-20 sm:pt-32 lg:-mt-42 lg:pt-40">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/background/Torq-gradients-green-purple-04.avif')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-left lg:mb-12">
          <h2 className="mb-4 text-base font-bold uppercase tracking-[0.07em] text-black animate-fade-up">
            Our Story
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto rounded-3xl bg-white/70 p-6 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.4)] backdrop-blur-md sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="order-2 grid grid-cols-2 gap-4 sm:gap-6 lg:order-1 animate-fade-up">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-end justify-end rounded-xl border border-lime-200/80 bg-lime-200 p-6 text-right shadow-[0_15px_40px_-25px_rgba(0,0,0,0.3)] sm:p-8"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.07em] text-black sm:text-sm">
                    {stat.label.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="text-5xl font-normal leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl">
                    {stat.hasAnimation && stat.targetValue && animatedValues[index] !== null
                      ? `${stat.prefix}${Math.round(animatedValues[index])}${stat.suffix}`
                      : stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="order-1 flex flex-col justify-center space-y-6 lg:order-2 animate-fade-up">
              <h3 className="text-2xl font-medium leading-tight sm:text-3xl lg:text-4xl">
                <span className="bg-gradient-to-r from-black via-gray-800 to-[#6259B9] bg-clip-text text-transparent">
                  From a team with a big vision to a leader in AI marketing,
                  we&apos;re redefining how businesses connect and grow.
                </span>
              </h3>

              <p className="text-base leading-relaxed text-black lg:text-lg">
                Our team blends human expertise with AI-driven execution to
                lower acquisition costs, keep campaigns performing around the
                clock, and deliver measurable growth for every client we
                support.
              </p>

              <Link
                href="/contact-us"
                className="inline-flex w-fit cursor-pointer items-center rounded-xl bg-lime-200 px-12 py-5 text-sm font-semibold uppercase tracking-[0.1em] text-slate-900 transition-all duration-300 hover:scale-[1.02] hover:bg-lime-100 hover:shadow-lg active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
