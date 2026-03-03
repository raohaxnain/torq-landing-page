"use client";

import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import InteractiveDemoModal from "./InteractiveDemoModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Email Subscription State
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (error: unknown) {
      setStatus("error");
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred");
      }
    }
  };

  // Animations
  const newsletterRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", duration: 1 });
  const contactRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", duration: 1, delay: 0.2 });
  const bottomRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", duration: 1, delay: 0.4 });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="relative overflow-hidden  text-white ">
      <div className="relative z-10 sm:py-20 py-16">
        <Image
          src="/background/Torq-gradients-green-purple-04.png"
          alt=""
          fill
          quality={60}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-[1745px] px-5">

          {/* Top Section - Newsletter */}
          <div ref={newsletterRef} className="mb-8 rounded-2xl footer-card-bg p-8 backdrop-blur-sm sm:py-[140px] sm:px-[88px]">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="text-xl font-bold uppercase  text-white">
                  INSIGHTS + UPDATES
                </div>
                <h2 className="text-4xl font-medium leading-tight bg-gradient-to-r from-white to-[#D5FC9A] bg-clip-text text-transparent sm:text-5xl lg:text-[80px]">
                  Don&apos;t Want to
                  <br />
                  Miss Anything?
                </h2>
              </div>

              <div className="flex items-center justify-end">
                <div className="flex w-full max-w-[580px] flex-col gap-2">
                  <div className="flex flex-row">
                    <input
                      type="email"
                      placeholder="EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading" || status === "success"}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubscribe();
                      }}
                      className="w-full min-w-0 flex-1 rounded-l-lg border-none bg-gradient-to-r from-white/60 to-white/30 px-6 py-4 text-lg font-medium tracking-wider text-black placeholder:text-black focus:outline-none focus:ring-0 disabled:opacity-50"
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={status === "loading" || status === "success"}
                      className="cursor-pointer whitespace-nowrap -ml-2 rounded-[13px] bg-[#D5FC9A] px-16 py-4 text-sm font-bold tracking-widest text-black transition-all duration-300 hover:bg-[#cdfc8b] hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {status === "loading" ? "..." : status === "success" ? "DONE" : "SIGN-UP"}
                    </button>
                  </div>
                  {message && (
                    <div
                      className={`text-xs font-bold tracking-wider ${status === "error" ? "text-red-400" : "text-[#D5FC9A]"
                        }`}
                    >
                      {message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Contact & Navigation */}
          <div className="">
            <div ref={contactRef} className="mb-10 flex flex-col gap-10 lg:flex-row  lg:justify-between">
              <div className="space-y-7 py-12 px-24 w-4/12 rounded-2xl footer-card-bg">
                <a
                  href="mailto:info@torq.ai"
                  className="flex items-center gap-8 text-white hover:text-[#D5FC9A] transition-colors group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" fill="none">
                    <g clipPath="url(#clip0_3151_3448)">
                      <path d="M1.35522 11.4585C1.35522 16.6097 1.35522 24.6489 1.35522 24.6489C1.35522 26.6523 2.97944 28.2766 4.983 28.2766H26.7496C28.7532 28.2766 30.3774 26.6523 30.3774 24.6489V10.6071M1.35522 11.4585C1.35522 10.8331 1.67741 10.2518 2.20776 9.92038L15.8663 1.38379L29.4527 9.02618C30.0239 9.34744 30.3774 9.9518 30.3774 10.6071M1.35522 11.4585C2.08078 11.4585 15.8663 20.4295 15.8663 20.4295L30.3774 10.6071" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3151_3448">
                        <rect width="32" height="30.6667" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[25px]">info@torq.ai</span>
                </a>
                <a
                  href="mailto:info@torq.ai"
                  className="flex items-center gap-8 text-white hover:text-[#D5FC9A] transition-colors group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <g clipPath="url(#clip0_3151_3450)">
                      <path d="M31.4713 27.8926C31.4713 27.8926 29.5625 29.7673 29.0948 30.3169C28.3328 31.1301 27.435 31.5139 26.2581 31.5139C26.1449 31.5139 26.0242 31.5139 25.911 31.5065C23.6704 31.3634 21.5881 30.4901 20.0265 29.7447C15.7564 27.6818 12.0068 24.753 8.891 21.0413C6.31837 17.9469 4.59827 15.0858 3.45907 12.014C2.75744 10.1393 2.50093 8.67872 2.61409 7.30092C2.68955 6.42002 3.02904 5.68972 3.65523 5.06482L6.22785 2.49745C6.59752 2.15112 6.98983 1.96289 7.37459 1.96289C7.84988 1.96289 8.23464 2.249 8.47607 2.48992C8.48361 2.49745 8.49116 2.50498 8.49869 2.5125C8.95891 2.94165 9.39648 3.38586 9.85668 3.86018C10.0906 4.10112 10.332 4.34204 10.5734 4.59049L12.633 6.6459C13.4328 7.44397 13.4328 8.1818 12.633 8.97986C12.4142 9.19821 12.203 9.41654 11.9842 9.62736C11.3505 10.2749 11.8483 9.77804 11.1919 10.3653C11.1769 10.3803 11.1618 10.3879 11.1542 10.4029C10.5054 11.0504 10.6261 11.6829 10.7619 12.112C10.7695 12.1346 10.777 12.1572 10.7845 12.1798C11.3202 13.4747 12.0746 14.6945 13.2214 16.1475L13.2289 16.155C15.3112 18.7149 17.5065 20.7101 19.9282 22.2385C20.2376 22.4342 20.5545 22.5923 20.8562 22.7429C21.1278 22.8783 21.3844 23.0063 21.6032 23.1419C21.6333 23.157 21.6634 23.1795 21.6937 23.1946C21.9502 23.3226 22.1916 23.3829 22.4406 23.3829C23.0668 23.3829 23.459 22.9913 23.5873 22.8633L25.0661 21.3875C25.3226 21.1315 25.73 20.8229 26.2053 20.8229C26.673 20.8229 27.0578 21.1165 27.2917 21.3725C27.2993 21.3801 27.2993 21.3801 27.3068 21.3875L31.4637 25.5361C32.2408 26.3039 31.4713 27.8926 31.4713 27.8926Z" stroke="white" strokeWidth="2.85535" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3151_3450">
                        <rect width="33.3333" height="33.3333" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[25px]">604.653.6000</span>
                </a>
              </div>

              <div className="flex flex-col px-[50px] items-center justify-between gap-8 lg:flex-row lg:gap-12 rounded-2xl footer-card-bg w-8/12">
                <nav className="flex h-10 items-center flex-wrap gap-12 text-lg font-bold uppercase tracking-[0.15em] text-white">
                  <Link href="/features" className="transition-colors hover:text-[#D5FC9A]">Features</Link>
                  <Link href="/about-us" className="transition-colors hover:text-[#D5FC9A]">Company</Link>
                  <Link href="/blog" className="transition-colors hover:text-[#D5FC9A]">Blog</Link>
                  <Link href="/contact-us" className="transition-colors hover:text-[#D5FC9A]">Contact</Link>
                </nav>

                <div className="flex h-10 items-center gap-6 text-white">
                  <a href="#" className="hover:text-[#D5FC9A] transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#D5FC9A] transition-colors"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#D5FC9A] transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#D5FC9A] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-[#D5FC9A] transition-colors"><Youtube className="w-5 h-5" /></a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-10">
              <Link href="/contact-us">
                <button className="w-full cursor-pointer rounded-xl bg-[#D5FC9A] py-4 text-lg font-bold tracking-widest text-black transition-all duration-300 hover:bg-[#cdfc8b] hover:scale-[1.01] active:scale-[0.99]">
                  BOOK A DEMO
                </button>
              </Link>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col  footer-card-bg justify-between rounded-2xl gap-4 py-6 px-20 text-lg font-semibold tracking-wider text-white/80 sm:flex-row sm:items-center">
              <div className="flex flex-wrap items-center gap-6">
                <span>© 2025 TORQ</span>
                <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
              </div>
              <div className="tracking-widest">WEBSITE BY STUDIOTHINK</div>
            </div>
          </div>
        </div>
      </div>
      <div ref={bottomRef} className="text-center bg-black pt-16 pb-[144px]">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo-icon-only.svg"
            alt="Circle icon"
            width={320}
            height={320}
          />
        </div>

        <h3 className="mb-8 text-[80px] font-medium bg-gradient-to-r from-white to-[#D5FC9A] bg-clip-text text-transparent">
          Torq Guarantees Results
        </h3>

        <button
          ref={buttonRef}
          onClick={handleOpenModal}
          className="inline-flex min-w-[280px] w-fit cursor-pointer items-center justify-center rounded-xl border-2 border-white bg-transparent px-12 py-4 text-lg font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/90 active:scale-95"
        >
          INTERACTIVE DEMO
        </button>
      </div>


      {isModalOpen && <InteractiveDemoModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </footer>
  );
}
