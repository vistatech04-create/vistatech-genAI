import ArrowMark from '../ArrowMark/ArrowMark.jsx'
import { hero } from '../../content/hero.js'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} data-section="hero">
      <div className="container">
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
        </div>
      </div>
    </section>
  )
}
