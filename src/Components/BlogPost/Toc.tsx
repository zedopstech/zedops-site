interface Profile {
  name: string;
  role: string;
  image: string;
  quote: string;
}

interface BlogContentItem {
  title?: string;
  id?: string;
  paragraph?: string;
  bulletPoints?: string[];
  additionalContent?: string;
  subtitle?: string;
  profile?: Profile;
}
const Toc = ({ blogContent }: { blogContent: BlogContentItem[] }
 ) => {
  

  return (
    <aside className="sticky  rounded-sm border p-4 text-foreground transition-colors duration-400 md:top-[calc(70px+5rem)] md:border-none md:p-0">
      <nav className="flex flex-col gap-4 ml-44  max-w-xs pr-0 sm:pr-4 md:pr-8 lg:pr-16">
        {blogContent.map(
          (section: BlogContentItem, index: number) =>
            Object.keys(section)[0] === "title" && (
              <a
                key={blogContent[index].id}
                href={`#${blogContent[index].id}`}
                className="relative text-sm leading-tight text-foreground-muted/70 transition-all before:absolute before:inset-0 before:-left-4 before:flex before:h-full before:w-[2px] before:items-center before:bg-transparent hover:text-foreground hover:underline hover:opacity-100 lg:text-base"
              >
                {blogContent[index].title}
              </a>
            )
        )}
      </nav>
    </aside>
  );
};

export default Toc;
