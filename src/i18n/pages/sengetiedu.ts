/**
 * Text for the SengetiEdu page (/products/sengetiedu), taken from the SengetiEdu
 * platform overview. The edition names (Sengeti Campus, Senior, Junior) are not translated.
 */
const en = {
  title: 'SengetiEdu: one school platform from ECD to university | Sengeti Technologies',
  description:
    'SengetiEdu brings attendance, teaching, results, fees and families onto every phone. Three editions for universities, senior schools and junior schools, built in Zimbabwe.',
  eyebrow: 'SengetiEdu platform',
  heading: 'One platform for every school,',
  headingAccent: 'from ECD to university.',
  lead: 'Attendance, teaching, results, fees and families on every phone. Three editions, one foundation, built in Zimbabwe for how schools here really work.',
  ctaDemo: 'Book a free demonstration',
  ctaTry: 'Try the attendance demo',
  jump: 'Jump to',
  familyEyebrow: 'The family',
  familyHeading: 'Three editions.',
  familyAccent: 'One foundation.',
  familyLead:
    "Every edition shares the same core: secure sign-in, attendance, fees and payments, notices, messages, an assistant and the parents' app. Each adds what its kind of school needs, and every school switches on only the modules it uses.",
  editions: {
    campus: {
      audience: 'Universities and colleges',
      range: 'Faculties, programmes, campuses',
      text: 'For administrators, lecturers and students across faculties, programmes and campuses.',
      intro:
        "Born from our university attendance project: check-in that can't be faked, eligibility that works itself out, and a full teaching platform around it.",
      groups: [
        {
          title: "Attendance that can't be faked",
          items: [
            'QR code on the screen that changes every 15 seconds',
            'Optional selfie and location checks; offline queue',
            'Exam eligibility lists from attendance, in one click',
          ],
        },
        {
          title: 'Teaching and learning',
          items: [
            'Lecture notes, announcements and a forum per module',
            'Assignments (individual or group), rubrics, similarity checks',
            'Quizzes with a question bank; gradebook',
          ],
        },
        {
          title: 'Semesters and programmes',
          items: [
            'Programmes, curriculum and module registration',
            'Semester setup wizard, imports and rollover',
            'Exam timetable and seating, fees clearance',
          ],
        },
        {
          title: 'Student life',
          items: [
            'Online and make-up classes, office hours',
            'Clubs, sports, facilities and certificates',
            'Industrial attachment logbook, surveys, wellbeing',
          ],
        },
      ],
    },
    senior: {
      audience: 'Senior schools',
      range: 'Forms 1 to 6',
      text: 'O-level and A-level, with students signing in on their own phones.',
      intro: 'Learners get their own sign-in, teachers get a mark book that writes the report cards, and the office gets ZIMSEC lists without retyping.',
      groups: [
        {
          title: 'For learners',
          items: [
            "Students' own sign-in: timetable, homework, quizzes, marks",
            'Study plan for the week and notes that open offline',
            'Group work and class discussion boards',
          ],
        },
        {
          title: 'For teachers and the office',
          items: [
            'Mark book, report cards with comments and positions',
            'Subject choices for O-level and A-level, by block',
            'ZIMSEC candidate lists and Ministry returns',
          ],
        },
        {
          title: 'Exams and boarding',
          items: ['Online exams with extra time for named students', 'Boarding: night roll call and exeats'],
        },
      ],
    },
    junior: {
      audience: 'Junior schools',
      range: 'ECD to Grade 7',
      text: "Built around parents' phones and keeping families in the loop.",
      intro: 'Parents hear at once when their child is absent, see homework and reports, and know exactly who may collect their child.',
      groups: [
        {
          title: 'For families',
          items: [
            'Parents told at once when their child is absent',
            'Homework and quizzes done together at home',
            'Merits and conduct shared with parents',
          ],
        },
        {
          title: 'Reports',
          items: ['Report cards approved by the head before parents see them'],
        },
        {
          title: 'Safety and care',
          items: [
            'Gate check: who may collect each child',
            'Transport: routes, stops and runs, parents told',
            'Sick bay with allergies on screen',
            'ID cards for a whole class with QR code',
          ],
        },
      ],
    },
  },
  coreHeading: 'Shared by every edition',
  core: [
    { icon: 'check', title: 'Attendance', text: 'Phone registers that work offline, with alerts to families and reports for the head.' },
    { icon: 'wallet', title: 'Fees and payments', text: 'Invoices, receipts, debtors, sponsors, and paying from home with EcoCash or card.' },
    { icon: 'bell', title: 'Notices and events', text: 'Events, trips, sports and emergency messages, with replies.' },
    { icon: 'chat', title: 'Messages', text: 'In the app, push notifications, SMS and WhatsApp; families choose how they hear.' },
    { icon: 'sparkle', title: 'Assistant', text: 'Powered by Claude: balances, homework and absences answered in the app, on WhatsApp or by SMS.' },
    { icon: 'chart', title: 'Reports', text: 'Executive dashboard, early warnings for learners at risk, analytics and an activity log.' },
  ],
  integrationsHeading: 'Campus connects with your systems',
  integrations: [
    'Moodle and Google Classroom',
    'LTI 1.3',
    'SAML and OIDC single sign-on',
    'API for ERP and SIS',
    'Webhooks',
    'SFTP file sync',
    'Website widgets',
    'Results export',
    'Several campuses',
    'Android and iOS apps',
  ],
  modulesHeading: 'Optional modules for Senior and Junior',
  modules: [
    'Timetable and relief lessons',
    'Make-up and online lessons',
    'Library and textbooks',
    'Clubs, sports and facilities',
    'Certificates with QR check',
    'Meetings and parent requests',
    'Surveys and wellbeing',
    'Sponsors and BEAM',
    'Uniform shop',
    'Stores and assets',
    'Payroll and HR',
    'Admissions',
    'Branches',
    'Notice screens',
  ],
  modulesNote:
    'Every module can be switched on or off by the head. Start with attendance, fees and parents; add the rest when you are ready, with no new setup.',
  compareEyebrow: 'At a glance',
  compareHeading: 'Which edition',
  compareAccent: 'does what',
  feature: 'Feature',
  included: 'Included',
  notIncluded: 'Not included',
  rows: [
    'Attendance',
    'Fees, receipts and online payments',
    "Parents' app and notifications",
    'Assistant (app, WhatsApp, SMS)',
    "Learners' own sign-in",
    'Assignments, quizzes and marks',
    'Report cards',
    'Exam eligibility from attendance',
    'Semesters and module registration',
    'Subject choices and ZIMSEC lists',
    'Boarding',
    'Gate check and safe collection',
    'Transport and sick bay',
    'LMS, LTI and single sign-on',
    'Offline registers',
    "Your school's own brand and a school code for the app",
    'Demo school to try, clearly marked DEMO',
  ],
  brandEyebrow: 'Your school, your brand',
  brandHeading: 'Families see your school,',
  brandAccent: 'not ours.',
  brandLead:
    "From the first screen to the last receipt, parents, learners and staff see only your school's name, logo and colours. They never see the SengetiEdu website or any other school.",
  brand: [
    {
      title: 'Your brand everywhere',
      text: 'Sign-in page, every screen, browser tab and home-screen icon, receipts, payslips, reports, Excel exports, SMS and WhatsApp.',
    },
    {
      title: 'Straight to your school',
      text: 'Each school gets a code and a QR code. Enter or scan it once in the app; from then on it opens your school’s sign-in.',
    },
    {
      title: 'Only your own door',
      text: 'The code finds your school, nothing more: everyone still signs in with their own account. Codes can be reset at any time.',
    },
  ],
  addressHeading: 'Your address and your app',
  address: [
    {
      title: 'Web address',
      standard: 'Standard, included',
      standardText: 'yourschool.sengeti.school',
      upgrade: 'Your own, an upgrade',
      upgradeText: 'e.g. portal.yourschool.ac.zw',
    },
    {
      title: 'Phone app',
      standard: 'Shared school app, included',
      standardText: 'Opened with your school code, in your brand',
      upgrade: 'Your own branded app, an upgrade',
      upgradeText: 'Your name and icon in the stores',
    },
  ],
  signIn: { school: 'Your School', welcome: 'Welcome back', user: 'Phone or email', password: 'Password', button: 'Sign in', code: 'School code' },
  safeEyebrow: 'Safe, private and yours',
  safe: [
    { icon: 'lock', title: 'Secure sign-in', text: 'Two-step sign-in, locked accounts after wrong passwords, and sign-out from every device.' },
    {
      icon: 'shield',
      title: 'Your data stays yours',
      text: "Each school's data is private and separate, backed up daily, and the head can download everything at any time.",
    },
    {
      icon: 'eye',
      title: 'Support only with permission',
      text: 'Our support team can look, read-only, only while the head allows it, and every page they open is listed.',
    },
    { icon: 'pin', title: 'Made for the region', text: 'Country, time zone and phone formats per school; English, French and Portuguese.' },
  ],
  growHeading: 'Built to grow, and fair to families',
  grow: [
    {
      icon: 'bolt',
      title: 'Fast for everyone at once',
      text: 'Stays quick when every parent opens it on report day: messages go out in the background, long lists load in pages, busy pages are cached.',
    },
    {
      icon: 'check',
      title: 'Cookies, your choice',
      text: 'A clear notice with Accept all, Reject all and Manage. Only the cookies needed to sign in are always on.',
    },
    {
      icon: 'cap',
      title: 'Try it first',
      text: 'Junior and Senior demo schools with sample learners and fees. Every page is marked DEMO, and no real messages are sent.',
    },
  ],
  startEyebrow: 'Getting started',
  startHeading: 'Running in',
  startAccent: 'four weeks',
  startLead: 'We start small and train as we go, so nobody is surprised on the first day.',
  weeks: [
    {
      label: 'Week 1',
      title: 'Set up',
      text: 'Your school with its logo and colours, terms and classes, and learners, staff and parents imported from Excel. Your school code and web address are ready.',
    },
    { label: 'Week 2', title: 'Head and office', text: 'Training for the head, deputy and bursar: fees, receipts, notices and reports.' },
    { label: 'Week 3', title: 'Teachers', text: 'Training on their phones: registers, homework, marks and timetable.' },
    {
      label: 'Week 4',
      title: 'Families go live',
      text: 'Parents and learners get their sign-in and your school code by SMS, with a one-page guide.',
    },
  ],
  pricingTitle: 'Simple pricing',
  pricingText:
    'A licence per learner per term, invoiced in advance, plus a one-off fee for setup and training. Hosting, backups, updates and support are included.',
  supportTitle: 'Support you can reach',
  supportText: 'A named person at Sengeti for your school, by WhatsApp, phone and email, and a help centre inside the app.',
  faqHeading: 'Questions schools ask',
  faqs: [
    {
      q: 'Many of our parents have no data. Will it still work?',
      a: 'Yes. Pages are light, registers work offline, and parents without data get SMS alerts and can text the assistant for balances, homework and absences.',
    },
    {
      q: 'Will our teachers actually use it?',
      a: 'Training is included, and taking the register takes under a minute on a phone. We train every group in person and keep going until it works.',
    },
    {
      q: 'What happens to our data?',
      a: "It is private to your school, backed up daily and downloadable by the head at any time. Our support team can only look, read-only, while the head allows it.",
    },
    {
      q: 'Can it look like our school?',
      a: 'It does from day one: your name, logo and colours on every screen, receipt and message. Your own web address and your own app are optional upgrades.',
    },
    {
      q: 'How do parents pay fees?',
      a: 'From home with EcoCash or card, or at the school as before. Receipts are issued automatically, and the bursar sees who has paid and who owes.',
    },
    {
      q: 'How much does it cost?',
      a: 'A licence per learner per term plus a one-off setup and training fee. Hosting, backups, updates and support are included. Ask us for a quote for your school.',
    },
  ],
  ctaHeading: 'See SengetiEdu in your school.',
  ctaText: 'Book a free demonstration. We set it up with your school name so you can picture it in use.',
  whatsappMessage: 'Hello Sengeti Technologies, I would like a demonstration of SengetiEdu for our school.',
  askWhatsApp: 'Ask on WhatsApp',
  phone: {
    label: 'Illustration of the SengetiEdu app on a phone, showing the Campus, Senior and Junior editions',
    school: 'Your School',
    campus: { title: 'Check in', cls: 'CS 201 · Data Structures', hint: 'Scan the code on the screen', refresh: 'New code in' },
    senior: {
      title: 'Today · Form 4B',
      timetable: [
        { time: '07:30', subject: 'Mathematics' },
        { time: '08:40', subject: 'Geography' },
        { time: '10:30', subject: 'Chemistry' },
      ],
      homeworkLabel: 'Homework',
      homework: 'Physics worksheet 3 · due Thursday',
      markLabel: 'Latest mark',
      mark: 'Maths test',
    },
    junior: {
      alertTitle: 'Tendai is absent today',
      alertText: 'Marked at 07:45 by Mrs Moyo',
      feesLabel: 'Fees balance',
      pay: 'Pay with EcoCash',
      noticeLabel: 'Notice',
      notice: 'Sports day on Friday. Bring a white T-shirt.',
    },
  },
};

