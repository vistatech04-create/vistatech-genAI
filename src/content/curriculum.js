/**
 * Section 06. What the 60 days actually contain.
 *
 * THIS IS NOW THE REAL SYLLABUS, taken day by day from the client's own
 * brochure — "GEN AI - Full Stack Analytics Brochure-3 2.pdf", the module
 * pages. Nine modules, and the day ranges add up to exactly 60:
 *
 *   M1 Business Analyst foundations   days  1–8    (8)
 *   M2 Excel & Google Sheets          days  9–14   (6)
 *   M3 SQL for business analysis      days 15–20   (6)
 *   M4 Python for data analytics      days 21–38  (18)
 *   M5 Statistics & EDA               days 39–48  (10)
 *   M6 Power BI                       days 49–53   (5)
 *   M7 Tableau                        days 54–55   (2)
 *   M8 BA tools & career prep         days 56–59   (4)
 *   M9 Final capstone project         day  60      (1)
 *
 * Nothing here is invented, so nothing here needs confirming. If the
 * brochure is revised, this file is the only thing that has to change.
 *
 * WHY EVERY DAY IS LISTED. A course page that says "Excel, SQL, Python" is
 * making a claim; one that can show what happens on day 37 is showing its
 * work, and that is the single most convincing thing this page owns. The
 * depth is folded into an accordion so it costs the scroll nothing — a
 * reader who wants the detail opens a module, everyone else reads nine
 * lines and moves on.
 *
 * The `outcome` line on each module is mine, not the brochure's: it says
 * what the student can DO once the module is over, because a day list
 * alone is a syllabus and a syllabus does not sell. Every one of them is a
 * plain restatement of the days above it — if a module's days change, fix
 * its outcome in the same edit.
 */
