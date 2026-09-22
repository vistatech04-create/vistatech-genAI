import { reviews } from '../../content/reviews.js'
import styles from './Reviews.module.css'

function Stars({ rating }) {
  return (
    <span className={styles.stars} aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9z"
            fill={n <= rating ? 'currentColor' : 'rgba(40,8,32,0.14)'}
          />
        </svg>
      ))}
    </span>
  )
}

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.heading}>
            {reviews.heading}{' '}
            <span className={styles.accent}>{reviews.headingAccent}</span>
          </h2>
          <p className={styles.sub}>{reviews.sub}</p>
        </div>

        <div className={styles.grid}>
          {reviews.items.map((review) => (
            <article className={styles.card} key={review.name}>
              <div className={styles.who}>
                <span className={styles.avatar} aria-hidden="true">
                  {review.name.trim().charAt(0)}
                </span>
                <div>
                  <p className={styles.name}>{review.name}</p>
                  <div className={styles.meta}>
                    <Stars rating={review.rating} />
                    <span className={styles.time}>{review.time}</span>
                  </div>
                </div>
              </div>
              <p className={styles.text}>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
