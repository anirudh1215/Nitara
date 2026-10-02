/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║  NITARA — SINGLE SOURCE OF CONTENT                                ║
 * ║  Edit this one file to change everything on the site.             ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 *
 * Nitara Special School & Child Development Center, Sector 24, Rohini.
 *
 * ⚠️  Anything marked `TODO:` is a placeholder and must be replaced with
 *     real, verified information before this site goes live. That applies
 *     especially to staff names and photos, parent testimonials, headline
 *     numbers and any claim about staff credentials.
 */

// ─────────────────────────────────────────────────────────────────
// BRAND PALETTE — lifted from the logo
// ─────────────────────────────────────────────────────────────────

/**
 * `brand` holds the logo colours exactly as drawn. They are vivid, so they
 * are only ever used as FILLS — icon tiles, decorative rules, carousel dots.
 */
export const brand = {
  blue: "#1C4E9D",
  orange: "#F47920",
  green: "#3FA535",
  pink: "#E8368F",
  yellow: "#FDB913",
  purple: "#7B3F98",
} as const;

/**
 * `brandText` holds darkened versions of the same hues for anything that
 * carries TEXT — coloured labels, and solid pills with white text on them.
 *
 * Every value here clears WCAG AA (4.5:1) both as dark text on the cream
 * background and as a background behind white text. The raw logo orange,
 * green, pink and yellow do not, which matters on a site whose readers
 * include families with visual impairments.
 */
export const brandText = {
  blue: "#1C4E9D",   // 8.00:1
  orange: "#BC430C", // 5.32:1
  green: "#2A7D24",  // 5.18:1
  pink: "#C41D73",   // 5.57:1
  amber: "#8A6209",  // 5.48:1
  purple: "#7B3F98", // 6.98:1
} as const;

// ─────────────────────────────────────────────────────────────────
// SITE — identity, contact, SEO, theme
// ─────────────────────────────────────────────────────────────────

export const site = {
  name: "Nitara Special School & Child Development Center",
  shortName: "Nitara",
  parentOrg: "A Unit of Sahaj Sambhav",
  motto: "Learn • Grow • Empower",

  logo: "/nitara-logo.png",
  /** Square illustration mark, transparent background — used in the header */
  mark: "/nitara-mark.png",

  // TODO: replace with the real domain once registered.
  url: "https://nitaraspecialschool.com",

  phone: "+91 96250 07105",
  phoneRaw: "919625007105",
  whatsapp: "https://wa.me/919625007105",

  // TODO: replace with the school's real email address.
  email: "info@nitaraspecialschool.com",

  // TODO: confirm the PIN code — Sector 24, Rohini is served by 110085.
  address: "Plot No. 110, Pocket 27, Sector 24, Rohini, New Delhi – 110085",
  addressLines: [
    "Plot No. 110, Pocket 27",
    "Sector 24, Rohini",
    "New Delhi – 110085",
  ],
  mapQuery: "Plot No 110, Pocket 27, Sector 24, Rohini, New Delhi 110085",

  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  // TODO: add real profile URLs. Empty strings are hidden automatically.
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  seo: {
    title:
      "Nitara Special School & Child Development Center — Rohini, New Delhi",
    description:
      "A special school and child development centre in Sector 24, Rohini. Special education, speech therapy, occupational therapy, behaviour therapy and early intervention for children with autism, ADHD, developmental delay and learning difficulties.",
    ogImage: "/nitara-og.png",
  },
} as const;

// ─────────────────────────────────────────────────────────────────
// HEADER
// ─────────────────────────────────────────────────────────────────

export const nav = [
  { label: "About", to: "#about" },
  { label: "Programs", to: "#programs" },
  { label: "Our Day", to: "#routine" },
  { label: "Team", to: "#team" },
  { label: "FAQ", to: "#faq" },
] as const;

export const headerCta = { label: "Book a Visit", to: "#contact" } as const;

// ─────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Sector 24, Rohini · New Delhi",
  heading: "A school that teaches the way your child learns",
  body: "Nitara is a special school and child development centre for children with autism, ADHD, developmental delay and learning difficulties. Every child here has a plan written for them alone — and a family that helps carry it out.",
  trustWords: [
    { icon: "ph:user-focus-duotone", label: "One child, one plan" },
    { icon: "ph:hand-heart-duotone", label: "Therapists on site" },
    { icon: "ph:users-three-duotone", label: "Parents involved" },
  ],
  primaryCta: { label: "Book a Free Assessment", to: "#contact" },
  secondaryCta: { label: "See our programs", to: "#programs" },
  // TODO: replace with real photographs of the Nitara centre.
  image: {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=80",
    alt: "Young children seated at classroom desks, writing and working on activities together",
  },
} as const;

