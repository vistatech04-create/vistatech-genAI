import Button from '../Button/Button.jsx'
import PlacedMarquee from '../PlacedMarquee/PlacedMarquee.jsx'
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx'
import { jobSection } from '../../content/jobSection.js'
import styles from './JobSection.module.css'

export default function JobSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <PlacedMarquee
            label={jobSection.placedLabel}
            students={jobSection.placed}
          />

          <div className={styles.player}>
            <VideoPlayer
              youtubeId={jobSection.youtubeId}
              poster={jobSection.poster}
              posterAlt={jobSection.posterAlt}
              duration={jobSection.duration}
              title={jobSection.videoTitle}
              titleAccent={jobSection.videoTitleAccent}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.buttons}>
            <Button href={jobSection.primaryCta.href}>
              {jobSection.primaryCta.label}
            </Button>
            <Button href={jobSection.secondaryCta.href} variant="secondary">
              {jobSection.secondaryCta.label}
            </Button>
          </div>
          <p className={styles.tamil}>{jobSection.tamil}</p>
        </div>
      </div>
    </section>
  )
}
