import React from "react";

import { WEBINARS_PAGE } from "@/Data/data";

import SearchSection from "@/Components/solutions/SearchSection";
import Card from "@/Components/solutions/Card";
import GetStartedSection from "@/Components/solutions/GetStartedSection";

export default function KNOWLEDGEPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <SearchSection {...WEBINARS_PAGE.searchSectionProps} />
      <Card {...WEBINARS_PAGE.cardSectionProps} />
      
    </div>
  );
}
