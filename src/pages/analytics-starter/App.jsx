import Header from '@/components/Header/Header.jsx'
import { starter } from '@/content/starter.js'

import CertificateBackdrop from './components/CertificateBackdrop/CertificateBackdrop.jsx'
import Closing from './components/Closing/Closing.jsx'
import Faq from './components/Faq/Faq.jsx'
import StarterHero from './components/StarterHero/StarterHero.jsx'
import Giveaway from './components/Giveaway/Giveaway.jsx'
import OfferStack from './components/OfferStack/OfferStack.jsx'
import ProgramFrame from './components/ProgramFrame/ProgramFrame.jsx'
import ReviewWall from './components/ReviewWall/ReviewWall.jsx'
import WeekGrid from './components/WeekGrid/WeekGrid.jsx'
import WorthIt from './components/WorthIt/WorthIt.jsx'
import StickyCta from './components/StickyCta/StickyCta.jsx'

/**
 * /analytics-starter — seven days of live training for ₹999, ending in a
 * project and a certificate.
 *
 * Sections land here one at a time, in this order:
 *   01 hero                        ✓
 *   02 trust: the numbers, then the Google reviews   ✓
 *   03 what you learn in the seven days             ✓
 *   04 is it worth the money, on video               ✓
 *   05 week one of the 60-day program, and the roadmap   ✓
 *   06 the draw: voucher plus a mentor call          ✓
 *   07 what it is worth, itemised                    ✓
 *   08 questions                                     ✓
 *   09 the last ask, and the footer                  ✓
 *
 * Still to come: who this is for, and the booking itself (#book).
 */
export default function App() {
  return (
    <>
      <div className="top-stage">
        <CertificateBackdrop />
        <Header cta={starter.hero.primaryCta} />
        <main>
          <StarterHero />
          {/* Sits here, not at the end of the page: its sentinel marks where
              the hero ends, which is the point the bar should appear. */}
          <StickyCta />
          <ReviewWall />
          <WeekGrid />
          <WorthIt />
          <ProgramFrame />
          <Giveaway />
          <OfferStack />
          <Faq />
        </main>
        <Closing />
      </div>
    </>
  )
}
