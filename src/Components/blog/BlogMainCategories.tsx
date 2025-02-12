import { MoveRightIcon, Pin } from "lucide-react";
import Image from "next/image";
interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface Article {
  title: string;
  link: string;
  category: string;
  categoryLink: string;
  image: string;
  author: Author;
  description?: string; // Optional since it's only present in featuredArticle
}

interface MainCategoryData {
  title: string;
  viewAllLink: string;
  featuredArticle: Article;
  articles: Article[];
}



export default function BlogMainCategories({
  MAIN_CATEGORY_DATA,
}: {
  MAIN_CATEGORY_DATA: MainCategoryData;
}) {
  return (
    <>
      <section className="relative overflow-x-clip py-12 sm:py-20 md:py-24 lg:py-28 bg-black text-white transition-colors duration-400 max-w-6xl mx-auto">
        <div className="container">
          <div className="mb-8 flex flex-row items-center justify-between">
            <h2 className="text-3xl sm:text-4xl">{MAIN_CATEGORY_DATA.title}</h2>

            <a className="group" href={MAIN_CATEGORY_DATA.viewAllLink}>
              <span className="relative inline-flex items-center gap-1 leading-none after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:bg-foreground after:opacity-0 after:transition-all after:ease-out-fast after:group-hover:-bottom-1 after:group-hover:opacity-100 group-active:after:-bottom-1">
                <span className="font-semibold">View all</span>
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <article className="group relative flex flex-1 cursor-pointer rounded-sm border p-3 transition-all ease-out translate-y-0 hover:border-foreground/10 hover:bg-background-darker/60 hover:-translate-y-0.5 dark:hover:bg-background-lighter/50 md:flex-row flex-col gap-4">
              <a
                aria-label="The PLG playbook: Unlocking growth by letting your product shine"
                className="absolute inset-0 z-0"
                href={MAIN_CATEGORY_DATA.featuredArticle.link}
              ></a>
              <a
                className="relative z-10 w-full self-start overflow-hidden rounded-sm sm:aspect-[16/10] aspect-[16/10] max-w-full sm:max-w-full sm:flex-1"
                href={MAIN_CATEGORY_DATA.featuredArticle.link}
              >
                <Image
                  alt="A deep dive into product-led growth"
                  className="aspect-[16/10] h-full rounded-sm object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  src={MAIN_CATEGORY_DATA.featuredArticle.image}
                  style={{ color: " transparent;" }}
                />
                <div className="inline-flex items-center border border-highlight tracking-normal transition-all first-letter:uppercase focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-xs px-2 py-0.5 text-xs font-semibold leading-normal theme-charcoal dark absolute left-3 top-3 gap-1 border-none bg-background-lighter text-foreground shadow-sm">
                  <Pin className="size-4" />
                  <span>{MAIN_CATEGORY_DATA.featuredArticle.category}</span>
                </div>
              </a>
              <div className="w-full sm:flex-1">
                <div className="flex h-full flex-col items-start justify-between gap-8 px-2 md:px-3 md:py-2">
                  <div className="flex w-full flex-col gap-1 sm:gap-2">
                    <div className="flex h-5 flex-row items-center justify-between">
                      <a
                        className="relative z-10 text-sm font-semibold text-accent decoration-1 underline-offset-2 hover:underline"
                        href={MAIN_CATEGORY_DATA.featuredArticle.categoryLink}
                      >
                        {MAIN_CATEGORY_DATA.featuredArticle.category}
                      </a>
                    </div>
                    <a href={MAIN_CATEGORY_DATA.featuredArticle.link}>
                      <h2 className="text-h6 md:text-h5 lg:text-h4">
                        {MAIN_CATEGORY_DATA.featuredArticle.title}
                      </h2>
                    </a>
                    <div className="mt-2">
                      <p className="text-small sm:text-p text-foreground-muted">
                        {MAIN_CATEGORY_DATA.featuredArticle.description}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-nowrap items-center gap-3">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12">
                        <Image
                          alt="Alexandra Hubley"
                          loading="lazy"
                          width="250"
                          height="250"
                          className="h-full origin-left rounded xl:scale-100"
                          sizes="250px"
                          src={MAIN_CATEGORY_DATA.featuredArticle.author.avatar}
                          style={{ color: " transparent;" }}
                        />
                      </span>
                      <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-1 text-sm leading-tight">
                          <span className="font-bold">
                            {MAIN_CATEGORY_DATA.featuredArticle.author.name}
                          </span>
                        </div>
                        <div className="text-sm text-foreground-muted/70">
                          {MAIN_CATEGORY_DATA.featuredArticle.author.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-6 flex flex-row items-center justify-between text-lg font-semibold text-white transition-colors group-hover:text-gray-100">
                <MoveRightIcon className="size-5 opacity-0 transition-all -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </article>
            <div className="flex flex-1 flex-col gap-3 md:flex-row">
              {MAIN_CATEGORY_DATA.articles.map(
                (article: Article, index: number) => (
                  <article
                    key={index}
                    className="group relative flex flex-1 cursor-pointer gap-3 rounded-sm border p-3 transition-all ease-out translate-y-0 hover:border-foreground/10 hover:bg-background-darker/60 hover:-translate-y-0.5 dark:hover:bg-background-lighter/50 flex-row md:flex-col"
                  >
                    <a
                      aria-label={article.title}
                      className="absolute inset-0 z-0"
                      href={article.link}
                    ></a>
                    <a
                      className="relative z-10 w-full self-start overflow-hidden rounded-sm sm:aspect-[16/10] aspect-square max-w-[80px] sm:max-w-[180px] md:max-w-full"
                      href={article.link}
                    >
                      <Image
                        alt={article.title}
                        loading="lazy"
                        width="800"
                        className="aspect-[16/10] h-full rounded-sm object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        src={article.image}
                        style={{ color: " transparent;" }}
                      />
                    </a>
                    <div className="w-full sm:flex-1">
                      <div className="flex h-full flex-col items-start justify-between gap-8 px-1 md:px-2">
                        <div className="flex w-full flex-col gap-1 sm:gap-2">
                          <div className="flex h-5 flex-row items-center justify-between">
                            <a
                              className="relative z-10 text-sm font-semibold text-accent decoration-1 underline-offset-2 hover:underline"
                              href={article.categoryLink}
                            >
                              {article.category}
                            </a>
                          </div>
                          <a href={article.link}>
                            <h2 className="text-lg font-semibold leading-[1.15] sm:text-xl sm:leading-[1.15] lg:text-h6">
                              {article.title}
                            </h2>
                          </a>
                        </div>
                        <div className="hidden md:block">
                          <div className="flex flex-nowrap items-center gap-3">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full border size-10">
                              <Image
                                alt={article.author.name}
                                loading="lazy"
                                width="250"
                                height="250"
                                className="h-full origin-left rounded xl:scale-100"
                                sizes="250px"
                                src={article.author.avatar}
                                style={{ color: " transparent;" }}
                              />
                            </span>
                            <div className="flex flex-col">
                              <div className="flex flex-row items-center gap-1 text-sm leading-tight">
                                <span className="font-bold">
                                  {article.author.name}
                                </span>
                              </div>
                              <div className="text-foreground-muted/70 text-sm">
                                {article.author.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-6 flex flex-row items-center justify-between text-lg font-semibold text-white transition-colors group-hover:text-gray-100">
                      <MoveRightIcon className="size-5 opacity-0 transition-all -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
