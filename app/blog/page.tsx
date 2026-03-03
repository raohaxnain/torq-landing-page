import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BlogFilters from "@/components/BlogFilters";
import BlogGrid from "@/components/BlogGrid";
import { blogPosts } from "@/lib/blogData";

export const metadata = {
  title: "Blog - Torq",
  description:
    "Elevate your business with our expertise in everything AI + sales. Read our latest insights on AI technology, marketing strategies, and industry trends.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        subtitle="Elevate your business with our expertise in everything AI + sales."
        heading="Latest Insights"
        headingGradient=" "
        showVideo={false}
        backgroundImage="/background/Torq-gradients-green-purple-04.avif"
        minHeight="min-h-[30vh] sm:min-h-[45vh] lg:min-h-[60vh]"
        ctaButtons={null}
      />

      {/* Filter Pills */}
      <BlogFilters />

      {/* Blog Grid with Load More */}
      <BlogGrid posts={blogPosts} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
