import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Integration from "@/components/Integration";
import Results from "@/components/Results";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import SystemProblem from "@/components/SystemProblem";
import AIAgents from "@/components/AIAgents";
import Testimonails from "@/components/Testimonails";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <About /> */}
      <Features />
      <Work />
      <Results />
      <SystemProblem />
      <AIAgents></AIAgents>
      <Integration />
      <Testimonails></Testimonails>
      <Blog />
      <Footer />
    </div>
  );
}
