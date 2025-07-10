// Components/Common/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  slug: string[];
  baseurl: string;
};

export default function Breadcrumbs({ slug, baseurl }: Props) {
  return (
    <nav className="text-sm text-muted-foreground mb-6 flex items-center font-medium flex-wrap gap-1 text-gray-500">
      <Link href={baseurl} className="hover:underline font-bold">
        <span className="text-gray-500 font-bold">Knowledge</span>
      </Link>

      {slug.map((part, idx) => {
        const isLast = idx === slug.length - 1;
        const title = part
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        const href = `${baseurl}/${slug.slice(0, idx + 1).join("/")}`;

        return (
          <div key={idx} className="flex items-center gap-1">
            <ChevronRight size={14} />
            {isLast ? (
              <span className="text-foreground font-medium capitalize">{title}</span>
            ) : (
              <Link href={href} className="hover:underline capitalize">
                {title}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
