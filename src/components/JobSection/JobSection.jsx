import Button from '../Button/Button.jsx'
import PlacedMarquee from '../PlacedMarquee/PlacedMarquee.jsx'
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx'
import { jobSection } from '../../content/jobSection.js'
import styles from './JobSection.module.css'

export default function JobSection() {
  return (
    <section className={styles.section} data-section="hero">
      <div className="container">
        <div className={styles.grid}>
          <PlacedMarquee
            label={jobSection.placedLabel}
            students={jobSection.placed}
          />

          <div className={styles.player}>
            <VideoPlayer
              youtubeId={jobSection.youtubeId}
              embedSrc={jobSection.embedSrc}
              autoplayPreview
              posterAlt={jobSection.posterAlt}
              ratio="16 / 9"
            />
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.buttons}>
            <Button href={jobSection.primaryCta.href}>
              {jobSection.primaryCta.label}
            </Button>
          </div>
          <p className={styles.tamil}>{jobSection.tamil}</p>
        </div>
      </div>
    </section>
  )
}
