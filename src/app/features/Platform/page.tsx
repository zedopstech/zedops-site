import React from "react";
// import Hero from "../../components/solutions/Hero";
// import MainHero from "../../components/solutions/MainHero";
// import FeaturesSection from "../../components/solutions/FeaturesSection";
// import Testimonals from "../../components/solutions/Testimonals";
// import EmailFeautres from "../../components/solutions/EmailFeatures";
// import FeatureCards from "../../components/solutions/FeatureCards";
// import CtoSection from "../../components/solutions/CtoSection";
import IntroSection from "../components/solutions/IntroSection"
import LeadSection from "../components/solutions/LeadSection"
import FeatureCards from "../components/solutions/FeatureCards"
import { PLATFORM_PAGE } from "@/Data/data";
import Mainsection from "../components/solutions/MainSection";
import CtaSection from "../components/solutions/CtoSection";
import FeatureSticky from "../components/solutions/FeatureSticky";
import { Layers, Lock, ShieldCheck } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";

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
      <CtaSection {...PLATFORM_PAGE.ctaProps} />
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
