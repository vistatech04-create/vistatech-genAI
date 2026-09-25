import Button from '../Button/Button.jsx'
import ToolGlyph from '../ToolGlyph/ToolGlyph.jsx'
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx'
import JoinStrip from '../JoinStrip/JoinStrip.jsx'
import { social } from '../../content/social.js'
import { starterWeek } from '../../content/starterWeek.js'
import styles from './StarterWeek.module.css'

export default function StarterWeek() {
  return (
    <section className={styles.section} data-section="starter-week">
      <div className={`container ${styles.grid}`}>
        <div className={styles.video}>
          <VideoPlayer
            youtubeId={starterWeek.youtubeId}
            poster={starterWeek.poster}
            posterAlt={starterWeek.posterAlt}
            ratio="4 / 5"
          />
        </div>

        <div>
          <div className={styles.joinStrip}>
            <JoinStrip line={social.lines.starter} offset={1} />
          </div>

          <p className={styles.badge}>{starterWeek.badge}</p>

          <h2 className={styles.heading}>
            {starterWeek.headingLight}{' '}
            <span className={styles.accent}>{starterWeek.headingAccent}</span>
          </h2>

          <p className={styles.sub}>{starterWeek.sub}</p>

          <ul className={styles.benefits}>
            {starterWeek.benefits.map((benefit) => (
              <li className={styles.benefit} key={benefit.title}>
                <span className={styles.glyph}>
                  <ToolGlyph name={benefit.glyph} />
                </span>
                <div>
                  <p className={styles.benefitTitle}>{benefit.title}</p>
                  <p className={styles.benefitBody}>{benefit.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button href={starterWeek.cta.href} variant="secondary">
              {starterWeek.cta.label}
            </Button>
          </div>
          <p className={styles.note}>{starterWeek.note}</p>
        </div>
      </div>
    </section>
  )
}
