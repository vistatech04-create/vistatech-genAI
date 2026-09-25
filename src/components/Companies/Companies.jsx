import LeadForm from '../LeadForm/LeadForm.jsx'
import { companies } from '../../content/companies.js'
import styles from './Companies.module.css'

function Stat({ value, suffix, star, label }) {
  return (
    <div className={styles.stat}>
      <p className={styles.num}>
        <span className={styles.stroke}>
          {value}
          <span className={styles.unit}>{suffix}</span>
        </span>
        {star && <span className={styles.star}>*</span>}
      </p>
      <p className={styles.lab}>{label}</p>
    </div>
  )
}

function Row({ names, reverse }) {
  const className = `${styles.row} ${reverse ? styles.reverse : ''}`
  return (
    <div className={className}>
      {names.map((name) => (
        <span className={styles.chip} key={name}>
          {name}
        </span>
      ))}
      {/* The second copy is what the loop slides into. Hidden from screen
          readers so no company gets announced twice. */}
      <span aria-hidden="true" style={{ display: 'contents' }}>
        {names.map((name) => (
          <span className={styles.chip} key={`loop-${name}`}>
            {name}
          </span>
        ))}
      </span>
    </div>
  )
}

export default function Companies() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.split}>
          <div>
            <div className={styles.head}>
              <h2 className={styles.heading}>
                Companies hiring through <b>our placement partners</b>
              </h2>
              <p className={styles.sub}>{companies.sub}</p>

              <div className={styles.stats}>
                <Stat {...companies.stats[0]} />
                <span className={styles.divider} aria-hidden="true" />
                <Stat {...companies.stats[1]} />
              </div>
            </div>

            <div className={styles.rows}>
              <Row names={companies.rowOne} />
              <Row names={companies.rowTwo} reverse />
            </div>

            <p className={styles.footnote}>{companies.footnote}</p>
          </div>

          <LeadForm source="companies-inline" />
        </div>
      </div>
    </section>
  )
}
