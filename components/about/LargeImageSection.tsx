import Image from "next/image";
import Link from "next/link";

export default function LargeImageSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:max-w-[100vw] lg:px-8">
        <div className="relative overflow-hidden rounded-3xl animate-fade-up">
          <div className="relative h-[600px] sm:h-[700px] lg:h-[940px]">
            <Image
              src="/stock images/AdobeStock_292063777.avif"
              alt="Sales in Motion"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
              quality={65}
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 backdrop-blur-[2px]" />
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-end p-8 sm:p-12 lg:p-16">
            <div className="max-w-4xl space-y-6 animate-fade-up">
              <h2 className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-7xl lg:leading-tight">
                <span className="block">Sales in Motion,</span>
                <span className="block bg-gradient-to-r from-white to-[#D5FC9A] bg-clip-text text-transparent">
                  While You&apos;re in Action
                </span>
              </h2>

              <p className="max-w-2xl text-base leading-relaxed text-white lg:text-lg">
                Your day doesn&apos;t stop—and neither should your sales
                pipeline. Torq works around the clock to identify prospects,
                nurture leads, and drive conversions while you focus on what you
                do best: running your business.
              </p>
              <Link href="/features">
                <button className="inline-flex w-fit cursor-pointer items-center rounded-xl bg-lime-200 px-12 py-5 text-sm font-semibold uppercase tracking-[0.1em] text-slate-900 transition-all duration-300 hover:bg-lime-100 hover:scale-[1.02] hover:shadow-lg active:scale-95">
                  Features
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
