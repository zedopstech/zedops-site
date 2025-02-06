import Hero from "../../components/BlogPost/Hero";
import Paragraph from "../../components/BlogPost/Paragraph";
import Title from "../../components/BlogPost/Title";
import Bulleting from "../../components/BlogPost/Bulleting";  // Import the Bullet component
import Profile from "../../components/BlogPost/Profile";  // Import the Profile component
import path from 'path';
import { promises as fs } from 'fs';

const readJsonFile = async (params: { path: string }) => {
  try {
    const filePath = path.join(process.cwd(), 'src', 'Data', `${params.path}.json`); 

    const fileExists = await fs.access(filePath).then(() => true).catch(() => false);
    if (!fileExists) {
      return null;
    }
    const fileContent = await fs.readFile(filePath, 'utf8');
    // Parse and return the JSON data
    const jsonData = JSON.parse(fileContent);
    return jsonData;
  } catch (error) {
    console.error("Error reading/parsing file:", error);
    return null;
  }
};


export default async function BlogPost({ params }: { params: { path: string } }) {
  
 const currentBlog = await readJsonFile(params);
 if (!currentBlog) {
  return  <div>Blog not found</div>;
 }




  return (
    <div>
      {/* Title Section (Main title) */}

      {/* Hero Section */}
      <Hero
        category={currentBlog?.category}
        subCategory={currentBlog?.subCategory}
        title={currentBlog?.title}
        description={currentBlog?.description}
        authors={currentBlog?.authors}
        imageSrc={currentBlog?.imageSrc}
        altText={currentBlog?.altText}
      />

      {/* Paragraph Section */}
      <Paragraph
        content={currentBlog?.paragraph}
        additionalContent={currentBlog?.additionalContent}
      />

      {/* Bullet Points Section */}
      <Bulleting items={currentBlog?.bulletPoints} />

      <Title Maintitle={currentBlog?.Maintitle} />

      {/* Title Section (Subtitle) */}
      <Title subtitle={currentBlog?.subtitle} />

      {/* Another Paragraph Section */}
      <Paragraph
        additionalContent={currentBlog?.additionalContent}
      />

      {/* Profile Section */}
      <Profile
        name={currentBlog?.profile.name}
        role={currentBlog?.profile.role}
        image={currentBlog?.profile.image}
        quote={currentBlog?.profile.quote}
      />
    </div>
  );
}
