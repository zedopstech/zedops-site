import React from "react";
import IntroSection from "@/components/solutions/IntroSection"
import LeadSection from "@/components/solutions/LeadSection"
import FeatureCards from "@/components/solutions/Featurecards"
import { PLATFORM_PAGE } from "@/Data/data";
import Mainsection from "@/components/solutions/Mainsection";
import CtoSection from "@/components/solutions/Ctosection";
import FeatureSticky from "@/components/solutions/FeatureSticky";


export default function PrequalificationPage() {
  // Props configuration

  return (
    <div>
      {/* Hero Section */}
      <IntroSection {...PLATFORM_PAGE.heroprops} />
      <LeadSection data={PLATFORM_PAGE.campaignChannels} />
      <FeatureCards featuresData={PLATFORM_PAGE.featuresData} />
      <Mainsection sections={PLATFORM_PAGE.mainSection} />
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
