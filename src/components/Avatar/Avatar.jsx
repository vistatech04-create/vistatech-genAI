import styles from './Avatar.module.css'

export default function Avatar({ src, name }) {
  return (
    <span className={styles.avatar}>
      {src ? (
        <img className={styles.photo} src={src} alt={name} />
      ) : (
        <span className={styles.initial} aria-hidden="true">
          {name.trim().charAt(0)}
        </span>
      )}
    </span>
  )
}
