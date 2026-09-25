/**
 * Section 04. One student at a time, on an employee ID card.
 *
 * The card is the point. A payslip is private, a certificate is generic, but
 * an office ID card is the thing you actually get handed on day one. It is
 * the proof a fresher is imagining when they picture the outcome.
 *
 * Real videos, uploaded to Cloudinary and played as direct files (videoSrc),
 * not YouTube embeds — see VideoPlayer.jsx. poster is Cloudinary's own
 * auto-generated thumbnail: same public id, .jpg instead of .mp4 — no
 * separate still was uploaded for these.
 *
 * `placed` (the batch line under "Trained at Vista Tech") is left blank
 * rather than guessed — none of the four gave a batch number.
 */
export const testimonials = {
  heading: 'Hear from people who actually',
  headingAccent: 'got jobs within 60 days.',

  items: [
    
    
    
    {
      id: 'yamini',
      name: 'Yamini',
      role: 'Data Analyst',
      company: 'Citi',
      pay: '4.9 LPA',
      placed: '',
      background: '2025 passed out',
      videoSrc: 'https://res.cloudinary.com/zmdfv4o7/video/upload/v1790240837/yamini-1.mp4',
      poster: 'https://res.cloudinary.com/zmdfv4o7/video/upload/v1790240837/yamini-1.jpg',
    },{
      id: 'jamuna',
      name: 'Jamuna',
      role: 'Technical Analyst',
      company: 'Citi',
      pay: '4.9 LPA',
      placed: '',
      background: 'Career gap',
      videoSrc: 'https://res.cloudinary.com/zmdfv4o7/video/upload/v1790240933/yellow_shirt_girl-1.mp4',
      poster: 'https://res.cloudinary.com/zmdfv4o7/video/upload/v1790240933/yellow_shirt_girl-1.jpg',
    },{
      id: 'vasikaramani',
      name: 'Vasikaramani.M',
      role: 'Data Processing Analyst',
      company: 'Roop Namyang',
      pay: '4.2 LPA',
      placed: '',
      background: 'Carrier gap',
      videoSrc: 'https://res.cloudinary.com/zmdfv4o7/video/upload/v1790241023/WhatsApp_Video_2026-09-24_at_2.38.03_PM.mp4',
      poster: 'https://res.cloudinary.com/zmdfv4o7/video/upload/v1790241023/WhatsApp_Video_2026-09-24_at_2.38.03_PM.jpg',
    },{
      id: 'monish',
      name: 'Monish',
      role: 'Business Analyst',
      company: 'Ifluids Engineering',
      pay: '3 LPA',
      placed: '',
      background: 'Fresher',
      videoSrc: 'https://res.cloudinary.com/zmdfv4o7/video/upload/v1790240956/VID_20260923_133449.mp4',
      poster: 'https://res.cloudinary.com/zmdfv4o7/video/upload/v1790240956/VID_20260923_133449.jpg',
    },
  ],
}
