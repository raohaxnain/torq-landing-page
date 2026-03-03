import Link from "next/link";

export default function BackToBlog() {
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 text-black transition-colors mb-8"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="font-medium">Back to Blog</span>
    </Link>
  );
}
