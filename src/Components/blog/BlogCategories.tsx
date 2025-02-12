import { MoveRightIcon } from "lucide-react";

export default function BlogCategories({
  title,
  description,
  color,
  icon,

}: {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
      <a href="https://learn.customer.io/case-studies">
        <div className={`size-full overflow-hidden text-foreground rounded p-6 md:p-8 theme-purple group h-full border border-transparent ${color} transition-all ease-out translate-y-0 hover:bg-background-dark hover:-translate-y-1`}>
          <div className="flex h-full flex-col justify-between gap-8">
            <div>
              <div className="relative mb-3 inline-flex rounded-xs border border-transparent bg-background-lighter p-1.5 text-foreground transition-all ease-out-fast group-hover:bg-background-light">
                {icon}
              </div>
              <h3 className="mb-2 text-h6">{title}</h3>
              <p className="text-lg leading-tight text-foreground-muted">
                {description}
              </p>
            </div>
            <div className="flex flex-row items-center justify-between text-lg font-semibold text-foreground-muted transition-colors group-hover:text-foreground">
              View all
             <MoveRightIcon className="size-5 opacity-0 transition-all -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
            </div>
          </div>
        </div>

      </a>
  );
}
