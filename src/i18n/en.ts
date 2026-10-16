/**
 * English text for the whole site. Other languages copy this file and
 * translate the values; the keys must stay the same.
 */
const en = {
  langCode: 'en',
  locale: 'en_ZW',

  nav: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    services: 'Services',
    contact: 'Contact',
    news: 'News',
    menu: 'Menu',
    cta: 'Talk to us',
    skip: 'Skip to content',
  },

  footer: {
    tagline: 'Reliable, affordable software made for real-world needs.',
    company: 'Company',
    getInTouch: 'Get in touch',
    madeIn: 'Built in Zimbabwe.',
    rights: 'All rights reserved.',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },

  home: {
    title: 'Sengeti Technologies | Reliable, affordable software',
    description:
      'Sengeti Technologies builds reliable, affordable software: web, mobile and cloud solutions made for real-world needs. Based in Zimbabwe.',
    eyebrow: 'Web · Mobile · Cloud',
    heading: 'Reliable, affordable software for',
    headingAccent: 'real-world needs.',
    lead: 'Sengeti Technologies builds web, mobile and cloud solutions that are dependable, fairly priced and designed around the way people actually work.',
    primaryCta: 'See our products',
    secondaryCta: 'Talk to us',
    servicesHeading: 'What we do',
    servicesLead: 'From a single app to a complete system, we design, build and look after software that does its job.',
    productHeading: 'Our first product',
    stackLabel: 'What we work with',
    stack: ['Android apps', 'Web applications', 'Cloud hosting', 'APIs and integrations', 'Secure sign-in', 'Automatic backups'],
    mockupLabel: 'Illustration of the Sengeti Attendance app showing a live class register',
    testimonialsHeading: 'What our clients say',
    clientsHeading: 'Trusted by',
    caseStudiesHeading: 'Case studies',
    readCaseStudy: 'Read the case study',
    whyHeading: 'Why Sengeti',
    why: [
      {
        title: 'Reliable',
        text: 'Software that keeps working day after day, with care taken over the details that matter.',
      },
      {
        title: 'Affordable',
        text: 'Fair pricing that makes good software reachable for schools, businesses and organisations of every size.',
      },
      {
        title: 'Made for real conditions',
        text: 'Built to run well on everyday phones and slow or patchy connections.',
      },
    ],
    ctaHeading: 'Have a project in mind?',
    ctaText: 'Tell us what you need and we will get back to you.',
    ctaButton: 'Contact us',
  },

  about: {
    title: 'About us | Sengeti Technologies',
    description:
      'Sengeti Technologies is a Zimbabwean software company building reliable, affordable web, mobile and cloud solutions. Founded by Morris N. Bangezhano.',
    heading: 'About Sengeti Technologies',
    lead: 'Sengeti Technologies builds reliable, affordable software: web, mobile and cloud solutions made for real-world needs.',
    storyHeading: 'Who we are',
    story: [
      'We are a software company based in Zimbabwe. We build products of our own and software for clients, from websites and mobile apps to cloud systems.',
      'Everything we make starts from the real situation it will be used in: the devices people have, the connections they rely on and the budgets they work with.',
    ],
    valuesHeading: 'How we work',
    values: [
      { title: 'Build it to last', text: 'We test carefully and choose proven technology, so what we deliver keeps working.' },
      { title: 'Keep it simple', text: 'Clear screens and straightforward workflows that people can pick up quickly.' },
      { title: 'Be fair', text: 'Honest advice and pricing that fits the size of the job.' },
      { title: 'Stay close', text: 'We listen first and keep supporting our software after it launches.' },
    ],
    founderHeading: 'Our founder',
    founderRole: 'Founder',
    founderText: 'Sengeti Technologies was founded in Zimbabwe by Morris N. Bangezhano.',
  },

  products: {
    title: 'Products | Sengeti Technologies',
    description: 'Software products by Sengeti Technologies, starting with Sengeti Attendance for schools.',
    heading: 'Products',
    lead: 'Ready-made software from Sengeti Technologies. More products are on the way.',
    viewDetails: 'View details',
    comingSoon: 'Coming soon',
    available: 'Available',
    platforms: 'Platforms',
    features: 'Features',
    requestDemo: 'Request a demo',
    askOnWhatsApp: 'Ask on WhatsApp',
    whatsappMessage: 'Hello Sengeti, I would like to know more about',
    backToProducts: 'All products',
    moreSoonHeading: 'More on the way',
    moreSoonText: 'We are working on new products. Get in touch if there is something you would like us to build.',
  },

  services: {
    title: 'Services | Sengeti Technologies',
    description:
      'Custom software, web and mobile apps, and cloud solutions from Sengeti Technologies in Zimbabwe.',
    heading: 'Services',
    lead: 'We build software around your needs, then help you run it.',
    items: [
      {
        id: 'custom-software',
        title: 'Custom software',
        text: 'Systems designed for the way your organisation works, replacing paperwork, spreadsheets and manual steps.',
        points: ['Business and school management systems', 'Workflow automation', 'Dashboards and reporting', 'Connecting your existing tools'],
      },
      {
        id: 'web-mobile',
        title: 'Web and mobile apps',
        text: 'Fast websites, web applications and Android apps that work well on everyday phones.',
        points: ['Company websites', 'Web applications', 'Android apps', 'Built for slow connections'],
      },
      {
        id: 'cloud',
        title: 'Cloud solutions',
        text: 'Secure hosting, backups and cloud setup so your systems stay available and your data stays safe.',
        points: ['Cloud hosting and setup', 'Backups and recovery', 'Moving systems to the cloud', 'Monitoring and maintenance'],
      },
    ],
    processHeading: 'How a project runs',
    process: [
      { title: 'Listen', text: 'We learn what you need and what success looks like.' },
      { title: 'Plan', text: 'You get a clear scope, timeline and price.' },
      { title: 'Build', text: 'We build in stages and show you progress along the way.' },
      { title: 'Launch and support', text: 'We launch, train your team and keep things running.' },
    ],
    ctaHeading: 'Let us talk about your project',
    ctaButton: 'Get in touch',
  },

  contact: {
    title: 'Contact | Sengeti Technologies',
    description: 'Contact Sengeti Technologies by email, WhatsApp, phone or the contact form.',
    heading: 'Contact us',
    lead: 'Questions, quotes or demos: send us a message and we will reply as soon as we can.',
    formHeading: 'Send a message',
    name: 'Your name',
    email: 'Email address',
    phone: 'Phone number (optional)',
    subject: 'What is it about?',
    subjects: ['General question', 'Sengeti Attendance', 'A new project', 'Support'],
    message: 'Message',
    send: 'Send message',
    sending: 'Sending…',
    success: 'Thank you. Your message has been sent and we will be in touch soon.',
    error: 'Sorry, the message could not be sent. Please try again, or email or WhatsApp us instead.',
    emailHeading: 'Email',
    phoneHeading: 'WhatsApp or call',
    whatsappButton: 'Chat on WhatsApp',
    whatsappMessage: 'Hello Sengeti Technologies,',
    locationHeading: 'Location',
  },

  build: {
    heading: 'How we build',
    lead: 'The engineering choices behind every Sengeti product and client project.',
    pillars: [
      {
        icon: 'phone',
        title: 'Mobile first',
        text: 'Designed for the phones people really use, with native Android apps where they make sense.',
      },
      {
        icon: 'cloud',
        title: 'Cloud native',
        text: 'Hosted on modern cloud infrastructure that scales from one school or office to many.',
      },
      {
        icon: 'lock',
        title: 'Secure by design',
        text: 'Encrypted connections, careful access control and regular backups protect your data.',
      },
      {
        icon: 'signal',
        title: 'Light on data',
        text: 'Small, efficient apps and pages that stay quick on slow or expensive connections.',
      },
    ],
    highlights: [
      { value: 'Android', label: 'and web apps' },
      { value: 'Cloud', label: 'hosted and backed up' },
      { value: 'HTTPS', label: 'encrypted everywhere' },
      { value: 'Local', label: 'support in Zimbabwe' },
    ],
  },

  mockup: {
    app: 'Sengeti Attendance',
    className: 'Form 3A · Mathematics',
    live: 'Live',
    present: 'present',
    checkIn: 'Check in',
    scan: 'Scan the class QR code',
    selfie: 'Take a selfie instead',
    checkedIn: 'Checked in',
    late: 'Late',
    absent: 'Absent',
    tabs: ['Register', 'Reports', 'Gradebook', 'Schools'],
    students: ['Tendai M.', 'Rudo C.', 'Tatenda N.', 'Chipo K.', 'Farai D.'],
  },

  news: {
    title: 'News | Sengeti Technologies',
    description: 'News, product updates and case studies from Sengeti Technologies.',
    heading: 'News and case studies',
    lead: 'Product updates, stories from our clients and what we are working on.',
    caseStudy: 'Case study',
    news: 'News',
    readMore: 'Read more',
    back: 'All news',
    client: 'Client',
  },

  legal: {
    lastUpdated: 'Last updated',
  },

  notFound: {
    title: 'Page not found | Sengeti Technologies',
    heading: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    home: 'Back to home',
  },
};

export default en;
