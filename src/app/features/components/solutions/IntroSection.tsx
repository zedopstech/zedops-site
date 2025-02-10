import { FC } from "react";
import { Play } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  linkHref?: string;
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  description,
  buttonLabel,
  linkHref,
}) => {
  return (
    <section className="overflow-x-clip max-w-6xl mx-auto py-12 sm:py-20 md:py-24 lg:py-28 bg-background relative -mt-header flex min-h-[500px] items-center text-foreground lg:pb-28 lg:pt-24">
      <div className="container flex flex-col gap-6 pt-header text-center">
        <div>
          {title && (
            <div className="mb-2 inline-block max-h-8 text-accent ">
              <div className="inline-flex items-center gap-x-3 text-sm font-bold text-accent uppercase tracking-wide">
                {title}
              </div>
            </div>
          )}
          {subtitle && (
            <h1 className="mx-auto max-w-[20ch] text-primary first-letter:capitalize text-4xl md:text-7xl font-semibold ">
              {subtitle}
            </h1>
          )}
        </div>
        {description && (
          <div>
            <p className="mx-auto max-w-[60ch] text-primary text-md">
              {description}
            </p>
          </div>
        )}

        {buttonLabel && linkHref && (
          <div className="flex items-center justify-center gap-2 pt-12 md:pt-8 ">
            <button className="group relative z-[1] inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold leading-[50%] ring-offset-background transition-all duration-100 after:absolute after:inset-0 after:z-[-1] after:rounded-full after:bg-primary after:transition-all after:duration-300 after:ease-out-fast hover:after:border-foreground hover:after:bg-primary hover:after:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:after:bg-foreground active:after:scale-100 disabled:pointer-events-none disabled:opacity-50 after:border-2 after:border-transparent h-12 px-5 py-2 gap-3 pl-1 hover:cursor-pointer text-background">
              <div className="inline-flex size-10 items-center justify-center rounded-full bg-background">
                <span className="relative flex size-10 items-center justify-center overflow-hidden text-primary">
                  <span className="relative transition-button-right">
                    <Play className=" h-4 w-5" />
                  </span>
                  <span className="absolute transition-button-left">
                    <Play className=" h-4 w-5" />
                  </span>
                </span>
              </div>
              Product tour
            </button>
            <div className="flex flex-col space-y-1.5 text-center sm:text-left"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
