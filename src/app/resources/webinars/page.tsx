import React from "react";

import { WEBINARS_PAGE } from "@/Data/resources/webinar";

import SearchSection from "@/Components/solutions/SearchSection";
import Card from "@/Components/solutions/Card";


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
