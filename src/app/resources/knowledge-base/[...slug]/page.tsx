import { getMdxComponent } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import { Info } from "lucide-react";

export default async function KnowledgeBasePage({
  params,
}: {
  params: { slug: string[] };
}) {
  try {
    const Content = await getMdxComponent(params.slug);

    return (
      <section className="min-h-screen px-4 md:px-6 py-12 bg-custombg">
        <div className="max-w-4xl mx-auto">
          {/* ✅ Reusable Breadcrumb Component */}
          <Breadcrumbs slug={params?.slug} baseurl={'/resources/knowledge-base'} />

          {/* Page Content */}
          <div className="rounded-xl shadow-md border border-gray-200">
            {/* Title with background */}
            <div className="bg-secondary px-8 py-6 rounded-t-xl">
              <h1 className="text-3xl md:text-4xl font-semibold text-primary capitalize">
                {params?.slug[params?.slug?.length - 1]?.replace(/-/g, " ")}
              </h1>
            </div>

            {/* Optional Info Banner */}
            {/* <div className="px-8 mt-4">
              <div className="bg-blue-50 text-blue-800 px-4 py-3 rounded-md mb-6 text-sm border border-blue-200 flex items-start gap-2">
                <Info size={16} className="mt-0.5" />
                <p>
                  Set up custom roles with specific permissions to control
                  access to different parts of your application.
                </p>
              </div>
            </div> */}

            {/* MDX Article Content */}
            <article className="prose prose-blue px-8 pb-8 max-w-none text-gray-800 bg-custombg rounded-xl">
              <Content />
            </article>
          </div>
        </div>
      </section>
    );
  } catch (err) {
    notFound();
  }
}
