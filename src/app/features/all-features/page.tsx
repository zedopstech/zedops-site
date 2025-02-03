import { ALL_FEATURES } from '@/Data/data'
import React from 'react'
import IntroSection from '../components/solutions/IntroSection'
import EmailFeatures from '../components/solutions/EmailFeatures'
import CtaSection from '../components/solutions/CtoSection'

export default function page() {
  return (
    <div>
       <IntroSection {...ALL_FEATURES.heroprops} />
       <EmailFeatures title="All Features" features={ALL_FEATURES.features} />
       <EmailFeatures title="All Features" features={ALL_FEATURES.features} />
       <EmailFeatures title="All Features" features={ALL_FEATURES.features} />
       <CtaSection {...ALL_FEATURES.ctaProps} />
    </div>
  )
}
