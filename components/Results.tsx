
"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

export default function Results() {
  return (
    <section className="bg-[url(/background/result-bg.png)] bg-cover bg-no-repeat pt-14 pb-10 sm:py-20">
      <div className="mx-auto w-full max-w-[1540px] px-4 sm:px-6 lg:px-10">
        <div className="scroll-scale flex items-end justify-between relative overflow-hidden rounded-3xl ">
          <div className="scroll-fade-up scroll-delay-1  rounded-3xl bg-lime-200/95 p-6 shadow-xl  sm:max-w-md sm:p-8 sm:pt-24 lg:max-w-lg">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <h6 className="text-sm font-semibold leading-[140%] text-black mb-4">client name</h6>
                  <div className="text-sm font-semibold py-[5px] w-fit px-2.5 bg-white rounded-full uppercase tracking-[0.98px] text-black">
                    Coachella Valley Volkswagen
                  </div>
                  <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    AI Revenue Engine, In Action.
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
                    From insights to engagement to booked appointments—Torq activates real buyer intent across every channel.
                  </p>

                  <ul className="mt-4 space-y-4 text-sm relative z-10 font-medium text-black sm:text-base">
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">984</span> opportunities processed</li>
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">205</span> high-intent buyers surfaced</li>
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">40%</span> engagement rate</li>
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">34</span> appointments created automatically</li>
                    <div className="border-l border-dotted absolute top-0 left-[15px] -z-10 w-[1px] h-full"></div>
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-slate-900/90 sm:text-base">
                    Torq&apos;s AI analyzes your full data stream, predicts true intent, and deploys agents that engage prospects instantly—keeping your pipeline active and your team focused on closing.
                  </p>

                  <Link href="/contact-us">
                    <button className="mt-6 min-w-[202px] inline-flex justify-center cursor-pointer items-center rounded-xl bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.98px] text-black transition-all duration-300 hover:scale-105 active:scale-95">
                      Sign-Up
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h6 className="text-sm font-semibold leading-[140%] text-black mb-4">client name</h6>
                  <div className="text-sm font-semibold py-[5px] w-fit px-2.5 bg-white rounded-full uppercase tracking-[0.98px] text-black">
                    Coachella Valley Volkswagen
                  </div>
                  <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    AI Revenue Engine, In Action.
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
                    From insights to engagement to booked appointments—Torq activates real buyer intent across every channel.
                  </p>

                  <ul className="mt-4 space-y-4 text-sm relative z-10 font-medium text-black sm:text-base">
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">984</span> opportunities processed</li>
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">205</span> high-intent buyers surfaced</li>
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">40%</span> engagement rate</li>
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">34</span> appointments created automatically</li>
                    <div className="border-l border-dotted absolute top-0 left-[15px] -z-10 w-[1px] h-full"></div>
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-slate-900/90 sm:text-base">
                    Torq&apos;s AI analyzes your full data stream, predicts true intent, and deploys agents that engage prospects instantly—keeping your pipeline active and your team focused on closing.
                  </p>

                  <Link href="/contact-us">
                    <button className="mt-6 min-w-[202px] inline-flex justify-center cursor-pointer items-center rounded-xl bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.98px] text-black transition-all duration-300 hover:scale-105 active:scale-95">
                      Sign-Up
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h6 className="text-sm font-semibold leading-[140%] text-black mb-4">client name</h6>
                  <div className="text-sm font-semibold py-[5px] w-fit px-2.5 bg-white rounded-full uppercase tracking-[0.98px] text-black">
                    Coachella Valley Volkswagen
                  </div>
                  <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    AI Revenue Engine, In Action.
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
                    From insights to engagement to booked appointments—Torq activates real buyer intent across every channel.
                  </p>

                  <ul className="mt-4 space-y-4 text-sm relative z-10 font-medium text-black sm:text-base">
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">984</span> opportunities processed</li>
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">205</span> high-intent buyers surfaced</li>
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">40%</span> engagement rate</li>
                    <li className="flex items-center gap-[14px]"><span className="w-[31px] bg-lime-200/95 h-[31px] flex items-center justify-center border border-black-1000 rounded-full"><img src="/icons/tick-icon.svg" alt="" /></span> <span className="font-bold">34</span> appointments created automatically</li>
                    <div className="border-l border-dotted absolute top-0 left-[15px] -z-10 w-[1px] h-full"></div>
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-slate-900/90 sm:text-base">
                    Torq&apos;s AI analyzes your full data stream, predicts true intent, and deploys agents that engage prospects instantly—keeping your pipeline active and your team focused on closing.
                  </p>

                  <Link href="/contact-us">
                    <button className="mt-6 min-w-[202px] inline-flex justify-center cursor-pointer items-center rounded-xl bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.98px] text-black transition-all duration-300 hover:scale-105 active:scale-95">
                      Sign-Up
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="scroll-fade-up scroll-delay-2 flex flex-col gap-4  sm:w-[240px] sm:gap-5 lg:w-[413px] ">
            <div className="rounded-2xl bg-[#9BA3F8]/80 p-5 text-slate-900 shadow-2xl backdrop-blur-lg sm:p-10">
              <div className="flex items-end justify-between gap-4">
                <Image
                  src="/icons/Bar Chart.svg"
                  alt="Bar chart showing growth"
                  width={166}
                  height={148}
                  loading="lazy"
                  className="h-14 w-14 sm:h-[148px] sm:w-[166px]"
                />
                <div className="text-right">
                  <div className="text-sm uppercase tracking-[0.98px] text-black">
                    Engagement Rate
                  </div>
                  <div className="mt-1 text-4xl font-normal text-black sm:text-5xl lg:text-[70px]">
                    40%
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 p-5 text-slate-900 shadow-2xl backdrop-blur-lg sm:px-12 sm:pb-8 sm:pt-20">
              <div className="flex items-center justify-between gap-8">
                <Image
                  src="/icons/leads-per-month.svg"
                  alt="Leads per month icon"
                  width={152}
                  height={112}
                  loading="lazy"
                  className="h-16 w-16 sm:h-[112px] sm:w-[152px]"
                />
                <div className="text-right">
                  <div className="text-sm uppercase tracking-[0.98px] text-black">
                    Appointments
                  </div>
                  <div className="mt-1 text-4xl font-normal text-black sm:text-5xl lg:text-[70px]">
                    34
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
