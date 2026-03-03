import { X } from "lucide-react";

const categories = [
  "All",
  "AI Technology",
  "Marketing + Sales",
  "Company News",
  "Industry Resources",
];

export default function BlogFilters() {
  return (
    <div className="w-full -mt-20 bg-white pt-28 pb-8 sm:-mt-24 sm:pt-36 sm:pb-10 lg:-mt-32 lg:pt-44 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Label */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
            Filter
          </span>
          <X className="h-3 w-3 text-gray-600" />
        </div>

        {/* Category Pills */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`flex-shrink-0 rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ${
                index === 0
                  ? "bg-[#D5FC9A] text-black hover:bg-[#c5ec8a]"
                  : "bg-white text-black border border-gray-300 hover:border-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
