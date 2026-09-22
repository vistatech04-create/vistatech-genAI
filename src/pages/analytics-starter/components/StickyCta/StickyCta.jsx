import { useEffect, useState } from 'react'
import Button from '@/components/Button/Button.jsx'
import { starter } from '@/content/starter.js'

import { CTA_EDGE_ID } from '../StarterHero/StarterHero.jsx'
import styles from './StickyCta.module.css'

const { sticky } = starter

/**
 * A phone screen only ever holds one section, so once the hero's buttons
 * have scrolled away the price and the action follow the reader down the
 * page. Hidden on desktop, where the header button stays in view anyway.
 *
 * It watches the line just under the hero's buttons, so the bar arrives the
 * moment the reader loses the hero's own button and never a screen later.
 */
export default function StickyCta() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = document.getElementById(CTA_EDGE_ID)
    if (!el) return
    /* Off screen on its own says nothing — at the top of the page the line
       is off screen too, just below the fold. What matters is whether it has
       gone past the top edge. */
    const io = new IntersectionObserver(
      ([entry]) => setShown(entry.boundingClientRect.top < 0),
      { threshold: 0, rootMargin: '-64px 0px 0px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div
        className={`${styles.bar} ${shown ? styles.shown : ''}`}
        /* Out of the tab order while it is off screen. */
        aria-hidden={!shown}
      >
        <span className={styles.priceWrap}>
          <span className={styles.price}>{sticky.price}</span>
          <span className={styles.note}>{sticky.note}</span>
        </span>
        <Button
          href={sticky.cta.href}
          size="small"
          fullOnMobile={false}
          tabIndex={shown ? undefined : -1}
        >
          {sticky.cta.label}
        </Button>
      </div>
    </>
  )
}
