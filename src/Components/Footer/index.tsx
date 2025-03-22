import { Instagram, Linkedin, Twitter, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "../Common/Logo";
import Link from "next/link";

const Footer = () => {
  const FooterContent = {
    logoContent:
      "Streamlining construction operations with advanced intelligence to optimize workflows, improve collaboration, and ensure project success. Build efficiently and deliver exceptional results with ZedOps.",
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
          { name: "Solutions", url: "#solutions" },
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
          { name: "Security", url: "" },
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
      phone: "+91 9876543210",
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
    <footer className="bg-background text-white relative overflow-hidden">
      <div className="relative z-10 px-6 lg:px-0 pt-16 pb-8">
        <div className="mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
            {/* Logo Section */}
            <div className="lg:col-span-5">
              <Link href="#" title="ZedOps Home" className="inline-block">
                <Logo variant="primary" />
              </Link>
              <p className="mt-6 text-gray-200 text-base leading-relaxed max-w-md">
                {FooterContent.logoContent}
              </p>
              
              {/* Social Media */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-100 mb-3">Follow Us</p>
                <div className="flex items-center space-x-4">
                  {FooterContent.socialMedia.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-secondary text-secondary hover:text-white  transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <item.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-8">
                {FooterContent.sections.slice(0, 2).map((section, index) => (
                  <div key={index}>
                    <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                      {section.title}
                    </p>
                    <ul className="space-y-3">
                      {section.options.map((option, idx) => (
                        <li key={idx}>
                          <Link
                            href={option.url}
                            title={option.name}
                            className="group flex items-center text-gray-200 hover:text-white transition-all duration-200 transform hover:translate-x-1"
                          >
                            <span>{option.name}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Legal Section */}
              <div className="mt-8">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  {FooterContent.sections[2].title}
                </p>
                <ul className="space-y-3">
                  {FooterContent.sections[2].options.map((option, idx) => (
                    <li key={idx}>
                      <Link
                        href={option.url}
                        title={option.name}
                        className="group flex items-center text-gray-200 hover:text-white transition-all duration-200 transform hover:translate-x-1"
                      >
                        <span>{option.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                {FooterContent.contactInfo.title}
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${FooterContent.contactInfo.email}`}
                  className="flex items-start group"
                >
                  <div className="mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-secondary transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-200">Email Us</p>
                    <p className="text-sm text-primary group-hover:text-primary/80 transition-colors duration-200">
                      {FooterContent.contactInfo.email}
                    </p>
                  </div>
                </a>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-secondary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">Our Location</p>
                    <p className="text-sm text-gray-200 mt-1">
                      {FooterContent.contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom / Copyright */}
          <div className="mt-16 pt-8 flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm text-gray-100">
              &copy; {new Date().getFullYear()}, All Rights Reserved by{" "}
              <span className="text-primary font-semibold">ZedOps</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
