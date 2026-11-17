/**
 * Text for the "Which edition fits your school?" quiz (on the SengetiEdu page)
 * and the school demo page (/school-demo), in all three languages.
 */

type Edition = 'campus' | 'senior' | 'junior';

interface QuizText {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  lead: string;
  levelsQ: string;
  levelsHint: string;
  levels: Record<Edition, string>;
  boardingQ: string;
  yes: string;
  no: string;
  sizeQ: string;
  sizes: string[];
  resultEyebrow: string;
  resultEmpty: string;
  /** {list} is replaced with the edition names. */
  several: string;
  and: string;
  boardingIncluded: string;
  boardingCampus: string;
  /** {size} is replaced with the chosen number of learners, first letter in lower case. */
  sizeNote: string;
  seeIncluded: string;
  book: string;
}

interface DemoText {
  nav: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  lead: string;
  steps: { title: string; text: string }[];
  formHeading: string;
  phoneLabel: string;
  submit: string;
  roleLabel: string;
  roles: string[];
  schoolLabel: string;
  townLabel: string;
  editionLabel: string;
  unsure: string;
  learnersLabel: string;
  boardingLabel: string;
  formatLabel: string;
  formats: string[];
  messageLabel: string;
  preferWhatsApp: string;
  quizLink: string;
}

export const schoolQuiz: Record<'en' | 'fr' | 'pt', QuizText> = {
  en: {
    eyebrow: 'Find your edition',
    heading: 'Which SengetiEdu fits',
    headingAccent: 'your school?',
    lead: 'Answer three quick questions and we will point you to the right edition.',
    levelsQ: 'Which learners do you teach?',
    levelsHint: 'Pick all that apply.',
    levels: {
      junior: 'ECD and primary, up to Grade 7',
      senior: 'Secondary, Forms 1 to 6',
      campus: 'College or university',
    },
    boardingQ: 'Do you have boarders?',
    yes: 'Yes',
    no: 'No',
    sizeQ: 'How many learners?',
    sizes: ['Under 300', '300 to 800', '800 to 2,000', 'Over 2,000'],
    resultEyebrow: 'Your best fit',
    resultEmpty: 'Choose the learners you teach and your edition appears here.',
    several: 'Your school covers more than one level, so we would set up {list} side by side, each with the tools for its age group.',
    and: 'and',
    boardingIncluded: 'Boarding is included: night roll call and exeats.',
    boardingCampus: 'Tell us about your hostels when you book, and we will show you how they fit in.',
    sizeNote: 'For {size} learners, you can be live in four weeks, with training for every group.',
    seeIncluded: "See what's included",
    book: 'Book a demo for my school',
  },
  fr: {
    eyebrow: 'Trouvez votre édition',
    heading: 'Quel SengetiEdu pour',
    headingAccent: 'votre école ?',
    lead: 'Répondez à trois questions rapides et nous vous indiquerons la bonne édition.',
    levelsQ: 'Quels élèves accueillez-vous ?',
    levelsHint: 'Choisissez tout ce qui s’applique.',
    levels: {
      junior: 'Maternelle et primaire, jusqu’au Grade 7',
      senior: 'Secondaire, Forms 1 à 6',
      campus: 'Établissement supérieur ou université',
    },
    boardingQ: 'Avez-vous des internes ?',
    yes: 'Oui',
    no: 'Non',
    sizeQ: 'Combien d’élèves ?',
    sizes: ['Moins de 300', '300 à 800', '800 à 2 000', 'Plus de 2 000'],
    resultEyebrow: 'Votre meilleur choix',
    resultEmpty: 'Choisissez les élèves que vous accueillez et votre édition apparaît ici.',
    several: 'Votre école couvre plusieurs niveaux : nous installerions {list} côte à côte, chacun avec les outils de son âge.',
    and: 'et',
    boardingIncluded: 'L’internat est inclus : appel du soir et sorties autorisées.',
    boardingCampus: 'Parlez-nous de vos résidences lors de la réservation et nous vous montrerons comment les intégrer.',
    sizeNote: 'Pour {size} élèves, vous pouvez être en service en quatre semaines, avec une formation pour chaque groupe.',
    seeIncluded: 'Voir ce qui est inclus',
    book: 'Réserver une démo pour mon école',
  },
  pt: {
    eyebrow: 'Encontre a sua edição',
    heading: 'Qual SengetiEdu serve',
    headingAccent: 'a sua escola?',
    lead: 'Responda a três perguntas rápidas e indicamos a edição certa.',
    levelsQ: 'Que alunos ensina?',
    levelsHint: 'Escolha todas as que se aplicam.',
    levels: {
      junior: 'Pré-escolar e primário, até ao Grade 7',
      senior: 'Secundário, Forms 1 a 6',
      campus: 'Instituto ou universidade',
    },
    boardingQ: 'Tem alunos internos?',
    yes: 'Sim',
    no: 'Não',
    sizeQ: 'Quantos alunos?',
    sizes: ['Menos de 300', '300 a 800', '800 a 2.000', 'Mais de 2.000'],
    resultEyebrow: 'A melhor opção',
    resultEmpty: 'Escolha os alunos que ensina e a sua edição aparece aqui.',
    several: 'A sua escola cobre mais de um nível, por isso instalaríamos {list} lado a lado, cada uma com as ferramentas da sua idade.',
    and: 'e',
    boardingIncluded: 'O internato está incluído: chamada da noite e saídas autorizadas.',
    boardingCampus: 'Fale-nos das suas residências ao marcar e mostramos como se encaixam.',
    sizeNote: 'Para {size} alunos, pode estar a funcionar em quatro semanas, com formação para cada grupo.',
    seeIncluded: 'Ver o que está incluído',
    book: 'Marcar uma demo para a minha escola',
  },
};

