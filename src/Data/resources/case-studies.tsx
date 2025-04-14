import { Search, BookOpen } from "lucide-react";

export const CASESTUDIES_PAGE = {
    searchSectionProps: {
      subtitle: "Featured Story",
      title: "Oxford streamlines global projects with Zedops",
      placeholder: "Search",
      videoUrl: "video",
      videoName: "case",
      description:
        "Looking for more case studies? Explore our case study library",
      icons: {
        search: <Search size={20} />,
        video: <BookOpen size={30} />,
      },
    },
  
    cardSectionProps: {
      sectionTitle: "Case Studies",
      cards: [
        {
          imageSrc: "/Solutions/case1.jpg",
          title: "Streamline Labor & Equipment Management: One Powerful Platform",
        },
        {
          imageSrc: "/Solutions/case2.jpg",
          title: "Optimize Workforce & Equipment: Simplify Operations",
        },
        {
          imageSrc: "/Solutions/case3.jpg",
          title: "Boost Efficiency: Unified Labor & Equipment Oversight",
        },
        {
          imageSrc: "/Solutions/case4.jpg",
          title: "Seamless Jobsite Coordination: Labor & Equipment Synced",
        },
        {
          imageSrc: "/Solutions/case5.jpg",
          title: "Smart Construction Management: One Integrated Solution",
        },
        {
          imageSrc: "/Solutions/case6.jpg",
          title: "All-in-One Construction Control: Labor & Equipment Simplified",
        },
      ],
    },
  };