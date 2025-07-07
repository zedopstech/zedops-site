import Link from "next/link";
import { BookOpen, Folder, Shield, User, Wrench, Calendar } from "lucide-react";
import React from "react";

type Article = {
  title: string;
  description: string;
  slug: string;
  tag: string;
  readTime: string;
  updatedAt: string;
  icon?: React.ReactNode;
};

type ArticleGroup = {
  title: string;
  icon?: React.ReactNode;
  articles: Article[];
};

type Props = {
  sectionTitle: string;
  sectionDescription: string;
  groups: ArticleGroup[];
};

// (Optional) You can re-enable this if you want tag icons shown
// const tagIcons: Record<string, React.ReactNode> = {
//   "Employee Management": <User size={16} />,
//   "Vendor Management": <Wrench size={16} />,
//   "Roles & Permissions": <Shield size={16} />,
// };

export default function KnowledgeBaseSection({
  sectionTitle,
  sectionDescription,
  groups,
}: Props) {
  const articleCount = groups.reduce(
    (total, group) => total + group.articles.length,
    0
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 text-gray-900 bg-custombg">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 font-bold">
        <Link href="/resources/knowledge-base" className="hover:underline">
          Knowledge Base
        </Link>{" "}
        / <span className="text-black font-medium">{sectionTitle}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 text-secondary">
          <BookOpen className="text-black" />
          {sectionTitle}
        </h1>
        <p className="text-gray-600 mt-1">{sectionDescription}</p>
        <p className="text-sm text-gray-400 mt-1">{articleCount} articles</p>
      </div>

      {/* Article Groups */}
      {groups.map((group, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-secondary">
            {group.icon ?? <Folder size={16} />} {group.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {group.articles.map((article, index) => (
              <Link
                key={index}
                href={`/resources/knowledge-base/${article.slug}`}
                className="group relative block bg-white border border-gray-200 p-6 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                {/* Floating Background Circle */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300 z-0" />

                {/* Title */}
                <h3 className="text-lg uppercase font-black text-secondary mb-1 group-hover:text-secondary transition-colors duration-300 relative z-10">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm font-medium group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                  {article.description}
                </p>

                {/* Date */}
                <p className="flex items-center text-xs text-gray-400 mt-3 relative z-10">
                  <Calendar size={14} className="mr-1" />
                  Updated {article.updatedAt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
