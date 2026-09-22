import Avatar from '../Avatar/Avatar.jsx'
import { placements } from '../../content/placements.js'
import styles from './Placements.module.css'

function Row({ student, index, hidden }) {
  // Striping comes from the data index, not nth-child. The list is rendered
  // twice for the loop, and an odd number of students would flip the stripe
  // pattern at the seam.
  const alt = index % 2 === 0
  return (
    <li className={`${styles.row} ${alt ? styles.rowAlt : ''}`} aria-hidden={hidden}>
      <span className={styles.face}>
        <Avatar src={student.photo} name={student.name} />
      </span>
      <span className={styles.who}>
        <span className={styles.name}>{student.name}</span>
        {student.edu && <span className={styles.edu}>{student.edu}</span>}
      </span>
      <span className={styles.role}>{student.role}</span>
      <span className={styles.company}>{student.company}</span>
      <span className={styles.salary}>{student.salary}</span>
    </li>
  )
}

export default function Placements() {
  const students = placements.students

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.heading}>
            {placements.heading}{' '}
            <span className={styles.accent}>{placements.headingAccent}</span>
          </h2>
          <p className={styles.sub}>{placements.sub}</p>
        </div>

        <div className={styles.table}>
          <div className={styles.headRow} aria-hidden="true">
            {/* A spacer so the headings line up with the columns once the
                face column is in front of them. */}
            <span />
            {placements.columns.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>

          <div className={styles.window}>
            <ul className={styles.rows}>
              {students.map((student, i) => (
                <Row key={student.name} student={student} index={i} />
              ))}
              {/* The second copy is what the loop scrolls into. Hidden from
                  screen readers so nobody is read out twice. */}
              {students.map((student, i) => (
                <Row
                  key={`loop-${student.name}`}
                  student={student}
                  index={i}
                  hidden
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
