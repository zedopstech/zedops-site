import { INTEGRATION } from "@/Data/platform/integration";
import IntroSection from "@/Components/solutions/IntroSection";
import IntegrationsSection from "@/Components/solutions/FeatureIntegration";
import FeatureCards from "@/Components/solutions/Featurecards";
import CtoSection from "@/Components/solutions/Ctosection";
export default function page() {
  return (
    <>
    <IntroSection {...INTEGRATION.heroprops} />
    <IntegrationsSection data={INTEGRATION.featureIntegration} />
    <FeatureCards featuresData={INTEGRATION.featuresData} />
    <CtoSection {...INTEGRATION.ctaProps} />
    </>


  )
}
