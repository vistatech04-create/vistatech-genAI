# VistaTech — what's already live (pulled from vistatech.org, 18 Sep 2026)

Source: site is a React SPA. Content extracted from `/static/js/main.000b2c31.js` + JSON-LD.
Everything below is THEIR current wording/numbers. Not yet confirmed by the client — verify before any of it goes on a new page.

## Company
- Vista Tech Solutions. No.115, 7th Floor, Metro Towers, PH Road, Egmore, Chennai 600084.
- Email: vistatech.in@gmail.com / support@vistatech.com
- Positioning used today: "India's first IT training institute with one-to-one mentorship + 50% Pay After Placement"
- JSON-LD lists languages: English, Hindi, Telugu  ← suspicious for Chennai, CONFIRM
- Also runs a Digital Marketing agency division and an HR consulting division.

## People
- Naveen Krishna — Co-Founder, Director, Career Strategist
- Dhanush — Co-Founder, Chief Mentor, Full Stack ("100+ trained by Dhanush alone")
- Priya — Co-Founder, Chief Mentor, Digital Marketing (referred to as "Priya mam")
- Harish — Data Analytics Trainer; leads Full Stack + Digital Marketing verticals
- Placement partner: **Infinite HR Consultants Pvt. Ltd.**, Director **Rajeswari**

## Numbers currently claimed
- 150+ Vista Tech students placed
- 100+ hiring partners
- Infinite HR: 20+ years in recruitment, 2,000+ successful placements
- "7–9% of applicants ever receive an interview call"
- "~90% get rejected after building the skill, portfolio and certificate anyway"
- 5 (elsewhere 7) programs; 45–60 day training; "Day 1–100" placement structure

## Products / SKUs (MORE THAN CLIENT DESCRIBED)
Three tracks on the enroll page:
1. Gen AI · AIML — 45-day
2. Gen AI · Data Science
3. **Gen AI · Full Stack Analytics — 60-day** ← this is the one we're selling
   "Business analyst foundations, Excel, SQL, Python, Power BI and Tableau, plus Jira, Trello, Miro and Confluence"
   Placement roles listed: Power BI Developer, MIS Executive / Analyst, Business Intelligence Analyst, Agile Business Analyst, Product Analyst

Elsewhere the main site also sells: Full Stack Python, Full Stack Java, Data Science, UI/UX, Business Analytics, AI/ML.

## Pricing found on the live enroll page — THREE SKUs, not one
| SKU | Before placement | After placement | Total |
|---|---|---|---|
| Group Session (Online) | ₹15,000 | ₹15,000 | ₹30,000 |
| Group Session (Offline, in-person) | ₹20,000 | ₹20,000 | ₹40,000 |
| 1:1 Dedicated mentor | ₹20,000 | ₹20,000 | ₹40,000 |

FAQ on the same page says "Group ₹30,000 total, 1:1 ₹40,000 total".
**₹1,000 trial week already exists** but only as a small strip: "Not ready for the full program? Register for ₹1000 and get a full week of live sessions." CTA is a **WhatsApp prefill**, not a checkout:
  "Hi Vista Tech, I'd like to register for the ₹1000 / 1-week live trial session."

## The 100-day structure they publish
1. Training start — live mentor-led, cohort or 1:1
2. Internal interview for internship — panel evaluates readiness
3. Training completion — curriculum, capstone project, portfolio done
4. Official interview — profile validation, guided mock-to-real interview
5. HR consultancy placement drive (~Day 61–71) — Infinite HR maps validated profile to live vacancies
6. Offer letter — **second half of fee becomes due here**
7. Remaining 50% settled

## Current enroll page's actual conversion path
Primary CTA = **"Get My Free Career Call — No Payment Now"** → 4-field lead form (name, phone, email, interested track) → "A Vista Tech mentor will call you within 24 hours."
Secondary = "Chat on WhatsApp instead" / "Watch the Intro Video" (gated behind name+phone).
**It is a lead-gen page, not a checkout page.**

## Testimonials on the site (real-looking, need names/photos confirmed)
- "Being a fresher, 1:1 training was very useful to me — got selected as Data Analytics Intern with a stipend of ₹22K. Thank you Priya mam and Harish sir!"
- "Completed training with internship and got placed as Junior Business Analyst at 3.4 LPA. Thank you Naveen sir."
- "With your guidance she got placed as a Junior Data Analyst within 2 months."
- "Good training and support — selected as Data Analyst Intern within 40 days."
- Names seen: Ajay Krishna, Rohit Prakash, Priyadharshini M., Saravanan M., Manikandan S., Dinesh Kumar, Chanthini Selvam, Deepa Murali, ramya.S
- Companies named: Digil Technologies, Hansiba Technologies, Zillion Technologies, Orion Systems

## Red flags to fix in the rebuild
- "Placement Guarantee" / "100% Placement" / "guaranteed job placement" / "guaranteed interviews" appear in places. Not defensible, and Meta rejects it.
- "India's #1 Pay After Job Institute" — unprovable superlative.
- "Only a few spots left this batch!" — no evidence of a real cap (rules 3.4.6 / I2).
- Older template testimonials mention Wipro and a "90-day program" — inconsistent with the 60-day claim. Possibly mock content left in.
- Two different program lengths in circulation: 45–60 days vs "Day 1–100" vs "90-day".
- Brochure PDFs 404 (SPA fallback) — the download buttons are broken.
