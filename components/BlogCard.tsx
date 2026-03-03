import Image from "next/image";
import Link from "next/link";

import { BlogPostContent } from "@/lib/blogPostContent";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  author?: string;
  image: string;
  featured?: boolean;
  bgColor?: string;
  content?: BlogPostContent;
  readTime?: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className={`group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-[#EDEDED] transition-all duration-300 hover:shadow-lg ${
          featured ? "h-full" : ""
        }`}
      >
      {/* Image Section */}
      <div
        className={`relative overflow-hidden ${
          featured ? "h-48 sm:h-56 lg:h-64" : "h-48 sm:h-56 lg:h-64"
        }`}
        style={{ backgroundColor: post.bgColor || "#9B87F5" }}
      >
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={
              featured
                ? "(min-width: 1024px) 650px, (min-width: 640px) 50vw, 90vw"
                : "(min-width: 1024px) 400px, (min-width: 640px) 45vw, 90vw"
            }
          />
        )}

        {/* Category Label on Image */}
        <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-black">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-xl font-semibold leading-tight text-black sm:text-2xl">
          {post.title}
        </h3>

        {/* Date */}
        <div className="mt-auto">
          <span className="text-sm text-gray-600">{post.date}</span>
        </div>
      </div>
    </article>
    </Link>
  );
}
