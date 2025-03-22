import React from "react";


import { KNOWLEDGE_PAGE} from "@/Data/data";

import SearchSection from "@/components/solutions/SearchSection";
import Card from "@/components/solutions/Card";
import GetStartedSection from "@/components/solutions/GetStartedSection";

export default function KNOWLEDGEPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <SearchSection {...KNOWLEDGE_PAGE.searchSectionProps} />
      <Card {...KNOWLEDGE_PAGE.cardSectionProps} />
      <GetStartedSection {...KNOWLEDGE_PAGE.getStartedProps} />
    </div>
  );
}
