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
  videoSrc,
  embedSrc,
  autoplayPreview,
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
  // Only meaningful with autoplayPreview: starts muted so the browser lets
  // it play itself, switches to a fresh, unmuted load once tapped.
  const [withSound, setWithSound] = useState(false)
  // videoSrc is a direct file (e.g. an uploaded Cloudinary .mp4) — no embed,
  // no other domain loading before the tap. youtubeId still goes through the
  // nocookie iframe. embedSrc is any other hosted player (Mux, Vimeo) that
  // hands you a ready-made iframe src — used as-is, same lazy-load-on-tap
  // treatment as the other two, unless autoplayPreview says otherwise.
  const ready = Boolean(youtubeId) || Boolean(videoSrc) || Boolean(embedSrc)

  if (autoplayPreview && embedSrc) {
    // No poster, no title overlay: the video itself is the cover, muted so
    // the browser allows it to start on its own as a silent preview. The
    // centre play button is ours, not the embed's own controls — clicking
    // it reloads the same embed unmuted rather than trying to unmute the
    // player from outside its iframe, which a cross-origin embed won't
    // allow.
    const join = embedSrc.includes('?') ? '&' : '?'
    const src = withSound
      ? `${embedSrc}${join}autoplay=true`
      : `${embedSrc}${join}autoplay=muted&muted=true&loop=true`

    return (
      <div className={styles.frame} style={shape}>
        <iframe
          key={withSound ? 'sound' : 'muted'}
          src={src}
          title={posterAlt}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        {!withSound && (
          <button
            type="button"
            className={styles.soundPlay}
            onClick={() => {
              setWithSound(true)
              onPlay?.()
            }}
            aria-label="Play with sound"
          >
            <span className={styles.play}>
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
    )
  }

  if (playing && videoSrc) {
    return (
      <div className={styles.frame} style={shape}>
        <video
          src={videoSrc}
          controls
          autoPlay
          playsInline
          aria-label={posterAlt}
          // Several of these can be mounted at once (the testimonial
          // stack). Starting one should stop whichever other one is
          // already playing, not layer its audio on top.
          onPlay={(event) => {
            document.querySelectorAll('video').forEach((video) => {
              if (video !== event.currentTarget) video.pause()
            })
          }}
        />
      </div>
    )
  }

  if (playing && youtubeId) {
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

  if (playing && embedSrc) {
    return (
      <div className={styles.frame} style={shape}>
        <iframe
          src={embedSrc}
          title={posterAlt}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
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
        ) : ready ? (
          // We have a real video but no still to show before it plays —
          // a plain dark cover, not the "nothing added yet" placeholder.
          <span className={`${styles.scrim} ${styles.scrimPlain}`} />
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