// ─────────────────────────────────────────────────────────────────
// TRUST STRIP (scrolling marquee)
// ─────────────────────────────────────────────────────────────────

/**
 * TODO: Verify every credential claim below against the team's actual
 * qualifications and registrations before publishing. Remove any that
 * the centre cannot evidence.
 */
export const marquee = [
  "Qualified special educators",
  "Individualised Education Plans",
  "Speech & language therapy",
  "Occupational therapy",
  "Behaviour therapy",
  "Early intervention",
  "Small group sizes",
  "Parent training every term",
] as const;

// ─────────────────────────────────────────────────────────────────
// OUR STORY
// ─────────────────────────────────────────────────────────────────

export const story = {
  eyebrow: "Our Story",
  heading: "Built around the child in front of us",
  paragraphs: [
    "Nitara began with a simple frustration shared by many families in Rohini: being told to wait and watch. Parents noticed their child was not speaking, not making eye contact, not keeping up — and were sent home to wait another six months.",
    "We do not do that. A child who needs help is assessed properly, given a written plan with goals you can actually see, and reviewed every term. Where there is progress, you will see it recorded. Where there is not, we will say so and change the plan.",
  ],
  points: [
    "Assessment before any programme is recommended",
    "Written goals reviewed with you each term",
    "Therapy and classroom work in the same building",
  ],
  cta: { label: "Read about our programs", to: "#programs" },
  // TODO: replace with a real photograph from the centre.
  image: {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80",
    alt: "A young child laughing, with bright paint on their cheeks",
  },
} as const;

// ─────────────────────────────────────────────────────────────────
// PROGRAMS (carousel)
// ─────────────────────────────────────────────────────────────────

export const programs = [
  {
    title: "Early Intervention",
    ages: "0 – 3 years",
    color: brand.pink,
    textColor: brandText.pink,
    icon: "ph:baby-duotone",
    description:
      "The years when the brain changes fastest. Play-based work on communication, movement, attention and early social skills, with parents coached in every session.",
    highlights: [
      "Developmental screening",
      "Parent-led home programme",
      "Speech and motor milestones",
    ],
    // TODO: replace with a real photograph from the centre.
    image: {
      src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
      alt: "A large pile of brightly coloured plastic building blocks",
    },
  },
  {
    title: "Pre-Primary Readiness",
    ages: "3 – 6 years",
    color: brand.orange,
    textColor: brandText.orange,
    icon: "ph:backpack-duotone",
    description:
      "Preparing children for a classroom: sitting tolerance, following instruction, holding a pencil, toilet independence and the social give-and-take that school demands.",
    highlights: [
      "School-readiness goals",
      "Sensory regulation routines",
      "Pre-writing and pre-maths",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
      alt: "A teacher holding a large orange workbook against their chest",
    },
  },
  {
    title: "Special Education",
    ages: "6 – 14 years",
    color: brand.blue,
    textColor: brandText.blue,
    icon: "ph:chalkboard-teacher-duotone",
    description:
      "Functional academics taught in very small groups against an Individualised Education Plan, alongside remedial support for children attending mainstream school.",
    highlights: [
      "Individualised Education Plan",
      "Remedial reading and maths",
      "Shadow support in school",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      alt: "A teacher at the front of a classroom with students seated at desks",
    },
  },
  {
    title: "Life & Creative Skills",
    ages: "14 years +",
    color: brand.green,
    textColor: brandText.green,
    icon: "ph:palette-duotone",
    description:
      "For older children and young adults: money, travel, kitchen and workshop skills, taught alongside art, music and movement that build confidence and expression.",
    highlights: [
      "Daily living and travel training",
      "Art, music and dance sessions",
      "Pre-vocational workshops",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
      alt: "Craft materials laid out on a workbench — coloured tape, scissors and a cutting mat",
    },
  },
] as const;

export const programsSection = {
  eyebrow: "Programs",
  heading: "Four pathways, one plan per child",
  body: "Children move between these as they grow. The pathway sets the shape of the week — the Individualised Education Plan sets the goals.",
} as const;

// ─────────────────────────────────────────────────────────────────
// DAILY ROUTINE (timeline)
// ─────────────────────────────────────────────────────────────────

export const routineSection = {
  eyebrow: "A Day at Nitara",
  heading: "Predictable days, because predictability helps",
  body: "Children who find the world overwhelming do better when they know what comes next. The shape of our day stays the same, so the only new thing a child has to manage is the learning itself.",
} as const;

