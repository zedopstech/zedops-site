import { getMdxComponent } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";

export default async function KnowledgeBasePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  try {
    const awaitedParams = await params;
    const slug = awaitedParams.slug;

    const Content = await getMdxComponent(slug);

    return (
      <section className="min-h-screen px-4 md:px-6 py-12 bg-custombg">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs slug={slug} baseurl={'/resources/knowledge-base'} />
          {/* Page Content */}
          <div className="rounded-xl shadow-md border border-gray-200">
            {/* Title with background */}
            <div className="bg-secondary px-8 py-6 rounded-t-xl">
              <h1 className="text-3xl md:text-4xl font-semibold text-primary capitalize">
                {slug[slug.length - 1]?.replace(/-/g, " ")}
              </h1>
            </div>

            {/* MDX Article Content */}
            <article className="prose prose-blue px-8 pb-8 pt-8 max-w-none text-gray-800 bg-custombg rounded-xl">
              <Content />
            </article>
          </div>
        </div>
      </section>
    );
  } catch{
    notFound();
  }
}
