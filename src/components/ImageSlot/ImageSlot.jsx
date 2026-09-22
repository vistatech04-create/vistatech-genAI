import styles from './ImageSlot.module.css'

export default function ImageSlot({ src, alt, label, hint }) {
  return (
    <div className={styles.slot}>
      {src ? (
        <img className={styles.image} src={src} alt={alt} />
      ) : (
        <div className={styles.empty}>
          <div>
            <span className={styles.label}>{label}</span>
            <span className={styles.hint}>{hint}</span>
          </div>
        </div>
      )}
    </div>
  )
}
