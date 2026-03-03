import Image from "next/image";

interface BlogPostHeaderProps {
  title: string;
  date: string;
  category: string;
  readTime?: string;
  image: string;
}

export default function BlogPostHeader({
  title,
  date,
  category,
  readTime = "5 min read",
  image,
}: BlogPostHeaderProps) {
  return (
    <header className="mb-8">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 bg-[#00FFAA]/10 text-black rounded-full text-sm font-medium mb-4">
          {category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          {title}
        </h1>
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </div>
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </header>
  );
}
