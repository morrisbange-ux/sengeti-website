/**
 * Text for the Careers page (/careers).
 *
 * To advertise a job, add it to `roles` in each language, for example:
 *   { id: 'web-developer', title: 'Web developer', type: 'Full-time', location: 'Mutare or remote',
 *     summary: 'Build web systems for clients across the region.', datePosted: '2026-11-01',
 *     employmentType: 'FULL_TIME' }
 * `datePosted` (YYYY-MM-DD) and `employmentType` (FULL_TIME, PART_TIME, CONTRACTOR, INTERN) are
 * used for Google's job listings. Keep the same roles, in the same order, in en, fr and pt.
 * When `roles` is empty the page says there are no open roles and shows a general application form.
 */
type Role = {
  id: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  datePosted: string;
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'INTERN' | 'TEMPORARY';
};

const en = {
  title: 'Careers | Sengeti Technologies',
  description:
    'Work at Sengeti Technologies in Mutare, Zimbabwe: real software and automation projects, room to learn and work that makes a difference locally.',
  nav: 'Careers',
  eyebrow: 'Careers',
  heading: 'Build useful things',
  headingAccent: 'with us.',
  lead: 'We are a small, growing team in Mutare building software and automation for organisations in Zimbabwe and the region. If you enjoy solving real problems, we would like to hear from you.',
  whyHeading: 'Why work at Sengeti',
  why: [
    { icon: 'code', title: 'Real projects', text: 'You work on systems that clients use every day, not exercises. Your work ships and you see the result.' },
    { icon: 'trend', title: 'Room to learn', text: 'In a small team you learn across the whole job, from talking to clients to launching and supporting software.' },
    { icon: 'globe', title: 'Local impact', text: 'Our work helps schools, businesses and organisations close to home run better and serve people faster.' },
    { icon: 'compass', title: 'Flexible work', text: 'We care about good results more than fixed hours, and agree working arrangements that suit the role.' },
  ],
  hireHeading: 'How we hire',
  hireLead: 'A simple, respectful process. We reply to everyone who applies.',
  hireSteps: [
    { title: 'Apply', text: 'Send the form below with a short note and a link to your CV, LinkedIn or portfolio.' },
    { title: 'First conversation', text: 'A relaxed call to get to know each other and talk about the role.' },
    { title: 'Practical task', text: 'A small, realistic task or a walk through your past work. No trick questions.' },
    { title: 'Offer', text: 'If it is a good fit on both sides, we make an offer and plan your first weeks.' },
  ],
  rolesHeading: 'Open roles',
  noRolesTitle: 'No open roles right now',
  noRolesText: "But we're always happy to hear from talented people. Send us a general application and we will keep it in mind for future roles.",
  apply: 'Apply',
  roles: [] as Role[],
  formHeading: 'Send your application',
  formAreaLabel: 'Area of interest',
  formAreas: ['Software development', 'Design', 'Sales', 'Internship', 'Other'],
  formMessageLabel: 'Tell us about yourself, and include a link to your CV or LinkedIn',
  formNote: 'Please do not attach files. A link to your CV, LinkedIn profile or portfolio is all we need.',
};

