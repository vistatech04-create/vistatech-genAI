import { useState } from 'react'
import styles from './VideoPlayer.module.css'

function PlayIcon() {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" aria-hidden="true">
      <path d="M25 15 0 30V0z" fill="#fff" />
    </svg>
  )
}

export default function VideoPlayer({
  youtubeId,
  poster,
  posterAlt,
  duration,
  title,
  titleAccent,
  ratio,
  onPlay,
}) {
  // An inline custom property beats the stylesheet, so a card that needs a
  // portrait frame at every width can just ask for one.
  const shape = ratio ? { '--ratio': ratio } : undefined
  const [playing, setPlaying] = useState(false)
  const ready = Boolean(youtubeId)

  if (playing && ready) {
    return (
      <div className={styles.frame} style={shape}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={posterAlt}
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={styles.frame} style={shape}>
      <button
        type="button"
        id="play-success-story"
        className={styles.cover}
        onClick={() => {
          if (!ready) return
          setPlaying(true)
          onPlay?.()
        }}
        aria-label={ready ? 'Play the video' : 'Video not added yet'}
      >
        {poster ? (
          <>
            <img className={styles.poster} src={poster} alt={posterAlt} />
            <span
              className={`${styles.scrim} ${title ? '' : styles.scrimPlain}`}
            />
          </>
        ) : (
          <>
            <span className={styles.empty}>
              <span>
                <span className={styles.emptyLabel}>Video + Image 02</span>
                <span className={styles.emptyHint}>
                  YouTube id, and a still for before it plays.
                </span>
              </span>
            </span>
            <span
              className={`${styles.scrim} ${title ? '' : styles.scrimPlain}`}
            />
          </>
        )}
        {title && (
          <span className={styles.title}>
            {title}{' '}
            <span className={styles.titleAccent}>{titleAccent}</span>
          </span>
        )}
        <span className={styles.play}>
          <PlayIcon />
        </span>
        {duration && <span className={styles.duration}>{duration}</span>}
      </button>
    </div>
  )
}
