import Image from "next/image";
interface App {
  href: string;
  image: string;
  name: string;
  description: string;
}

interface FeatureIntegrationType {
  title: string;
  subtitle: string;
  apps: App[];
}
import { MoveRightIcon } from "lucide-react";

export default function FeatureIntegration({
  FeatureIntegration,
}: {
  FeatureIntegration: FeatureIntegrationType;
}) {
  return (
    <>
      <section className="relative overflow-x-clip py-12 sm:py-20 md:py-24 lg:py-28 theme-green light flex flex-col gap-20 bg-white text-foreground">
        <div className="container flex flex-col gap-6 text-center">
          <div>
            <div className="mb-2 inline-block max-h-8 text-accent">
              <div className="inline-flex items-center gap-x-3 text-sm font-bold uppercase tracking-wide">
                {FeatureIntegration?.title}
              </div>
            </div>
            <h2 className="mx-auto max-w-[22ch] first-letter:capitalize text-center text-4xl font-medium">
              {FeatureIntegration?.subtitle}
            </h2>
          </div>
        </div>
        <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 mx-auto max-w-6xl">
          {FeatureIntegration?.apps.map((app: App, index: number) => (
            <a href={app.href} key={index}>
              <div className="size-full overflow-hidden rounded p-6 md:p-8 group h-full border border-gray-100 bg-custombg transition-all ease-out translate-y-0 hover:border-gray-200 hover:-translate-y-1">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <Image
                        src={app.image}
                        alt={app.name}
                        className="object-fit size-12 object-left"
                      />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold leading-tight first-letter:normal-case">
                        Amazon S3
                      </h3>
                      <p className="text-base leading-tight text-foreground-muted group-hover:text-foreground">
                        Streamline data transfer from Customer.io to Amazon S3
                        storage, including messages, people, metrics, and more.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between text-base font-semibold text-muted transition-colors">
                    Learn more
                    <MoveRightIcon className="size-5 opacity-0 transition-all ease-out-fast -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="container relative">
          <div className="flex items-center justify-center gap-2">
            <a
              target="_blank"
              className="group relative z-[1] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-bold leading-[50%] ring-offset-background transition-all duration-100 after:absolute after:inset-0 after:z-[-1] after:rounded-full after:bg-back after:transition-all after:duration-300 after:ease-out-fast hover:after:border-foreground hover:after:bg-background hover:after:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:after:bg-foreground active:after:scale-100 disabled:pointer-events-none disabled:opacity-50 duration-0 after:border-2 after:border-foreground after:bg-transparent hover:text-white active:text-background h-12 px-5 py-2"
              href="#"
            >
              <span className="relative flex min-h-10 flex-col justify-center overflow-hidden">
                <span className="relative transition-all duration-500 ease-out-fast translate-y-0 group-hover:opacity-0 group-hover:-translate-y-10">
                  See all integrations
                </span>
                <span className="absolute opacity-0 transition-all duration-500 ease-out-fast translate-y-10 group-hover:opacity-100 group-hover:-translate-y-0">
                  See all integrations
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
