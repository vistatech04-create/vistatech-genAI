import ToolGlyph from '../ToolGlyph/ToolGlyph.jsx'
import styles from './HeroBackdrop.module.css'

/**
 * Which tool drifts where. Paired so the two biggest and clearest glyphs
 * (the spreadsheet and the database) sit on opposite sides.
 */
const BLOCKS = [
  { slot: 'b1', tool: 'bars' },
  { slot: 'b2', tool: 'trend' },
  { slot: 'b3', tool: 'sheet' },
  { slot: 'b4', tool: 'funnel' },
  { slot: 'b5', tool: 'database' },
  { slot: 'b6', tool: 'code' },
  { slot: 'b7', tool: 'bars' },
  { slot: 'b8', tool: 'trend' },
  { slot: 'b9', tool: 'sheet' },
]

export default function HeroBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      {BLOCKS.map(({ slot, tool }) => (
        <span className={`${styles.block} ${styles[slot]}`} key={slot}>
          <ToolGlyph name={tool} />
        </span>
      ))}
    </div>
  )
}