export const schoolDemo: Record<'en' | 'fr' | 'pt', DemoText> = {
  en: {
    nav: 'Book a school demo',
    title: 'Book a free SengetiEdu demo for your school',
    description:
      'Tell us about your school and we will show you SengetiEdu with your own name, crest and colours, at your school or on a call. Free, with no commitment.',
    eyebrow: 'Free school demo',
    heading: 'See SengetiEdu with',
    headingAccent: "your school's name on it.",
    lead: 'Tell us about your school. We set up a demo with your name, crest and colours, then show it to your team at your school or on a call.',
    steps: [
      { title: 'Tell us about your school', text: 'Fill in the form below, or send us a WhatsApp message.' },
      { title: 'We prepare your demo', text: "We set SengetiEdu up with your school's name, crest and colours." },
      { title: 'We show you around', text: 'We walk your team through it and answer every question. Free, with no commitment.' },
    ],
    formHeading: 'About your school',
    phoneLabel: 'Phone or WhatsApp',
    submit: 'Request my demo',
    roleLabel: 'Your role',
    roles: ['Head or principal', 'Deputy head', 'Bursar or accounts', 'Director or owner', 'Teacher or IT', 'Other'],
    schoolLabel: 'School name',
    townLabel: 'Town or city',
    editionLabel: 'Edition',
    unsure: 'Not sure yet',
    learnersLabel: 'Number of learners',
    boardingLabel: 'Boarders',
    formatLabel: 'How would you like the demo?',
    formats: ['At our school', 'Video call', 'Phone call'],
    messageLabel: 'Anything we should know? (optional)',
    preferWhatsApp: 'Prefer to talk first?',
    quizLink: 'Not sure which edition? Take the 3-question quiz',
  },
  fr: {
    nav: 'Réserver une démo école',
    title: 'Réservez une démo SengetiEdu gratuite pour votre école',
    description:
      'Parlez-nous de votre école et nous vous montrerons SengetiEdu à son nom, avec son blason et ses couleurs, sur place ou par appel. Gratuit et sans engagement.',
    eyebrow: 'Démo gratuite pour les écoles',
    heading: 'Découvrez SengetiEdu',
    headingAccent: 'au nom de votre école.',
    lead: 'Parlez-nous de votre école. Nous préparons une démo à son nom, avec son blason et ses couleurs, puis la présentons à votre équipe sur place ou par appel.',
    steps: [
      { title: 'Parlez-nous de votre école', text: 'Remplissez le formulaire ci-dessous ou envoyez-nous un message WhatsApp.' },
      { title: 'Nous préparons votre démo', text: 'Nous configurons SengetiEdu avec le nom, le blason et les couleurs de votre école.' },
      { title: 'Nous vous la présentons', text: 'Nous guidons votre équipe et répondons à chaque question. Gratuit et sans engagement.' },
    ],
    formHeading: 'Votre école',
    phoneLabel: 'Téléphone ou WhatsApp',
    submit: 'Demander ma démo',
    roleLabel: 'Votre fonction',
    roles: ['Directeur ou directrice', 'Directeur adjoint', 'Économe ou comptabilité', 'Fondateur ou propriétaire', 'Enseignant ou informatique', 'Autre'],
    schoolLabel: 'Nom de l’école',
    townLabel: 'Ville',
    editionLabel: 'Édition',
    unsure: 'Je ne sais pas encore',
    learnersLabel: 'Nombre d’élèves',
    boardingLabel: 'Internes',
    formatLabel: 'Comment souhaitez-vous la démo ?',
    formats: ['Dans notre école', 'Appel vidéo', 'Appel téléphonique'],
    messageLabel: 'Quelque chose à nous dire ? (facultatif)',
    preferWhatsApp: 'Vous préférez en parler d’abord ?',
    quizLink: 'Pas sûr de l’édition ? Faites le quiz en 3 questions',
  },
  pt: {
    nav: 'Marcar demo para escolas',
    title: 'Marque uma demo gratuita do SengetiEdu para a sua escola',
    description:
      'Fale-nos da sua escola e mostramos o SengetiEdu com o nome, o brasão e as cores dela, na escola ou por chamada. Grátis e sem compromisso.',
    eyebrow: 'Demo gratuita para escolas',
    heading: 'Veja o SengetiEdu',
    headingAccent: 'com o nome da sua escola.',
    lead: 'Fale-nos da sua escola. Preparamos uma demo com o nome, o brasão e as cores dela e mostramos à sua equipa na escola ou por chamada.',
    steps: [
      { title: 'Fale-nos da sua escola', text: 'Preencha o formulário abaixo ou envie-nos uma mensagem no WhatsApp.' },
      { title: 'Preparamos a sua demo', text: 'Configuramos o SengetiEdu com o nome, o brasão e as cores da sua escola.' },
      { title: 'Mostramos tudo', text: 'Guiamos a sua equipa e respondemos a todas as perguntas. Grátis e sem compromisso.' },
    ],
    formHeading: 'Sobre a sua escola',
    phoneLabel: 'Telefone ou WhatsApp',
    submit: 'Pedir a minha demo',
    roleLabel: 'A sua função',
    roles: ['Diretor ou diretora', 'Diretor adjunto', 'Tesouraria ou contabilidade', 'Fundador ou proprietário', 'Professor ou informática', 'Outra'],
    schoolLabel: 'Nome da escola',
    townLabel: 'Cidade',
    editionLabel: 'Edição',
    unsure: 'Ainda não sei',
    learnersLabel: 'Número de alunos',
    boardingLabel: 'Alunos internos',
    formatLabel: 'Como prefere a demo?',
    formats: ['Na nossa escola', 'Videochamada', 'Chamada telefónica'],
    messageLabel: 'Algo que devamos saber? (opcional)',
    preferWhatsApp: 'Prefere falar primeiro?',
    quizLink: 'Não sabe qual edição? Faça o quiz de 3 perguntas',
  },
};

/** Download link for the two-page SengetiEdu brochure in public/ (made by scripts/brochure.mjs). */
export const brochure = {
  en: { label: 'Download the brochure (PDF, 2 pages)', href: '/sengetiedu-brochure.pdf' },
  fr: { label: 'Télécharger la brochure (PDF, 2 pages)', href: '/sengetiedu-brochure-fr.pdf' },
  pt: { label: 'Descarregar a brochura (PDF, 2 páginas)', href: '/sengetiedu-brochure-pt.pdf' },
};
