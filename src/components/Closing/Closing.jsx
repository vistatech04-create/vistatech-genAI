import ArrowMark from '../ArrowMark/ArrowMark.jsx'
import Button from '../Button/Button.jsx'
import JoinStrip from '../JoinStrip/JoinStrip.jsx'
import ToolGlyph from '../ToolGlyph/ToolGlyph.jsx'
import { closing, footer } from '../../content/closing.js'
import { social } from '../../content/social.js'
import styles from './Closing.module.css'

/* One place builds the dialable number, so the href and the label on the
   button can never disagree with the number printed in the footer. */
const tel = `tel:${footer.phone.replace(/\s/g, '')}`

/**
 * Section 13, and the footer under it.
 *
 * Built out of the same parts as the hero: white ground, warm flame and
 * gold washes, and a few of the course's own tools drifting upward. The
 * page opens and closes on the same picture, which is what makes the end
 * feel like an end rather than another band of colour.
 *
 * It replaced a near-black panel. That panel did stop the scroll, but it
 * stopped it by looking like it came off a different website — nothing
 * else here is dark except the video frames, and a brand this warm cannot
 * afford its most important screen being the one that looks borrowed.
 * Emphasis comes from the flame button and the size of the headline
 * instead, which is how the rest of the page does it. Nothing new is argued here — no fresh
 * number, no discount — because somebody who has read this far has the
 * facts and is looking for the button.
 *
 * The footer under it is deliberately thin. On a page you are paying to
 * send people to, every link is an exit, so it carries only what a real
 * company has to show.
 */
export default function Closing() {
  return (
    <>
      {/* data-section="footer": the last CTA on the page, immediately above
          the actual <footer> tag below — which itself has no #enroll button. */}
      <section className={styles.section} id="start" data-section="footer">
        {/* The warm wash, and the tools going up the way they do behind
            the headline at the top of the page. */}
        <span className={styles.wash} aria-hidden="true" />

        <span className={styles.glyphs} aria-hidden="true">
          <span className={`${styles.glyph} ${styles.g1}`}><ToolGlyph name="bars" /></span>
          <span className={`${styles.glyph} ${styles.g2}`}><ToolGlyph name="trend" /></span>
          <span className={`${styles.glyph} ${styles.g3}`}><ToolGlyph name="sheet" /></span>
          <span className={`${styles.glyph} ${styles.g4}`}><ToolGlyph name="database" /></span>
        </span>

        <div className={`container ${styles.inner}`}>
          <JoinStrip line={social.lines.closing} offset={3} />

          <h2 className={styles.heading}>{closing.heading}</h2>
          <p className={styles.body}>{closing.body}</p>

          {/* The offer on one line, for whoever arrived straight here. */}
          <ul className={styles.recap}>
            {closing.recap.map((item) => (
              <li className={styles.recapItem} key={item.big}>
                <span className={styles.recapBig}>{item.big}</span>
                <span className={styles.recapSmall}>{item.small}</span>
              </li>
            ))}
          </ul>

          <div className={styles.buttons}>
            <Button href={closing.cta.href}>{closing.cta.label}</Button>
          </div>

          <p className={styles.note}>{closing.note}</p>

          <ul className={styles.trust}>
            {closing.trust.map((item) => (
              <li className={styles.trustItem} key={item}>
                <span className={styles.check} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
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
            <a className={styles.footLink} href={tel}>
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

          <p className={styles.legal}>{footer.legal}</p>
        </div>
      </footer>
    </>
  )
}
