/**
 * Section 07. Google reviews, taken from vistatech.org/enroll.
 *
 * FIVE REVIEWS WERE LEFT OUT ON PURPOSE. Their enroll page mixes student
 * reviews with reviews written by their own staff and interns — one of them
 * opens "I'm working as a Technical Trainer at Vista Tech", two more start
 * "Working at Vista Tech was a great experience". Those are employee reviews.
 * Putting them under a heading that says "students" is the kind of thing
 * anyone can check in ten seconds, because Google reviews are public.
 *
 * Only students and one student's family member are below.
 *
 * TODO: two of these are Java Full Stack students, not analytics students.
 * They still prove the institute places people, but if there are analytics
 * reviews on the Google listing, those are stronger on this page.
 */
export const reviews = {
  heading: 'What students say',
  headingAccent: 'about us.',
  sub: 'Straight from the Google reviews. Nothing edited.',

  items: [
    {
      name: 'Ramya S.',
      rating: 5,
      time: '3 weeks ago',
      text:
        'Completed training with internship and got placed as Junior Business ' +
        'Analyst at 3.4 LPA. Thank you Naveen sir for your guidance and mentorship.',
    },
    {
      name: 'Dr. Arul Mathi',
      rating: 5,
      time: '3 weeks ago',
      text:
        "We reached out to Vista Tech for our sister's training. With your " +
        'guidance she got placed as a Junior Data Analyst within 2 months. ' +
        'Thank you for all your help!',
    },
    {
      name: 'Pooja Sivakumar',
      rating: 5,
      time: '22 weeks ago',
      text:
        'I completed my Java Full Stack Development course here, and it was an ' +
        'amazing experience. Thanks to their guidance and placement support, I ' +
        'got placed in a good company. Totally recommend this institute!',
    },
    {
      name: 'Ganesh Kota',
      rating: 4,
      time: '3 months ago',
      text:
        'The trainers are very experienced and explain even complex topics ' +
        'simply. Practical training, real-time projects and excellent placement ' +
        'assistance throughout.',
    },
    {
      name: 'Viveka D',
      rating: 5,
      time: '22 weeks ago',
      text:
        'I recently completed my Java Full Stack Development course. The course ' +
        'covered Java, Spring Boot, HTML, CSS, JavaScript, and MySQL. This gave ' +
        'me strong technical knowledge and confidence to build complete web ' +
        'applications.',
    },
    {
      name: 'Logesh S',
      rating: 5,
      time: '3 months ago',
      text:
        'Excellent institute for both learning and placement. Trainers ensure ' +
        'you understand concepts deeply, and the placement support is outstanding.',
    },
  ],
}
