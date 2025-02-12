import React from "react";
import Image from "next/image";
interface Author {
  name: string;
  role: string;
  image: string;
}

interface HeroProps {
  category: string;
  subCategory: string;
  title: string;
  description: string;
  authors: Author[];
  imageSrc: string;
  altText: string;
}

const Hero: React.FC<HeroProps> = ({
  category,
  subCategory,
  title,
  description,
  authors,
  imageSrc,
  altText,
}) => {
  return (
    <section className="flex flex-col md:flex-row w-full mx-auto h-screen bg-black text-white">
      {/* Left Side (Content) */}
      <div className="md:w-1/2 flex flex-col justify-center px-8 md:ml-40 sm:ml-4"> {/* Responsive margin for different screen sizes */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">

            {category} → <span className="text-white font-semibold">{subCategory}</span>
          </p>
          <h1 className="text-4xl max-w-sm font-bold mt-2">{title}</h1>
          <p className="text-lg max-w-md text-gray-300 mt-4">{description}</p>


          {/* Dynamic Author Details */}
          <div className="flex items-center justify-start gap-4 mt-6">
            {authors.map((author, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image className="w-8 h-8 rounded-full" src={author.image} alt={author.name} />
                <span className="text-sm">
                  {author.name} <br />
                  <span className="text-gray-400">{author.role}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="md:h-[60vh] lg:h-auto flex items-center justify-start ">
     <Image
    src={imageSrc}
    width={500}  // You can adjust this width as necessary
    height={400}
    alt={altText}
    objectFit="cover"  // Ensures the image covers the container
    layout="intrinsic"  // Makes the image responsive to screen size
  />
</div>


    </section>
  );
};

export default Hero;
