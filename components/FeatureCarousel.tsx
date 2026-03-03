import Image from "next/image";

interface FeatureCard {
  icon: string;
  label: string;
  description?: string;
}

interface FeatureCarouselProps {
  sectionNumber: string;
  sectionTitle: string;
  gradientPart?: string;
  cards: FeatureCard[];
}

export default function FeatureCarousel({
  sectionNumber,
  sectionTitle,
  gradientPart,
  cards,
}: FeatureCarouselProps) {
  return (
    <section className="relative py-6 sm:py-16 lg:py-20 animate-fade-up">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-white/30 bg-white/60 p-10 backdrop-blur-md sm:p-12">
        <div className="absolute inset-0 -z-10 opacity-60">
          <Image
            src="/background/Torq-gradients-green-purple-05.avif"
            alt=""
            fill
            sizes="100vw"
            quality={60}
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HwAIAgNDP3BPuAAAAABJRU5ErkJggg=="
          />
        </div>

        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between gap-6 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl">
            <span style={{ letterSpacing: "-0.4px" }}>
              {sectionNumber} {sectionTitle}
            </span>
            {gradientPart ? (
              <span
                className="bg-gradient-to-r from-[#6259B9] to-[#8B7FD9] bg-clip-text text-transparent"
                style={{ letterSpacing: "-0.4px" }}
              >
                {" "}
                {gradientPart}
              </span>
            ) : null}
          </h2>
        </div>

        {/* Cards Container - single responsive grid, no carousel */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-lime-200 bg-transparent p-6 shadow-sm"
              style={{ minHeight: "240px" }}
            >
              {/* Icon - Top Left */}
              <div className="flex-shrink-0">
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#D5FC9A]">
                  <Image
                    src={card.icon}
                    alt={card.label}
                    width={28}
                    height={28}
                    className="object-contain brightness-0"
                  />
                </div>
              </div>

              {/* Label - Bottom Left */}
              <h3
                className="text-[11px] font-bold uppercase leading-tight tracking-wider text-black"
                style={{ letterSpacing: "1.1px" }}
              >
                {card.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
