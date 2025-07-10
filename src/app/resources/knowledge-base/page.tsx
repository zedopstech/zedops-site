// app/resources/knowledge-base/page.tsx

import React from "react";
import { KNOWLEDGE_PAGE } from "@/Data/resources/knowledge";
import SearchSection from "@/Components/solutions/SearchSection";
// import { Search, PlayCircle } from "lucide-react";
import GetStartedSection from "@/Components/solutions/GetStartedSection";
import Feature from "@/Components/solutions/Features";

export default function KnowledgePage() {
  return (
    <div>
      {/* 🔹 Hero / Welcome Section */}
      <SearchSection {...KNOWLEDGE_PAGE.searchSectionProps} />
      {/* 🔹 Get Started Cards */}
      <GetStartedSection {...KNOWLEDGE_PAGE.getStartedProps} />
      {/* 🔹 Featured Articles + Quick Start */}
      <Feature />
    </div>
  );
}
