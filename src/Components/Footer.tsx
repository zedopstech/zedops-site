import { Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const Footer: React.FC = () => {
  const FooterContent = {
    logoContent:
      "ZedOps is transforming the construction industry by providing innovative, intelligent solutions that simplify project management. We empower teams to collaborate effectively, drive efficiency, and achieve success in every project phase.",
    socialMedia: [
      {
        icon: <Twitter className="hover:text-primary" />,
        url: "https://x.com/zedopstech",
      },
      {
        icon: <Linkedin className="hover:text-primary" />,
        url: "https://www.linkedin.com/company/zedops/",
      },
      {
        icon: <Instagram className="hover:text-primary" />,
        url: "",
      },
    ],
    sections: [
      {
        id: 1,
        title: "Explore",
        options: [
          {
            name: "Home",
            url: "#hero",
          },
          {
            name: "Features",
            url: "#features",
          },
          {
            name: "About Us",
            url: "/about-us",
          },
          {
            name: "Book a Demo",
            url: "#cto",
          },
        ],
      },
      {
        id: 2,
        title: "Resources",
        options: [
          {
            name: "Knowledge Base",
            url: "",
          },
          {
            name: "Webinars",
            url: "",
          },
          {
            name: "Blog",
            url: "",
          },
          {
            name: "Case Studies",
            url: "",
          },
          {
            name: "FAQs",
            url: "",
          },
          {
            name: "Safety Guidelines",
            url: "",
          },
        ],
      },
      {
        id: 3,
        title: "Legal",
        options: [
          {
            name: "Terms of Service",
            url: "",
          },
          {
            name: "Privacy Policy",
            url: "",
          },
        ],
      },
    ],
    contactInfo: {
      title: "Contact Us",
      email: "sales@zedops.com",
      address: (
        <>
          <span className="font-bold">ZedOps HQ</span>
          <br />
          <span>
            Venus Plaza, 120 Feet Rd, Ramalakshmi Nagar, Surveyor Colony,
            Moondrumavadi, Madurai, TamilNadu 625007, IN
          </span>
        </>
      ),
    },
  };
  return (
    <>
      <footer className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-20">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <a href="#" title="" className="">
                <Logo variant={"primary"} />
              </a>
              <p className="max-w-md mt-6 text-sm font-semibold leading-6 ">
                {FooterContent.logoContent}
              </p>

              <ul className="flex items-center mt-8 space-x-3">
                {FooterContent.socialMedia.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      target="_blank"
                      title=""
                      className="inline-flex items-center justify-center p-2 text-gray-500 transition-all duration-200 bg-transparent "
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {FooterContent.sections.map((section, index) => (
              <div key={index} className="">
                <p className="text-xs font-bold  uppercase">{section.title}</p>

                <ul className="mt-6 space-y-5">
                  {section.options.map((option, index) => (
                    <li key={index}>
                      <Link
                        href={option.url}
                        title=""
                        className="flex text-sm font-normal transition-all duration-200 transform hover:translate-x-1 hover:text-primary"
                      >
                        {" "}
                        {option.name}{" "}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <p className="text-xs font-bold uppercase">
                {FooterContent.contactInfo.title}
              </p>

              <div className="space-y-6">
                {/* <p className="mt-2 text-sm font-medium text-gray-500">
                  {FooterContent.contactInfo.address}
                </p> */}
                <p className="text-base font-semibold text-primary">
                  <a href="@email" title="">
                    {" "}
                    {FooterContent.contactInfo.email}{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <hr className="mt-16 border-gray-200 lg:mt-24" />

          <div className="mt-8 text-center">
            <p className="text-sm font-normal leading-6 text-gray-500">
              © Copyright 2024, All Rights Reserved by{" "}
              <span className="text-primary font-bold">ZedOps</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
