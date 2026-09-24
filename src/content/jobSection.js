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
   * Ajay Krishna and Saravanan M. now use their real Cloudinary photos —
   * they are the same two people in placements.js. Ramya S., Priyadharshini
   * M. and Manikandan S. still point at public/images/mock/, stand-in
   * portraits that are not Vista Tech students. Replace those three with
   * real photos (or delete the mock folder) before launch.
   *
   * The list scrolls forever. Fewer than about eight rows and a visitor
   * notices the loop repeating, so this wants more real students, not fewer.
   */
  placed: [
    { name: 'Ajay Krishna',      role: 'Junior Business Analyst',       pay: '3.4 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/v1790241678/Ajay_Krishna_-_powerbi.png' },
    { name: 'Vignesh.',          role: 'Business Analyst',         pay: '₹22K/month', photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/v1790241678/vignesh_business_analyst.jpg' },
    { name: 'Rajesh', role: 'Operation Analyst',            pay: '3.6 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/v1790241676/Rajesh-Operation_analyst.jpg' },
    { name: 'Saravanan M.',      role: 'Data Analyst',                   pay: '3.0 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/v1790241678/saravnan_-_data_analyst.jpg' },
    { name: 'Meghana.',     role: 'Data Scientist', pay: '4.2 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/v1790241677/Meghana-_Data_scientist.jpg' },
    { name: 'Karthik.',     role: 'Operation Analyst', pay: '4.0 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/v1790241677/karthik-operation_Analyst.jpg' },
    { name: 'Arjun.',     role: 'Data Scientist', pay: '4.5 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/v1790241677/Arjun-Data_Scientist.jpg' },
    { name: 'Prakash.',     role: 'Data Analyst', pay: '4.5 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/v1790241678/Rohit_Prakash-Data_anlyst.png' },
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
