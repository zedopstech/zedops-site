// Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Components/UI/button";

interface HeroProps {
  title ?: string;
  subtitle ?: string;
  description ?: string;
  buttonLabel?: string;
  imageSrc : string;
  imageAlt : string;
  linkHref : string;
}

const Hero: React.FC<HeroProps> = ( { title, subtitle, description, buttonLabel, imageSrc, imageAlt, linkHref } ) => {
 return (
    <section
      id="hero"
      className="mx-auto max-w-6xl min-h-[94vh] gap-8 flex flex-col lg:grid lg:grid-cols-2 lg:gap-0 items-center overflow-hidden justify-between"
    >
      {/* Hero Text Section */}
      <div className="flex flex-col md:w-3/4 lg:w-full px-6 lg:px-0 md:items-center justify-between lg:items-start lg:justify-center pt-4 md:pt-8 lg:pt-0 text-center lg:text-left">
        <h1 className="mt-4 text-3xl text-start md:text-center lg:text-start lg:text-6xl text-primary font-medium">
          {title}
        </h1>
        {subtitle && 
        <h1 className="mt-4 text-3xl text-start md:text-center lg:text-start lg:text-6xl text-primary font-medium">
          {subtitle}
        </h1> 
        }
        <p className="mt-6 text-lg text-[#1BB387] text-start md:text-center lg:text-start font-bold leading-relaxed max-w-xl">
          {description}
        </p>
        {buttonLabel &&
        <div className="mt-8 flex flex-row justify-start md:justify-center lg:justify-start items-center gap-4">
          <Link href={linkHref} title="Book a demo">
            <Button className="px-8 py-6 font-medium">{buttonLabel}</Button>
          </Link>
        </div>
        }
      </div>

      {/* Hero Image Section */}
      <div className="md:h-[60vh] lg:h-auto">
        <Image
          src={imageSrc}
          width={800}
          height={400}
          alt={imageAlt}
          objectPosition="top center"
        />
      </div>
    </section>
  );
};

export default Hero;
