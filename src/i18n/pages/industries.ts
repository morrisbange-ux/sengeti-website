/**
 * Text for the Industries pages (/industries and /industries/<slug>).
 * French and Portuguese are typed as `typeof en`, so every language must
 * have the same keys. Slugs, icons and links stay the same in every language.
 */

/** Industry slugs, in the order they are shown. */
export const industrySlugs = ['universities', 'ngos', 'retail', 'finance', 'healthcare', 'government'] as const;
export type IndustrySlug = (typeof industrySlugs)[number];

/** Icon (from Icon.astro) for each industry. */
export const industryIcons = {
  universities: 'users',
  ngos: 'globe',
  retail: 'cart',
  finance: 'wallet',
  healthcare: 'shield',
  government: 'doc',
} as const satisfies Record<IndustrySlug, string>;

const en = {
  /** Label for menus and the footer. */
  nav: 'Industries',
  index: {
    title: 'Industries we serve | Sengeti Technologies',
    description:
      'Software and automation for universities, NGOs, retailers and SMEs, microfinance institutions, healthcare providers and government offices in Zimbabwe and neighbouring countries.',
    eyebrow: 'Industries',
    heading: 'Software and automation',
    headingAccent: 'for your industry.',
    lead: 'Every sector has its own paperwork. We build systems for universities, NGOs, shops, microfinance institutions, clinics and government offices in Zimbabwe and neighbouring countries.',
    listHeading: 'Who we work with',
    cardCta: 'See what we build',
    otherHeading: "Don't see your industry?",
    otherText: 'If your team repeats it every day, we can automate it. Tell us how you work today and we will show you what is possible.',
  },
  labels: {
    industries: 'Industries',
    challengesHeading: 'Challenges we solve',
    buildHeading: 'What we build for you',
    learnMore: 'Learn more',
    faqHeading: 'Questions',
    ctaHeading: 'Ready to take the routine work off your team?',
    ctaText: "Tell us how you work today. The first conversation is free: we'll show you what could be automated and what it would save.",
    otherIndustries: 'Other industries',
    allIndustries: 'All industries',
  },
  items: {
    universities: {
      name: 'Universities and colleges',
      summary: 'Attendance, exam eligibility, student records and fee reminders that run themselves.',
      points: ['Attendance and exam eligibility', 'Student records and enrolment', 'Fee reminders and receipts'],
      audience: 'Universities, colleges and other higher education institutions',
      title: 'Software for universities and colleges in Zimbabwe | Sengeti Technologies',
      description:
        'Software and automation for universities and colleges in Zimbabwe and the region: Sengeti Attendance with rotating QR check-in and exam eligibility lists, student records, fee reminders and reports.',
      eyebrow: 'Higher education',
      heading: 'Software for universities and colleges',
      headingAccent: 'that takes paper off campus.',
      lead: 'From attendance and exam eligibility to student records and fee reminders, we help universities and colleges in Zimbabwe and the region replace paper registers and spreadsheets with systems that run themselves.',
      challenges: [
        { title: 'Paper registers', text: 'Roll call takes time from every lecture, and sheets get lost before anyone types them in.' },
        { title: 'Proxy sign-ins', text: 'Students sign in for friends who are not there, and nobody can prove who really attended.' },
        { title: 'Eligibility worked out by hand', text: 'Attendance percentages and exam eligibility are calculated at the end of every semester, under pressure.' },
        { title: 'Data in many spreadsheets', text: 'Student records, fees and results live in different files, each slightly different.' },
      ],
      builds: [
        { title: 'Sengeti Attendance', text: 'QR check-in that changes every 15 seconds, live lecture views and exam eligibility lists in one click.', href: '/products/attendance' },
        { title: 'Student records and enrolment', text: 'One place for applications, enrolment and student records, instead of scattered spreadsheets.', href: '/software' },
        { title: 'Fee reminders and receipts', text: 'Automatic reminders by SMS, WhatsApp or email, and receipts sent as soon as a payment is recorded.', href: '/automation' },
        { title: 'Reports for faculties and management', text: 'Attendance, enrolment and fee reports that build themselves, by faculty, course or semester.', href: '/automation' },
        { title: 'Student help desk on WhatsApp', text: 'An AI assistant that answers common student questions about fees, timetables and registration.', href: '/ai' },
        { title: 'Finance, HR and payroll', text: 'An ERP that brings the finance office, staff records and payroll into one system.', href: '/erp' },
      ],
      spotlight: {
        eyebrow: 'Our product for higher education',
        heading: 'Sengeti Attendance',
        text: 'Students check in from their own phones by scanning a QR code that changes every 15 seconds, so a photo of it shared in a group chat is useless. Lecturers see who is present as it happens, and exam eligibility lists build themselves.',
        points: [
          'QR code that changes every 15 seconds',
          'Selfie check-in when a lecturer needs extra proof',
          'Exam eligibility lists in one click',
          'Android app and web, built for slow connections',
        ],
        productCta: 'See Sengeti Attendance',
        caseCta: 'Read the case study',
      },
      faqs: [
        {
          q: 'Do you have software for universities in Zimbabwe?',
          a: 'Yes. Sengeti Attendance is our attendance system for universities and colleges, and we also build custom systems for student records, fees, reporting and finance.',
        },
        {
          q: 'How does Sengeti Attendance stop proxy sign-ins?',
          a: 'Students check in by scanning a QR code on the lecture screen that changes every 15 seconds, so a photo of the code sent to a friend no longer works. Lecturers can also ask for a quick selfie when they need extra proof.',
        },
        {
          q: 'Can it work with the student system we already have?',
          a: 'Yes. We can import your students from spreadsheets or your current system, and connect the systems so the same data is not typed in twice.',
        },
      ],
    },
    ngos: {
      name: 'NGOs',
      summary: 'Beneficiary registration, field data on phones and donor reports in one click.',
      points: ['Beneficiary registration and tracking', 'Field data collection on phones', 'Donor reports in one click'],
      audience: 'Non-governmental organisations, charities and development programmes',
      title: 'Software for NGOs in Zimbabwe | Sengeti Technologies',
      description:
        'Software and automation for NGOs in Zimbabwe and the region: beneficiary registration and tracking, mobile field data collection that works offline, donor reports in one click and approval workflows.',
      eyebrow: 'NGOs and development programmes',
      heading: 'Software for NGOs',
      headingAccent: 'from the field to the donor report.',
      lead: 'Register beneficiaries, collect data on phones in the field, even without a connection, and produce donor reports in one click. Systems built for NGOs working in Zimbabwe and across the region.',
      challenges: [
        { title: 'Paper forms from the field', text: 'Data is written on paper, carried back to the office and typed in again weeks later.' },
        { title: 'Many versions of the truth', text: 'Each district or project keeps its own spreadsheet, and the numbers never quite match.' },
        { title: 'Donor reports take days', text: 'Every reporting period means collecting figures by hand and formatting them for each donor.' },
        { title: 'Patchy connectivity', text: 'Field teams work in areas with weak or no network, where online-only tools fail.' },
      ],
      builds: [
        { title: 'Beneficiary registration and tracking', text: 'One record per beneficiary, with the services they received and their progress over time.', href: '/software' },
        { title: 'Field data collection on phones', text: 'Mobile forms that work offline and send data when the phone is back in coverage.', href: '/software' },
        { title: 'Donor reports and dashboards', text: 'Reports in the format each donor asks for, produced in one click from live data.', href: '/automation' },
        { title: 'Purchase, travel and payment approvals', text: 'Requests that move to the right person automatically, with a full record for audits.', href: '/automation' },
        { title: 'Finance and grant budgets', text: 'Track spending against each grant and budget line in one system.', href: '/erp' },
        { title: 'WhatsApp assistant for communities', text: 'An AI assistant that answers common questions and registers requests on WhatsApp.', href: '/ai' },
      ],
      faqs: [
        {
          q: 'Can field staff collect data without internet?',
          a: 'Yes. We build mobile apps that store data on the phone and send it to the central system as soon as a connection is available.',
        },
        {
          q: 'Can reports match the format our donors ask for?',
          a: 'Yes. We set up reports in the format each donor requires, so they can be produced in one click instead of being built by hand.',
        },
        {
          q: 'How is beneficiary data protected?',
          a: 'We use encrypted connections, two-step sign-in and regular backups, and each staff member sees only the records they need.',
        },
      ],
    },
    retail: {
      name: 'Retail and SMEs',
      summary: 'Stock alerts, daily sales reports and customer follow-ups on WhatsApp.',
      points: ['Stock alerts and re-ordering', 'Sales reports every morning', 'Customer follow-ups on WhatsApp'],
      audience: 'Retailers, wholesalers and small and medium-sized businesses',
      title: 'Software for retail and small businesses in Zimbabwe | Sengeti Technologies',
      description:
        'Affordable software and automation for shops, wholesalers and SMEs in Zimbabwe and the region: stock control and re-order alerts, sales and invoicing with EcoCash and card payments, daily sales reports and WhatsApp follow-ups.',
      eyebrow: 'Retail and SMEs',
      heading: 'Software for shops and small businesses',
      headingAccent: 'that keeps stock and sales in check.',
      lead: 'Stock alerts, a sales report on your phone every morning, invoices and customer follow-ups on WhatsApp. Affordable systems for retailers and small businesses in Zimbabwe and the region.',
      challenges: [
        { title: 'Stock surprises', text: 'Popular items run out without warning while slow ones pile up on the shelves.' },
        { title: 'Sales counted by hand', text: 'Sales are added up in exercise books or spreadsheets at the end of the day, if there is time.' },
        { title: 'Mixed payments', text: 'Cash, EcoCash, card and more than one currency make the day hard to reconcile.' },
        { title: 'Customers forgotten', text: 'There is no easy way to follow up, remind or reward customers after they buy.' },
      ],
      builds: [
        { title: 'Stock control and re-order alerts', text: 'Live stock levels for every branch, with an alert before an item runs out.', href: '/erp' },
        { title: 'Sales and invoicing', text: 'Quotes, invoices and receipts, with EcoCash and card payments recorded automatically.', href: '/erp' },
        { title: 'Daily sales report on your phone', text: 'Yesterday’s sales, best sellers and low stock, sent to you every morning.', href: '/automation' },
        { title: 'Customer follow-ups on WhatsApp', text: 'Thank-you messages, reminders and offers sent automatically to the right customers.', href: '/automation' },
        { title: 'WhatsApp chatbot for orders', text: 'An AI assistant that answers questions about prices and stock and takes orders day and night.', href: '/ai' },
        { title: 'Online ordering app', text: 'A web or Android app where your customers can browse and order.', href: '/software' },
      ],
      faqs: [
        {
          q: 'Is this affordable for a small business?',
          a: 'Yes. We size solutions to your budget. You can start with one thing, such as stock alerts or a daily sales report, and add more later.',
        },
        {
          q: 'Can it record EcoCash and card payments?',
          a: 'Yes. Payments by cash, EcoCash and card can be recorded automatically, in more than one currency.',
        },
        {
          q: 'Does it work for more than one shop?',
          a: 'Yes. You can see stock and sales for every branch in one place, from your phone.',
        },
      ],
    },
    finance: {
      name: 'Finance and microfinance',
      summary: 'Loan workflows, repayment reminders and statements that produce themselves.',
      points: ['Loan application workflows', 'Repayment reminders', 'Automatic statements and reports'],
      audience: 'Microfinance institutions, savings and credit cooperatives and financial service providers',
      title: 'Software for microfinance and financial services in Zimbabwe | Sengeti Technologies',
      description:
        'Software and automation for microfinance institutions and financial service providers in Zimbabwe and the region: loan application workflows, repayment reminders, automatic statements, reports and secure client records.',
      eyebrow: 'Finance and microfinance',
      heading: 'Software for microfinance and financial services',
      headingAccent: 'from application to repayment.',
      lead: 'Loan application workflows, repayment reminders by SMS and WhatsApp, automatic statements and reports. Systems for microfinance institutions, savings and credit cooperatives and financial service providers in Zimbabwe and the region.',
      challenges: [
        { title: 'Loan files on paper', text: 'Applications move from desk to desk, and nobody can say quickly where a file is.' },
        { title: 'Missed repayments', text: 'Reminders depend on staff finding the time to call every client.' },
        { title: 'Statements built by hand', text: 'Client statements and management reports take days to prepare each month.' },
        { title: 'Weak audit trail', text: 'Records are spread across files and spreadsheets, with no clear history of who changed what.' },
      ],
      builds: [
        { title: 'Loan application and approval workflows', text: 'Applications captured once and routed to each approver automatically, with limits and checks built in.', href: '/automation' },
        { title: 'Repayment reminders', text: 'Reminders by SMS, WhatsApp or email before each due date, and follow-ups when a payment is late.', href: '/automation' },
        { title: 'Automatic statements and reports', text: 'Client statements and portfolio reports produced on schedule, without anyone building them.', href: '/automation' },
        { title: 'Loan and client management system', text: 'Clients, loans, repayments and collateral in one secure system, on the web and on phones.', href: '/software' },
        { title: 'AI document reading', text: 'AI that reads ID documents, payslips and bank statements and fills in the application for review.', href: '/ai' },
        { title: 'Finance, HR and payroll', text: 'An ERP for your accounts, branches, staff and payroll.', href: '/erp' },
      ],
      faqs: [
        {
          q: 'Can you build a loan management system for a microfinance institution?',
          a: 'Yes. We build systems around your products and approval rules, covering applications, approvals, disbursements, repayments and reports.',
        },
        {
          q: 'Can clients receive repayment reminders on WhatsApp?',
          a: 'Yes. Reminders can go out automatically by SMS, WhatsApp or email before each due date, and again if a payment is missed.',
        },
        {
          q: 'How do you keep financial data secure?',
          a: 'Each person sees only what they need, sign-in uses two steps, every change is recorded, and data is backed up regularly over encrypted connections.',
        },
      ],
    },
    healthcare: {
      name: 'Healthcare',
      summary: 'Appointment booking and reminders, patient records and medicine stock.',
      points: ['Appointment booking and reminders', 'Patient records', 'Medicine stock'],
      audience: 'Clinics, pharmacies, hospitals and other healthcare providers',
      title: 'Software for clinics and healthcare in Zimbabwe | Sengeti Technologies',
      description:
        'Software and automation for clinics, pharmacies and healthcare providers in Zimbabwe and the region: appointment booking and reminders, digital patient records, medicine stock control and billing.',
      eyebrow: 'Healthcare',
      heading: 'Software for clinics and healthcare providers',
      headingAccent: 'that keeps patients and stock on track.',
      lead: 'Appointment booking and reminders, patient records and medicine stock control for clinics, pharmacies and healthcare providers in Zimbabwe and the region.',
      challenges: [
        { title: 'Queues and missed appointments', text: 'Patients wait for hours, and booked slots are lost when people forget to come.' },
        { title: 'Paper patient files', text: 'Files are slow to find, hard to read and easy to misplace.' },
        { title: 'Medicine stock problems', text: 'Essential medicines run out, or expire on the shelf, without anyone noticing in time.' },
        { title: 'Billing by hand', text: 'Invoices, receipts and medical aid claims are prepared manually and followed up late.' },
      ],
      builds: [
        { title: 'Appointment booking and reminders', text: 'Online or WhatsApp booking, with automatic SMS or WhatsApp reminders before each visit.', href: '/automation' },
        { title: 'Digital patient records', text: 'Patient histories available to authorised staff in seconds, on a computer or tablet.', href: '/software' },
        { title: 'Medicine and supplies stock', text: 'Stock levels for every store, with alerts for low stock and items close to expiry.', href: '/erp' },
        { title: 'Billing, receipts and claims', text: 'Invoices and receipts produced automatically, with medical aid claims tracked until they are paid.', href: '/erp' },
        { title: 'WhatsApp assistant for patients', text: 'An AI assistant that answers common questions and handles bookings at any hour.', href: '/ai' },
        { title: 'Reports for management', text: 'Patient numbers, revenue and stock reports that build themselves.', href: '/automation' },
      ],
      faqs: [
        {
          q: 'Can patients book appointments on WhatsApp?',
          a: 'Yes. Patients can book on WhatsApp or online, and receive reminders automatically before their appointment.',
        },
        {
          q: 'How is patient information kept private?',
          a: 'Only authorised staff can see patient records. We use encrypted connections, two-step sign-in and regular backups, and record who opened or changed each record.',
        },
        {
          q: 'Will it work with a slow internet connection?',
          a: 'Yes. Our systems are built for phones and patchy connections, and can keep working offline where it matters.',
        },
      ],
    },
    government: {
      name: 'Offices and government',
      summary: 'Approvals, document tracking and HR onboarding without paper chasing.',
      points: ['Leave, purchase and payment approvals', 'Document tracking', 'HR onboarding checklists'],
      audience: 'Government departments, local authorities, public bodies and busy offices',
      title: 'Software for government and offices in Zimbabwe | Sengeti Technologies',
      description:
        'Software and automation for government departments, local authorities and offices in Zimbabwe and the region: leave, purchase and payment approvals, document tracking, HR onboarding, online forms and reports.',
      eyebrow: 'Offices and government',
      heading: 'Software for government and busy offices',
      headingAccent: 'that keeps approvals moving.',
      lead: 'Leave, purchase and payment approvals, document tracking and HR onboarding, made digital so nothing gets stuck in an inbox. For government departments, local authorities, public bodies and offices in Zimbabwe and the region.',
      challenges: [
        { title: 'Approvals that wait', text: 'Paper forms move from desk to desk, and nobody is sure who has them.' },
        { title: 'Files that go missing', text: 'Documents are hard to find, easy to lose and impossible to track.' },
        { title: 'Reports compiled by hand', text: 'Monthly and quarterly reports mean days of collecting numbers from every unit.' },
        { title: 'Onboarding on paper', text: 'New staff wait for accounts, equipment and paperwork because steps are forgotten.' },
      ],
      builds: [
        { title: 'Leave, purchase and payment approvals', text: 'Requests that go to the right person automatically, with reminders and a full record of every decision.', href: '/automation' },
        { title: 'Document tracking and digital records', text: 'Know where every file is, who has it and what happened to it.', href: '/software' },
        { title: 'HR onboarding checklists', text: 'Every step for a new staff member assigned and followed up automatically.', href: '/automation' },
        { title: 'Online forms and service requests', text: 'Forms the public or other departments can fill in online, routed straight to the right desk.', href: '/software' },
        { title: 'Dashboards and reports', text: 'Live figures for management and reports that compile themselves.', href: '/automation' },
        { title: 'HR, payroll and finance', text: 'An ERP that brings staff records, payroll and finance into one system.', href: '/erp' },
      ],
      faqs: [
        {
          q: 'Can approvals follow our existing procedures?',
          a: 'Yes. We set up the steps, levels and limits your policies require, with a full record of who approved what and when.',
        },
        {
          q: 'Do we have to change everything at once?',
          a: 'No. Most organisations start with one process, such as leave approvals, and add others once it is running well.',
        },
        {
          q: 'Will our staff need training?',
          a: 'We train your team, keep the systems simple to use, and stay available after launch.',
        },
      ],
    },
  },
};