const fr: typeof en = {
  title: 'SengetiEdu : une plateforme scolaire de la maternelle à l’université | Sengeti Technologies',
  description:
    'SengetiEdu met les présences, l’enseignement, les résultats, les frais et les familles sur chaque téléphone. Trois éditions pour les universités, les écoles secondaires et primaires, conçues au Zimbabwe.',
  eyebrow: 'Plateforme SengetiEdu',
  heading: 'Une plateforme pour chaque école,',
  headingAccent: 'de la maternelle à l’université.',
  lead: 'Présences, enseignement, résultats, frais et familles sur chaque téléphone. Trois éditions, une même base, conçues au Zimbabwe pour la réalité des écoles d’ici.',
  ctaDemo: 'Réserver une démonstration gratuite',
  ctaTry: 'Essayer la démo des présences',
  jump: 'Aller à',
  familyEyebrow: 'La famille',
  familyHeading: 'Trois éditions.',
  familyAccent: 'Une même base.',
  familyLead:
    'Chaque édition partage le même socle : connexion sécurisée, présences, frais et paiements, annonces, messages, un assistant et l’application des parents. Chacune ajoute ce dont son type d’école a besoin, et chaque école n’active que les modules qu’elle utilise.',
  editions: {
    campus: {
      audience: 'Universités et établissements supérieurs',
      range: 'Facultés, programmes, campus',
      text: 'Pour les administrateurs, enseignants et étudiants de toutes les facultés, programmes et campus.',
      intro:
        'Née de notre projet de présences universitaires : un pointage impossible à truquer, une admissibilité aux examens calculée toute seule, et une plateforme d’enseignement complète autour.',
      groups: [
        {
          title: 'Des présences impossibles à truquer',
          items: [
            'Un code QR à l’écran qui change toutes les 15 secondes',
            'Contrôle par selfie et localisation en option ; file d’attente hors ligne',
            'Listes d’admissibilité aux examens à partir des présences, en un clic',
          ],
        },
        {
          title: 'Enseignement et apprentissage',
          items: [
            'Notes de cours, annonces et forum par module',
            'Devoirs (individuels ou en groupe), grilles d’évaluation, détection de similarité',
            'Quiz avec banque de questions ; carnet de notes',
          ],
        },
        {
          title: 'Semestres et programmes',
          items: [
            'Programmes, cursus et inscription aux modules',
            'Assistant de création de semestre, imports et reconduction',
            'Calendrier et placement des examens, quitus des frais',
          ],
        },
        {
          title: 'Vie étudiante',
          items: [
            'Cours en ligne et de rattrapage, permanences',
            'Clubs, sports, installations et certificats',
            'Carnet de stage, enquêtes, bien-être',
          ],
        },
      ],
    },
    senior: {
      audience: 'Écoles secondaires',
      range: 'Forms 1 à 6',
      text: 'O-level et A-level, avec des élèves qui se connectent sur leur propre téléphone.',
      intro:
        'Les élèves ont leur propre accès, les enseignants un carnet de notes qui rédige les bulletins, et le secrétariat obtient les listes ZIMSEC sans rien ressaisir.',
      groups: [
        {
          title: 'Pour les élèves',
          items: [
            'Accès personnel des élèves : emploi du temps, devoirs, quiz, notes',
            'Plan d’étude de la semaine et notes consultables hors ligne',
            'Travail de groupe et forums de classe',
          ],
        },
        {
          title: 'Pour les enseignants et le secrétariat',
          items: [
            'Carnet de notes, bulletins avec appréciations et classements',
            'Choix des matières pour l’O-level et l’A-level, par bloc',
            'Listes de candidats ZIMSEC et rapports au ministère',
          ],
        },
        {
          title: 'Examens et internat',
          items: ['Examens en ligne avec temps supplémentaire pour les élèves désignés', 'Internat : appel du soir et sorties'],
        },
      ],
    },
    junior: {
      audience: 'Écoles primaires',
      range: 'Maternelle à Grade 7',
      text: 'Pensée pour le téléphone des parents, pour garder les familles informées.',
      intro:
        'Les parents savent tout de suite quand leur enfant est absent, voient les devoirs et les bulletins, et savent exactement qui peut venir le chercher.',
      groups: [
        {
          title: 'Pour les familles',
          items: [
            'Les parents prévenus dès que leur enfant est absent',
            'Devoirs et quiz faits ensemble à la maison',
            'Mérites et comportement partagés avec les parents',
          ],
        },
        {
          title: 'Bulletins',
          items: ['Bulletins validés par le directeur avant d’être vus par les parents'],
        },
        {
          title: 'Sécurité et soins',
          items: [
            'Contrôle à la sortie : qui peut récupérer chaque enfant',
            'Transport : lignes, arrêts et trajets, parents prévenus',
            'Infirmerie avec les allergies affichées',
            'Cartes d’identité pour toute une classe avec code QR',
          ],
        },
      ],
    },
  },
  coreHeading: 'Commun à toutes les éditions',
  core: [
    { icon: 'check', title: 'Présences', text: 'Des registres sur téléphone qui fonctionnent hors ligne, avec alertes aux familles et rapports pour la direction.' },
    { icon: 'wallet', title: 'Frais et paiements', text: 'Factures, reçus, impayés, parrains, et paiement depuis la maison par EcoCash ou carte.' },
    { icon: 'bell', title: 'Annonces et événements', text: 'Événements, sorties, sports et messages d’urgence, avec réponses.' },
    { icon: 'chat', title: 'Messages', text: 'Dans l’application, par notification, SMS et WhatsApp ; les familles choisissent comment être prévenues.' },
    {
      icon: 'sparkle',
      title: 'Assistant',
      text: 'Propulsé par Claude : soldes, devoirs et absences, avec des réponses dans l’application, sur WhatsApp ou par SMS.',
    },
    { icon: 'chart', title: 'Rapports', text: 'Tableau de bord de direction, alertes précoces pour les élèves en difficulté, statistiques et journal d’activité.' },
  ],
  integrationsHeading: 'Campus se connecte à vos systèmes',
  integrations: [
    'Moodle et Google Classroom',
    'LTI 1.3',
    'Authentification unique SAML et OIDC',
    'API pour ERP et SIS',
    'Webhooks',
    'Synchronisation SFTP',
    'Widgets pour votre site',
    'Export des résultats',
    'Plusieurs campus',
    'Applications Android et iOS',
  ],
  modulesHeading: 'Modules optionnels pour Senior et Junior',
  modules: [
    'Emploi du temps et remplacements',
    'Cours de rattrapage et en ligne',
    'Bibliothèque et manuels',
    'Clubs, sports et installations',
    'Certificats avec vérification QR',
    'Réunions et demandes des parents',
    'Enquêtes et bien-être',
    'Parrains et BEAM',
    'Boutique d’uniformes',
    'Stocks et équipements',
    'Paie et RH',
    'Admissions',
    'Établissements multiples',
    'Écrans d’affichage',
  ],
  modulesNote:
    'Chaque module peut être activé ou désactivé par le directeur. Commencez par les présences, les frais et les parents ; ajoutez le reste quand vous êtes prêts, sans nouvelle installation.',
  compareEyebrow: 'En un coup d’œil',
  compareHeading: 'Quelle édition',
  compareAccent: 'fait quoi',
  feature: 'Fonction',
  included: 'Inclus',
  notIncluded: 'Non inclus',
  rows: [
    'Présences',
    'Frais, reçus et paiements en ligne',
    'Application et notifications pour les parents',
    'Assistant (application, WhatsApp, SMS)',
    'Accès personnel des élèves',
    'Devoirs, quiz et notes',
    'Bulletins',
    'Admissibilité aux examens selon les présences',
    'Semestres et inscription aux modules',
    'Choix des matières et listes ZIMSEC',
    'Internat',
    'Contrôle à la sortie et remise en sécurité',
    'Transport et infirmerie',
    'LMS, LTI et authentification unique',
    'Registres hors ligne',
    'L’image de votre école et un code école pour l’application',
    'École de démonstration à essayer, clairement marquée DEMO',
  ],
  brandEyebrow: 'Votre école, votre image',
  brandHeading: 'Les familles voient votre école,',
  brandAccent: 'pas la nôtre.',
  brandLead:
    'Du premier écran au dernier reçu, parents, élèves et personnel ne voient que le nom, le logo et les couleurs de votre école. Ils ne voient jamais le site de SengetiEdu ni aucune autre école.',
  brand: [
    {
      title: 'Votre image partout',
      text: 'Page de connexion, chaque écran, onglet du navigateur et icône d’accueil, reçus, fiches de paie, bulletins, exports Excel, SMS et WhatsApp.',
    },
    {
      title: 'Directement vers votre école',
      text: 'Chaque école reçoit un code et un code QR. Saisissez-le ou scannez-le une fois dans l’application ; ensuite, elle ouvre directement la connexion de votre école.',
    },
    {
      title: 'Seulement votre porte',
      text: 'Le code trouve votre école, rien de plus : chacun se connecte toujours avec son propre compte. Les codes peuvent être changés à tout moment.',
    },
  ],
  addressHeading: 'Votre adresse et votre application',
  address: [
    {
      title: 'Adresse web',
      standard: 'Standard, incluse',
      standardText: 'votreecole.sengeti.school',
      upgrade: 'La vôtre, en option',
      upgradeText: 'par ex. portal.votreecole.ac.zw',
    },
    {
      title: 'Application mobile',
      standard: 'Application partagée, incluse',
      standardText: 'Ouverte avec votre code école, à vos couleurs',
      upgrade: 'Votre propre application, en option',
      upgradeText: 'Votre nom et votre icône dans les stores',
    },
  ],
  signIn: {
    school: 'Votre École',
    welcome: 'Bon retour',
    user: 'Téléphone ou e-mail',
    password: 'Mot de passe',
    button: 'Se connecter',
    code: 'Code école',
  },
  safeEyebrow: 'Sûr, privé et à vous',
  safe: [
    {
      icon: 'lock',
      title: 'Connexion sécurisée',
      text: 'Connexion en deux étapes, comptes bloqués après des mots de passe erronés, et déconnexion de tous les appareils.',
    },
    {
      icon: 'shield',
      title: 'Vos données restent les vôtres',
      text: 'Les données de chaque école sont privées et séparées, sauvegardées chaque jour, et le directeur peut tout télécharger à tout moment.',
    },
    {
      icon: 'eye',
      title: 'Assistance seulement avec permission',
      text: 'Notre équipe d’assistance ne peut consulter, en lecture seule, que lorsque le directeur l’autorise, et chaque page ouverte est enregistrée.',
    },
    {
      icon: 'pin',
      title: 'Conçu pour la région',
      text: 'Pays, fuseau horaire et format de téléphone par école ; anglais, français et portugais.',
    },
  ],
  growHeading: 'Conçu pour grandir, et juste pour les familles',
  grow: [
    {
      icon: 'bolt',
      title: 'Rapide pour tous à la fois',
      text: 'Reste rapide quand tous les parents l’ouvrent le jour des bulletins : les messages partent en arrière-plan, les longues listes se chargent par pages, les pages chargées sont mises en cache.',
    },
    {
      icon: 'check',
      title: 'Les cookies, à votre choix',
      text: 'Un avis clair avec Tout accepter, Tout refuser et Gérer. Seuls les cookies nécessaires à la connexion sont toujours actifs.',
    },
    {
      icon: 'cap',
      title: 'Essayez d’abord',
      text: 'Des écoles de démonstration Junior et Senior avec des élèves et des frais fictifs. Chaque page est marquée DEMO, et aucun vrai message n’est envoyé.',
    },
  ],
  startEyebrow: 'Pour commencer',
  startHeading: 'Opérationnel en',
  startAccent: 'quatre semaines',
  startLead: 'Nous commençons petit et formons au fur et à mesure, pour que personne ne soit surpris le premier jour.',
  weeks: [
    {
      label: 'Semaine 1',
      title: 'Mise en place',
      text: 'Votre école avec son logo et ses couleurs, ses trimestres et ses classes, et les élèves, le personnel et les parents importés depuis Excel. Votre code école et votre adresse web sont prêts.',
    },
    {
      label: 'Semaine 2',
      title: 'Direction et secrétariat',
      text: 'Formation du directeur, de l’adjoint et de l’économe : frais, reçus, annonces et rapports.',
    },
    { label: 'Semaine 3', title: 'Enseignants', text: 'Formation sur leur téléphone : registres, devoirs, notes et emploi du temps.' },
    {
      label: 'Semaine 4',
      title: 'Les familles en ligne',
      text: 'Parents et élèves reçoivent leur accès et votre code école par SMS, avec un guide d’une page.',
    },
  ],
  pricingTitle: 'Des prix simples',
  pricingText:
    'Une licence par élève et par trimestre, facturée d’avance, plus des frais uniques d’installation et de formation. Hébergement, sauvegardes, mises à jour et assistance sont inclus.',
  supportTitle: 'Une assistance joignable',
  supportText:
    'Une personne attitrée chez Sengeti pour votre école, par WhatsApp, téléphone et e-mail, et un centre d’aide dans l’application.',
  faqHeading: 'Les questions des écoles',
  faqs: [
    {
      q: 'Beaucoup de nos parents n’ont pas de données mobiles. Cela fonctionnera-t-il quand même ?',
      a: 'Oui. Les pages sont légères, les registres fonctionnent hors ligne, et les parents sans données reçoivent des alertes par SMS et peuvent écrire à l’assistant pour les soldes, les devoirs et les absences.',
    },
    {
      q: 'Nos enseignants vont-ils vraiment l’utiliser ?',
      a: 'La formation est incluse, et faire l’appel prend moins d’une minute sur un téléphone. Nous formons chaque groupe sur place et continuons jusqu’à ce que tout fonctionne.',
    },
    {
      q: 'Que deviennent nos données ?',
      a: 'Elles sont privées à votre école, sauvegardées chaque jour et téléchargeables par le directeur à tout moment. Notre assistance ne peut consulter, en lecture seule, que lorsque le directeur l’autorise.',
    },
    {
      q: 'Peut-il avoir l’image de notre école ?',
      a: 'Dès le premier jour : votre nom, votre logo et vos couleurs sur chaque écran, reçu et message. Votre propre adresse web et votre propre application sont des options.',
    },
    {
      q: 'Comment les parents paient-ils les frais ?',
      a: 'Depuis la maison par EcoCash ou carte, ou à l’école comme avant. Les reçus sont émis automatiquement, et l’économe voit qui a payé et qui doit encore.',
    },
    {
      q: 'Combien cela coûte-t-il ?',
      a: 'Une licence par élève et par trimestre, plus des frais uniques d’installation et de formation. Hébergement, sauvegardes, mises à jour et assistance sont inclus. Demandez-nous un devis pour votre école.',
    },
  ],
  ctaHeading: 'Découvrez SengetiEdu dans votre école.',
  ctaText: 'Réservez une démonstration gratuite. Nous la configurons au nom de votre école pour que vous puissiez l’imaginer en service.',
  whatsappMessage: 'Bonjour Sengeti Technologies, je souhaite une démonstration de SengetiEdu pour notre école.',
  askWhatsApp: 'Demander sur WhatsApp',
  phone: {
    label: 'Illustration de l’application SengetiEdu sur un téléphone, montrant les éditions Campus, Senior et Junior',
    school: 'Votre École',
    campus: { title: 'Pointage', cls: 'CS 201 · Structures de données', hint: 'Scannez le code à l’écran', refresh: 'Nouveau code dans' },
    senior: {
      title: 'Aujourd’hui · Form 4B',
      timetable: [
        { time: '07:30', subject: 'Mathématiques' },
        { time: '08:40', subject: 'Géographie' },
        { time: '10:30', subject: 'Chimie' },
      ],
      homeworkLabel: 'Devoirs',
      homework: 'Physique, fiche 3 · pour jeudi',
      markLabel: 'Dernière note',
      mark: 'Contrôle de maths',
    },
    junior: {
      alertTitle: 'Tendai est absent aujourd’hui',
      alertText: 'Noté à 07:45 par Mme Moyo',
      feesLabel: 'Solde des frais',
      pay: 'Payer avec EcoCash',
      noticeLabel: 'Annonce',
      notice: 'Journée sportive vendredi. Prévoir un t-shirt blanc.',
    },
  },
};

