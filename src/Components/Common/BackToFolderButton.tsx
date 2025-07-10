"use client";

import { useRouter } from "next/navigation";

export default function BackToFolderButton({ slug }: { slug: string[] }) {
  const router = useRouter();

   const parentSlug = 
    slug.length > 3 
      ? slug.slice(0, -3).join("/") 
      : slug.slice(0, -2).join("/");

  return (
    <button
      onClick={() => router.push(`/resources/knowledge-base/${parentSlug}`)}
      className="inline-flex items-center gap-1 text-sm font-semibold text-secondary bg-primary border border-secondary px-3 py-1.5 rounded-md hover:bg-secondary hover:text-white transition-colors duration-200 mb-4"
    >
      ← Back to Folders
    </button>
  );
}
