import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import StatsSection from "@/components/about/StatsSection";
import LargeImageSection from "@/components/about/LargeImageSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import Blog from "@/components/Blog";

export const metadata = {
  title: "About Us - Torq",
  description:
    "Torq was built to change the way businesses generate and communicate with potential leads—smarter, faster, and powered by AI.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Hero
        subtitle="Torq was built to change the way businesses generate and communicate with potential leads—smarter, faster, and powered by AI."
        heading="Revolutionizing"
        headingGradient="Marketing with AI"
        heroImage="/stock images/about-us.jpg"
        ctaButtons={
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a href="#stats-section" className="inline-flex w-full max-w-[200px] cursor-pointer items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/90 active:scale-95">
              Learn More
            </a>
          </div>
        }
      />
      <StatsSection />
      <LargeImageSection />
      <TestimonialsSection />
      <Blog />
      <Footer />
    </div>
  );
}
