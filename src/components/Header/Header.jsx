import Button from '../Button/Button.jsx'
import { hero } from '../../content/hero.js'
import styles from './Header.module.css'

/**
 * Shared by every page. `cta` lets a page put its own action up there —
 * the course page asks for training, the ₹999 page asks for the week.
 */
export default function Header({ cta = hero.primaryCta }) {
  return (
    // data-section="hero": this bar is the only place the hero's CTA is
    // actually clickable (Hero.jsx itself has no button) — see Button.jsx.
    <header className={styles.header} data-section="hero">
      <div className={`container ${styles.inner}`}>
        <img className={styles.logo} src="/images/logo.png" alt="Vista Tech" width="234" height="173" />
        <span className={styles.action}>
          <Button href={cta.href} size="small" fullOnMobile={false}>
            {cta.label}
          </Button>
        </span>
      </div>
    </header>
  )
}
