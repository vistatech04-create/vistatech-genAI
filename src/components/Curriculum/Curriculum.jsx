import Button from '../Button/Button.jsx'
import ToolGlyph from '../ToolGlyph/ToolGlyph.jsx'
import { curriculum } from '../../content/curriculum.js'
import styles from './Curriculum.module.css'

function Tick() {
  return (
    <svg
      className={styles.tick}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12.5 9.5 18 20 6.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Curriculum() {
  return (
    <section className={styles.section} data-section="curriculum">
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.heading}>
            {curriculum.heading}{' '}
            <span className={styles.accent}>{curriculum.headingAccent}</span>
          </h2>
          <p className={styles.sub}>{curriculum.sub}</p>
        </div>

        <p className={styles.countLabel}>{curriculum.countLabel}</p>

        {/* Native <details>, so a module opens with JavaScript off, works
            with a keyboard and a screen reader for free, and a phone's
            find-in-page can reach a topic inside a closed module. The first
            is open so the column does not read as nine shut grey bars.

            The whole 60 days are in here. Folded, they cost nine lines of
            scroll; opened, they are the most convincing thing on the page,
            because a syllabus this specific cannot be bluffed. */}
        <ul className={styles.modules}>
          {curriculum.modules.map((mod, i) => (
            <li key={mod.n}>
              <details className={styles.module} open={i === 0}>
                <summary className={styles.summary}>
                  <span className={styles.summaryText}>
                    {/* Label line: which module, then which days. Reads as
                        one fact rather than a numeral floating beside a
                        date range. */}
                    <span className={styles.label}>
                      <span className={styles.n}>{mod.n}</span>
                      <span className={styles.dot} aria-hidden="true" />
                      <span className={styles.days}>{mod.days}</span>
                    </span>

                    <span className={styles.moduleTitle}>{mod.title}</span>
                    <span className={styles.outcomeLine}>{mod.outcome}</span>
                  </span>

                  <span className={styles.mark} aria-hidden="true" />
                </summary>

                <ul className={styles.points}>
                  {mod.topics.map((topic) => (
                    <li className={styles.point} key={topic}>
                      <Tick />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>

        <p className={styles.toolsLabel}>{curriculum.toolsLabel}</p>

        <div className={styles.tools}>
          {curriculum.tools.map((tool) => (
            <article className={styles.tool} key={tool.name}>
              <span className={styles.icon}>
                {tool.icon ? (
                  <img src={tool.icon} alt="" />
                ) : (
                  <span className={styles.glyph}>
                    <ToolGlyph name={tool.glyph} />
                  </span>
                )}
              </span>
              <p className={styles.toolName}>{tool.name}</p>
            </article>
          ))}
        </div>

        <p className={styles.outcome}>
          {curriculum.outcome.lead} <b>{curriculum.outcome.strong}</b>
        </p>

        <div className={styles.cta}>
          <Button href={curriculum.cta.href}>{curriculum.cta.label}</Button>
        </div>
      </div>
    </section>
  )
}