const fr: typeof en = {
  title: 'Carrières | Sengeti Technologies',
  description:
    "Travailler chez Sengeti Technologies à Mutare, au Zimbabwe : de vrais projets de logiciels et d'automatisation, de quoi apprendre et un travail utile localement.",
  nav: 'Carrières',
  eyebrow: 'Carrières',
  heading: 'Construisez des choses utiles',
  headingAccent: 'avec nous.',
  lead: "Nous sommes une petite équipe en croissance à Mutare qui conçoit des logiciels et des automatisations pour des organisations au Zimbabwe et dans la région. Si vous aimez résoudre de vrais problèmes, nous serions ravis d'avoir de vos nouvelles.",
  whyHeading: 'Pourquoi travailler chez Sengeti',
  why: [
    { icon: 'code', title: 'De vrais projets', text: 'Vous travaillez sur des systèmes que des clients utilisent chaque jour, pas sur des exercices. Votre travail est mis en service et vous en voyez le résultat.' },
    { icon: 'trend', title: "De quoi apprendre", text: "Dans une petite équipe, vous apprenez tout le métier, de l'échange avec les clients jusqu'à la mise en service et au support." },
    { icon: 'globe', title: 'Un impact local', text: 'Notre travail aide des écoles, des entreprises et des organisations proches de nous à mieux fonctionner et à servir plus vite.' },
    { icon: 'compass', title: 'Un travail flexible', text: "Les bons résultats comptent plus que des horaires fixes, et nous convenons d'une organisation adaptée au poste." },
  ],
  hireHeading: 'Comment nous recrutons',
  hireLead: 'Un processus simple et respectueux. Nous répondons à toutes les candidatures.',
  hireSteps: [
    { title: 'Postuler', text: 'Envoyez le formulaire ci-dessous avec un court message et un lien vers votre CV, LinkedIn ou portfolio.' },
    { title: 'Premier échange', text: 'Un appel détendu pour faire connaissance et parler du poste.' },
    { title: 'Exercice pratique', text: 'Une petite tâche réaliste ou une présentation de vos travaux passés. Pas de questions pièges.' },
    { title: 'Offre', text: "Si cela convient des deux côtés, nous faisons une offre et préparons vos premières semaines." },
  ],
  rolesHeading: 'Postes ouverts',
  noRolesTitle: "Aucun poste ouvert pour l'instant",
  noRolesText: "Mais nous sommes toujours heureux d'avoir des nouvelles de personnes talentueuses. Envoyez-nous une candidature spontanée, nous la garderons pour de futurs postes.",
  apply: 'Postuler',
  roles: [],
  formHeading: 'Envoyer votre candidature',
  formAreaLabel: "Domaine d'intérêt",
  formAreas: ['Développement logiciel', 'Design', 'Ventes', 'Stage', 'Autre'],
  formMessageLabel: 'Parlez-nous de vous et ajoutez un lien vers votre CV ou LinkedIn',
  formNote: "Merci de ne pas joindre de fichiers. Un lien vers votre CV, votre profil LinkedIn ou votre portfolio suffit.",
};

const pt: typeof en = {
  title: 'Carreiras | Sengeti Technologies',
  description:
    'Trabalhe na Sengeti Technologies em Mutare, no Zimbabué: projetos reais de software e automatização, espaço para aprender e trabalho com impacto local.',
  nav: 'Carreiras',
  eyebrow: 'Carreiras',
  heading: 'Construa coisas úteis',
  headingAccent: 'connosco.',
  lead: 'Somos uma equipa pequena e em crescimento em Mutare, que cria software e automatização para organizações no Zimbabué e na região. Se gosta de resolver problemas reais, gostaríamos de o conhecer.',
  whyHeading: 'Porquê trabalhar na Sengeti',
  why: [
    { icon: 'code', title: 'Projetos reais', text: 'Trabalha em sistemas que os clientes usam todos os dias, não em exercícios. O seu trabalho entra em produção e vê o resultado.' },
    { icon: 'trend', title: 'Espaço para aprender', text: 'Numa equipa pequena aprende todo o trabalho, desde falar com clientes até lançar e dar suporte ao software.' },
    { icon: 'globe', title: 'Impacto local', text: 'O nosso trabalho ajuda escolas, empresas e organizações perto de nós a funcionar melhor e a servir as pessoas mais depressa.' },
    { icon: 'compass', title: 'Trabalho flexível', text: 'Valorizamos bons resultados mais do que horários fixos, e combinamos a forma de trabalhar que serve a função.' },
  ],
  hireHeading: 'Como recrutamos',
  hireLead: 'Um processo simples e respeitoso. Respondemos a todas as candidaturas.',
  hireSteps: [
    { title: 'Candidatar-se', text: 'Envie o formulário abaixo com uma nota curta e uma ligação para o seu CV, LinkedIn ou portefólio.' },
    { title: 'Primeira conversa', text: 'Uma chamada descontraída para nos conhecermos e falarmos sobre a função.' },
    { title: 'Tarefa prática', text: 'Uma tarefa pequena e realista ou uma apresentação do seu trabalho anterior. Sem perguntas rasteiras.' },
    { title: 'Proposta', text: 'Se fizer sentido para ambos os lados, fazemos uma proposta e planeamos as suas primeiras semanas.' },
  ],
  rolesHeading: 'Vagas abertas',
  noRolesTitle: 'Sem vagas abertas de momento',
  noRolesText: 'Mas temos sempre gosto em conhecer pessoas talentosas. Envie-nos uma candidatura espontânea e teremo-la em conta para futuras vagas.',
  apply: 'Candidatar-me',
  roles: [],
  formHeading: 'Envie a sua candidatura',
  formAreaLabel: 'Área de interesse',
  formAreas: ['Desenvolvimento de software', 'Design', 'Vendas', 'Estágio', 'Outra'],
  formMessageLabel: 'Fale-nos de si e inclua uma ligação para o seu CV ou LinkedIn',
  formNote: 'Por favor, não anexe ficheiros. Basta uma ligação para o seu CV, perfil de LinkedIn ou portefólio.',
};

export default { en, fr, pt };
