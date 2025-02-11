import React from "react";


import { KNOWLEDGE_PAGE} from "@/Data/data";

import SearchSection from "@/Components/solutions/SearchSection";
import Card from "@/Components/solutions/Card";
import GetStartedSection from "@/Components/solutions/GetStartedSection";

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
