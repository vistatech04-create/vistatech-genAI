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
    { name: 'Ajay Krishna',      role: 'Junior Business Analyst',       pay: '3.4 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/f_auto,q_auto,w_140/v1790241678/Ajay_Krishna_-_powerbi.png' },
    { name: 'Vignesh.',          role: 'Business Analyst',         pay: '₹22K/month', photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/f_auto,q_auto,w_140/v1790241678/vignesh_business_analyst.jpg' },
    { name: 'Rajesh', role: 'Operation Analyst',            pay: '3.6 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/f_auto,q_auto,w_140/v1790241676/Rajesh-Operation_analyst.jpg' },
    { name: 'Saravanan M.',      role: 'Data Analyst',                   pay: '3.0 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/f_auto,q_auto,w_140/v1790241678/saravnan_-_data_analyst.jpg' },
    { name: 'Meghana.',     role: 'Data Scientist', pay: '4.2 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/f_auto,q_auto,w_140/v1790241677/Meghana-_Data_scientist.jpg' },
    { name: 'Karthik.',     role: 'Operation Analyst', pay: '4.0 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/f_auto,q_auto,w_140/v1790241677/karthik-operation_Analyst.jpg' },
    { name: 'Arjun.',     role: 'Data Scientist', pay: '4.5 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/f_auto,q_auto,w_140/v1790241677/Arjun-Data_Scientist.jpg' },
    { name: 'Prakash.',     role: 'Data Analyst', pay: '4.5 LPA',    photo: 'https://res.cloudinary.com/zmdfv4o7/image/upload/f_auto,q_auto,w_140/v1790241678/Rohit_Prakash-Data_anlyst.png' },
  ],

  /* ---- right column: just the video -------------------------------- */
  /**
   * No poster, no title overlay, no play button of the usual kind:
   * JobSection.jsx passes autoplayPreview, so this starts muted as soon as
   * the page loads and only switches to sound once the viewer clicks the
   * centred play button — see VideoPlayer.jsx. No metadata-video-title /
   * video-title params either, so Mux's own player has no label to show.
   */
  youtubeId: null,
  embedSrc: 'https://player.mux.com/9WMeNFahYLy4gTYVX43BMRHb8aaj3rhxonUm1mNSNAE',
  posterAlt:
    'Can you get the Job in 60 Days? A Vista Tech student talks about how ' +
    'they got placed',

  /* ---- the section's action ---------------------------------------- */
  primaryCta: { label: 'Start your job training', href: '#enroll' },
  tamil: 'தமிழில் கற்றுக்கொள்ளுங்கள்.',
}
