import BlogHeader from "../components/blog/BlogHeader";
import BlogCategories from "../components/blog/BlogCategories";
import BlogGrid from "../components/blog/BlogGrid";
import { BLOG_DATA } from "@/Data/blogData";

export default function BlogPage() {
  return (
    <div>
      <BlogHeader 
        title="BLOG"
        heading="The latest tips, best practices, news, and expert insights"
      />

       {/* Blog posts grid */}
       <BlogGrid posts={BLOG_DATA.posts} />

      {/* Category sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 max-w-6xl mx-auto">
        <BlogCategories 
          title="Guides"
          description="Expert tips and strategies to level up your skills"
          color="bg-green-100"
        />
        <BlogCategories 
          title="Webinars"
          description="Learn from industry experts in helpful videos"
          color="bg-purple-100"
        />
        <BlogCategories 
          title="Case studies"
          description="See how top brands achieve their goals"
          color="bg-blue-100"
        />
       
      </div>

     
    </div>
  )
} 