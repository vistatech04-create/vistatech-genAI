/**
 * Section 02. Proof on the left, the objection answered on the right.
 */
export const jobSection = {
  /* ---- left column ------------------------------------------------ */
  placedLabel: 'Our students are placed as',

  /**
   * TODO before launch: every row must be a real person who really got that
   * role at that package, with permission to use their name and photo.
   * Roles and the 3.4 LPA figure came off vistatech.org; the rest are
   * placeholders.
   *
   * MOCK: photos point at public/images/mock/, which holds stand-in
   * portraits. They are not Vista Tech students. Delete that folder
   * before launch.
   *
   * The list scrolls forever. Fewer than about eight rows and a visitor
   * notices the loop repeating, so this wants more real students, not fewer.
   */
  placed: [
    { name: 'Ajay Krishna',      role: 'Junior Business Analyst',       pay: '3.4 LPA',    photo: '/images/mock/ajay.jpg' },
    { name: 'Ramya S.',          role: 'Data Analytics Intern',         pay: '₹22K/month', photo: '/images/mock/ramya.jpg' },
    { name: 'Priyadharshini M.', role: 'Power BI Developer',            pay: '3.6 LPA',    photo: '/images/mock/priya.jpg' },
    { name: 'Saravanan M.',      role: 'MIS Analyst',                   pay: '3.0 LPA',    photo: '/images/mock/saravanan.jpg' },
    { name: 'Manikandan S.',     role: 'Business Intelligence Analyst', pay: '4.2 LPA',    photo: '/images/mock/mani.jpg' },
  ],

  /* ---- right column: just the video -------------------------------- */
  /* The question now sits on the thumbnail itself. Written over the image in
     HTML rather than baked into it, so it stays sharp at every size, reflows
     on a phone, and can be edited without regenerating the picture. */
  videoTitle: 'Can you get the Job in',
  videoTitleAccent: '60 Days?',

  /** YouTube id only. Nothing loads from YouTube until someone taps play. */
  youtubeId: null,
  /**
   * The still shown before play. One file serves both shapes: 16:9 from
   * tablet up, 4:5 on a phone. The crop is held at 66% across so she stays
   * in frame when it goes portrait, and the upper left stays clear for the
   * question written over it.
   *
   * MOCK: a generated person, in place so the design can be judged.
   */
  poster: '/images/hero-video.jpg',
  posterAlt:
    'Can you get the Job in 60 Days? A Vista Tech student talks about how ' +
    'they got placed',
  duration: '3 minutes',

  /* ---- the section's two actions ---------------------------------- */
  primaryCta: { label: 'Start your job training', href: '#enroll' },
  secondaryCta: { label: 'Talk to our team', href: '#call' },
  tamil: 'தமிழில் கற்றுக்கொள்ளுங்கள்.',
}