export const routine = [
  {
    time: "8:45 – 9:30",
    title: "Morning Welcome",
    color: brand.yellow,
    textColor: brandText.amber,
    icon: "ph:sun-horizon-duotone",
    description:
      "Arrival, settling and circle time. Children who need movement or deep pressure to regulate get it now, before anything is asked of them.",
  },
  {
    time: "9:30 – 12:30",
    title: "Learning & Therapy",
    color: brand.blue,
    textColor: brandText.blue,
    icon: "ph:books-duotone",
    description:
      "The core of the day: small-group classroom work alternating with one-to-one speech, occupational, behaviour or physiotherapy sessions as each child's plan requires.",
  },
  {
    time: "12:30 – 1:30",
    title: "Lunch & Rest",
    color: brand.green,
    textColor: brandText.green,
    icon: "ph:bowl-food-duotone",
    description:
      "Lunch is a teaching session too — self-feeding, cutlery, chewing and trying new textures, supported where needed. Then a quiet, low-stimulation rest period.",
  },
  {
    time: "1:30 – 3:00",
    title: "Play & Pick-up",
    color: brand.pink,
    textColor: brandText.pink,
    icon: "ph:balloon-duotone",
    description:
      "Group play, art and music where social skills get practised for real. At pick-up a staff member tells you what your child did today — not just that they were fine.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// TEAM
// ─────────────────────────────────────────────────────────────────

export const teamSection = {
  eyebrow: "Our Team",
  heading: "The people your child will actually see",
  body: "Small enough that every staff member knows every child by name, and knows what this term's goals are.",
} as const;

/**
 * TODO: ⚠️ PLACEHOLDER PEOPLE — these are invented names, roles and photos
 * used only to build the layout. Replace every entry with real staff
 * members, their real qualifications and their own photographs (with
 * written consent) before this site is published.
 */
export const team = [
  {
    name: "Placeholder Name",
    role: "Head of Special Education",
    bio: "Placeholder bio — describe this educator's qualification, years of experience and the age group they lead.",
    color: brand.blue,
    textColor: brandText.blue,
    image: {
      src: "https://placehold.co/400x480/1C4E9D/FFFFFF?text=Staff+Photo",
      alt: "Placeholder portrait — replace with a photograph of the head of special education",
    },
  },
  {
    name: "Placeholder Name",
    role: "Speech & Language Therapist",
    bio: "Placeholder bio — describe this therapist's qualification and the communication difficulties they specialise in.",
    color: brand.orange,
    textColor: brandText.orange,
    image: {
      src: "https://placehold.co/400x480/F47920/FFFFFF?text=Staff+Photo",
      alt: "Placeholder portrait — replace with a photograph of the speech and language therapist",
    },
  },
  {
    name: "Placeholder Name",
    role: "Occupational Therapist",
    bio: "Placeholder bio — describe this therapist's qualification and their approach to sensory and motor work.",
    color: brand.green,
    textColor: brandText.green,
    image: {
      src: "https://placehold.co/400x480/3FA535/FFFFFF?text=Staff+Photo",
      alt: "Placeholder portrait — replace with a photograph of the occupational therapist",
    },
  },
  {
    name: "Placeholder Name",
    role: "Behaviour Therapist",
    bio: "Placeholder bio — describe this therapist's qualification and their experience with behaviour support plans.",
    color: brand.purple,
    textColor: brandText.purple,
    image: {
      src: "https://placehold.co/400x480/7B3F98/FFFFFF?text=Staff+Photo",
      alt: "Placeholder portrait — replace with a photograph of the behaviour therapist",
    },
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// TESTIMONIALS (carousel)
// ─────────────────────────────────────────────────────────────────

export const testimonialsSection = {
  eyebrow: "From Our Families",
  heading: "What parents tell us",
} as const;

/**
 * TODO: ⚠️ PLACEHOLDER REVIEWS — invented quotes with deliberately
 * fictional names, used only to build the layout. Replace with real
 * quotes from real families, with their written consent, or delete this
 * section entirely. Publishing invented reviews as genuine would be
 * misleading.
 */
export const testimonials = [
  {
    quote:
      "Placeholder review — replace with a real parent's own words about their child's progress.",
    name: "Sample Parent A",
    detail: "Parent of a 4-year-old · Placeholder",
    color: brand.pink,
    textColor: brandText.pink,
  },
  {
    quote:
      "Placeholder review — replace with a real parent's own words about the assessment and the plan.",
    name: "Sample Parent B",
    detail: "Parent of a 7-year-old · Placeholder",
    color: brand.blue,
    textColor: brandText.blue,
  },
  {
    quote:
      "Placeholder review — replace with a real parent's own words about the team and communication.",
    name: "Sample Parent C",
    detail: "Parent of a 10-year-old · Placeholder",
    color: brand.green,
    textColor: brandText.green,
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// STATS (count-up)
// ─────────────────────────────────────────────────────────────────

/**
 * Count-up figures.
 *
 * These three are deliberately limited to things that are simply TRUE of the
 * site as written — four programme pathways, six therapies and services named
 * on this page, six days open a week. They are safe to publish as-is.
 *
 * TODO: this section is really meant for the numbers that matter to parents —
 * years of experience, number of educators and therapists, therapy sessions a
 * week. Swap these entries for those figures once you have numbers you can
 * stand behind. Do not publish numbers you cannot evidence.
 *
 * If every `value` here is 0 the whole section hides itself.
 */
export const stats = [
  {
    value: 4,
    suffix: "",
    label: "Program pathways, from early years to young adults",
    icon: "ph:path-duotone",
  },
  {
    value: 6,
    suffix: "",
    label: "Therapies & services under one roof",
    icon: "ph:hand-heart-duotone",
  },
  {
    value: 6,
    suffix: "",
    label: "Days open every week",
    icon: "ph:calendar-check-duotone",
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────

export const faqSection = {
  eyebrow: "FAQ",
  heading: "Questions parents ask us first",
} as const;

export const faqs = [
  {
    question: "What ages do you work with?",
    answer:
      "From infancy through adolescence, and young adults in our life-skills programme. Early intervention is for children under three; pre-primary readiness runs from three to six; special education from six to fourteen; life and creative skills from fourteen upwards. If your child sits near a boundary, call us and we will place them by need rather than by birthday.",
  },
  {
    question: "What are your hours?",
    answer:
      "Monday to Friday, 9:00 AM to 5:00 PM, and Saturday 9:00 AM to 2:00 PM. We are closed on Sunday. Therapy slots outside school hours can often be arranged for children attending a mainstream school — ask us when you call.",
  },
  {
    question: "How many children to each adult?",
    answer:
      "Therapy sessions are one to one. Classroom groups are deliberately small so that every child gets individual attention while still learning to work alongside peers. The exact group size depends on the children in it and their support needs. TODO: state the centre's actual staffing ratio here before publishing.",
  },
  {
    question: "Can my child attend while studying at a regular school?",
    answer:
      "Yes, and many of our children do. We schedule therapy and remedial sessions around school hours, coordinate with your child's school where that helps, and can provide shadow-teacher support in the mainstream classroom.",
  },
  {
    question: "What about meals?",
    answer:
      "Children bring their own lunch from home, which lets us work with the foods your family actually eats. Lunch doubles as a teaching session — self-feeding, cutlery use, chewing and tolerating new textures — supported by staff where a child needs it. Tell us about allergies and feeding difficulties at admission.",
  },
  {
    question: "How does enrolment work?",
    answer:
      "Call or visit us first — there is no form to fill in before you have spoken to a person. We then carry out a developmental assessment, sit down with you to explain what we found in plain language, and recommend a programme. Only if you are comfortable do we complete enrolment and write your child's Individualised Education Plan. Fees are set out in writing before you commit to anything.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// CTA BANNER
// ─────────────────────────────────────────────────────────────────

export const ctaBanner = {
  heading: "Ready to get started?",
  body: "Bring what you have noticed about your child — that is enough to begin. We will tell you honestly whether an assessment is the right next step.",
  cta: { label: "Schedule a Visit", to: "#contact" },
} as const;

// ─────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────

export const contactSection = {
  eyebrow: "Visit Us",
  heading: "Come and see the place",
  body: "You are welcome to walk through the centre, meet the team and ask anything before you decide. Call ahead so someone is free to show you around properly.",
} as const;

// ─────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "About Nitara", to: "#about" },
      { label: "Programs", to: "#programs" },
      { label: "A Day at Nitara", to: "#routine" },
      { label: "Our Team", to: "#team" },
      { label: "FAQ", to: "#faq" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Early Intervention", to: "#programs" },
      { label: "Pre-Primary Readiness", to: "#programs" },
      { label: "Special Education", to: "#programs" },
      { label: "Life & Creative Skills", to: "#programs" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Book a Visit", to: "#contact" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms" },
    ],
  },
] as const;
