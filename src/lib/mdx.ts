import fs from "fs";

import path from "path";

import matter from "gray-matter";

import { compile, run } from "@mdx-js/mdx";

import * as runtime from "react/jsx-runtime";

export async function getMdxComponent(slug: string[]) {
  const filePath = path.join(process.cwd(), "src/content", ...slug) + ".mdx";

  if (!fs.existsSync(filePath)) {
    throw new Error(`MDX file not found for slug: ${slug.join("/")}`);
  }

  const raw = fs.readFileSync(filePath, "utf8");

  const { content } = matter(raw);

  const compiled = await compile(content, {
    outputFormat: "function-body",
  });

  const mod = await run(compiled, {
    ...runtime,

    baseUrl: import.meta.url,
  });

  return mod.default;
}
