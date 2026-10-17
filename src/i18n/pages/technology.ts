/**
 * Text for the Technology page (/technology).
 *
 * OWNER PLEASE CONFIRM: the technology lists in `groups` are a sensible
 * starting point, not a confirmed inventory. Remove anything Sengeti does not
 * actually use and add what is missing, in all three languages, before launch.
 * Product names stay the same in every language; only the descriptions change.
 */
const en = {
  title: 'Technology | Sengeti Technologies',
  description:
    'The proven technologies and platforms Sengeti Technologies uses for web and mobile software, cloud hosting, reporting, integrations and AI.',
  nav: 'Technology',
  eyebrow: 'Technology',
  heading: 'Proven tools,',
  headingAccent: 'chosen with care.',
  lead: 'We build with mainstream, well-supported technology, so your systems are fast, secure and easy to look after for years to come.',
  ribbonLabel: 'Some of the technology we work with',
  groupsHeading: 'What we work with',
  groupsLead: 'We pick the right tool for each job from a small, trusted set.',
  groups: [
    {
      icon: 'code',
      title: 'Web',
      text: 'Fast websites, portals and web systems.',
      items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Astro', 'Node.js', 'PHP', 'Laravel', 'Python', 'Tailwind CSS'],
    },
    {
      icon: 'phone',
      title: 'Mobile',
      text: 'Apps for the phones people really use.',
      items: ['Android', 'Kotlin', 'Flutter', 'React Native', 'Progressive web apps', 'Offline sync'],
    },
    {
      icon: 'cloud',
      title: 'Cloud and hosting',
      text: 'Reliable hosting, backups and monitoring.',
      items: ['Amazon Web Services', 'Google Cloud', 'Microsoft Azure', 'DigitalOcean', 'Cloudflare', 'Linux', 'Docker', 'Automated backups'],
    },
    {
      icon: 'chart',
      title: 'Data and reporting',
      text: 'Databases, dashboards and reports that build themselves.',
      items: ['PostgreSQL', 'MySQL', 'SQLite', 'Power BI', 'Looker Studio', 'Excel reports', 'Scheduled email reports'],
    },
    {
      icon: 'plug',
      title: 'Integrations',
      text: 'Connecting the tools you already use.',
      items: ['WhatsApp Business', 'EcoCash', 'SMS gateways', 'Email', 'Excel', 'Google Sheets', 'Accounting software', 'Card payments', 'REST APIs and webhooks'],
    },
    {
      icon: 'bolt',
      title: 'AI',
      text: 'Practical AI connected to your systems.',
      items: ['OpenAI', 'Claude', 'Google Gemini', 'Open-source models', 'Document reading (OCR)', 'WhatsApp chatbots', 'Search over your documents'],
    },
  ],
  whyHeading: 'Why we choose proven tools',
  why: [
    { icon: 'signal', title: 'Fast on slow connections', text: 'Light, efficient technology keeps pages and apps quick on slow or expensive data.' },
    { icon: 'shield', title: 'Secure', text: 'Widely used tools get security fixes quickly, and we keep them up to date.' },
    { icon: 'check', title: 'Easy to maintain', text: 'Mainstream technology means any good developer can work on your system, not only us.' },
  ],
  ctaHeading: 'Have a system in mind?',
  ctaText: 'Tell us what you need and we will suggest the simplest technology that does the job well.',
};

const fr: typeof en = {
  title: 'Technologie | Sengeti Technologies',
  description:
    "Les technologies et plateformes éprouvées qu'utilise Sengeti Technologies pour les logiciels web et mobiles, l'hébergement cloud, les rapports, les intégrations et l'IA.",
  nav: 'Technologie',
  eyebrow: 'Technologie',
  heading: 'Des outils éprouvés,',
  headingAccent: 'choisis avec soin.',
  lead: "Nous construisons avec des technologies courantes et bien soutenues, pour que vos systèmes soient rapides, sûrs et faciles à entretenir pendant des années.",
  ribbonLabel: 'Quelques technologies que nous utilisons',
  groupsHeading: 'Avec quoi nous travaillons',
  groupsLead: "Nous choisissons le bon outil pour chaque tâche parmi un petit ensemble de confiance.",
  groups: [
    {
      icon: 'code',
      title: 'Web',
      text: 'Sites, portails et systèmes web rapides.',
      items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Astro', 'Node.js', 'PHP', 'Laravel', 'Python', 'Tailwind CSS'],
    },
    {
      icon: 'phone',
      title: 'Mobile',
      text: 'Des applications pour les téléphones que les gens utilisent vraiment.',
      items: ['Android', 'Kotlin', 'Flutter', 'React Native', 'Applications web progressives', 'Synchronisation hors ligne'],
    },
    {
      icon: 'cloud',
      title: 'Cloud et hébergement',
      text: 'Hébergement fiable, sauvegardes et surveillance.',
      items: ['Amazon Web Services', 'Google Cloud', 'Microsoft Azure', 'DigitalOcean', 'Cloudflare', 'Linux', 'Docker', 'Sauvegardes automatiques'],
    },
    {
      icon: 'chart',
      title: 'Données et rapports',
      text: 'Bases de données, tableaux de bord et rapports automatiques.',
      items: ['PostgreSQL', 'MySQL', 'SQLite', 'Power BI', 'Looker Studio', 'Rapports Excel', 'Rapports envoyés par e-mail'],
    },
    {
      icon: 'plug',
      title: 'Intégrations',
      text: 'Relier les outils que vous utilisez déjà.',
      items: ['WhatsApp Business', 'EcoCash', 'Passerelles SMS', 'E-mail', 'Excel', 'Google Sheets', 'Logiciels de comptabilité', 'Paiements par carte', 'API REST et webhooks'],
    },
    {
      icon: 'bolt',
      title: 'IA',
      text: 'Une IA pratique, reliée à vos systèmes.',
      items: ['OpenAI', 'Claude', 'Google Gemini', 'Modèles open source', 'Lecture de documents (OCR)', 'Chatbots WhatsApp', 'Recherche dans vos documents'],
    },
  ],
  whyHeading: 'Pourquoi nous choisissons des outils éprouvés',
  why: [
    { icon: 'signal', title: 'Rapides sur des connexions lentes', text: 'Des technologies légères gardent pages et applications rapides avec des données lentes ou coûteuses.' },
    { icon: 'shield', title: 'Sûrs', text: 'Les outils très utilisés reçoivent vite les correctifs de sécurité, et nous les tenons à jour.' },
    { icon: 'check', title: 'Faciles à entretenir', text: "Avec des technologies courantes, tout bon développeur peut travailler sur votre système, pas seulement nous." },
  ],
  ctaHeading: 'Vous avez un système en tête ?',
  ctaText: 'Dites-nous ce dont vous avez besoin et nous proposerons la technologie la plus simple qui fait bien le travail.',
};

