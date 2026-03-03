import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogData";
import BlogPostHeader from "@/components/BlogPostHeader";
import BlogPostContent from "@/components/BlogPostContent";
import ShareButtons from "@/components/ShareButtons";
import BackToBlog from "@/components/BackToBlog";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Torq Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="">
      <Hero
        heading={post.title}
        showVideo={false}
        headingGradient=" "
        subtitle={""}
        backgroundImage="/background/Torq-gradients-green-purple-04.avif"
        minHeight="min-h-[30vh] sm:min-h-[45vh] lg:min-h-[60vh]"
        ctaButtons={null}
      />
      <div
        className="min-h-screen bg-[#0A0A0A] pt-12 pb-16 bg-white -mt-16 sm:-mt-20 sm:pt-16 sm:pb-20 lg:-mt-32 lg:pt-20 lg:pb-24"
        style={{
          backgroundImage:
            "url(/background/Torq-gradients-green-purple-03.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl mt-20">
          <BackToBlog />
          <BlogPostHeader
            title={post.title}
            date={post.date}
            category={post.category}
            readTime={post.readTime}
            image={post.image}
          />
          <div className="mt-8">
            <BlogPostContent content={post.content} />
          </div>
          <div className="mt-12">
            <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </div>
      </div>
      <Blog />
      <Footer />
    </div>
  );
}
