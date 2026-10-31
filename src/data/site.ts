/**
 * All editable site content lives in this file.
 * Change text here; the components read from it and never need touching.
 */

export const person = {
  name: 'Muhammad Zakariya',
  shortName: 'Zakariya',
  role: 'Front-End Tech Lead',
  headlineRole: 'Front-End Tech Lead | React, Astro & WordPress | Figma to Web',
  location: 'Surat, Gujarat, India',
  relocation: 'Open to relocation',
  email: 'zakariyabombaywala@gmail.com',
  upwork: 'https://www.upwork.com/freelancers/~01fb216550d992227e',
  company: 'EnactOn Technologies',
  languages: ['English', 'Hindi', 'Gujarati', 'Urdu'],
};

export const seo = {
  title: 'Muhammad Zakariya | Front-End Tech Lead, React, Astro & WordPress',
  description:
    'Front-end tech lead in Surat, India. I turn Figma designs into fast, accessible websites with React, Astro and WordPress. Available for freelance work on Upwork.',
  /** Image in /public used for link previews (1200 x 630). Run `npm run images` to regenerate. */
  ogImage: '/og-image.png',
  ogImageAlt: 'Muhammad Zakariya, Front-End Tech Lead. React, Astro and WordPress, Figma to web.',
  locale: 'en_IN',
};

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  /**
   * The headline shown inside the "selected frame".
   * Words between *asterisks* get the highlighted "selected text" treatment.
   */
  headline: 'I turn *Figma frames* into fast, accessible websites.',
  /** Label in the blue spec tag. Size and line height are measured live in the browser. */
  specLayer: 'Heading',
  specFont: 'Schibsted Grotesk ExtraBold',
  /** Status line at the bottom of the specs panel. */
  status: 'Available for freelance projects',
  /** The Figma-style panel beside the headline. Its values update live. */
  panel: {
    label: 'Headline specs',
    designTab: 'Design',
    codeTab: 'Code',
    copyCss: 'Copy CSS',
    copied: 'Copied',
  },
  /** Cursor-chat hint beside the frame. Visitors can drag the frame's edge to resize it. */
  resizeHint: 'Drag to resize',
  intro:
    'Front-end tech lead at EnactOn Technologies. I build marketing sites and product interfaces in React, Astro and WordPress, and lead the developers who ship them.',
  primaryCta: { label: 'See selected work', href: '#work' },
  secondaryCta: { label: 'Get in touch', href: '#contact' },
  facts: [
    { label: 'Currently', value: 'Tech Lead at EnactOn Technologies' },
    { label: 'Stack', value: 'React, Astro, WordPress' },
    { label: 'Based in', value: 'Surat, India. Open to relocation' },
  ],
};

export type ProjectCategory = 'migration' | 'astro' | 'wordpress';

export interface Project {
  title: string;
  category: ProjectCategory;
  /** What the site does, shown above the title. */
  type: string;
  summary: string;
  stack: string[];
  /** Live URL. Leave empty to show the row without a link. */
  url?: string;
  /** Optional year, e.g. "2025". */
  year?: string;
  /** Screenshot path inside /public, e.g. "/work/acme.webp" (16:10 works best). */
  image?: string;
  imageAlt?: string;
}