const pt: typeof en = {
  title: 'Tecnologia | Sengeti Technologies',
  description:
    'As tecnologias e plataformas comprovadas que a Sengeti Technologies usa em software web e móvel, alojamento cloud, relatórios, integrações e IA.',
  nav: 'Tecnologia',
  eyebrow: 'Tecnologia',
  heading: 'Ferramentas comprovadas,',
  headingAccent: 'escolhidas com cuidado.',
  lead: 'Construímos com tecnologia corrente e bem suportada, para que os seus sistemas sejam rápidos, seguros e fáceis de manter durante muitos anos.',
  ribbonLabel: 'Algumas das tecnologias com que trabalhamos',
  groupsHeading: 'Com que trabalhamos',
  groupsLead: 'Escolhemos a ferramenta certa para cada trabalho a partir de um conjunto pequeno e de confiança.',
  groups: [
    {
      icon: 'code',
      title: 'Web',
      text: 'Sites, portais e sistemas web rápidos.',
      items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Astro', 'Node.js', 'PHP', 'Laravel', 'Python', 'Tailwind CSS'],
    },
    {
      icon: 'phone',
      title: 'Móvel',
      text: 'Aplicações para os telemóveis que as pessoas realmente usam.',
      items: ['Android', 'Kotlin', 'Flutter', 'React Native', 'Aplicações web progressivas', 'Sincronização offline'],
    },
    {
      icon: 'cloud',
      title: 'Cloud e alojamento',
      text: 'Alojamento fiável, cópias de segurança e monitorização.',
      items: ['Amazon Web Services', 'Google Cloud', 'Microsoft Azure', 'DigitalOcean', 'Cloudflare', 'Linux', 'Docker', 'Cópias de segurança automáticas'],
    },
    {
      icon: 'chart',
      title: 'Dados e relatórios',
      text: 'Bases de dados, painéis e relatórios que se fazem sozinhos.',
      items: ['PostgreSQL', 'MySQL', 'SQLite', 'Power BI', 'Looker Studio', 'Relatórios em Excel', 'Relatórios agendados por e-mail'],
    },
    {
      icon: 'plug',
      title: 'Integrações',
      text: 'Ligamos as ferramentas que já utiliza.',
      items: ['WhatsApp Business', 'EcoCash', 'Gateways de SMS', 'E-mail', 'Excel', 'Google Sheets', 'Software de contabilidade', 'Pagamentos com cartão', 'APIs REST e webhooks'],
    },
    {
      icon: 'bolt',
      title: 'IA',
      text: 'IA prática ligada aos seus sistemas.',
      items: ['OpenAI', 'Claude', 'Google Gemini', 'Modelos de código aberto', 'Leitura de documentos (OCR)', 'Chatbots de WhatsApp', 'Pesquisa nos seus documentos'],
    },
  ],
  whyHeading: 'Porque escolhemos ferramentas comprovadas',
  why: [
    { icon: 'signal', title: 'Rápidas em ligações lentas', text: 'Tecnologia leve mantém páginas e aplicações rápidas com dados lentos ou caros.' },
    { icon: 'shield', title: 'Seguras', text: 'As ferramentas mais usadas recebem correções de segurança depressa, e mantemo-las atualizadas.' },
    { icon: 'check', title: 'Fáceis de manter', text: 'Com tecnologia corrente, qualquer bom programador pode trabalhar no seu sistema, não apenas nós.' },
  ],
  ctaHeading: 'Tem um sistema em mente?',
  ctaText: 'Diga-nos do que precisa e sugerimos a tecnologia mais simples que faz bem o trabalho.',
};

export default { en, fr, pt };
