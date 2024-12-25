import Link from "next/link";
import { Button } from "../UI/button";
import { Headset } from "lucide-react";

export default function MobileNavigation({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigationOption = [
    { name: "Features", href: "/features" },
    { name: "Resources", href: "/resources" },
    { name: "About Us", href: "/about-us" },
    { name: "Pricing", href: "/pricing" },
  ];
  return (
    <div className="fixed inset-0 bg-gray-50 z-50 flex flex-col justify-between overflow-y-auto p-2 pt-6">
      <div className="ml-auto pr-3">
        <button
          className="bg-transparent"
          onClick={() => setExpanded(!expanded)}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <nav className="space-y-8 flex flex-col items-center py-8">
        {navigationOption.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="text-3xl font-semibold text-gray-900 hover:text-primary"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col items-center gap-4 pb-8">
        <Button
          variant="default"
          className="px-6 py-6 text-xl font-bold"
          size="fullWidth"
        >
          Login
        </Button>
        <Button
          className="px-6 py-6 text-xl font-semibold"
          variant={"ghost"}
          size="fullWidth"
          icon={Headset}
          iconStyle="h-6 w-6"
        >
          Contact Sales
        </Button>
      </div>
    </div>
  );
}
