import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative z-10 -mt-48 overflow-hidden pt-48">
      <Image
        src="/background/Torq-gradients-green-purple-02.avif"
        alt="Background"
        fill
        className="object-cover -z-10"
        quality={60}
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 md:px-10 md:pb-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[140px_1fr] lg:gap-24">
          {/* Label */}
          <div className="flex justify-start pt-2">
            <span className="scroll-fade-in text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Meet Us
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2
              className="scroll-fade-up scroll-delay-1 text-lg font-medium leading-[1.4] text-justify md:text-xl md:text-left lg:text-[1.75rem]"
              style={{
                background:
                  "linear-gradient(270deg, #6259B9 0.69%, #000 99.38%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Torq is a team of{" "}
              <span style={{ color: "#84cc16", WebkitTextFillColor: "#84cc16" }}>AI agents</span>
              {" "}that augment your data, engineering, and marketing teams — producing creative videos, optimizing ads, running SMS, email, and voice outbound campaigns, and delivering hot leads in real time. Built to simplify operations, cut costs, and let you focus on what you do best.
            </h2>

            <div>
              <Link href="/about-us">
                <button className="inline-flex cursor-pointer items-center rounded-xl bg-lime-200 px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-lime-100 hover:shadow-lg active:scale-95">
                  Get Started
                </button>
              </Link>
            </div>

            <div className="scroll-fade-up scroll-delay-2 relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <video
                className="h-full w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/optimized/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
