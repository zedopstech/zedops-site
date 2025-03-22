import BlogHeader from "@/components/blog/BlogHeader";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogGrid from "@/components/blog/BlogGrid";
import { BLOG_DATA, MAIN_CATEGORY_DATA } from "@/Data/blogData";
import { BookOpen, Laptop, Tv } from "lucide-react";
import BlogMainCategories from "@/components/blog/BlogMainCategories";




export default function BlogPage() {
  return (
    <div className="bg-black">
      <BlogHeader
        title="BLOG"
        heading="The latest tips, best practices, news, and expert insights"
      />

      {/* Blog posts grid */}
      <BlogGrid posts={BLOG_DATA.posts} />

      {/* Category sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 max-w-6xl mx-auto">
        <BlogCategories
          title="Guides & Tutorials" 
          description="Step-by-step guides and expert tips to master best practices"
          color="bg-emerald-100/80 hover:bg-emerald-100"
          icon={<BookOpen className="w-5 h-5" />}
        />
        <BlogCategories
          title="Live Webinars"
          description="Join interactive sessions with industry leaders and experts"
          color="bg-violet-100/80 hover:bg-violet-100"
          icon={<Laptop className="w-5 h-5" />}
        />
        <BlogCategories
          title="Success Stories"
          description="Real-world examples and proven strategies from leading brands"
          color="bg-sky-100/80 hover:bg-sky-100" 
          icon={<Tv className="w-5 h-5" />}
        />
      </div>

      <BlogMainCategories MAIN_CATEGORY_DATA={MAIN_CATEGORY_DATA} />
    </div>
  );
}
