import { MoveRight, Pin } from "lucide-react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  }
}
const articles = [
    {
      title: "Why email outshines social media for building strong connections",
      category: "Lifecycle marketing",
      categoryLink: "https://learn.customer.io/lifecycle-marketing",
      link: "https://learn.customer.io/lifecycle-marketing/email-vs-social-media",
      imageSrc: "/blog/sampleThree.png",
      imageAlt: "Why email outshines social media for building strong connections",
    },
    {
      title: "BIMI: Increasing security and brand affinity in the inbox",
      category: "Message composing",
      categoryLink: "https://learn.customer.io/message-composing",
      link: "https://learn.customer.io/message-composing/bimi",
      imageSrc: "/blog/sampleFour.png",
      imageAlt: "What is BIMI?",
    },
    {
      title: "Email marketing that deserves a double tap: Inside Buffer’s strategy",
      category: "Case studies",
      categoryLink: "https://learn.customer.io/case-studies",
      link: "https://learn.customer.io/case-studies/buffer",
      imageSrc: "/blog/sampleFive.png",
      imageAlt: "Buffer case study",
    },
    {
      title: "Mobile messaging trends for 2025",
      category: "Mobile marketing",
      categoryLink: "https://learn.customer.io/mobile-marketing",
      link: "https://learn.customer.io/mobile-marketing/mobile-messaging-trends",
      imageSrc: "/blog/sampleTwo.png",
      imageAlt: "Mobile messaging trends for 2025",
    },
  ];

  
export default function BlogGrid({ posts }: { posts: Post[] }) {
  return (
    <section className="relative overflow-x-clip py-12 sm:py-20 md:py-24 lg:py-28 bg-white text-foreground transition-colors duration-400">
    <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:items-start lg:items-stretch">
            <article
                className="group relative flex flex-1 cursor-pointer rounded-sm border border-gray-200 p-3 transition-all ease-out translate-y-0 hover:border-foreground/10 hover:bg-background-darker/60 hover:-translate-y-0.5 dark:hover:bg-background-lighter/50 md:flex-col flex-col gap-4"
            >
                <a aria-label="From silos to synergy: Strategies for better product and marketing collaboration" className="absolute inset-0 z-0" href="https://learn.customer.io/product-led-growth/working-together"></a>
                <a className="relative z-10 w-full self-start overflow-hidden rounded-sm sm:aspect-[16/10] md:max-w-full aspect-[16/10] max-w-full sm:max-w-full" href="https://learn.customer.io/product-led-growth/working-together">
                    <img
                        alt="From silos to synergy: Strategies for better product and marketing collaboration"
                        className="aspect-[16/10] h-full rounded-sm object-cover transition-transform duration-300 ease-out group-hover:scale-105"

                        src="/blog/sampleOne.png"
                    />
                    <div
                        className="inline-flex items-center border border-highlight tracking-normal transition-all first-letter:uppercase focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-xs px-2 py-0.5 text-xs font-semibold leading-normal theme-charcoal dark absolute left-3 top-3 gap-1 border-none bg-background-lighter text-foreground shadow-sm"
                    >
                       <Pin className="w-4 h-5"/>
                        <span>Staff pick</span>
                    </div>
                </a>
                <div className="w-full sm:flex-1">
                    <div className="flex h-full flex-col items-start justify-between gap-8 px-2 md:px-3">
                        <div className="flex w-full flex-col gap-1 sm:gap-2">
                            <div className="flex h-5 flex-row items-center justify-between">
                                <a className="relative z-10 text-sm font-semibold text-accent decoration-1 underline-offset-2 hover:underline" href="https://learn.customer.io/product-led-growth">Product-led growth</a>
                            </div>
                            <a href="https://learn.customer.io/product-led-growth/working-together"><h2 className="text-h6 md:text-h5 lg:text-h4">From silos to synergy: Strategies for better product and marketing collaboration</h2></a>
                            <div className="mt-2">
                                <p className="text-small sm:text-p text-foreground-muted">Seamless customer journeys stem from product-marketing synergy. Learn strategies from our team for fostering trust, communication, and collaboration.</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-nowrap items-center gap-3">
                                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12">
                                    <img
                                        alt="Alexandra Hubley"
                                       
                                        className="h-full origin-left rounded xl:scale-100"
                                        src="/blog/sampleTwo.png"
                                    />
                                </span>
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center gap-1 text-sm leading-tight"><span className="font-bold">Alexandra Hubley</span></div>
                                    <div className="text-sm text-foreground-muted/70">Sr. Content Strategist</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 right-6 flex flex-row items-center justify-between text-lg font-semibold text-foreground-muted transition-colors group-hover:text-foreground">
                   <MoveRight className="size-5 opacity-0 transition-all -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"/>
                </div>
            </article>
            <div className="grid auto-rows-fr grid-cols-1 items-start gap-3 md:items-stretch">
      {articles.map((article, index) => (
        <article
          key={index}
          className="group relative flex flex-1 cursor-pointer gap-3 rounded-sm border border-gray-200 p-3 transition-all ease-out translate-y-0 hover:border-foreground/10 hover:bg-background-darker/60 hover:-translate-y-0.5 dark:hover:bg-background-lighter/50 flex-row md:flex-row"
        >
          <a aria-label={article.title} className="absolute inset-0 z-0" href={article.link}></a>
          <a
            className="relative z-10 w-full self-start overflow-hidden rounded-sm sm:aspect-[16/10] aspect-square max-w-[80px] md:max-w-full sm:max-w-[180px] lg:max-w-56 sm:flex-1"
            href={article.link}
          >
            <img
              alt={article.imageAlt}
              className="aspect-[16/10] h-full rounded-sm object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              src={article.imageSrc}
            />
          </a>
          <div className="w-full sm:flex-1">
            <div className="flex h-full flex-col items-start justify-between gap-8 px-1 md:px-2">
              <div className="flex w-full flex-col gap-1 sm:gap-2">
                <div className="flex h-5 flex-row items-center justify-between">
                  <a className="relative z-10 text-sm font-semibold text-accent decoration-1 underline-offset-2 hover:underline" href={article.categoryLink}>{article.category}</a>
                </div>
                <a href={article.link}>
                  <h2 className="text-lg font-semibold leading-[1.15] sm:text-xl sm:leading-[1.15] lg:text-h6 !text-xl !leading-[1.15]">
                    {article.title}
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
        </div>
    </div>
</section>

  )
} 