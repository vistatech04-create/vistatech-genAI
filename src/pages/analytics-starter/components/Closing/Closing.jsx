import Button from '@/components/Button/Button.jsx'
import ArrowMark from '@/components/ArrowMark/ArrowMark.jsx'
import { starter } from '@/content/starter.js'

import styles from './Closing.module.css'

const { closing, footer } = starter

/**
 * Section 09, and the footer under it.
 *
 * The last ask. Nothing new is introduced here — no fresh offer, no new
 * number — because a reader who has come this far has all the information
 * and only needs the button. The footer below it is deliberately thin: on a
 * page you are paying to send people to, every link is an exit. It carries
 * only what a real company has to show.
 */
export default function Closing() {
  return (
    <>
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <h2 className={styles.heading}>{closing.heading}</h2>
          <p className={styles.body}>{closing.body}</p>

          <div className={styles.buttons}>
            <Button href={closing.cta.href}>{closing.cta.label}</Button>
          </div>

          <p className={styles.note}>{closing.note}</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`container ${styles.footInner}`}>
          <p className={styles.footBrand}>
            <ArrowMark size={16} className={styles.footMark} />
            {footer.line}
          </p>

          <p className={styles.footMeta}>
            {footer.address}
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <a className={styles.footLink} href={`tel:${footer.phone.replace(/\s/g, '')}`}>
              {footer.phone}
            </a>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <a className={styles.footLink} href={`mailto:${footer.email}`}>
              {footer.email}
            </a>
          </p>

          <p className={styles.footMeta}>
            {footer.links.map((link, i) => (
              <span key={link.label}>
                {i > 0 && (
                  <span className={styles.dot} aria-hidden="true">
                    ·
                  </span>
                )}
                <a className={styles.footLink} href={link.href}>
                  {link.label}
                </a>
              </span>
            ))}
          </p>

          {/* <p className={styles.legal}>{footer.legal}</p> */}
        </div>
      </footer>
    </>
  )
}
