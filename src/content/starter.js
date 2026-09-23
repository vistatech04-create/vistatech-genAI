/**
 * Every word on /analytics-starter lives here.
 *
 * This page sells one thing: ₹999 for seven days of live training that ends
 * with a project and a certificate the student can put on a resume. It is
 * not the course page. It never tries to close the ₹15,000 decision — that
 * happens inside the week, once they have met the mentors.
 *
 * The fee adjustment (₹999 comes off the course fee, so joining costs
 * ₹14,000 to start) is deliberately NOT in the hero any more. The hero sells
 * the seven days on their own worth. The adjustment is an extra reason to
 * continue, and it belongs in the money section further down.
 *
 * NUMBERS TO CONFIRM before this page goes live:
 *  - seven live classes across seven days, one a day
 *  - the batch start date and the class timing
 *  - the certificate's exact name, and who issues it
 *  - what the project actually is, so section 02 can name it
 */
export const starter = {
  /* ---- section 01: hero -------------------------------------------- */
  hero: {
    badge: 'Get a certificate when you complete the 7\u00a0days.',

    headlineLight: 'Build an interview\u2011ready analytics project',
    headlineBold: 'you can put on your resume in ',
    headlineAccent: '7 days.',

    /* The badge above carries the certificate, so the sub carries the
       project. Neither says both. */
    sub:
      'Seven live classes with a mentor, not recordings. Learn the ' +
      'fundamentals, work with real data the way a job asks for it, and ' +
      'finish with a project you can show in an interview.',

    /* Three things a person needs to know before they will read further.
       The price sits here on its own, with nothing else attached to it. */
    facts: [
      { big: '7', small: 'live classes' },
      { big: 'தமிழ்', lang: 'ta', small: 'language' },
      { big: '₹999', small: 'upfront fee' },
    ],

    primaryCta: { label: 'Book my 7 day training', href: '#book' },
    secondaryCta: { label: 'Talk to our team', href: '#call' },

    /* The three objections that stop a person mid-scroll, answered early. */
    reassure: 'No coding needed. Any degree. Classes after work hours.',
  },

  /* ---- section 02: trust ------------------------------------------- */
  trust: {
    stats: [
      /* CONFIRM: the live site claims 150+ placed and 100+ hiring partners.
         1000+ trained is the client's own figure, published nowhere yet, and
         it is the biggest number on this page. Get it in writing. */
      { big: '1000', unit: '+', label: 'students trained' },

      /* CONFIRM — IMPORTANT: vistatech.org prints 4.8, but the Google
         listing it links to (maps.app.goo.gl/sjz7bY3cbBdHQ1t3A — Vista Tech,
         Education center, Metro Towers, Egmore) shows 4.2. One click from
         this page and a visitor sees the lower number. Either correct this
         to what the listing says, or point us at the listing that really
         shows 4.8. Do not ship 4.8 against a 4.2 listing. */
      { big: '4.8', rating: 4.8, label: 'rating on Google' },
    ],

    rowsLabel: 'What they wrote on Google',

    /* Every quote is verbatim from the reviews on vistatech.org, cut at a
       word boundary with an ellipsis where it ran long. Nothing is reworded —
       a review is someone else's sentence, so it gets shortened, never
       rewritten.
       Per-review star counts are not published, so no card shows stars. The
       4.8 above is the aggregate and that is the honest place for it.

       LEFT OUT DELIBERATELY: the review from Naveen Kumar, who writes that
       he works as a Technical Trainer at Vista Tech. A staff review on a
       student trust wall is the first thing a sharp visitor checks.

       The rows below are built from this one list: three rows once there are
       nine or more reviews, two until then, so no row is ever short enough
       to show the same person twice on one screen. Add reviews here and the
       third row appears on its own. */
    reviews: [
      {
        name: 'Rajeshwari S',
        when: '2 weeks ago',
        quote:
          'Vista Tech transformed my skills! I joined without any coding ' +
          'background, and now I am developing full-stack apps confidently. ' +
          'The trainers are patient, supportive…',
      },
      {
        name: 'Pooja Sivakumar',
        when: '22 weeks ago',
        quote:
          'I completed my Java Full Stack Development course here, and it ' +
          'was an amazing experience. Thanks to their guidance and placement ' +
          'support, I got placed in a good company…',
      },
      {
        name: 'Viveka D',
        when: '22 weeks ago',
        quote:
          'I recently completed my Java Full Stack Development course, and ' +
          'it was an excellent learning experience… I had the chance to ' +
          'interact directly with the trainers, clear my doubts immediately.',
      },
      {
        name: 'Kalamesh Mani',
        when: '10 weeks ago',
        quote:
          'The interview sessions helped me understand real interview ' +
          'patterns and improve my confidence. The internship gave me ' +
          'practical exposure, real-time tasks…',
      },
      {
        name: 'Nishanth',
        when: '22 weeks ago',
        quote:
          'I had great mentoring from the Vista Tech developer, and they ' +
          'provided me with solid training.',
      },
      {
        name: 'Dhayanidhi B',
        when: '22 weeks ago',
        quote: 'I had a great learning experience in Vista Tech.',
      },

      /* CONFIRM: these two both describe working at Vista Tech. If they are
         interns who came through the program, they belong here. If they are
         employees, delete them. */
      {
        name: 'Anusha Govindan',
        when: '1 day ago',
        quote:
          'I was involved in hands-on tasks and practical work, which helped ' +
          'me gain real-time exposure. The guidance and support from the ' +
          'mentors made learning easy…',
      },
      {
        name: 'Vasanth Kumar',
        when: '1 day ago',
        quote:
          'I gained practical knowledge, worked on real-world projects, and ' +
          'learned professional work culture. The mentors provided ' +
          'continuous guidance…',
      },
    ],

    /* The rating has to be checkable, or it is just a number we typed. */
    link: {
      label: 'Read the reviews on Google',
      href: 'https://maps.app.goo.gl/sjz7bY3cbBdHQ1t3A',
    },
  },

  /* ---- section 03: the week ---------------------------------------- */
  /**
   * PLACEHOLDER SYLLABUS — my version, not Vista Tech's. The client is
   * sending the real week-one plan; swap the seven `days` below and nothing
   * else has to change.
   *
   * How this one is shaped, in case it is useful when the real plan arrives:
   *  - Days 1-3 Excel, days 4-5 SQL, day 6 the project, day 7 the interview
   *    and the certificate. Two tools only. A starter week that name-drops
   *    Python, Power BI and Tableau as well reads as a brochure, and nobody
   *    believes they will learn five tools in seven days.
   *  - Every day ends in something the student can see. "Learn VLOOKUP" is a
   *    syllabus line; "pull matching data from a second sheet without
   *    copy-paste" is a thing they did.
   *  - The project is built on day 6 out of days 1-5, not bolted on. That is
   *    what makes the resume promise in the hero true.
   *  - Day 7 is deliberately not more teaching. Someone who cannot explain
   *    the project has not got an interview-ready project.
   */
  week: {
    heading: 'What will you',
    headingAccent: 'learn?',
    sub:
      'Excel and SQL — the two tools almost every entry-level analytics job ' +
      'asks for. One live class a day, and a finished project by the end of ' +
      'the week.',

    /* The curve on the left. Four labels only: a chart with a label on every
       day is a table, and nobody reads a table on a landing page. The
       positions live in the component, since where a label sits on a curve
       is drawing, not copy. */
    curve: {
      yLabel: 'What you can do',
      xLabel: 'Your seven days',
      marks: [
        { day: 'Day 1', text: 'open a messy file' },
        { day: 'Day 3', text: 'summarise 10,000 rows' },
        { day: 'Day 5', text: 'query a database' },
        { day: 'Day 7', text: 'interview ready' },
      ],
    },

    days: [
      {
        day: 'Day 1',
        title: 'Your first look at real data',
        points: [
          'What an analyst is actually asked to do at work, in plain terms.',
          'Open a messy sales file and clean it: duplicates, blank rows, dates sitting as text.',
        ],
        tools: ['excel'],
      },
      {
        day: 'Day 2',
        title: 'The formulas the job really uses',
        points: [
          'IF, SUMIFS, COUNTIFS and XLOOKUP, and when each one is the right answer.',
          'Pull matching data out of a second sheet without copy-paste.',
        ],
        tools: ['excel'],
      },
      {
        day: 'Day 3',
        title: 'Pivot tables and your first chart',
        points: [
          'Turn ten thousand rows into one summary table in under a minute.',
          'Build the summary sheet your project will sit on.',
        ],
        tools: ['excel'],
      },
      {
        day: 'Day 4',
        title: 'Where SQL comes in',
        points: [
          'Why companies keep their data in a database and not a spreadsheet.',
          'SELECT, WHERE and ORDER BY — your first questions asked of a real table.',
        ],
        tools: ['sql'],
      },
      {
        day: 'Day 5',
        title: 'SQL that answers business questions',
        points: [
          'GROUP BY and totals: sales per city, per month, per product.',
          'JOIN two tables to answer what neither of them can answer alone.',
        ],
        tools: ['sql'],
      },
      {
        day: 'Day 6',
        title: 'Build the project',
        points: [
          'Pick the question, pull the data with SQL, build the dashboard in Excel.',
          'This is the piece that goes on your resume.',
        ],
        tools: ['excel', 'sql'],
      },
      {
        day: 'Day 7',
        title: 'Say it like an interview',
        points: [
          'Explain your project in two minutes, the way a hiring manager will ask for it.',
          'Your certificate, and what the 60-day program adds after this.',
        ],
        tools: ['certificate'],
        /* The week ends where the hero promised it would, so this one is
           tinted gold instead of white. */
        highlight: true,
      },
    ],

    /* The eighth tile in the grid: the week finishes in an action.
       TODO: add the next batch date here once it is confirmed. */
    cta: {
      label: 'Start your Day 1',
      href: '#book',
      note: 'Seven live classes in Tamil. ₹999, paid once.',
    },

    /* Shown on every card. No class length here on purpose: we have not been
       told how long a session runs, and a made-up "45 mins" is the kind of
       detail a student measures you against on day one.
       TODO: add the real class length and this becomes a second pill. */
    livePill: 'Live class',
  },

  /* ---- section 04: is it worth it ---------------------------------- */
  /**
   * The money objection, asked out loud in the reader's own words and then
   * handed to a person to answer. It sits straight after the syllabus on
   * purpose: that is the moment someone has seen everything they get and is
   * working out whether ₹999 is a fair trade.
   *
   * TWO CUTS, NOT ONE REFRAMED. The landscape file plays from 700px up, the
   * portrait file below it. Cropping one 16:9 video into a phone frame
   * throws away the sides — usually the speaker's hands and whatever is on
   * screen beside them.
   *
   * TODO: both youtubeId fields are empty, so the frame shows a marked
   * placeholder. Add the ids and the two stills and it goes live.
   *
   * What the video should actually do, for whoever briefs the shoot: answer
   * the question honestly, in Tamil, in under two minutes. What the week
   * covers, what a student walks out holding, and who it is not for. A video
   * that only says "it is great value" sells nothing — the reader has
   * already read that on the page.
   *
   * Best person to say it is a student who took the week, not a mentor — the
   * stills are framed that way. A mentor answering "is my course worth the
   * money" is just an ad; a student answering it is evidence.
   *
   * MOCK: both stills are a generated person, the same one the course page
   * uses. They stand in so the layout can be judged. They are not a Vista
   * Tech student and must not reach an ad.
   */
  worth: {
    heading: 'Is this 7 day training',
    headingAccent: 'worth the money?',
    sub: 'Fair question. Watch this before you decide.',
    duration: '2 minutes',

    /* Plays on tablets and desktops, from 700px up.
       The still is the same frame the course page uses for its video, so the
       same person answers on both pages — one shoot, one speaker. */
    landscape: {
      youtubeId: null,
      poster: '/images/hero-video.jpg',
      posterAlt:
        'A Vista Tech student talking to camera about the seven day training',
      ratio: '16 / 9',
    },

    /* Plays on phones, below 700px. Cropped from the same photograph, so
       rotating a phone does not change who is speaking. */
    portrait: {
      youtubeId: null,
      poster: '/images/worth-portrait.jpg',
      posterAlt:
        'A Vista Tech student talking to camera about the seven day training',
      ratio: '9 / 16',
    },

    cta: { label: 'Book my 7 day training', href: '#book' },
    /* "Our team", not "my team" — the page is Vista Tech speaking to the
       reader, and it matches the hero's second button word for word. */
    secondaryCta: { label: 'Talk to our team', href: '#call' },
    note: '₹999, paid once. Seven live classes in Tamil.',
  },

  /* ---- section 05: where this week sits ---------------------------- */
  /**
   * The honest frame for the whole page: ₹999 buys week one of a real
   * 60-day program, not a standalone workshop. Saying so here does two jobs
   * — it makes the week feel like the start of something, and it puts the
   * course in front of them before a mentor ever mentions it.
   *
   * CONFIRM: the four stages below are reconstructed from what vistatech.org
   * publishes (60-day Full Stack Analytics, the Day 1-100 placement
   * structure, and the tool list on the enroll page). Every line needs the
   * client's sign-off, particularly the last one.
   *
   * NOTE: no "guaranteed placement" wording anywhere in here, deliberately.
   * "Support continues until your first offer" is what they can actually
   * stand behind, and it is what their own fee model already says.
   */
  program: {
    heading: 'Your seven days are week one of the',
    headingAccent: '60-day program.',
    sub:
      'This is not a workshop that ends on Sunday. It is the opening week ' +
      'of the full stack analytics program — the same batch, the same ' +
      'mentors. After the week you decide whether to carry on.',

    stages: [
      {
        label: 'Week 1',
        title: 'The seven days you are booking',
        body: 'Excel, SQL and your first project. This is the ₹999 part.',
        now: true,
      },
      {
        label: 'Weeks 2 to 6',
        title: 'The rest of the training',
        body:
          'Python, Power BI and Tableau, plus the tools analytics teams ' +
          'actually run on day to day.',
      },
      {
        label: 'Weeks 7 to 8',
        title: 'Portfolio and interview practice',
        body:
          'Your capstone project, your profile checked over, and mock ' +
          'interviews before you sit any real ones.',
      },
      {
        label: 'After day 60',
        title: 'The placement drive',
        body:
          'Our placement partner puts your profile in front of companies ' +
          'that are hiring, and support carries on until your first offer. ' +
          'Half the course fee is only due then.',
      },
    ],

    /* The adjustment finally belongs here — at the point where continuing is
       what is being discussed, not in the hero where it made the week sound
       like a sales pitch. */
    note: 'Carry on after the week and your ₹999 comes off the course fee.',

    /* The roadmap download.
       TODO: the PDF does not exist yet — the brochure links on the live site
       404. Put the real file at /roadmap-60-days.pdf, or wire the form to
       whatever sends it.
       TODO: the form needs a real destination and a Meta Pixel event. A form
       that quietly drops leads is worse than no form. */
    roadmap: {
      eyebrow: 'Free download',
      title: 'The full 60-day roadmap',
      body:
        'Every week of the program in one PDF: what you learn, what you ' +
        'build, and how the placement process actually works.',
      bullets: [
        'All 60 days, week by week',
        'The projects you finish with',
        'How the fee and the placement drive work',
      ],
      nameLabel: 'Your name',
      namePlaceholder: 'Ajay Krishna',
      phoneLabel: 'WhatsApp number',
      phonePlaceholder: '98765 43210',
      emailLabel: 'Email',
      emailPlaceholder: 'you@email.com',

      /* Two questions that tell the mentor who is calling and what to say.
         "Where are you right now?" rather than "what suits you better",
         because the answer is a place the person is in, not a preference —
         and a question you can answer without reading it twice gets more
         answers. */
      salaryLabel: 'What salary are you aiming for?',
      salaryOptions: ['3 LPA', '5 LPA', '7 LPA+'],

      stageLabel: 'Where are you right now?',
      stageOptions: ['Still studying', 'Fresh graduate', 'Career gap', 'Working now'],

      submitLabel: 'Send me the roadmap',
      note: 'We send the PDF on WhatsApp. Nothing else.',
      doneHeading: 'On its way',
      doneBody: 'Check WhatsApp in a minute. The roadmap is a PDF, about 2 MB.',
      /* The picture: the roadmap shown as a bundle — the PDF plus what it
         opens on — so the download looks like a thing you receive rather
         than a link you click. Landscape, sits across the top of the card. */
      cover: '/images/roadmap-bundle.jpg',
      coverAlt:
        'The 60-day roadmap: a printed guide with a weekly plan and a ' +
        'progress tracker, and the same guide open on a phone',
    },
  },

  /* ---- section 06: the draw ---------------------------------------- */
  /**
   * The bonus. It runs last on purpose: a prize is a reason to book NOW for
   * someone already convinced, and a distraction for someone who is not.
   * Putting it above the syllabus would have the page selling a voucher
   * instead of a training week.
   *
   * CONFIRM, all of it — a prize with vague rules reads as a trick:
   *  - who is entered (written here as everyone who books this batch)
   *  - the batch cut-off date, and the date of the draw
   *  - how the winner is picked, and where the result is announced
   *  - how long the mentor call runs, and who takes it
   *
   * WORTH RAISING WITH THE CLIENT: a random draw that you can only enter by
   * paying is a prize competition, and Tamil Nadu is strict about those.
   * Awarding it for the best project of the week instead makes it a contest
   * of skill rather than chance — which is both safer ground and a better
   * motivator, because the way to win is to finish the thing the page
   * already promises. One word in the copy changes it: "drawn" becomes
   * "judged". Ask a local advisor before this goes live either way.
   */
  giveaway: {
    eyebrow: 'One winner, every batch',
    heading: 'One student walks away with',
    headingAccent: 'both of these.',

    prizes: [
      {
        glyph: 'voucher',
        title: '₹999 Amazon voucher',
        body:
          'Your fee back, as a voucher you can spend on anything. The week ' +
          'ends up costing the winner nothing.',
      },
      {
        glyph: 'call',
        title: 'One-to-one call with a senior mentor',
        body:
          'A private call about your own resume and portfolio, and exactly ' +
          'how to prepare for placement interviews.',
      },
    ],

    /* The rules, in one line, in plain words. TODO: real dates. */
    rules:
      'Everyone who books the seven day training is entered. The winner is ' +
      'picked at the end of the batch and told on WhatsApp.',

    cta: { label: 'Book my 7 day training', href: '#book' },
    note: '₹999, paid once. Seven live classes in Tamil.',
  },

  /* ---- section 07: what it is worth -------------------------------- */
  /**
   * The value stack.
   *
   * THE RULE THIS SECTION IS BUILT ON: everything listed is something Vista
   * Tech can actually hand over, and every number is one we can defend out
   * loud. No invented bonuses, no "worth ₹4,999" on a PDF. The total comes
   * to roughly six times the fee, not twenty-five — a student paying ₹999
   * does not believe a ₹25,000 giveaway, and disbelief costs more than a
   * bigger number earns. If an item below cannot be delivered, DELETE IT.
   * Do not reprice it.
   *
   * Where the numbers come from:
   *  - the classes: the group program is ₹30,000 for 60 days, which is about
   *    8.5 weeks, so one week of live teaching is about ₹3,500 pro rata.
   *    This is the only anchor on the page that comes from the client's own
   *    price list, which is what makes it defensible.
   *  - everything else: what that piece would cost bought on its own. All
   *    modest, all roundable down.
   *
   * CONFIRM each line before launch:
   *  - are the classes recorded, and do trial students get the recordings?
   *  - will someone package the datasets and practice files?
   *  - does a mentor actually review each student's project?
   *  - the certificate's exact name, and who issues it
   *  - is there a WhatsApp group for the batch with a mentor answering?
   */
  stack: {
    heading: 'What you get for',
    headingAccent: '₹999.',
    sub:
      'Priced the way each piece would cost on its own. The classes are ' +
      'priced from the 60-day program itself.',

    items: [
      {
        title: 'Seven live classes with a mentor',
        body: 'Not recordings. A person teaching, and you can ask questions.',
        value: '₹3,500',
      },
      {
        title: 'Your interview-ready project',
        body: 'Built with you in class on day six, out of your own work.',
        value: '₹1,000',
      },
      {
        title: 'A mentor looks over your project',
        body: 'Told what is strong, what is weak, and what to fix before an interview.',
        value: '₹1,000',
      },
      {
        title: 'Recordings of all seven classes',
        body: 'Miss a day, or sit through a class twice. They stay with you.',
        value: '₹500',
      },
      {
        title: 'The practice files and datasets',
        body: 'The same Excel files and SQL tables the mentors teach from.',
        value: '₹300',
      },
      {
        title: 'Your certificate',
        body: 'Issued when you finish the week. Goes straight on your resume.',
        value: '₹500',
      },
      {
        title: 'The full 60-day roadmap',
        body: 'Every week of the program, what you build, how placement works.',
        value: '₹300',
      },
    ],

    totalLabel: 'What that adds up to',
    /* Must equal the items above. 3500+1000+1000+500+300+500+300 */
    total: '₹7,100',
    payLabel: 'What you pay today',
    pay: '₹999',

    /* The last word, and the strongest one: the fee is not even spent. */
    note:
      'And if you carry on to the 60-day program after the week, your ₹999 ' +
      'comes off the course fee.',

    footnote:
      'Values are what each part would cost bought on its own. The classes ' +
      'are priced from the 60-day group program, pro rata for one week.',

    cta: { label: 'Book my 7 day training', href: '#book' },
    secondaryCta: { label: 'Talk to our team', href: '#call' },
  },

  /* ---- section 08: questions --------------------------------------- */
  /**
   * The eight things a person actually wants to know before paying, in the
   * order they worry about them. Money and doubt first, logistics second.
   *
   * The one that matters most is "will I get a job after seven days". The
   * answer is no, and saying so plainly is what makes every other answer on
   * the page believable. A page that dodges it gets found out on day one of
   * the batch, by which point the student has paid and stopped trusting you.
   *
   * CONFIRM: class timing, whether classes are recorded, what software a
   * student needs, and how payment actually works.
   *
   * WORTH ADDING once the client decides it: a refund line. "Sit through
   * the first class, and if it is not for you, tell us and we refund the
   * ₹999" would be the strongest answer on this page. Left out because
   * there is no policy yet, and a vague refund answer is worse than none.
   */
  faq: {
    heading: 'Questions people ask',
    headingAccent: 'before they book.',

    items: [
      {
        q: 'Will I get a job after these seven days?',
        a:
          'No, and anyone who tells you otherwise is selling you something. ' +
          'Seven days gets you the fundamentals, one project you can show, ' +
          'and a certificate. Jobs come out of the full 60-day program and ' +
          'the placement support that follows it. This week is where you ' +
          'find out whether the teaching works for you.',
      },
      {
        q: 'I have never written code. Can I still do this?',
        a:
          'Yes. The week is Excel and SQL, and neither is programming. Most ' +
          'people in the batch come from non-IT degrees and non-IT jobs.',
      },
      {
        q: 'Do I have to join the 60-day program after the week?',
        a:
          'No. You pay ₹999, you attend seven classes, and you decide. ' +
          'Nobody is going to chase you.',
      },
      {
        q: 'What happens to my ₹999 if I do join?',
        a:
          'It comes off the course fee. You pay ₹14,000 to start instead of ' +
          '₹15,000, and the second half only after you are placed. So the ' +
          'week costs you nothing if you carry on.',
      },
      {
        q: 'Are the classes live, or recordings?',
        a:
          'Live, one class a day, with a mentor you can ask questions. The ' +
          'recordings reach you afterwards, so a missed day is not a lost day.',
      },
      {
        q: 'What language are the classes in?',
        a:
          'Tamil. Tool names and technical terms stay in English, because ' +
          'that is how they appear at work and in interviews.',
      },
      {
        q: 'What do I need to attend?',
        a:
          'A laptop or desktop and an internet connection that holds a video ' +
          'call. The mentors tell you what to install before day one, and it ' +
          'is nothing you have to buy.',
      },
      {
        q: 'What time are the classes?',
        a:
          'Evening, after working hours, so a job or college does not clash ' +
          'with them. You get the exact timing and the joining link on ' +
          'WhatsApp as soon as you book.',
      },
    ],
  },

  /* ---- section 09: the last ask ------------------------------------ */
  /**
   * NOTE ON THE COPY, because this is the line most likely to get an ad
   * rejected: the brief asked for "you can get your dream job in 60 days
   * from attending this 7 day live training". Seven days of Excel and SQL
   * does not get anybody a job, and Meta rejects job promises — the live
   * site already carries "placement guarantee" wording that has to go.
   *
   * So the promise is kept and made true: job-ready in 60 days is the
   * program's own claim, and this week is where it starts. The urgency
   * stays, because "do not wait another month" is honest — batches start
   * monthly.
   *
   * TODO: put the next batch date in `note`. A real date is the only honest
   * scarcity this page has, and it beats any amount of written urgency.
   */
  closing: {
    heading: 'Do not wait another month.',
    body:
      'Job-ready in 60 days is the whole point of this program, and it ' +
      'starts with seven live classes you can book right now for ₹999.',
    cta: { label: 'Start my training now', href: '#book' },
    secondaryCta: { label: 'Talk to our team', href: '#call' },
    note:
      'Seven live classes in Tamil. ₹999, paid once, and it comes off your ' +
      'course fee if you carry on.',
  },

  /* ---- the footer -------------------------------------------------- */
  /**
   * Thin on purpose: every link is a way off a page you are paying to send
   * people to. But an ad landing page with no company name, address or
   * contact looks like a fly-by-night operation, and that is one of the
   * things Meta looks for.
   *
   * CONFIRM: address, phone and email all came off vistatech.org. Terms and
   * Privacy need real pages before the ads run.
   */
  footer: {
    line: 'Vista Tech Solutions · IT training, digital marketing and HR consulting.',
    address: 'No.115, 7th Floor, Metro Towers, PH Road, Egmore, Chennai 600084',
    phone: '9894449002',
    email: 'support@vistatech.com',
    links: [
      { label: 'Terms', href: '#terms' },
      { label: 'Privacy', href: '#privacy' },
    ],
    // legal:
    //   'No claim of guaranteed employment. Placement support continues until ' +
    //   'your first offer.',
  },

  /* The bar that follows you up the page on a phone. */
  sticky: {
    price: '₹999',
    note: 'for all 7 days',
    cta: { label: 'Book my 7 days', href: '#book' },
  },
}
