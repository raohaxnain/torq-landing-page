import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Torq",
  description:
    "Get in touch with Torq. We'd love to hear from you and answer any questions you may have about our platform.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      {/* Hero Section */}
      <Hero
        subtitle="Streamlining operations and boosting bottom lines with AI-driven technology to accelerate growth in your business."
        heading="Schedule a Demo"
        headingGradient="With Our Team"
        showVideo={false}
        ctaButtons={null}
        centered={true}
      >
        <ContactForm />
      </Hero>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