const fr: typeof en = {
  nav: 'Secteurs',
  index: {
    title: 'Secteurs que nous servons | Sengeti Technologies',
    description:
      'Logiciels et automatisation pour les universités, les ONG, les commerces et PME, les institutions de microfinance, les acteurs de la santé et les administrations au Zimbabwe et dans les pays voisins.',
    eyebrow: 'Secteurs',
    heading: 'Logiciels et automatisation',
    headingAccent: 'pour votre secteur.',
    lead: "Chaque secteur a sa propre paperasse. Nous créons des systèmes pour les universités, les ONG, les commerces, les institutions de microfinance, les cliniques et les administrations au Zimbabwe et dans les pays voisins.",
    listHeading: 'Avec qui nous travaillons',
    cardCta: 'Voir ce que nous créons',
    otherHeading: 'Votre secteur ne figure pas ici ?',
    otherText: "Si votre équipe le répète chaque jour, nous pouvons l'automatiser. Expliquez-nous comment vous travaillez aujourd'hui et nous vous montrerons ce qui est possible.",
  },
  labels: {
    industries: 'Secteurs',
    challengesHeading: 'Les problèmes que nous résolvons',
    buildHeading: 'Ce que nous créons pour vous',
    learnMore: 'En savoir plus',
    faqHeading: 'Questions',
    ctaHeading: 'Prêt à libérer votre équipe du travail répétitif ?',
    ctaText: "Expliquez-nous comment vous travaillez aujourd'hui. Le premier échange est gratuit : nous vous montrerons ce qui peut être automatisé et ce que cela vous ferait gagner.",
    otherIndustries: 'Autres secteurs',
    allIndustries: 'Tous les secteurs',
  },
  items: {
    universities: {
      name: 'Universités et écoles supérieures',
      summary: 'Présences, admissibilité aux examens, dossiers étudiants et rappels de frais qui se gèrent tout seuls.',
      points: ['Présences et admissibilité aux examens', 'Dossiers étudiants et inscriptions', 'Rappels de frais et reçus'],
      audience: "Universités, écoles supérieures et autres établissements d'enseignement supérieur",
      title: 'Logiciels pour universités et écoles supérieures au Zimbabwe | Sengeti Technologies',
      description:
        "Logiciels et automatisation pour les universités et écoles supérieures au Zimbabwe et dans la région : Sengeti Attendance avec pointage par code QR tournant et listes d'admissibilité aux examens, dossiers étudiants, rappels de frais et rapports.",
      eyebrow: 'Enseignement supérieur',
      heading: 'Des logiciels pour les universités et écoles supérieures',
      headingAccent: 'qui font disparaître le papier du campus.',
      lead: "Des présences et de l'admissibilité aux examens jusqu'aux dossiers étudiants et aux rappels de frais, nous aidons les universités et écoles supérieures du Zimbabwe et de la région à remplacer les feuilles de présence et les tableurs par des systèmes qui tournent tout seuls.",
      challenges: [
        { title: 'Feuilles de présence papier', text: "L'appel prend du temps à chaque cours, et les feuilles se perdent avant d'être saisies." },
        { title: 'Pointages par procuration', text: "Des étudiants signent pour des camarades absents, et personne ne peut prouver qui était vraiment là." },
        { title: 'Admissibilité calculée à la main', text: "Les taux de présence et l'admissibilité aux examens sont calculés à la fin de chaque semestre, dans l'urgence." },
        { title: 'Données éparpillées', text: 'Dossiers étudiants, frais et résultats sont dans des fichiers différents, jamais tout à fait identiques.' },
      ],
      builds: [
        { title: 'Sengeti Attendance', text: "Pointage par code QR qui change toutes les 15 secondes, suivi des cours en direct et listes d'admissibilité aux examens en un clic.", href: '/products/attendance' },
        { title: 'Dossiers étudiants et inscriptions', text: 'Un seul endroit pour les candidatures, les inscriptions et les dossiers étudiants, au lieu de tableurs dispersés.', href: '/software' },
        { title: 'Rappels de frais et reçus', text: "Rappels automatiques par SMS, WhatsApp ou e-mail, et reçus envoyés dès qu'un paiement est enregistré.", href: '/automation' },
        { title: 'Rapports pour les facultés et la direction', text: 'Rapports de présence, d’inscriptions et de frais qui se font tout seuls, par faculté, cours ou semestre.', href: '/automation' },
        { title: 'Accueil étudiant sur WhatsApp', text: "Un assistant IA qui répond aux questions fréquentes des étudiants sur les frais, les emplois du temps et l'inscription.", href: '/ai' },
        { title: 'Finances, RH et paie', text: 'Un ERP qui réunit le service financier, les dossiers du personnel et la paie dans un seul système.', href: '/erp' },
      ],
      spotlight: {
        eyebrow: "Notre produit pour l'enseignement supérieur",
        heading: 'Sengeti Attendance',
        text: "Les étudiants pointent depuis leur propre téléphone en scannant un code QR qui change toutes les 15 secondes : une photo partagée dans un groupe ne sert donc à rien. Les enseignants voient qui est présent en direct, et les listes d'admissibilité aux examens se font toutes seules.",
        points: [
          'Code QR qui change toutes les 15 secondes',
          'Pointage par selfie quand un enseignant veut une preuve',
          "Listes d'admissibilité aux examens en un clic",
          'Application Android et web, conçues pour les connexions lentes',
        ],
        productCta: 'Découvrir Sengeti Attendance',
        caseCta: "Lire l'étude de cas",
      },
      faqs: [
        {
          q: 'Proposez-vous des logiciels pour les universités au Zimbabwe ?',
          a: 'Oui. Sengeti Attendance est notre système de gestion des présences pour les universités et écoles supérieures, et nous créons aussi des systèmes sur mesure pour les dossiers étudiants, les frais, les rapports et les finances.',
        },
        {
          q: 'Comment Sengeti Attendance empêche-t-il les pointages par procuration ?',
          a: "Les étudiants pointent en scannant un code QR affiché en cours qui change toutes les 15 secondes : une photo du code envoyée à un ami ne fonctionne plus. L'enseignant peut aussi demander un selfie rapide s'il veut une preuve supplémentaire.",
        },
        {
          q: 'Peut-il fonctionner avec notre système de gestion des étudiants actuel ?',
          a: 'Oui. Nous pouvons importer vos étudiants depuis des tableurs ou votre système actuel, et relier les systèmes pour que les mêmes données ne soient pas saisies deux fois.',
        },
      ],
    },
    ngos: {
      name: 'ONG',
      summary: 'Enregistrement des bénéficiaires, données terrain sur téléphone et rapports aux bailleurs en un clic.',
      points: ['Enregistrement et suivi des bénéficiaires', 'Collecte de données terrain sur téléphone', 'Rapports aux bailleurs en un clic'],
      audience: 'Organisations non gouvernementales, associations caritatives et programmes de développement',
      title: 'Logiciels pour ONG au Zimbabwe | Sengeti Technologies',
      description:
        'Logiciels et automatisation pour les ONG au Zimbabwe et dans la région : enregistrement et suivi des bénéficiaires, collecte de données terrain sur mobile même hors ligne, rapports aux bailleurs en un clic et circuits de validation.',
      eyebrow: 'ONG et programmes de développement',
      heading: 'Des logiciels pour les ONG',
      headingAccent: 'du terrain au rapport pour les bailleurs.',
      lead: 'Enregistrez les bénéficiaires, collectez les données sur téléphone sur le terrain, même sans connexion, et produisez vos rapports aux bailleurs en un clic. Des systèmes conçus pour les ONG qui travaillent au Zimbabwe et dans toute la région.',
      challenges: [
        { title: 'Formulaires papier sur le terrain', text: 'Les données sont notées sur papier, rapportées au bureau et ressaisies des semaines plus tard.' },
        { title: 'Plusieurs versions des chiffres', text: 'Chaque district ou projet tient son propre tableur, et les chiffres ne concordent jamais tout à fait.' },
        { title: 'Des rapports qui prennent des jours', text: 'Chaque période de rapport oblige à rassembler les chiffres à la main et à les mettre en forme pour chaque bailleur.' },
        { title: 'Réseau irrégulier', text: 'Les équipes terrain travaillent dans des zones avec peu ou pas de réseau, où les outils uniquement en ligne échouent.' },
      ],
      builds: [
        { title: 'Enregistrement et suivi des bénéficiaires', text: 'Une fiche par bénéficiaire, avec les services reçus et son évolution dans le temps.', href: '/software' },
        { title: 'Collecte de données terrain sur téléphone', text: 'Des formulaires mobiles qui fonctionnent hors ligne et envoient les données dès que le réseau revient.', href: '/software' },
        { title: 'Rapports aux bailleurs et tableaux de bord', text: 'Des rapports au format demandé par chaque bailleur, produits en un clic à partir de données à jour.', href: '/automation' },
        { title: "Validation des achats, missions et paiements", text: "Des demandes qui vont automatiquement à la bonne personne, avec un historique complet pour les audits.", href: '/automation' },
        { title: 'Finances et budgets des subventions', text: 'Suivez les dépenses par subvention et par ligne budgétaire dans un seul système.', href: '/erp' },
        { title: 'Assistant WhatsApp pour les communautés', text: 'Un assistant IA qui répond aux questions fréquentes et enregistre les demandes sur WhatsApp.', href: '/ai' },
      ],
      faqs: [
        {
          q: 'Les équipes terrain peuvent-elles collecter des données sans internet ?',
          a: 'Oui. Nous créons des applications mobiles qui enregistrent les données sur le téléphone et les envoient au système central dès qu’une connexion est disponible.',
        },
        {
          q: 'Les rapports peuvent-ils suivre le format demandé par nos bailleurs ?',
          a: 'Oui. Nous paramétrons les rapports au format exigé par chaque bailleur, pour les produire en un clic au lieu de les construire à la main.',
        },
        {
          q: 'Comment les données des bénéficiaires sont-elles protégées ?',
          a: 'Nous utilisons des connexions chiffrées, la connexion en deux étapes et des sauvegardes régulières, et chaque membre du personnel ne voit que les dossiers dont il a besoin.',
        },
      ],
    },
    retail: {
      name: 'Commerce et PME',
      summary: 'Alertes de stock, rapports de ventes quotidiens et relances clients sur WhatsApp.',
      points: ['Alertes de stock et réapprovisionnement', 'Rapports de ventes chaque matin', 'Relances clients sur WhatsApp'],
      audience: 'Commerçants, grossistes et petites et moyennes entreprises',
      title: 'Logiciels pour le commerce et les PME au Zimbabwe | Sengeti Technologies',
      description:
        "Logiciels et automatisation abordables pour les commerces, grossistes et PME au Zimbabwe et dans la région : gestion de stock et alertes de réapprovisionnement, ventes et facturation avec paiements EcoCash et par carte, rapports de ventes quotidiens et relances sur WhatsApp.",
      eyebrow: 'Commerce et PME',
      heading: 'Des logiciels pour les commerces et les petites entreprises',
      headingAccent: 'pour garder la main sur le stock et les ventes.',
      lead: 'Alertes de stock, un rapport de ventes sur votre téléphone chaque matin, factures et relances clients sur WhatsApp. Des systèmes abordables pour les commerçants et les petites entreprises au Zimbabwe et dans la région.',
      challenges: [
        { title: 'Mauvaises surprises de stock', text: 'Les articles populaires manquent sans prévenir, pendant que les autres s’accumulent en rayon.' },
        { title: 'Ventes comptées à la main', text: 'Les ventes sont additionnées dans un cahier ou un tableur en fin de journée, quand il reste du temps.' },
        { title: 'Paiements mélangés', text: 'Espèces, EcoCash, carte et plusieurs devises rendent la clôture de la journée difficile.' },
        { title: 'Clients oubliés', text: "Aucun moyen simple de relancer, rappeler ou fidéliser les clients après l'achat." },
      ],
      builds: [
        { title: 'Gestion de stock et alertes', text: "Des niveaux de stock en temps réel pour chaque magasin, avec une alerte avant qu'un article ne manque.", href: '/erp' },
        { title: 'Ventes et facturation', text: 'Devis, factures et reçus, avec les paiements EcoCash et par carte enregistrés automatiquement.', href: '/erp' },
        { title: 'Rapport de ventes quotidien sur votre téléphone', text: 'Les ventes de la veille, les meilleures ventes et le stock bas, envoyés chaque matin.', href: '/automation' },
        { title: 'Relances clients sur WhatsApp', text: 'Remerciements, rappels et offres envoyés automatiquement aux bons clients.', href: '/automation' },
        { title: 'Chatbot WhatsApp pour les commandes', text: 'Un assistant IA qui répond sur les prix et le stock et prend les commandes jour et nuit.', href: '/ai' },
        { title: 'Application de commande en ligne', text: 'Une application web ou Android où vos clients peuvent parcourir vos produits et commander.', href: '/software' },
      ],
      faqs: [
        {
          q: 'Est-ce abordable pour une petite entreprise ?',
          a: "Oui. Nous adaptons nos solutions à votre budget. Vous pouvez commencer par une seule chose, comme les alertes de stock ou un rapport de ventes quotidien, et ajouter le reste plus tard.",
        },
        {
          q: 'Peut-on enregistrer les paiements EcoCash et par carte ?',
          a: 'Oui. Les paiements en espèces, EcoCash et par carte peuvent être enregistrés automatiquement, dans plusieurs devises.',
        },
        {
          q: 'Est-ce que cela fonctionne avec plusieurs magasins ?',
          a: 'Oui. Vous voyez le stock et les ventes de chaque magasin au même endroit, depuis votre téléphone.',
        },
      ],
    },
    finance: {
      name: 'Finance et microfinance',
      summary: 'Circuits de prêt, rappels de remboursement et relevés qui se produisent tout seuls.',
      points: ['Circuits de demande de prêt', 'Rappels de remboursement', 'Relevés et rapports automatiques'],
      audience: "Institutions de microfinance, coopératives d'épargne et de crédit et prestataires de services financiers",
      title: 'Logiciels pour la microfinance et les services financiers au Zimbabwe | Sengeti Technologies',
      description:
        "Logiciels et automatisation pour les institutions de microfinance et les prestataires de services financiers au Zimbabwe et dans la région : circuits de demande de prêt, rappels de remboursement, relevés automatiques, rapports et dossiers clients sécurisés.",
      eyebrow: 'Finance et microfinance',
      heading: 'Des logiciels pour la microfinance et les services financiers',
      headingAccent: "de la demande au remboursement.",
      lead: "Circuits de demande de prêt, rappels de remboursement par SMS et WhatsApp, relevés et rapports automatiques. Des systèmes pour les institutions de microfinance, les coopératives d'épargne et de crédit et les prestataires de services financiers au Zimbabwe et dans la région.",
      challenges: [
        { title: 'Dossiers de prêt papier', text: "Les demandes passent de bureau en bureau, et personne ne sait vite où se trouve un dossier." },
        { title: 'Remboursements manqués', text: "Les rappels dépendent du temps que le personnel trouve pour appeler chaque client." },
        { title: 'Relevés faits à la main', text: 'Les relevés clients et les rapports de gestion prennent des jours à préparer chaque mois.' },
        { title: "Traçabilité insuffisante", text: "Les données sont éparpillées entre dossiers et tableurs, sans historique clair de qui a modifié quoi." },
      ],
      builds: [
        { title: 'Circuits de demande et de validation des prêts', text: 'Des demandes saisies une seule fois et transmises automatiquement à chaque valideur, avec plafonds et contrôles intégrés.', href: '/automation' },
        { title: 'Rappels de remboursement', text: "Des rappels par SMS, WhatsApp ou e-mail avant chaque échéance, et des relances en cas de retard.", href: '/automation' },
        { title: 'Relevés et rapports automatiques', text: 'Relevés clients et rapports de portefeuille produits à date fixe, sans que personne ne les prépare.', href: '/automation' },
        { title: 'Système de gestion des prêts et des clients', text: 'Clients, prêts, remboursements et garanties dans un seul système sécurisé, sur le web et sur téléphone.', href: '/software' },
        { title: 'Lecture de documents par IA', text: "Une IA qui lit les pièces d'identité, bulletins de salaire et relevés bancaires et pré-remplit la demande pour vérification.", href: '/ai' },
        { title: 'Finances, RH et paie', text: 'Un ERP pour votre comptabilité, vos agences, votre personnel et la paie.', href: '/erp' },
      ],
      faqs: [
        {
          q: 'Pouvez-vous créer un système de gestion des prêts pour une institution de microfinance ?',
          a: 'Oui. Nous créons des systèmes adaptés à vos produits et à vos règles de validation : demandes, validations, décaissements, remboursements et rapports.',
        },
        {
          q: 'Les clients peuvent-ils recevoir des rappels de remboursement sur WhatsApp ?',
          a: 'Oui. Les rappels peuvent partir automatiquement par SMS, WhatsApp ou e-mail avant chaque échéance, puis à nouveau en cas de retard.',
        },
        {
          q: 'Comment protégez-vous les données financières ?',
          a: "Chacun ne voit que ce dont il a besoin, la connexion se fait en deux étapes, chaque modification est enregistrée et les données sont sauvegardées régulièrement via des connexions chiffrées.",
        },
      ],
    },
    healthcare: {
      name: 'Santé',
      summary: 'Prise de rendez-vous et rappels, dossiers patients et stock de médicaments.',
      points: ['Prise de rendez-vous et rappels', 'Dossiers patients', 'Stock de médicaments'],
      audience: 'Cliniques, pharmacies, hôpitaux et autres acteurs de la santé',
      title: 'Logiciels pour cliniques et acteurs de la santé au Zimbabwe | Sengeti Technologies',
      description:
        'Logiciels et automatisation pour les cliniques, pharmacies et acteurs de la santé au Zimbabwe et dans la région : prise de rendez-vous et rappels, dossiers patients numériques, gestion du stock de médicaments et facturation.',
      eyebrow: 'Santé',
      heading: 'Des logiciels pour les cliniques et les acteurs de la santé',
      headingAccent: 'pour bien suivre patients et stocks.',
      lead: 'Prise de rendez-vous et rappels, dossiers patients et gestion du stock de médicaments pour les cliniques, pharmacies et acteurs de la santé au Zimbabwe et dans la région.',
      challenges: [
        { title: 'Files d’attente et rendez-vous manqués', text: 'Les patients attendent des heures, et des créneaux sont perdus quand on oublie de venir.' },
        { title: 'Dossiers patients papier', text: 'Les dossiers sont longs à retrouver, difficiles à lire et faciles à égarer.' },
        { title: 'Problèmes de stock de médicaments', text: 'Des médicaments essentiels manquent, ou périment en rayon, sans que personne ne le remarque à temps.' },
        { title: 'Facturation à la main', text: "Factures, reçus et demandes de remboursement aux assurances maladie sont préparés manuellement et suivis trop tard." },
      ],
      builds: [
        { title: 'Prise de rendez-vous et rappels', text: 'Réservation en ligne ou sur WhatsApp, avec rappels automatiques par SMS ou WhatsApp avant chaque visite.', href: '/automation' },
        { title: 'Dossiers patients numériques', text: "L'historique des patients accessible en quelques secondes au personnel autorisé, sur ordinateur ou tablette.", href: '/software' },
        { title: 'Stock de médicaments et fournitures', text: 'Les niveaux de stock de chaque magasin, avec des alertes de stock bas et de péremption proche.', href: '/erp' },
        { title: 'Facturation, reçus et remboursements', text: "Factures et reçus produits automatiquement, avec le suivi des demandes aux assurances maladie jusqu'au paiement.", href: '/erp' },
        { title: 'Assistant WhatsApp pour les patients', text: 'Un assistant IA qui répond aux questions fréquentes et gère les rendez-vous à toute heure.', href: '/ai' },
        { title: 'Rapports pour la direction', text: "Rapports sur le nombre de patients, les recettes et le stock qui se font tout seuls.", href: '/automation' },
      ],
      faqs: [
        {
          q: 'Les patients peuvent-ils prendre rendez-vous sur WhatsApp ?',
          a: 'Oui. Les patients peuvent réserver sur WhatsApp ou en ligne, et reçoivent automatiquement un rappel avant leur rendez-vous.',
        },
        {
          q: 'Comment les informations des patients restent-elles confidentielles ?',
          a: "Seul le personnel autorisé peut consulter les dossiers. Nous utilisons des connexions chiffrées, la connexion en deux étapes et des sauvegardes régulières, et nous enregistrons qui a ouvert ou modifié chaque dossier.",
        },
        {
          q: 'Est-ce que cela fonctionne avec une connexion internet lente ?',
          a: 'Oui. Nos systèmes sont conçus pour les téléphones et les connexions irrégulières, et peuvent continuer à fonctionner hors ligne là où c’est important.',
        },
      ],
    },
    government: {
      name: 'Bureaux et administrations',
      summary: 'Validations, suivi des documents et intégration RH sans courir après les papiers.',
      points: ['Validation des congés, achats et paiements', 'Suivi des documents', "Listes d'intégration RH"],
      audience: 'Ministères, collectivités locales, organismes publics et bureaux',
      title: 'Logiciels pour administrations et bureaux au Zimbabwe | Sengeti Technologies',
      description:
        "Logiciels et automatisation pour les ministères, collectivités locales et bureaux au Zimbabwe et dans la région : validation des congés, achats et paiements, suivi des documents, intégration RH, formulaires en ligne et rapports.",
      eyebrow: 'Bureaux et administrations',
      heading: 'Des logiciels pour les administrations et les bureaux',
      headingAccent: 'pour que les validations avancent.',
      lead: "Validation des congés, achats et paiements, suivi des documents et intégration RH, passés au numérique pour que rien ne reste bloqué dans une boîte de réception. Pour les ministères, collectivités locales, organismes publics et bureaux au Zimbabwe et dans la région.",
      challenges: [
        { title: 'Des validations qui attendent', text: 'Les formulaires papier passent de bureau en bureau, et personne ne sait qui les a.' },
        { title: 'Des dossiers qui disparaissent', text: 'Les documents sont difficiles à retrouver, faciles à perdre et impossibles à suivre.' },
        { title: 'Rapports compilés à la main', text: 'Les rapports mensuels et trimestriels demandent des jours de collecte auprès de chaque service.' },
        { title: 'Intégration sur papier', text: 'Les nouveaux agents attendent leurs accès, leur matériel et leurs documents parce que des étapes sont oubliées.' },
      ],
      builds: [
        { title: 'Validation des congés, achats et paiements', text: 'Des demandes qui vont automatiquement à la bonne personne, avec relances et historique complet de chaque décision.', href: '/automation' },
        { title: 'Suivi des documents et archives numériques', text: 'Sachez où se trouve chaque dossier, qui l’a et ce qu’il est devenu.', href: '/software' },
        { title: "Listes d'intégration RH", text: 'Chaque étape pour un nouvel agent attribuée et suivie automatiquement.', href: '/automation' },
        { title: 'Formulaires en ligne et demandes de service', text: "Des formulaires que le public ou d'autres services remplissent en ligne, transmis directement au bon bureau.", href: '/software' },
        { title: 'Tableaux de bord et rapports', text: 'Des chiffres en direct pour la direction et des rapports qui se compilent tout seuls.', href: '/automation' },
        { title: 'RH, paie et finances', text: 'Un ERP qui réunit les dossiers du personnel, la paie et les finances dans un seul système.', href: '/erp' },
      ],
      faqs: [
        {
          q: 'Les validations peuvent-elles suivre nos procédures actuelles ?',
          a: 'Oui. Nous paramétrons les étapes, niveaux et plafonds exigés par vos règles, avec un historique complet de qui a validé quoi et quand.',
        },
        {
          q: 'Faut-il tout changer en une fois ?',
          a: "Non. La plupart des organisations commencent par un seul processus, comme la validation des congés, et en ajoutent d'autres une fois qu'il fonctionne bien.",
        },
        {
          q: 'Notre personnel aura-t-il besoin d’une formation ?',
          a: 'Nous formons votre équipe, gardons des systèmes simples à utiliser et restons disponibles après le lancement.',
        },
      ],
    },
  },
};

