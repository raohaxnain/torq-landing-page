import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export default function Blog() {
  // Get the first 3 blog posts
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-black py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1745px] px-5">
        <div className="mb-10 flex justify-center sm:mb-[70px]">
          <p className="text-xl font-bold uppercase tracking-[1.493px] text-white">
            Latest Insights
          </p>
        </div>

        <div className="scroll-fade-up grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group card-bg4 flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
                <div className="relative h-48 w-full overflow-hidden sm:h-[370px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    quality={75}
                    loading={post.id === featuredPosts[0].id ? "eager" : "lazy"}
                    priority={post.id === featuredPosts[0].id}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 space-y-[59px]  justify-between px-9 py-10">
                  <span className="text-base font-bold uppercase tracking-[1.12px] text-white">
                    {post.category}
                  </span>
                  <h3 className="sm:text-[40px] text-2xl tracking-[-2px] font-normal leading-[120%] text-white">
                    {post.title}
                  </h3>
                  <p className="mt-auto text-xl font-normal  text-white">
                    {post.date}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
