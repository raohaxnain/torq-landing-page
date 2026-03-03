import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeatureCarousel from "@/components/FeatureCarousel";
import PricingSection from "@/components/PricingSection";
import Image from "next/image";

export const metadata = {
  title: "Features - Torq",
  description:
    "Discover how Torq's AI-powered platform transforms your lead generation with data analysis, AI-driven content creation, and advanced engagement tools.",
};

export default function FeaturesPage() {
  // Feature cards data
  const dataAnalysisCards = [
    {
      icon: "/icons/features/customer-insight.svg",
      label: "Customer Insight",
    },
    {
      icon: "/icons/features/security.png",
      label: "Security",
    },
    {
      icon: "/icons/features/real-time-integration.png",
      label: "Real-Time Integration",
    },
  ];

  const aiDrivenCards = [
    {
      icon: "/icons/features/targeted-audience.svg",
      label: "Targeted Audience",
    },
    {
      icon: "/icons/features/ai-generated-content.png",
      label: "AI-Generated Content",
    },
    {
      icon: "/icons/features/performance-analysis.png",
      label: "Performance Analysis",
    },
  ];

  const engagementCards = [
    {
      icon: "/icons/features/convenient-all-in-one.png",
      label: "Convenient All-In-One",
    },
    {
      icon: "/icons/features/consistent-messaging.svg",
      label: "Consistent Messaging + Brand",
    },
    {
      icon: "/icons/features/real-time-tracking.png",
      label: "Real-Time Tracking",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        subtitle="AI lead generation for businesses that want to focus on what they do best — connecting with clients."
        heading="The Best Way to"
        headingGradient="Generate Momentum"
        heroImage="/stock images/features.jpg"
        showVideo={false}
        backgroundImage="/background/Torq-gradients-green-purple-04.avif"
        minHeight="min-h-screen"
        ctaButtons={
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a href="#features-overview" className="inline-flex w-full max-w-[200px] cursor-pointer items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/90 active:scale-95">
              Learn More
            </a>
          </div>
        }
      />

      {/* Features Overview Section */}
      <section id="features-overview" className="relative -mt-32 overflow-hidden pt-40 pb-20 text-white sm:-mt-42 sm:pt-52 sm:pb-24 lg:pt-64 lg:pb-32">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/background/Torq-gradients-green-purple-02.avif"
            alt=""
            fill
            sizes="100vw"
            quality={60}
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto my-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:items-start">
            {/* Left Label */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-black sm:text-sm">
                Features
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-2xl leading-10 sm:text-3xl lg:text-4xl">
                <span className="bg-gradient-to-r from-black to-[#6259B9] bg-clip-text text-transparent">
                  Leverage cutting-edge technology to transform how you connect
                  with potential clients. Our platform combines data-driven
                  insights, AI-powered automation, and seamless engagement tools
                  to deliver results that matter.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Carousel Sections */}
      <div
        className="relative bg-cover bg-center pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('/background/Torq-gradients-green-purple-02.avif')",
        }}
      >
        <FeatureCarousel
          sectionNumber="01"
          sectionTitle="Data Analysis"
          cards={dataAnalysisCards}
        />

        <FeatureCarousel
          sectionNumber="02"
          sectionTitle="AI-Driven Audience + Ad Creation"
          gradientPart=""
          cards={aiDrivenCards}
        />

        <FeatureCarousel
          sectionNumber="03"
          sectionTitle="Engagement + Lead Nurturing"
          gradientPart=""
          cards={engagementCards}
        />
      </div>

      {/* Pricing Section */}
      <PricingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
