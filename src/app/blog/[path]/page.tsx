import Hero from "../../components/BlogPost/Hero";
import Paragraph from "../../components/BlogPost/Paragraph";
import Title from "../../components/BlogPost/Title";
import Bulleting from "../../components/BlogPost/Bulleting";  // Import the Bullet component
import Profile from "../../components/BlogPost/Profile";  // Import the Profile component

const BLOG_CONTENT: any = {
  blog_one: {
    category: "Customer data",
    subCategory: "Personalization",
    title: "Tailor product recommendations for every industry",
    description:
      "Isn't it great when a brand knows you so well that they recommend exactly what you need—even before you know you need it? Let's explore how personalized recommendations can be used in industries like edtech, fintech, SaaS, healthcare, and e-commerce.",
    authors: [
      { name: "Jess Cvija", role: "Customer Success Manager", image: "/blog/blog profile-1.png" },
      { name: "Alexandra Hubley", role: "Sr. Content Strategist", image: "/blog/blog profile-1.png" },
    ],
    imageSrc: "/blog/blog1.png",
    altText: "Personalized Product Recommendations",
    paragraph:
      "Personalized product recommendations use customer data and advanced algorithms to suggest items that are most likely to resonate with a particular consumer. In industries such as edtech, fintech, and e-commerce, businesses can leverage this technology to improve customer experience and increase sales. In this article, we will explore how personalized recommendations can be applied in these sectors to drive growth and customer satisfaction.",
    additionalContent: 
      "The adoption of personalized recommendations leads to increased engagement, higher conversion rates, and better customer loyalty. As industries like healthcare continue to digitize, they can take advantage of personalized recommendations to provide tailored treatment options and improve overall patient care.",
    Maintitle: "Tailor product recommendations for every industry",
    subtitle: "Edtech",
    bulletPoints: [ 
      "Improved customer experience",
      "Increased conversion rates",
      "Better customer engagement",
      "Personalized treatment options in healthcare"
    ],
    profile: {  // Add profile data
      name: "Wouter Hol",
      role: "CEO at Suitsupply",
      image: "/blog/blog profile-1.png",
      quote: "Personalization is a huge thing for Suitsupply in general. We need to find the perfect fit, and this doesn’t just go for our suits, but for customers as well."

    }
  },
};

export default function BlogPost({ params }: { params: { path: string } }) {
  const currentBlog = BLOG_CONTENT[params?.path || "blog_one"];

  return (
    <div>
      {/* Title Section (Main title) */}

      {/* Hero Section */}
      <Hero
        category={currentBlog.category}
        subCategory={currentBlog.subCategory}
        title={currentBlog.title}
        description={currentBlog.description}
        authors={currentBlog.authors}
        imageSrc={currentBlog.imageSrc}
        altText={currentBlog.altText}
      />

      {/* Paragraph Section */}
      <Paragraph
        content={currentBlog.paragraph}
        additionalContent={currentBlog.additionalContent}
      />

      {/* Bullet Points Section */}
      <Bulleting items={currentBlog.bulletPoints} />

      <Title Maintitle={currentBlog.Maintitle} />

      {/* Title Section (Subtitle) */}
      <Title subtitle={currentBlog.subtitle} />

      {/* Another Paragraph Section */}
      <Paragraph
        additionalContent={currentBlog.additionalContent}
      />

      {/* Profile Section */}
      <Profile
        name={currentBlog.profile.name}
        role={currentBlog.profile.role}
        image={currentBlog.profile.image}
        quote={currentBlog.profile.quote}
      />
    </div>
  );
}