export const work = {
  title: 'Selected work',
  intro:
    'Live sites for telehealth and consumer brands, including four WordPress sites rebuilt in Astro for speed.',
  /** Filter buttons above the list. Order here is the order shown. */
  categories: {
    migration: 'WordPress to Astro',
    astro: 'Built with Astro',
    wordpress: 'WordPress',
  } satisfies Record<ProjectCategory, string>,
  allLabel: 'All',
  projects: [
    {
      title: 'ParkingMD',
      category: 'migration',
      type: 'Telehealth, handicap parking permits',
      summary:
        'Patients get a handicap parking permit evaluation online from licensed providers. Migrated from WordPress to Astro.',
      stack: ['Astro', 'Island architecture', 'On-page SEO'],
      url: 'https://parkingmd.com/',
      image: '/work/parkingmd.webp',
      imageAlt: 'ParkingMD homepage',
    },
    {
      title: 'FMLADocs',
      category: 'migration',
      type: 'Telehealth, FMLA paperwork',
      summary:
        'Board-certified telehealth doctors complete FMLA certification paperwork online. Migrated from WordPress to Astro.',
      stack: ['Astro', 'Island architecture', 'On-page SEO'],
      url: 'https://fmladocs.com/',
      image: '/work/fmladocs.webp',
      imageAlt: 'FMLADocs homepage',
    },
    {
      title: 'TintedMD',
      category: 'migration',
      type: 'Telehealth, vehicle tint exemptions',
      summary:
        'Drivers qualify for a medical window-tint exemption based on their condition. Migrated from WordPress to Astro.',
      stack: ['Astro', 'Island architecture', 'On-page SEO'],
      url: 'https://tintedmd.com/',
      image: '/work/tintedmd.webp',
      imageAlt: 'TintedMD homepage',
    },
    {
      title: 'LeafyRx',
      category: 'migration',
      type: 'Telehealth, medical marijuana cards',
      summary:
        'Patients connect with licensed providers online for evaluations and state-approved certifications. Migrated from WordPress to Astro.',
      stack: ['Astro', 'Island architecture', 'On-page SEO'],
      url: 'https://leafyrx.org/',
      image: '/work/leafyrx.webp',
      imageAlt: 'LeafyRx homepage',
    },
    {
      title: 'HouseMaxxing',
      category: 'astro',
      type: 'Property tax appeals',
      summary:
        'Homeowners check their property tax savings in under a minute and the team files the appeal. Built from scratch in Astro.',
      stack: ['Astro', 'JavaScript', 'Responsive layout'],
      url: 'https://myhousemaxxing.com/',
      image: '/work/myhousemaxxing.webp',
      imageAlt: 'HouseMaxxing homepage',
    },
    {
      title: 'GetMyDoctorNote',
      category: 'astro',
      type: 'Telehealth, doctor’s notes',
      summary:
        'Physician-signed doctor’s notes for work or school, requested fully online. Built from scratch in Astro.',
      stack: ['Astro', 'JavaScript', 'On-page SEO'],
      url: 'https://getmydoctornote.com/',
      image: '/work/getmydoctornote.webp',
      imageAlt: 'GetMyDoctorNote homepage',
    },
    {
      title: 'Minimal',
      category: 'wordpress',
      type: 'Telehealth, weight management',
      summary:
        'Personalised, doctor-approved weight management programmes, with a shop and treatment pages. Built on WordPress.',
      stack: ['WordPress', 'Custom theme', 'JavaScript'],
      url: 'https://joinminimal.com/',
      image: '/work/joinminimal.webp',
      imageAlt: 'Minimal homepage',
    },
    {
      title: 'Wellness Wag',
      category: 'wordpress',
      type: 'Telehealth, ESA letters',
      summary:
        'Emotional support animal letters from licensed therapists after a clinical evaluation. Built on WordPress.',
      stack: ['WordPress', 'Custom theme', 'JavaScript'],
      url: 'https://wellnesswag.com/',
      image: '/work/wellnesswag.webp',
      imageAlt: 'Wellness Wag homepage',
    },
    {
      title: 'Leafy DOC',
      category: 'wordpress',
      type: 'Telehealth, medical marijuana cards',
      summary:
        'Patients apply for a medical marijuana card online with licensed doctors and same-day certification. Built on WordPress.',
      stack: ['WordPress', 'Custom theme', 'JavaScript'],
      url: 'https://leafydoc.com/',
      image: '/work/leafydoc.webp',
      imageAlt: 'Leafy DOC homepage',
    },
  ] as Project[],
};

