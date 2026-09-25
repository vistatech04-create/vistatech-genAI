import Header from './components/Header/Header.jsx'
import HeroBackdrop from './components/HeroBackdrop/HeroBackdrop.jsx'
import Hero from './components/Hero/Hero.jsx'
import JobSection from './components/JobSection/JobSection.jsx'
import Companies from './components/Companies/Companies.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Journey from './components/Journey/Journey.jsx'
import Curriculum from './components/Curriculum/Curriculum.jsx'
import Reviews from './components/Reviews/Reviews.jsx'
import Placements from './components/Placements/Placements.jsx'
import StarterWeek from './components/StarterWeek/StarterWeek.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import ValueStack from './components/ValueStack/ValueStack.jsx'
import Faq from './components/Faq/Faq.jsx'
import Closing from './components/Closing/Closing.jsx'
import { LeadModalProvider } from './components/LeadModal/LeadModalContext.jsx'
import LeadModal from './components/LeadModal/LeadModal.jsx'

/**
 * / — the 60-day program: pay half now, half once you are placed.
 *
 * The page argues in this order:
 *   01 hero                                  ✓
 *   02 the job on offer, and who it is for   ✓
 *   03 companies that hire our students      ✓
 *   04 students, on video                    ✓
 *   05 the journey, enrol to offer letter    ✓
 *   06 what the 60 days contain              ✓
 *   07 Google reviews                        ✓
 *   08 who we have placed, and where         ✓
 *   09 what the fee pays for, and the price  ✓
 *   10 the seven day starter week            ✓
 *   11 the fee, and the half-after-job split ✓
 *   12 questions                             ✓
 *   13 the last ask, and the footer          ✓
 *
 * THE ORDER OF 09, 10 AND 11 IS THE WHOLE CONVERSION ARGUMENT, and none of
 * the three works moved:
 *
 *   09  itemises ₹78,500 of value and then names the full ₹29,999. The
 *       price is anchored against the list, not against nothing. It says
 *       NOTHING about how the fee is paid.
 *   10  catches whoever that number just frightened and offers them a week
 *       of classes instead of the back button.
 *   11  finally reveals that only half is due now and the rest waits for an
 *       offer letter. It reads as relief because the reader has already
 *       accepted the full figure two sections ago.
 *
 * Reveal the split any earlier and section 11 has nothing left to sell;
 * put the price any later and the trial week in 10 is being offered as an
 * alternative to something the reader cannot yet price. Money is kept out
 * of sections 01–09 entirely — see the note at the top of journey.js.
 *
 * '#enroll' and '#call' are not scroll anchors — Button.jsx wires them
 * centrally. '#enroll' opens <LeadModal>, the popup rendered once here;
 * '#call' becomes a tel: link straight to the phone. See Button.jsx for
 * both. The Companies section also keeps its own inline <LeadForm> — the
 * popup does not replace it, it just gives every other button the same
 * form.
 */
export default function App() {
  return (
    <LeadModalProvider>
      <div className="top-stage">
        <HeroBackdrop />
        <Header />
        <main>
          <Hero />
          <JobSection />
          <Companies />
          <Testimonials />
          <Journey />
          <Curriculum />
          <Reviews />
          <Placements />
          <ValueStack />
          <StarterWeek />
          <Pricing />
          <Faq />
        </main>
        <Closing />
      </div>
      <LeadModal />
    </LeadModalProvider>
  )
}
