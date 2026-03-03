import Image from "next/image";
import { BlogPostContent as BlogPostContentType } from "@/lib/blogPostContent";

interface BlogPostContentProps {
  content?: BlogPostContentType;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  if (!content) {
    return (
      <article className="prose prose-invert prose-lg max-w-none">
        <div className="text-gray-300 leading-relaxed">
          <p>Content coming soon...</p>
        </div>
      </article>
    );
  }

  return (
    <article className="prose prose-invert prose-lg max-w-none blog-prose">
      <div className="text-black leading-relaxed">
        <h2>{content.mainHeading}</h2>
        <h3>{content.subheading}</h3>

        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {content.bulletPoints && content.bulletPoints.length > 0 && (
          <ul>
            {content.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}

        {content.contentImages && content.contentImages.length > 0 && (
          <div className="my-8 space-y-8">
            {content.contentImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={content.imageCaptions?.[index] || "Blog content image"}
                  fill
                  className="object-cover"
                />
                {content.imageCaptions?.[index] && (
                  <p className="text-sm text-gray-400 mt-2 text-center italic">
                    {content.imageCaptions[index]}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {content.quote && (
          <blockquote className="my-8 pl-6 border-l-4 border-[#00FFAA]">
            <p className="text-lg italic">{content.quote.text}</p>
            <footer className="text-sm text-gray-400 mt-2">
              — {content.quote.author}, {content.quote.company}
            </footer>
          </blockquote>
        )}
      </div>
    </article>
  );
}