const pt: typeof en = {
  nav: 'Setores',
  index: {
    title: 'Setores que servimos | Sengeti Technologies',
    description:
      'Software e automatização para universidades, ONG, comércio e PME, instituições de microfinanças, prestadores de cuidados de saúde e serviços públicos no Zimbabué e nos países vizinhos.',
    eyebrow: 'Setores',
    heading: 'Software e automatização',
    headingAccent: 'para o seu setor.',
    lead: 'Cada setor tem a sua própria papelada. Criamos sistemas para universidades, ONG, lojas, instituições de microfinanças, clínicas e serviços públicos no Zimbabué e nos países vizinhos.',
    listHeading: 'Com quem trabalhamos',
    cardCta: 'Ver o que criamos',
    otherHeading: 'Não encontra o seu setor?',
    otherText: 'Se a sua equipa o repete todos os dias, nós conseguimos automatizá-lo. Conte-nos como trabalha hoje e mostramos-lhe o que é possível.',
  },
  labels: {
    industries: 'Setores',
    challengesHeading: 'Os problemas que resolvemos',
    buildHeading: 'O que criamos para si',
    learnMore: 'Saber mais',
    faqHeading: 'Perguntas',
    ctaHeading: 'Pronto para tirar o trabalho de rotina à sua equipa?',
    ctaText: 'Conte-nos como trabalha hoje. A primeira conversa é gratuita: mostramos-lhe o que pode ser automatizado e quanto pouparia.',
    otherIndustries: 'Outros setores',
    allIndustries: 'Todos os setores',
  },
  items: {
    universities: {
      name: 'Universidades e institutos',
      summary: 'Presenças, elegibilidade para exames, processos de estudantes e lembretes de propinas que funcionam sozinhos.',
      points: ['Presenças e elegibilidade para exames', 'Processos e matrículas de estudantes', 'Lembretes e recibos de propinas'],
      audience: 'Universidades, institutos superiores e outras instituições de ensino superior',
      title: 'Software para universidades e institutos no Zimbabué | Sengeti Technologies',
      description:
        'Software e automatização para universidades e institutos no Zimbabué e na região: Sengeti Attendance com registo por código QR rotativo e listas de elegibilidade para exames, processos de estudantes, lembretes de propinas e relatórios.',
      eyebrow: 'Ensino superior',
      heading: 'Software para universidades e institutos',
      headingAccent: 'que tira o papel do campus.',
      lead: 'Das presenças e da elegibilidade para exames aos processos de estudantes e lembretes de propinas, ajudamos universidades e institutos no Zimbabué e na região a substituir folhas de presença e folhas de cálculo por sistemas que funcionam sozinhos.',
      challenges: [
        { title: 'Folhas de presença em papel', text: 'A chamada rouba tempo a cada aula, e as folhas perdem-se antes de alguém as introduzir.' },
        { title: 'Presenças por procuração', text: 'Há estudantes que assinam por colegas ausentes, e ninguém consegue provar quem esteve realmente presente.' },
        { title: 'Elegibilidade calculada à mão', text: 'As percentagens de presença e a elegibilidade para exames são calculadas no fim de cada semestre, à pressa.' },
        { title: 'Dados em muitas folhas de cálculo', text: 'Processos de estudantes, propinas e resultados estão em ficheiros diferentes, nunca iguais.' },
      ],
      builds: [
        { title: 'Sengeti Attendance', text: 'Registo por código QR que muda a cada 15 segundos, aulas acompanhadas em tempo real e listas de elegibilidade para exames num clique.', href: '/products/attendance' },
        { title: 'Processos e matrículas de estudantes', text: 'Um só lugar para candidaturas, matrículas e processos de estudantes, em vez de folhas de cálculo dispersas.', href: '/software' },
        { title: 'Lembretes e recibos de propinas', text: 'Lembretes automáticos por SMS, WhatsApp ou e-mail, e recibos enviados assim que um pagamento é registado.', href: '/automation' },
        { title: 'Relatórios para faculdades e direção', text: 'Relatórios de presenças, matrículas e propinas que se fazem sozinhos, por faculdade, curso ou semestre.', href: '/automation' },
        { title: 'Apoio ao estudante no WhatsApp', text: 'Um assistente de IA que responde às perguntas frequentes dos estudantes sobre propinas, horários e inscrições.', href: '/ai' },
        { title: 'Finanças, RH e salários', text: 'Um ERP que junta os serviços financeiros, as fichas de pessoal e os salários num só sistema.', href: '/erp' },
      ],
      spotlight: {
        eyebrow: 'O nosso produto para o ensino superior',
        heading: 'Sengeti Attendance',
        text: 'Os estudantes registam a presença no próprio telemóvel lendo um código QR que muda a cada 15 segundos, por isso uma fotografia partilhada num grupo não serve de nada. Os docentes veem quem está presente em tempo real, e as listas de elegibilidade para exames fazem-se sozinhas.',
        points: [
          'Código QR que muda a cada 15 segundos',
          'Registo por selfie quando o docente precisa de prova',
          'Listas de elegibilidade para exames num clique',
          'Aplicação Android e web, feitas para ligações lentas',
        ],
        productCta: 'Conhecer o Sengeti Attendance',
        caseCta: 'Ler o caso de estudo',
      },
      faqs: [
        {
          q: 'Têm software para universidades no Zimbabué?',
          a: 'Sim. O Sengeti Attendance é o nosso sistema de presenças para universidades e institutos, e também criamos sistemas à medida para processos de estudantes, propinas, relatórios e finanças.',
        },
        {
          q: 'Como é que o Sengeti Attendance impede presenças por procuração?',
          a: 'Os estudantes registam a presença lendo um código QR projetado na aula que muda a cada 15 segundos, por isso uma fotografia do código enviada a um colega deixa de funcionar. O docente pode ainda pedir uma selfie rápida quando precisa de prova adicional.',
        },
        {
          q: 'Funciona com o sistema de gestão de estudantes que já temos?',
          a: 'Sim. Podemos importar os seus estudantes de folhas de cálculo ou do seu sistema atual, e ligar os sistemas para que os mesmos dados não sejam introduzidos duas vezes.',
        },
      ],
    },
    ngos: {
      name: 'ONG',
      summary: 'Registo de beneficiários, dados de terreno no telemóvel e relatórios para doadores num clique.',
      points: ['Registo e acompanhamento de beneficiários', 'Recolha de dados no terreno por telemóvel', 'Relatórios para doadores num clique'],
      audience: 'Organizações não governamentais, instituições de solidariedade e programas de desenvolvimento',
      title: 'Software para ONG no Zimbabué | Sengeti Technologies',
      description:
        'Software e automatização para ONG no Zimbabué e na região: registo e acompanhamento de beneficiários, recolha de dados no terreno por telemóvel mesmo sem rede, relatórios para doadores num clique e fluxos de aprovação.',
      eyebrow: 'ONG e programas de desenvolvimento',
      heading: 'Software para ONG',
      headingAccent: 'do terreno ao relatório para o doador.',
      lead: 'Registe beneficiários, recolha dados no terreno por telemóvel, mesmo sem ligação, e produza relatórios para doadores num clique. Sistemas feitos para ONG que trabalham no Zimbabué e em toda a região.',
      challenges: [
        { title: 'Formulários em papel no terreno', text: 'Os dados são escritos em papel, levados para o escritório e introduzidos de novo semanas depois.' },
        { title: 'Várias versões dos números', text: 'Cada distrito ou projeto tem a sua própria folha de cálculo, e os números nunca batem certo.' },
        { title: 'Relatórios que levam dias', text: 'Cada período de relatório obriga a juntar números à mão e a formatá-los para cada doador.' },
        { title: 'Rede irregular', text: 'As equipas de terreno trabalham em zonas com pouca ou nenhuma rede, onde as ferramentas só online falham.' },
      ],
      builds: [
        { title: 'Registo e acompanhamento de beneficiários', text: 'Uma ficha por beneficiário, com os serviços recebidos e a sua evolução ao longo do tempo.', href: '/software' },
        { title: 'Recolha de dados no terreno por telemóvel', text: 'Formulários móveis que funcionam sem rede e enviam os dados quando o telemóvel volta a ter cobertura.', href: '/software' },
        { title: 'Relatórios para doadores e painéis', text: 'Relatórios no formato que cada doador pede, produzidos num clique a partir de dados atualizados.', href: '/automation' },
        { title: 'Aprovação de compras, deslocações e pagamentos', text: 'Pedidos que seguem automaticamente para a pessoa certa, com registo completo para auditorias.', href: '/automation' },
        { title: 'Finanças e orçamentos de subvenções', text: 'Acompanhe as despesas por subvenção e rubrica orçamental num só sistema.', href: '/erp' },
        { title: 'Assistente de WhatsApp para comunidades', text: 'Um assistente de IA que responde a perguntas frequentes e regista pedidos no WhatsApp.', href: '/ai' },
      ],
      faqs: [
        {
          q: 'As equipas de terreno podem recolher dados sem internet?',
          a: 'Sim. Criamos aplicações móveis que guardam os dados no telemóvel e os enviam para o sistema central assim que houver ligação.',
        },
        {
          q: 'Os relatórios podem seguir o formato que os nossos doadores pedem?',
          a: 'Sim. Configuramos os relatórios no formato exigido por cada doador, para que se produzam num clique em vez de serem feitos à mão.',
        },
        {
          q: 'Como são protegidos os dados dos beneficiários?',
          a: 'Usamos ligações encriptadas, início de sessão em dois passos e cópias de segurança regulares, e cada membro da equipa vê apenas os registos de que precisa.',
        },
      ],
    },
    retail: {
      name: 'Comércio e PME',
      summary: 'Alertas de stock, relatórios de vendas diários e seguimento de clientes no WhatsApp.',
      points: ['Alertas de stock e reposição', 'Relatórios de vendas todas as manhãs', 'Seguimento de clientes no WhatsApp'],
      audience: 'Lojas, grossistas e pequenas e médias empresas',
      title: 'Software para comércio e PME no Zimbabué | Sengeti Technologies',
      description:
        'Software e automatização acessíveis para lojas, grossistas e PME no Zimbabué e na região: controlo de stock e alertas de reposição, vendas e faturação com pagamentos EcoCash, M-Pesa e por cartão, relatórios de vendas diários e seguimento no WhatsApp.',
      eyebrow: 'Comércio e PME',
      heading: 'Software para lojas e pequenas empresas',
      headingAccent: 'que mantém o stock e as vendas sob controlo.',
      lead: 'Alertas de stock, um relatório de vendas no telemóvel todas as manhãs, faturas e seguimento de clientes no WhatsApp. Sistemas acessíveis para lojas e pequenas empresas no Zimbabué e na região.',
      challenges: [
        { title: 'Surpresas no stock', text: 'Os artigos mais procurados esgotam sem aviso, enquanto os outros se acumulam nas prateleiras.' },
        { title: 'Vendas contadas à mão', text: 'As vendas são somadas num caderno ou numa folha de cálculo no fim do dia, quando há tempo.' },
        { title: 'Pagamentos misturados', text: 'Dinheiro, carteiras móveis, cartão e mais do que uma moeda tornam difícil fechar o dia.' },
        { title: 'Clientes esquecidos', text: 'Não há uma forma simples de acompanhar, lembrar ou recompensar os clientes depois da compra.' },
      ],
      builds: [
        { title: 'Controlo de stock e alertas de reposição', text: 'Níveis de stock em tempo real em todas as lojas, com um alerta antes de um artigo esgotar.', href: '/erp' },
        { title: 'Vendas e faturação', text: 'Cotações, faturas e recibos, com pagamentos EcoCash, M-Pesa e por cartão registados automaticamente.', href: '/erp' },
        { title: 'Relatório de vendas diário no telemóvel', text: 'As vendas de ontem, os artigos mais vendidos e o stock baixo, enviados todas as manhãs.', href: '/automation' },
        { title: 'Seguimento de clientes no WhatsApp', text: 'Agradecimentos, lembretes e promoções enviados automaticamente aos clientes certos.', href: '/automation' },
        { title: 'Chatbot de WhatsApp para encomendas', text: 'Um assistente de IA que responde sobre preços e stock e recebe encomendas de dia e de noite.', href: '/ai' },
        { title: 'Aplicação de encomendas online', text: 'Uma aplicação web ou Android onde os seus clientes podem ver os produtos e encomendar.', href: '/software' },
      ],
      faqs: [
        {
          q: 'É acessível para uma pequena empresa?',
          a: 'Sim. Ajustamos as soluções ao seu orçamento. Pode começar por uma só coisa, como os alertas de stock ou um relatório de vendas diário, e acrescentar mais tarde.',
        },
        {
          q: 'Consegue registar pagamentos EcoCash, M-Pesa e por cartão?',
          a: 'Sim. Os pagamentos em dinheiro, por carteira móvel e por cartão podem ser registados automaticamente, em mais do que uma moeda.',
        },
        {
          q: 'Funciona com mais do que uma loja?',
          a: 'Sim. Vê o stock e as vendas de todas as lojas num só lugar, no telemóvel.',
        },
      ],
    },
    finance: {
      name: 'Finanças e microfinanças',
      summary: 'Fluxos de crédito, lembretes de reembolso e extratos que se fazem sozinhos.',
      points: ['Fluxos de pedidos de crédito', 'Lembretes de reembolso', 'Extratos e relatórios automáticos'],
      audience: 'Instituições de microfinanças, cooperativas de poupança e crédito e prestadores de serviços financeiros',
      title: 'Software para microfinanças e serviços financeiros no Zimbabué | Sengeti Technologies',
      description:
        'Software e automatização para instituições de microfinanças e prestadores de serviços financeiros no Zimbabué e na região: fluxos de pedidos de crédito, lembretes de reembolso, extratos automáticos, relatórios e registos de clientes seguros.',
      eyebrow: 'Finanças e microfinanças',
      heading: 'Software para microfinanças e serviços financeiros',
      headingAccent: 'do pedido ao reembolso.',
      lead: 'Fluxos de pedidos de crédito, lembretes de reembolso por SMS e WhatsApp, extratos e relatórios automáticos. Sistemas para instituições de microfinanças, cooperativas de poupança e crédito e prestadores de serviços financeiros no Zimbabué e na região.',
      challenges: [
        { title: 'Processos de crédito em papel', text: 'Os pedidos passam de secretária em secretária, e ninguém sabe dizer depressa onde está um processo.' },
        { title: 'Reembolsos em falta', text: 'Os lembretes dependem de a equipa ter tempo para ligar a cada cliente.' },
        { title: 'Extratos feitos à mão', text: 'Os extratos de clientes e os relatórios de gestão levam dias a preparar todos os meses.' },
        { title: 'Pouca rastreabilidade', text: 'Os registos estão espalhados por pastas e folhas de cálculo, sem histórico claro de quem alterou o quê.' },
      ],
      builds: [
        { title: 'Fluxos de pedido e aprovação de crédito', text: 'Pedidos introduzidos uma só vez e encaminhados automaticamente para cada aprovador, com limites e verificações incluídos.', href: '/automation' },
        { title: 'Lembretes de reembolso', text: 'Lembretes por SMS, WhatsApp ou e-mail antes de cada vencimento, e seguimento quando um pagamento se atrasa.', href: '/automation' },
        { title: 'Extratos e relatórios automáticos', text: 'Extratos de clientes e relatórios de carteira produzidos na data certa, sem ninguém os preparar.', href: '/automation' },
        { title: 'Sistema de gestão de crédito e clientes', text: 'Clientes, créditos, reembolsos e garantias num só sistema seguro, na web e no telemóvel.', href: '/software' },
        { title: 'Leitura de documentos por IA', text: 'IA que lê documentos de identificação, recibos de vencimento e extratos bancários e preenche o pedido para revisão.', href: '/ai' },
        { title: 'Finanças, RH e salários', text: 'Um ERP para a sua contabilidade, balcões, pessoal e salários.', href: '/erp' },
      ],
      faqs: [
        {
          q: 'Conseguem criar um sistema de gestão de crédito para uma instituição de microfinanças?',
          a: 'Sim. Criamos sistemas à medida dos seus produtos e regras de aprovação, com pedidos, aprovações, desembolsos, reembolsos e relatórios.',
        },
        {
          q: 'Os clientes podem receber lembretes de reembolso no WhatsApp?',
          a: 'Sim. Os lembretes podem ser enviados automaticamente por SMS, WhatsApp ou e-mail antes de cada vencimento, e novamente se um pagamento falhar.',
        },
        {
          q: 'Como mantêm os dados financeiros seguros?',
          a: 'Cada pessoa vê apenas o que precisa, o início de sessão é feito em dois passos, cada alteração fica registada e os dados têm cópias de segurança regulares através de ligações encriptadas.',
        },
      ],
    },
    healthcare: {
      name: 'Saúde',
      summary: 'Marcação de consultas e lembretes, processos clínicos e stock de medicamentos.',
      points: ['Marcação de consultas e lembretes', 'Processos clínicos', 'Stock de medicamentos'],
      audience: 'Clínicas, farmácias, hospitais e outros prestadores de cuidados de saúde',
      title: 'Software para clínicas e saúde no Zimbabué | Sengeti Technologies',
      description:
        'Software e automatização para clínicas, farmácias e prestadores de cuidados de saúde no Zimbabué e na região: marcação de consultas e lembretes, processos clínicos digitais, controlo do stock de medicamentos e faturação.',
      eyebrow: 'Saúde',
      heading: 'Software para clínicas e prestadores de saúde',
      headingAccent: 'que mantém doentes e stock em dia.',
      lead: 'Marcação de consultas e lembretes, processos clínicos e controlo do stock de medicamentos para clínicas, farmácias e prestadores de cuidados de saúde no Zimbabué e na região.',
      challenges: [
        { title: 'Filas e consultas falhadas', text: 'Os doentes esperam horas, e perdem-se vagas quando alguém se esquece de vir.' },
        { title: 'Processos clínicos em papel', text: 'Os processos demoram a encontrar, são difíceis de ler e fáceis de extraviar.' },
        { title: 'Problemas no stock de medicamentos', text: 'Medicamentos essenciais esgotam, ou passam de prazo na prateleira, sem que alguém repare a tempo.' },
        { title: 'Faturação à mão', text: 'Faturas, recibos e pedidos aos seguros de saúde são preparados manualmente e acompanhados tarde.' },
      ],
      builds: [
        { title: 'Marcação de consultas e lembretes', text: 'Marcação online ou no WhatsApp, com lembretes automáticos por SMS ou WhatsApp antes de cada consulta.', href: '/automation' },
        { title: 'Processos clínicos digitais', text: 'O historial de cada doente disponível em segundos para os profissionais autorizados, no computador ou tablet.', href: '/software' },
        { title: 'Stock de medicamentos e consumíveis', text: 'Níveis de stock de cada armazém, com alertas de stock baixo e de produtos perto do fim do prazo.', href: '/erp' },
        { title: 'Faturação, recibos e seguros', text: 'Faturas e recibos emitidos automaticamente, com os pedidos aos seguros de saúde acompanhados até serem pagos.', href: '/erp' },
        { title: 'Assistente de WhatsApp para doentes', text: 'Um assistente de IA que responde a perguntas frequentes e trata das marcações a qualquer hora.', href: '/ai' },
        { title: 'Relatórios para a direção', text: 'Relatórios de doentes atendidos, receitas e stock que se fazem sozinhos.', href: '/automation' },
      ],
      faqs: [
        {
          q: 'Os doentes podem marcar consultas no WhatsApp?',
          a: 'Sim. Os doentes podem marcar no WhatsApp ou online, e recebem automaticamente um lembrete antes da consulta.',
        },
        {
          q: 'Como é mantida a privacidade dos dados dos doentes?',
          a: 'Só os profissionais autorizados podem ver os processos. Usamos ligações encriptadas, início de sessão em dois passos e cópias de segurança regulares, e registamos quem abriu ou alterou cada processo.',
        },
        {
          q: 'Funciona com uma ligação à internet lenta?',
          a: 'Sim. Os nossos sistemas são feitos para telemóveis e ligações irregulares, e podem continuar a funcionar sem rede onde isso importa.',
        },
      ],
    },
    government: {
      name: 'Escritórios e governo',
      summary: 'Aprovações, acompanhamento de documentos e integração de RH sem andar atrás de papéis.',
      points: ['Aprovação de férias, compras e pagamentos', 'Acompanhamento de documentos', 'Listas de integração de RH'],
      audience: 'Ministérios, autarquias, organismos públicos e escritórios',
      title: 'Software para o setor público e escritórios no Zimbabué | Sengeti Technologies',
      description:
        'Software e automatização para ministérios, autarquias e escritórios no Zimbabué e na região: aprovação de férias, compras e pagamentos, acompanhamento de documentos, integração de RH, formulários online e relatórios.',
      eyebrow: 'Escritórios e governo',
      heading: 'Software para o setor público e escritórios',
      headingAccent: 'que mantém as aprovações a andar.',
      lead: 'Aprovação de férias, compras e pagamentos, acompanhamento de documentos e integração de RH, em formato digital para que nada fique parado numa caixa de correio. Para ministérios, autarquias, organismos públicos e escritórios no Zimbabué e na região.',
      challenges: [
        { title: 'Aprovações que esperam', text: 'Os formulários em papel passam de secretária em secretária, e ninguém sabe quem os tem.' },
        { title: 'Processos que desaparecem', text: 'Os documentos são difíceis de encontrar, fáceis de perder e impossíveis de acompanhar.' },
        { title: 'Relatórios compilados à mão', text: 'Os relatórios mensais e trimestrais significam dias a recolher números de cada departamento.' },
        { title: 'Integração em papel', text: 'Os novos funcionários esperam por acessos, equipamento e documentos porque há passos esquecidos.' },
      ],
      builds: [
        { title: 'Aprovação de férias, compras e pagamentos', text: 'Pedidos que seguem automaticamente para a pessoa certa, com lembretes e registo completo de cada decisão.', href: '/automation' },
        { title: 'Acompanhamento de documentos e arquivo digital', text: 'Saiba onde está cada processo, quem o tem e o que lhe aconteceu.', href: '/software' },
        { title: 'Listas de integração de RH', text: 'Cada passo para um novo funcionário atribuído e acompanhado automaticamente.', href: '/automation' },
        { title: 'Formulários online e pedidos de serviço', text: 'Formulários que o público ou outros departamentos preenchem online, encaminhados diretamente para o balcão certo.', href: '/software' },
        { title: 'Painéis e relatórios', text: 'Números em tempo real para a direção e relatórios que se compilam sozinhos.', href: '/automation' },
        { title: 'RH, salários e finanças', text: 'Um ERP que junta as fichas de pessoal, os salários e as finanças num só sistema.', href: '/erp' },
      ],
      faqs: [
        {
          q: 'As aprovações podem seguir os nossos procedimentos atuais?',
          a: 'Sim. Configuramos os passos, níveis e limites que as suas regras exigem, com registo completo de quem aprovou o quê e quando.',
        },
        {
          q: 'Temos de mudar tudo de uma vez?',
          a: 'Não. A maioria das organizações começa por um processo, como a aprovação de férias, e acrescenta outros quando esse já funciona bem.',
        },
        {
          q: 'A nossa equipa vai precisar de formação?',
          a: 'Formamos a sua equipa, mantemos os sistemas simples de usar e continuamos disponíveis depois do arranque.',
        },
      ],
    },
  },
};

export default { en, fr, pt };
