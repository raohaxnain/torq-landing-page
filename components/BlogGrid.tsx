"use client";

import { useState } from "react";
import BlogCard, { BlogPost } from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

const INITIAL_POSTS = 5;
const POSTS_PER_LOAD = 6;

export default function BlogGrid({ posts }: BlogGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_POSTS);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + POSTS_PER_LOAD, posts.length));
  };

  // First post is featured, rest are regular
  const featuredPost = visiblePosts[0];
  const regularPosts = visiblePosts.slice(1);

  return (
    <div className="w-full bg-white py-4 -mt-4 md:-mt-8 lg:-mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Blog Grid */}
        <div className="space-y-6 animate-fade-up">
          {/* First Row: Featured (2 cols) + 1 Regular */}
          {featuredPost && (
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Featured Post - Spans 2 columns */}
              <div className="lg:col-span-2">
                <BlogCard post={featuredPost} featured />
              </div>

              {/* First Regular Post */}
              {regularPosts[0] && (
                <div className="lg:col-span-1">
                  <BlogCard post={regularPosts[0]} />
                </div>
              )}
            </div>
          )}

          {/* Remaining Posts - 3 per row */}
          {regularPosts.length > 1 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regularPosts.slice(1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={loadMore}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-black bg-transparent px-12 py-4 text-sm font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-black hover:text-white active:scale-95"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
