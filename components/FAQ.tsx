"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can I activate campaigns directly through Torq using Google Ads, Meta Ads, SMS, and email?",
    answer:
      "Yes, Torq seamlessly integrates with major advertising platforms including Google Ads and Meta Ads, as well as communication channels like SMS and email. You can launch, manage, and optimize your multi-channel campaigns directly from our unified dashboard.",
  },
  {
    question: "How does Torq help me create ad sets from business insights?",
    answer:
      "Torq analyzes your business data and market trends to generate high-performing ad sets. Our AI identifies the most effective targeting parameters, ad copy, and creative elements, allowing you to create data-driven campaigns that resonate with your audience and drive better results.",
  },
  {
    question: "How does Torq help me create ad sets from business insights?",
    answer:
      "Torq analyzes your business data and market trends to generate high-performing ad sets. Our AI identifies the most effective targeting parameters, ad copy, and creative elements, allowing you to create data-driven campaigns that resonate with your audience and drive better results.",
  },
  {
    question: "Is my data secure with Torq?",
    answer:
      "Absolutely. We prioritize data security and comply with industry standards to ensure your business information and customer data are protected. We use advanced encryption and security protocols to safeguard your data at all times.",
  },
  {
    question: "Can I integrate Torq with my existing CRM?",
    answer:
      "Yes, Torq offers robust integration capabilities with popular CRM systems. This ensures a smooth flow of lead data into your sales pipeline, allowing your team to follow up quickly and efficiently without manual data entry.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", duration: 1 });
  const listRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", duration: 1, delay: 0.2 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative -mt-48 pt-58 pb-24 overflow-hidden text-slate-900 z-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background/Torq-gradients-green-purple-05.avif"
          alt=""
          fill
          className="object-cover"
          quality={70}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mx-auto max-w-3xl text-center mb-16">
          <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-6">
            Frequently Asked Questions
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-8 text-[#2A2A4A]">
            Have Questions? We&apos;ve Collected All the Answers in One Spot.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-10 max-w-2xl mx-auto">
            Find answers to common questions about Torq&apos;s features, integrations, and pricing. Can&apos;t find what you&apos;re looking for? Our support team is here to help you get the most out of your campaigns.
          </p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#D5FC9A] px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-slate-900 transition-all duration-300 hover:bg-[#c2ef80] hover:scale-[1.02] active:scale-95 shadow-sm"
          >
            Chat With Us
          </button>
        </div>

        {/* FAQ List */}
        <div ref={listRef} className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#D5FC9A]"></span>
                  <span className="text-lg font-semibold text-[#2A2A4A]">
                    {faq.question}
                  </span>
                </div>
                <span className="flex-shrink-0 ml-4 text-gray-400">
                  {openIndex === index ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pl-[3.25rem] text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