export const process = {
  title: 'How I work',
  intro: 'Three steps, the same on every project, so you always know what happens next.',
  steps: [
    {
      title: 'Review the design',
      body: 'Before writing code I go through the Figma file: components, spacing, type styles, hover and empty states, and the breakpoints the design does not show. Questions get asked up front, not after launch.',
      outputs: ['Component list', 'Open questions', 'Responsive plan'],
    },
    {
      title: 'Build and test',
      body: 'Semantic HTML, clean components and styles that match the design. I test across browsers and devices, check keyboard access and contrast, and measure Core Web Vitals before anything goes live.',
      outputs: ['Staging link', 'Cross-browser checks', 'Performance report'],
    },
    {
      title: 'Launch and hand off',
      body: 'I deploy, set up on-page SEO and redirects, then hand over a site your team can edit without calling me, with short notes on how it is built.',
      outputs: ['Live site', 'SEO basics', 'Handover notes'],
    },
  ],
};

export const experience = {
  title: 'Experience',
  roles: [
    {
      role: 'Tech Lead',
      company: 'EnactOn Technologies',
      start: 'Oct 2026',
      end: 'Present',
      points: [
        'Oversee front-end delivery across React, Astro and WordPress projects.',
        'Guide technical decisions and review code for the front-end team.',
        'Mentor developers on performance, accessibility and maintainable CSS.',
      ],
    },
    {
      role: 'Junior Front-End Developer',
      company: 'EnactOn Technologies',
      start: 'Jun 2024',
      end: 'Sep 2026',
      points: [
        'Launched high-performance marketing sites with WordPress, React and Astro.',
        'Used Astro island architecture to ship less JavaScript and improve Core Web Vitals.',
        'Built custom WordPress themes and plugins in JavaScript and PHP.',
        'Turned UI/UX designs into interactive features, with on-page SEO built in.',
        'Introduced AI-assisted workflows to speed up routine development work.',
      ],
    },
    {
      role: 'Front-End Developer Intern',
      company: 'EnactOn Technologies',
      start: 'Feb 2023',
      end: 'Aug 2023',
      points: [
        'Built interfaces in HTML, CSS and JavaScript.',
        'Fixed cross-browser issues and maintained client sites.',
        'Worked in a Git-based team workflow.',
      ],
    },
  ],
  educationTitle: 'Education',
  education: [
    {
      degree: 'B.E. Computer Engineering',
      school: 'Gujarat Technological University',
      years: '2021 – 2023',
      note: 'CGPA 7.67',
    },
    {
      degree: 'Diploma in Computer Engineering',
      school: 'Mahavir Swami Polytechnic',
      years: '2017 – 2020',
      note: 'CGPA 8.02',
    },
  ],
};

export const skills = {
  title: 'Skills',
  groups: [
    {
      name: 'Front-end',
      items: ['React.js', 'Astro.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'CSS Grid and Flexbox'],
    },
    {
      name: 'Styling',
      items: ['Tailwind CSS', 'SCSS / SASS', 'Bootstrap'],
    },
    {
      name: 'WordPress',
      items: [
        'Custom themes',
        'Child themes',
        'Custom plugins (JS and PHP)',
        'Bricks, Kadence, Avada',
        'WPBakery, Elementor',
      ],
    },
    {
      name: 'Design to code',
      items: ['Figma to web', 'Responsive layouts', 'On-page SEO', 'Core Web Vitals'],
    },
    {
      name: 'Tools and workflow',
      items: ['Git and GitHub', 'NPM', 'VS Code', 'AI-assisted coding and automation'],
    },
    {
      name: 'Languages',
      items: person.languages,
    },
  ],
};

export const contact = {
  title: 'Have a design that needs building?',
  body: 'Send a Figma link and a short brief. I will reply with questions and a plan.',
  copyLabel: 'Copy email',
  copiedLabel: 'Copied',
  upworkLabel: 'Hire me on Upwork',
};

/** Inspect mode: the header toggle that shows the specs of anything you hover. */
export const inspect = {
  toggleLabel: 'Inspect',
  barText: 'Inspect mode. Hover, tap or tab to anything to see its specs.',
  exitLabel: 'Exit',
  onAnnouncement: 'Inspect mode on. Move focus to see each element’s specs. Press Escape to exit.',
  offAnnouncement: 'Inspect mode off.',
};

export const footer = {
  note: 'Designed in Figma, built with Astro.',
};
