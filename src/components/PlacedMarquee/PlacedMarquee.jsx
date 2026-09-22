import Avatar from '../Avatar/Avatar.jsx'
import styles from './PlacedMarquee.module.css'

function Card({ student }) {
  return (
    <div className={styles.card}>
      <Avatar src={student.photo} name={student.name} />
      <span className={styles.body}>
        <span className={styles.role}>{student.role}</span>
        <span className={styles.name}>{student.name}</span>
      </span>
      <span className={styles.pay}>{student.pay}</span>
    </div>
  )
}

export default function PlacedMarquee({ label, students }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.label}>{label}</p>
      <div className={styles.window}>
        <div className={styles.track}>
          {/* Rendered twice. The second copy is what the loop scrolls into,
              and it is hidden from screen readers so nothing is read twice. */}
          {students.map((s) => (
            <Card key={s.name} student={s} />
          ))}
          <span aria-hidden="true" style={{ display: 'contents' }}>
            {students.map((s) => (
              <Card key={`loop-${s.name}`} student={s} />
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}
