import React from "react";

import { WEBINARS_PAGE } from "@/Data/data";

import SearchSection from "@/components/solutions/SearchSection";
import Card from "@/components/solutions/Card";


export default function WEBINARSPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <SearchSection {...WEBINARS_PAGE.searchSectionProps} />
      <Card {...WEBINARS_PAGE.cardSectionProps} />
      
    </div>
  );
}
