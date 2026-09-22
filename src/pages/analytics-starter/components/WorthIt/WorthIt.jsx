import { useEffect, useState } from 'react'
import Button from '@/components/Button/Button.jsx'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer.jsx'
import { starter } from '@/content/starter.js'

import styles from './WorthIt.module.css'

const { worth } = starter

/* The same 700px the shared player switches its frame shape at, so the file
   and the frame always agree. */
const LANDSCAPE = '(min-width: 700px)'

/**
 * Section 04. The money question, asked plainly and handed to a person.
 *
 * Two cuts of the video, not one reframed: the landscape file on tablets and
 * desktops, the portrait file on phones. Cropping a 16:9 video into a phone
 * frame throws away the sides, which is usually where the speaker's hands
 * and whatever they are pointing at live.
 */
export default function WorthIt() {
  const [wide, setWide] = useState(() =>
    typeof window === 'undefined' ? true : window.matchMedia(LANDSCAPE).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(LANDSCAPE)
    const onChange = (event) => setWide(event.matches)
    mq.addEventListener('change', onChange)
    /* Catch a width that changed between first render and this effect. */
    setWide(mq.matches)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const cut = wide ? worth.landscape : worth.portrait

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.heading}>
            {worth.heading}{' '}
            <span className={styles.accent}>{worth.headingAccent}</span>
          </h2>
          <p className={styles.sub}>{worth.sub}</p>
        </div>

        <div className={styles.stage}>
          {/* Keyed on the shape so React swaps the player rather than
              re-pointing an iframe that is already playing. */}
          <VideoPlayer
            key={wide ? 'landscape' : 'portrait'}
            youtubeId={cut.youtubeId}
            poster={cut.poster}
            posterAlt={cut.posterAlt}
            ratio={cut.ratio}
            duration={worth.duration}
          />
        </div>

        <div className={styles.actions}>
          <div className={styles.buttons}>
            <Button href={worth.cta.href}>{worth.cta.label}</Button>
            <Button href={worth.secondaryCta.href} variant="secondary">
              {worth.secondaryCta.label}
            </Button>
          </div>
          <p className={styles.note}>{worth.note}</p>
        </div>
      </div>
    </section>
  )
}
