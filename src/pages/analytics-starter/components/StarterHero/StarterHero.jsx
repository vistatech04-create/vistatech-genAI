import ArrowMark from '@/components/ArrowMark/ArrowMark.jsx'
import Button from '@/components/Button/Button.jsx'
import { starter } from '@/content/starter.js'

import Seal from './Seal.jsx'
import styles from './StarterHero.module.css'

/** The sticky bar watches for this to leave the top of the screen. */
export const CTA_EDGE_ID = 'hero-cta-edge'

const { hero } = starter

export default function StarterHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.stage}`}>
        {/* The hero sits inside a certificate: a double rule, gold corner
            diamonds, a seal, and a slow sheen across it like foil catching
            the light. It frames the content instead of sitting behind the
            words, so nothing has to be dimmed to keep the text readable. */}
        <div className={styles.frame} aria-hidden="true">
          <span className={`${styles.corner} ${styles.tl}`} />
          <span className={`${styles.corner} ${styles.tr}`} />
          <span className={`${styles.corner} ${styles.bl}`} />
          <span className={`${styles.corner} ${styles.br}`} />
          <Seal className={styles.seal} />
          <span className={styles.sheen} />
        </div>

        <div className={styles.copy}>
          <p className={`${styles.badge} ${styles.rise} ${styles.d1}`}>
            <ArrowMark size={18} className={styles.badgeMark} />
            {hero.badge}
          </p>

          <h1 className={styles.headline}>
            <span className={`${styles.line} ${styles.rise} ${styles.d2}`}>
              {hero.headlineLight}
            </span>
            <span className={`${styles.lineBold} ${styles.rise} ${styles.d3}`}>
              {hero.headlineBold}
              <span className={styles.accent}>{hero.headlineAccent}</span>
            </span>
          </h1>

          <p className={`${styles.sub} ${styles.rise} ${styles.d4}`}>{hero.sub}</p>

          <div className={`${styles.actions} ${styles.rise} ${styles.d5}`}>
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          </div>

          {/* The line the sticky bar watches: once the hero's own buttons
              have scrolled past the top, the bar takes over. */}
          <span id={CTA_EDGE_ID} className={styles.ctaEdge} aria-hidden="true" />

          <p className={`${styles.reassure} ${styles.rise} ${styles.d6}`}>
            {hero.reassure}
          </p>

          {/* The three facts sit on the seam between the white hero and the
              sand below it, so they read as the floor of the hero. */}
          <ul className={`${styles.facts} ${styles.rise} ${styles.d7}`}>
            {hero.facts.map((f) => (
              <li className={styles.fact} key={f.small}>
                <span className={styles.factBig} lang={f.lang}>
                  {f.big}
                </span>
                <span className={styles.factSmall}>{f.small}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