export const curriculum = {
  heading: 'What you learn in',
  headingAccent: '60 days.',
  sub:
    'Nine modules, one live class a day, every day accounted for. This is ' +
    'the actual syllabus. Open any module and read what you would be doing ' +
    'that day.',

  /* The label above the accordion, so the 60 days are seen as a whole
     before they are read as parts. */
  countLabel: '9 modules · 60 live classes · 1 capstone project',

  modules: [
    {
      n: 'Module 1',
      days: 'Days 1 – 8',
      title: 'Business analyst foundations',
      outcome: 'Speak the language of the job: requirements, stakeholders, documentation.',
      topics: [
        'Introduction to Business Analytics & the Business Analyst role',
        '5-step business analysis framework & decision-making process',
        'BRD, FRD & SRS documentation',
        'SDLC models & the Agile lifecycle',
        'Requirement Traceability Matrix (RTM) & business process analysis (As-Is / To-Be)',
        'User Acceptance Testing (UAT) & change management',
        'SWOT analysis & gap analysis',
        'Stakeholder management & requirement gathering techniques',
      ],
    },
    {
      n: 'Module 2',
      days: 'Days 9 – 14',
      title: 'Excel & Google Sheets for analytics',
      outcome: 'Finish with a working sales dashboard built out of messy data.',
      topics: [
        'Excel basics, data types, formatting & tables',
        'Functions: SUM, IF, COUNTIF, SUMIF, TEXT, DATE',
        'Advanced functions: VLOOKUP, XLOOKUP, INDEX-MATCH',
        'Data cleaning, conditional formatting & data validation',
        'Pivot tables, pivot charts & slicers',
        'Dashboard creation & mini project (sales dashboard)',
      ],
    },
    {
      n: 'Module 3',
      days: 'Days 15 – 20',
      title: 'SQL for business analysis',
      outcome: 'Pull the exact numbers a manager asked for, out of a real database.',
      topics: [
        'Database fundamentals & introduction to SQL',
        'SELECT, WHERE, ORDER BY, LIMIT, DISTINCT',
        'Aggregate functions, GROUP BY, HAVING & CASE',
        'Joins: INNER, LEFT, RIGHT, FULL',
        'Subqueries, views & SQL business case studies',
        'SQL project: business data analysis',
      ],
    },
    {
      n: 'Module 4',
      days: 'Days 21 – 38',
      title: 'Python for data analytics',
      outcome: 'Eighteen days on Python alone, ending at NumPy and pandas.',
      topics: [
        'Introduction to Python & installation',
        'Python basics: datatypes & operators',
        'Conditional statements',
        'For loop / while loop',
        'Functions',
        'Lists: indexing, slicing, methods',
        'Tuples & sets: operations, functions, iteration',
        'Strings: indexing, slicing, formatting, methods',
        'Dictionary: keys, values, methods',
        'OOP basics: class, object, constructor',
        'OOP advanced: inheritance',
        'Polymorphism & abstraction',
        'OOP encapsulation & special methods',
        'Exception handling: try, except, finally, custom exceptions',
        'File handling: read/write txt, csv, json',
        'Modules & packages (os, datetime, random)',
        'NumPy basics: arrays, operations',
        'Pandas basics: Series, DataFrame',
      ],
    },
    {
      n: 'Module 5',
      days: 'Days 39 – 48',
      title: 'Statistics & exploratory data analysis',
      outcome: 'Say what the data actually shows, and prove it with a test.',
      topics: [
        'Data cleaning & transformation (pivot, merge, group by)',
        'Data visualisation with Matplotlib',
        'Statistical visualisation with Seaborn',
        'Descriptive statistics',
        'Probability',
        'Hypothesis testing',
        'Correlation & regression (linear regression basics)',
        'Time series basics: trend and seasonality',
        'Exploratory data analysis (EDA): handling large datasets',
        'Applied EDA mini project',
      ],
    },
    {
      n: 'Module 6',
      days: 'Days 49 – 53',
      title: 'Power BI',
      outcome: 'Publish an interactive dashboard, modelled and written in DAX.',
      topics: [
        'Power BI introduction & data import',
        'Power Query & data transformation',
        'Data modeling & relationships',
        'DAX (measures & calculated columns)',
        'Visualisations, interactive dashboard & publishing',
      ],
    },
    {
      n: 'Module 7',
      days: 'Days 54 – 55',
      title: 'Tableau',
      outcome: 'The second BI tool on your resume, and the one many teams run.',
      topics: [
        'Introduction to Tableau: connecting data, basic charts',
        'Tableau advanced: interactive dashboards',
      ],
    },
    {
      n: 'Module 8',
      days: 'Days 56 – 59',
      title: 'BA tools & career prep',
      outcome: 'Work the way a real team works, then get your resume interview-ready.',
      topics: [
        'Jira: agile boards, user stories, sprint planning',
        'Trello, Miro & Whimsical for collaboration & process mapping',
        'Confluence: documentation & knowledge management',
        'AI tools for BAs (ChatGPT, Copilot, NotebookLM, Gamma) + resume & interview prep',
      ],
    },
    {
      n: 'Module 9',
      days: 'Day 60',
      title: 'Final capstone project',
      outcome: 'One project that uses everything, and the one you walk into interviews with.',
      topics: [
        'Capstone project: BRD + SQL + Python/EDA + Power BI + Jira + presentation',
      ],
    },
  ],

  toolsLabel: 'The tools you will be working in',

  /**
   * Icon + name only. No explanation lines: by this point the reader has
   * been told what the program does, and six blocks of copy here would
   * slow the scroll for no gain.
   *
   * These six are the ones that go on a resume. The collaboration tools
   * from the brochure's domains page — Jira, Trello, Miro, Whimsical,
   * Confluence — are named inside module 08 instead, where a reader can
   * see which day they land on.
   *
   * icon: path to a colour logo in public/images/tools/, or null. While it
   * is null the tile falls back to the monochrome glyph, so the layout can
   * be judged before the assets land.
   */
  tools: [
    { name: 'Excel',    glyph: 'sheet',    icon: null },
    { name: 'SQL',      glyph: 'database', icon: null },
    { name: 'Python',   glyph: 'code',     icon: null },
    { name: 'Gen AI',   glyph: 'spark',    icon: null },
    { name: 'Power BI', glyph: 'bars',     icon: null },
    { name: 'Tableau',  glyph: 'trend',    icon: null },
  ],

  outcome: {
    lead: 'At the end you have',
    strong: 'a finished capstone project, dashboards you can open in an interview, and real tools on your resume.',
  },

  cta: { label: 'Start your job training', href: '#enroll' },
}
