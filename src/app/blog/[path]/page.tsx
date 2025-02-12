// import Hero from "@/Components/BlogPost/Hero";
// import Paragraph from "@/Components/BlogPost/Paragraph";
// import Title from "@/Components/BlogPost/Title";
// import Bulleting from "@/Components/BlogPost/Bulleting"; // Import the Bullet component
// import Profile from "@/Components/BlogPost/Profile"; // Import the Profile component
// import path from "path";
// import { promises as fs } from "fs";
// import Toc from "@/Components/BlogPost/Toc";

// const readJsonFile = async (params: { path: string }) => {
//   try {
//     const filePath = path.join(
//       process.cwd(),
//       "src",
//       "Data",
//       `${params.path}.json`
//     );

//     const fileExists = await fs
//       .access(filePath)
//       .then(() => true)
//       .catch(() => false);
//     if (!fileExists) {
//       return null;
//     }
//     const fileContent = await fs.readFile(filePath, "utf8");
//     // Parse and return the JSON data
//     const jsonData = JSON.parse(fileContent);
//     return jsonData;
//   } catch (error) {
//     console.error("Error reading/parsing file:", error);
//     return null;
//   }
// };

// Define an interface for the blog content item
// interface BlogContentItem {
//   title?: string;
//   id?: string;
//   subtitle?: string;
//   paragraph?: string;
//   additionalContent?: string;
//   bulletPoints?: string[];
//   Maintitle?: string;
//   profile?: {
//     name: string;
//     role: string;
//     image: string;
//     quote: string;
//   };
// }
export default async function BlogPost() {
  // const currentBlog = await readJsonFile(params);
  // if (!currentBlog) {
  //   return <div>Blog not found</div>;
  // }

  return (
    <div>
      {/* Hero Section */}
      {/* <Hero
        category={currentBlog?.category}
        subCategory={currentBlog?.subCategory}
        title={currentBlog?.title}
        description={currentBlog?.description}
        authors={currentBlog?.authors}
        imageSrc={currentBlog?.imageSrc}
        altText={currentBlog?.altText}
      />
      <aside className="py-4 bg-gray-100">
        <Toc blogContent={currentBlog?.blogContent} />
      </aside>
      <div className="-mt-32">
        {currentBlog?.blogContent.map(
          (item: BlogContentItem, index: number) => (
            <div key={index}>
              {Object.keys(item)[0] === "title" && (
                <Title Maintitle={item?.title} id={item?.id} />
              )}
              {Object.keys(item)[0] === "subtitle" && (
                <Title subtitle={currentBlog?.subtitle} />
              )}
              {Object.keys(item)[0] === "paragraph" && (
                <Paragraph content={item?.paragraph} />
              )}
              {Object.keys(item)[0] === "additionalContent" && (
                <Paragraph additionalContent={item?.additionalContent} />
              )}
              {Object.keys(item)[0] === "bulletPoints" && (
                <Bulleting items={item?.bulletPoints || []} />
              )}
              {Object.keys(item)[0] === "Maintitle" && (
                <Title Maintitle={item?.Maintitle} />
              )}
              {Object.keys(item)[0] === "profile" && item.profile && (
                <Profile
                  name={item.profile.name}
                  role={item.profile.role}
                  image={item.profile.image}
                  quote={item.profile.quote}
                />
              )}
            </div>
          )
        )}
      </div> */}
    </div>
  );
}
