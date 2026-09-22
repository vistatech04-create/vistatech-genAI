import { starter } from '@/content/starter.js'

import RoadmapCard from './RoadmapCard.jsx'
import styles from './ProgramFrame.module.css'

const { program } = starter

function Stage({ stage, index }) {
  return (
    <li className={styles.stage}>
      {/* The number, and the line running down to the next one. Same rail as
          the course page uses for the 60-day journey — this page is part of
          that program, so it should read in the same language. */}
      <div className={styles.marker}>
        <span className={`${styles.num} ${stage.now ? styles.numNow : ''}`}>
          {index + 1}
        </span>
      </div>

      <div className={`${styles.card} ${stage.now ? styles.cardNow : ''}`}>
        <p className={styles.stageLabel}>
          <span className={stage.now ? styles.labelNow : styles.labelText}>
            {stage.label}
          </span>
          {stage.now && <span className={styles.here}>You are here</span>}
        </p>
        <h3 className={styles.stageTitle}>{stage.title}</h3>
        <p className={styles.stageBody}>{stage.body}</p>
      </div>
    </li>
  )
}

/**
 * Section 04. Where the seven days sit.
 *
 * Two jobs at once: it stops the week reading as a standalone workshop, and
 * it puts the 60-day program in front of the reader before any mentor
 * mentions it. The roadmap on the right is the exit for anyone who will not
 * pay today — better a lead than a closed tab.
 */
export default function ProgramFrame() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.split}`}>
        <div>
          <h2 className={styles.heading}>
            {program.heading}{' '}
            <span className={styles.accent}>{program.headingAccent}</span>
          </h2>
          <p className={styles.sub}>{program.sub}</p>

          <ol className={styles.stages}>
            {program.stages.map((stage, i) => (
              <Stage stage={stage} index={i} key={stage.label} />
            ))}
          </ol>

          <p className={styles.note}>{program.note}</p>
        </div>

        <RoadmapCard />
      </div>
    </section>
  )
}
