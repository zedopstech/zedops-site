// src/lib/mdx.ts

import fs from "fs";

import path from "path";

import matter from "gray-matter";

import { compile, run } from "@mdx-js/mdx";

import * as runtime from "react/jsx-runtime";

export async function getMdxComponent(slug: string[]) {
  const filePath = path.join(process.cwd(), "src/content", ...slug) + ".mdx";

  // ✅ Corrected Error Message with backticks

  if (!fs.existsSync(filePath)) {
    throw new Error(`MDX file not found for slug: ${slug.join("/")}`);
  }

  const raw = fs.readFileSync(filePath, "utf8");

  const { content } = matter(raw);

  // ✅ Compile MDX

  const compiled = await compile(content, {
    outputFormat: "function-body",

    // You can add remarkPlugins/rehypePlugins here if needed
  });

  const mod = await run(compiled, {
    ...runtime,

    baseUrl: import.meta.url,
  });

  return mod.default;
}
