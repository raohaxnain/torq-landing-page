"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, ReactNode } from "react";
import HeroVideo from "./HeroVideo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logoProps = {
  src: "/torq-logo.svg",
  alt: "Torq",
  width: 275,
  height: 84,
  quality: 60,
};
const logoSizes = "(min-width: 1024px) 11rem, 12rem";
const logoBaseClass = "w-48 rounded";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Company", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

interface HeroProps {
  subtitle?: string;
  heading?: ReactNode;
  headingGradient?: ReactNode;
  headingGradient2?: ReactNode;
  showVideo?: boolean;
  heroImage?: string;
  ctaButtons?: ReactNode;
  backgroundImage?: string;
  minHeight?: string;
  children?: ReactNode;
  centered?: boolean;
}

export default function Hero({
  subtitle = "A modern AI layer that turns your data into action — with AI agents that power marketing, activate SMS, email, voice, and video, and deliver hot, real-time leads",
  heading = "",
  headingGradient = "AI Agents That Actually",
  headingGradient2 = "Generate Revenue",
  showVideo = true,
  heroImage,
  ctaButtons,
  backgroundImage = "/background/hero-bg.png",
  minHeight = "min-h-screen",
  children,
  centered = false,
}: HeroProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animations
  const logoRef = useScrollAnimation<HTMLImageElement>({ type: "fadeIn", duration: 1, delay: 0.2 });
  const navRef = useScrollAnimation<HTMLElement>({ type: "fadeIn", duration: 1, delay: 0.4 });
  const buttonRef = useScrollAnimation<HTMLDivElement>({ type: "fadeIn", duration: 1, delay: 0.6 });
  const textRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", duration: 1, delay: 0.2 });
  const videoRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", duration: 1, delay: 0.4 });

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <section
      className={`relative z-20 ${minHeight} overflow-hidden text-white`}
    >
      {/* Background with curved bottom */}
      <div className="absolute top-0 left-1/2 -z-10 h-full w-[300%] -translate-x-1/2 rounded-b-[100%] overflow-hidden sm:w-[150%]">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          quality={60}
          priority
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-[1862px] px-5 py-8 pb-32  sm:pb-40 lg:py-12 lg:pb-12">
        {/* Header */}
        <header className="relative mb-10 flex w-full items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:pb-16 lg:min-h-[88px]">
          <Link href="/">
            <Image
              ref={logoRef}
              {...logoProps}
              className={`${logoBaseClass} cursor-pointer lg:w-[275px]`}
              sizes={logoSizes}
              priority
              alt="Torq Logo"
            />
          </Link>

          <nav ref={navRef} className="relative hidden items-center gap-4 rounded-xl border border-white bg-white/5 px-6 py-3 backdrop-blur text-[1rem] tracking-[0.3em] uppercase lg:flex lg:justify-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm z-10 px-4 py-2 transition-colors duration-200 hover:text-lime-200 focus-visible:text-lime-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div ref={buttonRef} className="hidden lg:flex justify-end">
            <Link href="/contact-us" className="inline-flex min-w-[269px] justify-center uppercase cursor-pointer items-center rounded-xl bg-lime-200 px-12 py-5 text-lg font-bold tracking-[0.1em] text-slate-900 shadow-sm transition-all duration-300 hover:bg-lime-100 hover:scale-[1.02] hover:shadow-lg active:scale-95">
              Sign-Up
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            className="inline-flex cursor-pointer items-center rounded-xl border-2 border-white/80 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white shadow-sm transition-all duration-300 hover:bg-white/10 hover:border-white active:scale-95 lg:hidden"
          >
            Menu
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur transition-transform duration-500 ease-out lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="absolute inset-0 flex flex-col px-6 py-8">
            {/* Header with Logo and Close */}
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  {...logoProps}
                  className={logoBaseClass}
                  sizes={logoSizes}
                  alt="Torq Logo"
                />
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex cursor-pointer items-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white active:scale-95"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* Centered Content */}
            <div className="flex flex-1 flex-col justify-center">
              {/* Navigation Items */}
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-4xl font-medium capitalize leading-tight transition hover:opacity-80"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #FFF 0%, #D5FC9A 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Sign-Up Button */}
              <Link
                href="/contact-us"
                className="mt-8 inline-flex w-fit cursor-pointer items-center rounded-xl bg-lime-200 px-12 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-lime-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign-Up
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {centered ? (
          <div className="relative mt-8 flex flex-col items-center gap-12 lg:mt-16">
            <div ref={textRef} className="relative z-10 w-full text-center space-y-8 lg:space-y-10">
              <h1 className="text-4xl font-semibold leading-[1.3] sm:text-5xl lg:text-[130px]">
                {heading && <span className="block">{heading}</span>}
                <span
                  className="block text-white"
                >
                  {headingGradient}
                </span>
              </h1>
              <h2 className="text-4xl font-semibold leading-[1.3] sm:text-5xl lg:text-[130px]">
                {heading && <span className="block">{heading}</span>}
                <span
                  className="block text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #FFF 0%, var(--Lime-Green, #D5FC9A) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {headingGradient2}
                </span>
              </h2>
              <div className="space-y-6">
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300">
                  {subtitle}
                </p>
                {ctaButtons !== null && (
                  <>
                    {ctaButtons ? (
                      <div>{ctaButtons}</div>
                    ) : (
                      <div className="flex justify-center">
                        <button className="inline-flex w-full max-w-[200px] cursor-pointer items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/90 active:scale-95">
                          Get Started
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {children && (
              <div ref={videoRef} className="w-full mt-8">
                {children}
              </div>
            )}
          </div>
        ) : (
          <div className="relative mt-8 flex flex-col items-center gap-12 lg:mt-24 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] lg:items-start">
            {/* Left Side - Hero Text */}
            <div ref={textRef} className="relative z-10 w-full space-y-8 lg:space-y-10">


              <div className="space-y-6">
                <h1 className="text-4xl font-semibold mr-[-240px] leading-[1.3] sm:text-5xl lg:text-[130px]">
                  {heading && <span className="block">{heading}</span>}
                  <span
                    className="block text-white">
                    {headingGradient}
                    <span style={{
                      backgroundImage:
                        "linear-gradient(90deg, #FFF 0%, var(--Lime-Green, #D5FC9A) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}> {headingGradient2}</span>
                  </span>
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-gray-300">
                  {subtitle}
                </p>
                {ctaButtons !== null && (
                  <>
                    {ctaButtons ? (
                      <div>{ctaButtons}</div>
                    ) : (
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                        <Link href="/contact-us">
                          <button className="inline-flex w-full max-w-[200px] cursor-pointer items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/90 active:scale-95">
                            Book a Demo
                          </button>
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Right Side - Video or Image */}
            {(showVideo || heroImage) && (
              <div
                ref={videoRef}
                className="relative -mx-4 mb-[-100px] flex justify-center sm:mx-0 sm:mb-[-140px] lg:-mt-12 lg:mb-0"
              >
                <div className="relative z-[100] w-full max-w-[380px] sm:max-w-[420px] lg:-ml-20 lg:max-w-[498px]">
                  {heroImage ? (
                    <div className="relative w-full aspect-square overflow-hidden rounded-[40px] border border-white/20 bg-slate-900 lg:aspect-[9/16]">
                      <Image
                        src={heroImage}
                        alt="Hero"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <HeroVideo poster="/stock images/AdobeStock_1402751717.avif" />
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
