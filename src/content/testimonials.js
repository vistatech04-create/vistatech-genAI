/**
 * Section 04. One student at a time, on an employee ID card.
 *
 * The card is the point. A payslip is private, a certificate is generic, but
 * an office ID card is the thing you actually get handed on day one. It is
 * the proof a fresher is imagining when they picture the outcome.
 *
 * TODO before launch: every card must be a real placed student, filmed with
 * their permission, with the company and package confirmed.
 *
 * The stills in public/images/students/ are GENERATED people, in place so the
 * design can be judged. They are cropped to 4:5, which is the shape the card
 * shows, so nothing is cut off. Real students replace them before any ad runs.
 * youtubeId stays null until the real videos exist: the play button then does
 * nothing, which is the honest state for a video we do not have yet.
 */
export const testimonials = {
  heading: 'Hear from people who actually',
  headingAccent: 'got jobs within 60 days.',

  items: [
    {
      id: 'ajay',
      name: 'Ajay Krishna',
      role: 'Junior Business Analyst',
      company: 'Digil Technologies',
      pay: '3.4 LPA',
      placed: 'Batch 07',
      background: 'B.Com graduate',
      youtubeId: null,
      poster: '/images/students/ajay.jpg',
    },
    {
      id: 'ramya',
      name: 'Ramya S.',
      role: 'Data Analytics Intern',
      company: 'Zillion Technologies',
      pay: '₹22K/month',
      placed: 'Batch 06',
      background: 'Final year student',
      youtubeId: null,
      poster: '/images/students/ramya.jpg',
    },
    {
      id: 'priya',
      name: 'Priyadharshini M.',
      role: 'Power BI Developer',
      company: 'Orion Systems',
      pay: '3.6 LPA',
      placed: 'Batch 05',
      background: 'Career switch from BPO',
      youtubeId: null,
      poster: '/images/students/priya.jpg',
    },
    {
      id: 'mani',
      name: 'Manikandan S.',
      role: 'Business Intelligence Analyst',
      company: 'Hansiba Technologies',
      pay: '4.2 LPA',
      placed: 'Batch 05',
      background: 'B.Sc Maths',
      youtubeId: null,
      poster: '/images/students/mani.jpg',
    },
  ],
}
