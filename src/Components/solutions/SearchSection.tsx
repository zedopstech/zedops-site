"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Highlight {
  label: string;
  value: string;
}

interface Article {
  title: string;
  slug: string; 
}

interface SearchSectionProps {
  title: string;
  subtitle?: string;
  placeholder: string;
  videoUrl?: string;
  videoName?: string;
  description?: string;
  highlights?: Highlight[];
  icons?: {
    search?: React.ReactNode;
    video?: React.ReactNode;
  };
  articles: Article[];
}

const SearchSection: React.FC<SearchSectionProps> = ({
  title,
  subtitle,
  placeholder,
  highlights,
  icons,
  articles,
}) => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Article[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      const matches = articles.filter((article) =>
        article.title.toLowerCase().includes(lowerQuery)
      );
      setFiltered(matches);
      setShowDropdown(matches.length > 0);
    } else {
      setFiltered([]);
      setShowDropdown(false);
    }
  }, [query, articles]);

  const handleSelect = (slug: string) => {
    router.push(`/resources/knowledge-base/${slug}`);
    setQuery("");
    setShowDropdown(false);
  };

  return (
    <section className="relative bg-secondary text-white py-20 pb-36 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-white/90 mb-6">{subtitle}</p>}

        {Array.isArray(highlights) && highlights.length > 0 && (
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {highlights.map((badge, index) => (
              <div
                key={index}
                className="px-5 py-2 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md shadow-md text-center"
              >
                <div className="text-xl font-bold">{badge.value}</div>
                <div className="text-sm text-white/80">{badge.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="max-w-xl mx-auto mt-8 relative">
          <div className="relative flex items-center">
            {icons?.search && (
              <div className="absolute left-4 text-gray-300">
                {icons.search}
              </div>
            )}
            <input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full py-3 pl-12 pr-4 rounded-lg text-black focus:outline-none text-base shadow-md"
            />
          </div>

          {/* Dropdown List */}
          {showDropdown && (
            <ul className="absolute left-0 right-0 mt-2 bg-custombg text-black rounded-lg shadow-md max-h-28 overflow-y-auto z-50 scrollbar-hidden">
              {filtered.map((article, i) => (
                <li
                  key={i}
                  onClick={() => handleSelect(article.slug)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {article.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
