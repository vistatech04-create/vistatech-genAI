import { SiPython, SiMysql, SiMiro, SiJira, SiConfluence } from 'react-icons/si'
import { PiMicrosoftExcelLogo } from 'react-icons/pi'
import { IoLogoTableau } from 'react-icons/io5'
import { RiOpenaiFill } from 'react-icons/ri'

/**
 * Small line glyphs for the tools taught in the course, drawn as vector so
 * they stay clean at any size and weigh nothing. Used as a fallback when a
 * name has no brand icon below (e.g. Power BI, which no icon set ships a
 * logo for).
 */
const PATHS = {
  // a spreadsheet, for Excel
  sheet: (
    <>
      <rect x="3.4" y="4.4" width="17.2" height="15.2" rx="2.4" />
      <path d="M3.4 9.6h17.2M9.6 9.6v10" />
    </>
  ),
  // bars, for Power BI
  bars: <path d="M6 19.6V13.2M12 19.6V8.4M18 19.6V4.8" strokeWidth="2.6" />,
  // a cylinder, for SQL and databases
  database: (
    <>
      <ellipse cx="12" cy="6.6" rx="7.4" ry="3" />
      <path d="M4.6 6.6v10.8c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3V6.6" />
      <path d="M4.6 12c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3" />
    </>
  ),
  // a rising line, for Tableau and dashboards
  trend: (
    <>
      <path d="M3.6 17.4 9.2 11.6l3.8 3.4 7.4-8" />
      <path d="M15.4 6.6h5v5" />
    </>
  ),
  // brackets, for Python
  code: <path d="M9.4 7.2 4.8 12l4.6 4.8M14.6 7.2 19.2 12l-4.6 4.8" />,
  // a funnel, for filtering and analysis
  funnel: <path d="M4.2 5.4h15.6l-6 7.2v6.2l-3.6 1.8v-8z" />,
  // a play in a circle, for the live classes
  live: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M10.3 8.9 16 12l-5.7 3.1z" />
    </>
  ),
  // a document with bars, for the project
  project: (
    <>
      <rect x="4.6" y="3.6" width="14.8" height="16.8" rx="2.2" />
      <path d="M8.6 15.8v-3.2M12 15.8v-5.6M15.4 15.8v-2.2" />
    </>
  ),
  // a rosette with ribbons, for the certificate
  certificate: (
    <>
      <circle cx="12" cy="9.4" r="5.4" />
      <path d="M8.7 13.9 7.5 21l4.5-2.4L16.5 21l-1.2-7.1" />
    </>
  ),
  // a ticket with a perforation, for the voucher
  voucher: (
    <>
      <path d="M3.8 7.6h16.4v3a2 2 0 0 0 0 2.8v3H3.8v-3a2 2 0 0 0 0-2.8z" />
      <path d="M12 8.8v1.5M12 13.7v1.5" />
    </>
  ),
  // a spark, for the AI work
  spark: (
    <>
      <path d="M13.4 2.6 15 8.2l5.6 1.6-5.6 1.6-1.6 5.6-1.6-5.6L6.2 9.8l5.6-1.6z" />
      <path d="M6 16.4 6.8 19l2.6.8-2.6.8L6 23.2l-.8-2.6L2.6 19.8l2.6-.8z" />
    </>
  ),
}

/**
 * Official brand marks, rendered single-colour via currentColor so they sit
 * on the same monochrome black & white footing as the fallback glyphs above.
 * Sourced from react-icons (Simple Icons / Phosphor / Ionicons / Remix).
 * Power BI has no logo in any set react-icons bundles, so it keeps the
 * fallback line glyph ('bars') instead of an entry here.
 */
const BRAND_ICONS = {
  'excel-logo': PiMicrosoftExcelLogo,
  'mysql-logo': SiMysql,
  'python-logo': SiPython,
  'openai-logo': RiOpenaiFill,
  'tableau-logo': IoLogoTableau,
  'confluence-logo': SiConfluence,
  'jira-logo': SiJira,
  'miro-logo': SiMiro,
}

export default function ToolGlyph({ name }) {
  const BrandIcon = BRAND_ICONS[name]
  if (BrandIcon) {
    return <BrandIcon style={{ width: '100%', height: '100%' }} aria-hidden="true" focusable="false" />
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  )
}
