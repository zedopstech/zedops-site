import React from "react";

import { CASESTUDIES_PAGE } from "@/Data/data";

import SearchSection from "@/components/solutions/SearchSection";
import Card from "@/components/solutions/Card";

export default function CASESTUDIESPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <SearchSection {...CASESTUDIES_PAGE.searchSectionProps} />
      <Card {...CASESTUDIES_PAGE.cardSectionProps} />
    </div>
  );
}