const pt: typeof en = {
  title: 'SengetiEdu: uma plataforma escolar do pré-escolar à universidade | Sengeti Technologies',
  description:
    'O SengetiEdu põe presenças, ensino, resultados, propinas e famílias em cada telemóvel. Três edições para universidades, escolas secundárias e primárias, criadas no Zimbabué.',
  eyebrow: 'Plataforma SengetiEdu',
  heading: 'Uma plataforma para cada escola,',
  headingAccent: 'do pré-escolar à universidade.',
  lead: 'Presenças, ensino, resultados, propinas e famílias em cada telemóvel. Três edições, uma só base, criadas no Zimbabué para a realidade das escolas daqui.',
  ctaDemo: 'Marcar uma demonstração gratuita',
  ctaTry: 'Experimentar a demonstração de presenças',
  jump: 'Ir para',
  familyEyebrow: 'A família',
  familyHeading: 'Três edições.',
  familyAccent: 'Uma só base.',
  familyLead:
    'Todas as edições partilham o mesmo núcleo: acesso seguro, presenças, propinas e pagamentos, avisos, mensagens, um assistente e a aplicação dos pais. Cada uma acrescenta o que o seu tipo de escola precisa, e cada escola liga apenas os módulos que usa.',
  editions: {
    campus: {
      audience: 'Universidades e institutos',
      range: 'Faculdades, cursos, campus',
      text: 'Para administradores, docentes e estudantes de todas as faculdades, cursos e campus.',
      intro:
        'Nasceu do nosso projeto de presenças universitárias: registo de presença impossível de falsificar, elegibilidade para exames calculada sozinha e uma plataforma de ensino completa à volta.',
      groups: [
        {
          title: 'Presenças impossíveis de falsificar',
          items: [
            'Código QR no ecrã que muda a cada 15 segundos',
            'Verificação opcional por selfie e localização; fila offline',
            'Listas de elegibilidade para exames a partir das presenças, num clique',
          ],
        },
        {
          title: 'Ensino e aprendizagem',
          items: [
            'Apontamentos, avisos e fórum por cadeira',
            'Trabalhos (individuais ou de grupo), grelhas de avaliação, deteção de semelhanças',
            'Testes com banco de perguntas; pauta de notas',
          ],
        },
        {
          title: 'Semestres e cursos',
          items: [
            'Cursos, planos de estudo e inscrição nas cadeiras',
            'Assistente de configuração do semestre, importações e transição',
            'Calendário e distribuição de salas de exames, quitação de propinas',
          ],
        },
        {
          title: 'Vida estudantil',
          items: [
            'Aulas online e de compensação, horário de atendimento',
            'Clubes, desporto, instalações e certificados',
            'Diário de estágio, inquéritos, bem-estar',
          ],
        },
      ],
    },
    senior: {
      audience: 'Escolas secundárias',
      range: 'Forms 1 a 6',
      text: 'O-level e A-level, com alunos a entrar no seu próprio telemóvel.',
      intro:
        'Os alunos têm o seu próprio acesso, os professores uma caderneta que escreve as pautas, e a secretaria obtém as listas da ZIMSEC sem voltar a escrever nada.',
      groups: [
        {
          title: 'Para os alunos',
          items: [
            'Acesso próprio dos alunos: horário, trabalhos de casa, testes, notas',
            'Plano de estudo da semana e apontamentos que abrem offline',
            'Trabalhos de grupo e fóruns de turma',
          ],
        },
        {
          title: 'Para professores e secretaria',
          items: [
            'Caderneta, pautas com comentários e classificações',
            'Escolha de disciplinas para O-level e A-level, por bloco',
            'Listas de candidatos da ZIMSEC e relatórios para o Ministério',
          ],
        },
        {
          title: 'Exames e internato',
          items: ['Exames online com tempo extra para alunos indicados', 'Internato: chamada da noite e saídas'],
        },
      ],
    },
    junior: {
      audience: 'Escolas primárias',
      range: 'Pré-escolar ao Grade 7',
      text: 'Pensada para o telemóvel dos pais, para manter as famílias a par de tudo.',
      intro:
        'Os pais sabem logo quando o filho falta, veem os trabalhos de casa e as pautas, e sabem exatamente quem pode ir buscar a criança.',
      groups: [
        {
          title: 'Para as famílias',
          items: [
            'Pais avisados de imediato quando o filho falta',
            'Trabalhos de casa e testes feitos em conjunto em casa',
            'Méritos e comportamento partilhados com os pais',
          ],
        },
        {
          title: 'Pautas',
          items: ['Pautas aprovadas pelo diretor antes de os pais as verem'],
        },
        {
          title: 'Segurança e cuidados',
          items: [
            'Controlo no portão: quem pode ir buscar cada criança',
            'Transporte: rotas, paragens e viagens, pais avisados',
            'Enfermaria com as alergias no ecrã',
            'Cartões de identificação para uma turma inteira com código QR',
          ],
        },
      ],
    },
  },
  coreHeading: 'Comum a todas as edições',
  core: [
    { icon: 'check', title: 'Presenças', text: 'Chamadas no telemóvel que funcionam offline, com alertas às famílias e relatórios para a direção.' },
    { icon: 'wallet', title: 'Propinas e pagamentos', text: 'Faturas, recibos, devedores, patrocinadores, e pagamento a partir de casa com EcoCash ou cartão.' },
    { icon: 'bell', title: 'Avisos e eventos', text: 'Eventos, visitas de estudo, desporto e mensagens de emergência, com respostas.' },
    { icon: 'chat', title: 'Mensagens', text: 'Na aplicação, notificações, SMS e WhatsApp; as famílias escolhem como querem ser avisadas.' },
    {
      icon: 'sparkle',
      title: 'Assistente',
      text: 'Com a tecnologia Claude: saldos, trabalhos de casa e faltas respondidos na aplicação, no WhatsApp ou por SMS.',
    },
    { icon: 'chart', title: 'Relatórios', text: 'Painel da direção, alertas precoces para alunos em risco, estatísticas e registo de atividade.' },
  ],
  integrationsHeading: 'O Campus liga-se aos seus sistemas',
  integrations: [
    'Moodle e Google Classroom',
    'LTI 1.3',
    'Acesso único SAML e OIDC',
    'API para ERP e SIS',
    'Webhooks',
    'Sincronização SFTP',
    'Widgets para o seu site',
    'Exportação de resultados',
    'Vários campus',
    'Aplicações Android e iOS',
  ],
  modulesHeading: 'Módulos opcionais para Senior e Junior',
  modules: [
    'Horários e substituições',
    'Aulas de compensação e online',
    'Biblioteca e manuais',
    'Clubes, desporto e instalações',
    'Certificados com verificação QR',
    'Reuniões e pedidos dos pais',
    'Inquéritos e bem-estar',
    'Patrocinadores e BEAM',
    'Loja de uniformes',
    'Armazém e património',
    'Salários e RH',
    'Admissões',
    'Várias unidades',
    'Ecrãs de avisos',
  ],
  modulesNote:
    'Cada módulo pode ser ligado ou desligado pelo diretor. Comece pelas presenças, propinas e pais; acrescente o resto quando estiver pronto, sem nova instalação.',
  compareEyebrow: 'Num relance',
  compareHeading: 'Que edição',
  compareAccent: 'faz o quê',
  feature: 'Funcionalidade',
  included: 'Incluído',
  notIncluded: 'Não incluído',
  rows: [
    'Presenças',
    'Propinas, recibos e pagamentos online',
    'Aplicação e notificações para os pais',
    'Assistente (aplicação, WhatsApp, SMS)',
    'Acesso próprio dos alunos',
    'Trabalhos, testes e notas',
    'Pautas',
    'Elegibilidade para exames a partir das presenças',
    'Semestres e inscrição nas cadeiras',
    'Escolha de disciplinas e listas da ZIMSEC',
    'Internato',
    'Controlo no portão e entrega segura',
    'Transporte e enfermaria',
    'LMS, LTI e acesso único',
    'Chamadas offline',
    'A imagem da sua escola e um código de escola para a aplicação',
    'Escola de demonstração para experimentar, marcada como DEMO',
  ],
  brandEyebrow: 'A sua escola, a sua imagem',
  brandHeading: 'As famílias veem a sua escola,',
  brandAccent: 'não a nossa.',
  brandLead:
    'Do primeiro ecrã ao último recibo, pais, alunos e funcionários veem apenas o nome, o logótipo e as cores da sua escola. Nunca veem o site do SengetiEdu nem qualquer outra escola.',
  brand: [
    {
      title: 'A sua imagem em todo o lado',
      text: 'Página de acesso, todos os ecrãs, separador do navegador e ícone no telemóvel, recibos, recibos de vencimento, pautas, exportações para Excel, SMS e WhatsApp.',
    },
    {
      title: 'Direto para a sua escola',
      text: 'Cada escola recebe um código e um código QR. Introduza-o ou leia-o uma vez na aplicação; a partir daí abre o acesso da sua escola.',
    },
    {
      title: 'Só a sua porta',
      text: 'O código encontra a sua escola e nada mais: cada pessoa continua a entrar com a sua própria conta. Os códigos podem ser alterados a qualquer momento.',
    },
  ],
  addressHeading: 'O seu endereço e a sua aplicação',
  address: [
    {
      title: 'Endereço web',
      standard: 'Padrão, incluído',
      standardText: 'asuaescola.sengeti.school',
      upgrade: 'O seu próprio, opcional',
      upgradeText: 'por ex. portal.asuaescola.ac.zw',
    },
    {
      title: 'Aplicação móvel',
      standard: 'Aplicação partilhada, incluída',
      standardText: 'Aberta com o código da sua escola, com a sua imagem',
      upgrade: 'A sua própria aplicação, opcional',
      upgradeText: 'O seu nome e ícone nas lojas',
    },
  ],
  signIn: {
    school: 'A Sua Escola',
    welcome: 'Bem-vindo de volta',
    user: 'Telemóvel ou e-mail',
    password: 'Palavra-passe',
    button: 'Entrar',
    code: 'Código da escola',
  },
  safeEyebrow: 'Seguro, privado e seu',
  safe: [
    {
      icon: 'lock',
      title: 'Acesso seguro',
      text: 'Acesso em dois passos, contas bloqueadas após palavras-passe erradas, e saída de todos os dispositivos.',
    },
    {
      icon: 'shield',
      title: 'Os seus dados são seus',
      text: 'Os dados de cada escola são privados e separados, com cópia de segurança diária, e o diretor pode descarregar tudo a qualquer momento.',
    },
    {
      icon: 'eye',
      title: 'Apoio só com autorização',
      text: 'A nossa equipa de apoio só pode consultar, sem alterar, enquanto o diretor o permitir, e cada página aberta fica registada.',
    },
    {
      icon: 'pin',
      title: 'Feito para a região',
      text: 'País, fuso horário e formato de telefone por escola; inglês, francês e português.',
    },
  ],
  growHeading: 'Feito para crescer, e justo para as famílias',
  grow: [
    {
      icon: 'bolt',
      title: 'Rápido para todos ao mesmo tempo',
      text: 'Mantém-se rápido quando todos os pais o abrem no dia das pautas: as mensagens saem em segundo plano, as listas longas carregam por páginas e as páginas mais usadas ficam em cache.',
    },
    {
      icon: 'check',
      title: 'Cookies, à sua escolha',
      text: 'Um aviso claro com Aceitar todos, Rejeitar todos e Gerir. Só os cookies necessários para entrar estão sempre ativos.',
    },
    {
      icon: 'cap',
      title: 'Experimente primeiro',
      text: 'Escolas de demonstração Junior e Senior com alunos e propinas de exemplo. Todas as páginas estão marcadas como DEMO e nenhuma mensagem real é enviada.',
    },
  ],
  startEyebrow: 'Como começar',
  startHeading: 'A funcionar em',
  startAccent: 'quatro semanas',
  startLead: 'Começamos com pouco e formamos à medida que avançamos, para que ninguém seja apanhado de surpresa no primeiro dia.',
  weeks: [
    {
      label: 'Semana 1',
      title: 'Configuração',
      text: 'A sua escola com o logótipo e as cores, os períodos e as turmas, e alunos, funcionários e pais importados do Excel. O código da escola e o endereço web ficam prontos.',
    },
    {
      label: 'Semana 2',
      title: 'Direção e secretaria',
      text: 'Formação para o diretor, o adjunto e o tesoureiro: propinas, recibos, avisos e relatórios.',
    },
    { label: 'Semana 3', title: 'Professores', text: 'Formação no telemóvel: chamadas, trabalhos de casa, notas e horário.' },
    {
      label: 'Semana 4',
      title: 'As famílias entram',
      text: 'Pais e alunos recebem o acesso e o código da escola por SMS, com um guia de uma página.',
    },
  ],
  pricingTitle: 'Preços simples',
  pricingText:
    'Uma licença por aluno por período, faturada antecipadamente, mais uma taxa única de configuração e formação. Alojamento, cópias de segurança, atualizações e apoio estão incluídos.',
  supportTitle: 'Apoio a que pode chegar',
  supportText:
    'Uma pessoa da Sengeti dedicada à sua escola, por WhatsApp, telefone e e-mail, e um centro de ajuda dentro da aplicação.',
  faqHeading: 'Perguntas que as escolas fazem',
  faqs: [
    {
      q: 'Muitos dos nossos pais não têm dados móveis. Funciona na mesma?',
      a: 'Sim. As páginas são leves, as chamadas funcionam offline, e os pais sem dados recebem alertas por SMS e podem enviar mensagens ao assistente sobre saldos, trabalhos de casa e faltas.',
    },
    {
      q: 'Os nossos professores vão mesmo usá-lo?',
      a: 'A formação está incluída, e fazer a chamada demora menos de um minuto no telemóvel. Formamos cada grupo presencialmente e continuamos até tudo funcionar.',
    },
    {
      q: 'O que acontece aos nossos dados?',
      a: 'São privados da sua escola, com cópia de segurança diária, e o diretor pode descarregá-los a qualquer momento. O nosso apoio só pode consultar, sem alterar, enquanto o diretor o permitir.',
    },
    {
      q: 'Pode ter a imagem da nossa escola?',
      a: 'Desde o primeiro dia: o seu nome, logótipo e cores em todos os ecrãs, recibos e mensagens. O seu próprio endereço web e a sua própria aplicação são opcionais.',
    },
    {
      q: 'Como é que os pais pagam as propinas?',
      a: 'A partir de casa com EcoCash ou cartão, ou na escola como antes. Os recibos são emitidos automaticamente, e o tesoureiro vê quem pagou e quem deve.',
    },
    {
      q: 'Quanto custa?',
      a: 'Uma licença por aluno por período, mais uma taxa única de configuração e formação. Alojamento, cópias de segurança, atualizações e apoio estão incluídos. Peça-nos um orçamento para a sua escola.',
    },
  ],
  ctaHeading: 'Veja o SengetiEdu na sua escola.',
  ctaText: 'Marque uma demonstração gratuita. Configuramo-la com o nome da sua escola para que a possa imaginar em uso.',
  whatsappMessage: 'Olá Sengeti Technologies, gostaria de uma demonstração do SengetiEdu para a nossa escola.',
  askWhatsApp: 'Perguntar no WhatsApp',
  phone: {
    label: 'Ilustração da aplicação SengetiEdu num telemóvel, com as edições Campus, Senior e Junior',
    school: 'A Sua Escola',
    campus: { title: 'Registar presença', cls: 'CS 201 · Estruturas de Dados', hint: 'Leia o código no ecrã', refresh: 'Novo código em' },
    senior: {
      title: 'Hoje · Form 4B',
      timetable: [
        { time: '07:30', subject: 'Matemática' },
        { time: '08:40', subject: 'Geografia' },
        { time: '10:30', subject: 'Química' },
      ],
      homeworkLabel: 'Trabalho de casa',
      homework: 'Física, ficha 3 · até quinta',
      markLabel: 'Última nota',
      mark: 'Teste de Matemática',
    },
    junior: {
      alertTitle: 'O Tendai faltou hoje',
      alertText: 'Registado às 07:45 pela Sra. Moyo',
      feesLabel: 'Saldo das propinas',
      pay: 'Pagar com EcoCash',
      noticeLabel: 'Aviso',
      notice: 'Dia do desporto na sexta. Tragam uma T-shirt branca.',
    },
  },
};

export const sengetiEdu = { en, fr, pt };

/** Which edition has which feature, row by row as in `rows`: [Campus, Senior, Junior]. */
export const editionMatrix: [boolean, boolean, boolean][] = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [true, true, false],
  [true, true, true],
  [false, true, true],
  [true, false, false],
  [true, false, false],
  [false, true, false],
  [false, true, true],
  [true, true, true],
  [false, true, true],
  [true, false, false],
  [true, true, true],
  [false, true, true],
  [true, true, true],
];
