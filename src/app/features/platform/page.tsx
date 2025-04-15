import React from "react";
import IntroSection from "@/Components/solutions/IntroSection"
import LeadSection from "@/Components/solutions/LeadSection"
import FeatureCards from "@/Components/solutions/Featurecards"
import { PLATFORM_PAGE } from "@/Data/platform/platform-page";
import Mainsection from "@/Components/solutions/Mainsection";
import CtoSection from "@/Components/solutions/Ctosection";
import FeatureSticky from "@/Components/solutions/FeatureSticky";


export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <IntroSection {...PLATFORM_PAGE.heroprops} />
      {/* Use original section name 'campaignChannels' (content updated in data file) */}
      <LeadSection data={PLATFORM_PAGE.campaignChannels} />
      {/* Use original section name 'featuresData' */}
      <FeatureCards featuresData={PLATFORM_PAGE.featuresData} />
      {/* Use original section name 'mainSection' */}
      <Mainsection sections={PLATFORM_PAGE.mainSection} />
      {/* Remove added sections for safety & analytics */}
      {/* Sticky section and CTA remain */}
      <FeatureSticky {...PLATFORM_PAGE.stickySection} />
      <CtoSection {...PLATFORM_PAGE.ctaProps} />
      {/* Hero Content Section */}
      {/* <MainHero {...PROJECTMANAGEMENT_PAGE.heroSectionProps} /> */}
      {/* Features Section */}
      {/* <FeaturesSection {...PROJECTMANAGEMENT_PAGE.featuresSectionProps} /> */}
      {/* Control Section */}
      {/* <Testimonals {...PROJECTMANAGEMENT_PAGE.TestimonalsSectionProps} /> */}

      {/* <EmailFeautres
        title="Project Features"
        features={PROJECTMANAGEMENT_PAGE.featureData} */}
      {/* //   /> */}
      {/* //   <FeatureCards featuresData={PROJECTMANAGEMENT_PAGE.featuresData} />
    //   <CtoSection {...PROJECTMANAGEMENT_PAGE.ctaProps} /> */}
    </div>
  );
}
