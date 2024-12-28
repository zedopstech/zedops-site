import { Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  const FooterContent = {
    logoContent:
      "Empowering construction with innovative solutions to simplify workflows, enhance collaboration, and drive success. Build smarter and achieve seamless project execution with ZedOps.",
    socialMedia: [
      { icon: Twitter, url: "https://x.com/zedopstech" },
      { icon: Linkedin, url: "https://www.linkedin.com/company/zedops/" },
      { icon: Instagram, url: "" },
    ],
    sections: [
      {
        title: "Explore",
        options: [
          { name: "Home", url: "#hero" },
          { name: "Features", url: "#features" },
          { name: "About Us", url: "/about-us" },
          { name: "Book a Demo", url: "/book-a-demo" },
        ],
      },
      {
        title: "Resources",
        options: [
          { name: "Knowledge Base", url: "" },
          { name: "Webinars", url: "" },
          { name: "Blog", url: "" },
          { name: "Case Studies", url: "" },
          { name: "FAQs", url: "" },
          { name: "Safety Guidelines", url: "" },
        ],
      },
      {
        title: "Legal",
        options: [
          { name: "Terms of Service", url: "" },
          { name: "Privacy Policy", url: "" },
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
          Venus Plaza, 120 Feet Rd, Ramalakshmi Nagar, Surveyor Colony,
          Moondrumavadi, Madurai, TamilNadu 625007, IN
        </>
      ),
    },
  };

  return (
    <footer className="bg-white">
      <div className="pt-12 sm:pt-16 lg:pt-20 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-20">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="#" title="">
              <Logo variant="primary" />
            </Link>
            <p className="max-w-md mt-6 text-md leading-6">
              {FooterContent.logoContent}
            </p>
          </div>

          {/* Footer Sections */}
          {FooterContent.sections.map((section, index) => (
            <div key={index}>
              <p className="text-xs font-bold uppercase">{section.title}</p>
              <ul className="mt-6 space-y-5">
                {section.options.map((option, idx) => (
                  <li key={idx}>
                    <Link
                      href={option.url}
                      title={option.name}
                      className="flex text-sm font-normal transition-all duration-200 transform hover:translate-x-1 hover:text-primary"
                    >
                      {option.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <p className="text-xs font-bold uppercase">
              {FooterContent.contactInfo.title}
            </p>
            <div className="mt-2">
              <p className="text-base font-semibold text-primary">
                <a href={`mailto:${FooterContent.contactInfo.email}`}>
                  {FooterContent.contactInfo.email}
                </a>
              </p>
              <ul className="flex items-center mt-4 space-x-2">
                {FooterContent.socialMedia.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-gray-500 transition-all duration-200 hover:text-primary"
                    >
                      <item.icon className="w-5 h-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-8 border-gray-200 lg:mt-8" />
      </div>
      {/* Footer Bottom */}
      <div className=" h-16 w-full flex flex-col items-center justify-center">
        <p className="text-sm font-normal leading-6 ">
          &copy; 2024, All Rights Reserved by{" "}
          <span className="text-primary font-bold">ZedOps</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
