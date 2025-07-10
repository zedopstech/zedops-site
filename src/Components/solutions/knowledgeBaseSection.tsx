"use client";

import Link from "next/link";

import { BookOpen, Folder, Calendar } from "lucide-react";

import React, { useState } from "react";

type Article = {
  title: string;

  description: string;

  slug: string;

  tag: string;

  readTime: string;

  updatedAt: string;

  icon?: React.ReactNode;
};

type SubGroup = {
  title: string;

  description: string;

  icon?: React.ReactNode;

  articles: Article[];
};

type ArticleGroup = {
  title: string;

  icon?: React.ReactNode;

  articles?: Article[];

  subGroups?: SubGroup[];
};

type Props = {
  sectionTitle: string;

  sectionDescription: string;

  groups: ArticleGroup[];
};

export default function KnowledgeBaseSection({
  sectionTitle,

  sectionDescription,

  groups,
}: Props) {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const articleCount = groups.reduce((total, group) => {
    const topLevelCount = group.articles?.length ?? 0;

    const subGroupCount =
      group.subGroups?.reduce(
        (subTotal, sg) => subTotal + (sg.articles?.length ?? 0),

        0
      ) ?? 0;

    return total + topLevelCount + subGroupCount;
  }, 0);

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

      {/* Groups */}

      {groups.map((group, i) => {
        const subGroups = group.subGroups ?? [];

        const hasSubGroups = subGroups.length > 0;

        const hasArticles =
          Array.isArray(group.articles) && group.articles.length > 0;

        // If a folder is selected

        if (selectedFolder && hasSubGroups) {
          return (
            <div key={i} className="mb-10">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-secondary">
                {group.icon ?? <Folder size={16} />} {group.title}
              </h2>

              <button
                onClick={() => setSelectedFolder(null)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-secondary bg-primary border border-secondary px-3 py-1.5 rounded-md hover:bg-secondary hover:text-white transition-colors duration-200 mb-4"
              >
                ← Back to Folders
              </button>

              {subGroups

                .filter((sg) => sg.title === selectedFolder)

                .map((subGroup, j) => (
                  <div key={j} className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      {subGroup.icon ?? <Folder size={14} />} {subGroup.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-3">
                      {subGroup.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                      {subGroup.articles.map((article, index) => (
                        <ArticleCard key={index} article={article} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          );
        }

        // Default view (no folder selected)

        if (!selectedFolder) {
          return (
            <div key={i} className="mb-10">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-secondary">
                {group.icon ?? <Folder size={16} />} {group.title}
              </h2>

              {/* SubGroup Folders */}

              {hasSubGroups && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {subGroups.map((subGroup, j) => {
                    const latestArticle = subGroup.articles?.length
                      ? subGroup.articles.reduce((latest, article) =>
                          new Date(article.updatedAt) >
                          new Date(latest.updatedAt)
                            ? article
                            : latest
                        )
                      : null;

                    return (
                      <button
                        key={j}
                        onClick={() => setSelectedFolder(subGroup.title)}
                        className="group relative block bg-white border border-gray-200 p-6 rounded-xl text-left overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                      >
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300 z-0" />

                        <h3 className="text-lg uppercase font-black text-secondary mb-1 relative z-10">
                          {subGroup.title}
                        </h3>

                        <p className="text-gray-500 text-sm font-medium relative z-10">
                          {subGroup.description}
                        </p>

                        {latestArticle?.updatedAt && (
                          <p className="flex items-center text-xs text-gray-400 mt-3 relative z-10">
                            <Calendar size={14} className="mr-1" />
                            Updated {latestArticle.updatedAt}
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Top-level Articles */}

              {!hasSubGroups && hasArticles && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {group.articles!.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                  ))}
                </div>
              )}
            </div>
          );
        }

        return null;
      })}
    </section>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/resources/knowledge-base/${article.slug}`}
      className="group relative block bg-white border border-gray-200 p-6 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
    >
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300 z-0" />

      <h3 className="text-lg uppercase font-black text-secondary mb-1 group-hover:text-secondary transition-colors duration-300 relative z-10">
        {article.title}
      </h3>

      <p className="text-gray-500 text-sm font-medium group-hover:text-gray-600 transition-colors duration-300 relative z-10">
        {article.description}
      </p>

      <p className="flex items-center text-xs text-gray-400 mt-3 relative z-10">
        <Calendar size={14} className="mr-1" />
        Updated {article.updatedAt}
      </p>
    </Link>
  );
}
