import { Search, PlayCircle } from "lucide-react";

export const WEBINARS_PAGE = {
    searchSectionProps: {
      title: "What can we help you find?",
      placeholder: "Search",
      videoUrl: "videos",
      videoName: "Videos",
      description: "Searching for more videos? Check out our video library.",
      icons: {
        search: <Search size={20} />,
        video: <PlayCircle size={40} className="text-black fill-white" />,
      },
    },
  
    cardSectionProps: {
      sectionTitle: "Webinars",
      cards: [
        {
          imageSrc: "/Solutions/card1.png",
          title: "Streamline Labor & Equipment Management: One Powerful Platform",
        },
        {
          imageSrc: "/Solutions/card2.png",
          title: "Optimize Workforce & Equipment: Simplify Operations",
        },
        {
          imageSrc: "/Solutions/card3.png",
          title: "Boost Efficiency: Unified Labor & Equipment Oversight",
        },
        {
          imageSrc: "/Solutions/card3.png",
          title: "Seamless Jobsite Coordination: Labor & Equipment Synced",
        },
        {
          imageSrc: "/Solutions/card3.png",
          title: "Smart Construction Management: One Integrated Solution",
        },
        {
          imageSrc: "/Solutions/card3.png",
          title: "All-in-One Construction Control: Labor & Equipment Simplified",
        },
      ],
    },
  };
  