/**
 * Text for the Security and data protection page (/security).
 *
 * Only describe practices Sengeti actually follows. Do not add certifications
 * (ISO 27001, SOC 2 and so on) unless the company really holds them.
 */
const en = {
  title: 'Security and data protection | Sengeti Technologies',
  description:
    'How Sengeti Technologies keeps client data safe: encryption, two-step sign-in, role-based access, audit trails, backups and clear data ownership.',
  nav: 'Security',
  eyebrow: 'Security and data protection',
  heading: 'Your data is safe',
  headingAccent: 'with us.',
  lead: 'The systems we build often hold money, staff records and customer details. These are the practices we follow on every project to keep that information private, protected and in your hands.',
  practicesHeading: 'How we protect your data',
  practicesLead: 'Built into every system we deliver, not added at the end.',
  practices: [
    { icon: 'lock', title: 'Encrypted in transit and at rest', text: 'Data travels over encrypted connections (HTTPS) and is stored encrypted, so it cannot be read if intercepted.' },
    { icon: 'shield', title: 'Two-step sign-in', text: 'Accounts can be protected with a second step at sign-in, so a stolen password alone is not enough.' },
    { icon: 'users', title: 'Role-based access', text: 'Everyone sees only what their role needs. Managers, clerks and customers each get the right view.' },
    { icon: 'doc', title: 'A record of every change', text: 'An audit trail shows who changed what and when, which helps catch mistakes and deters misuse.' },
    { icon: 'cloud', title: 'Regular backups', text: 'Your data is backed up regularly, so it can be restored if something goes wrong.' },
    { icon: 'bolt', title: 'Kept up to date', text: 'We apply security updates and maintain the systems we build, instead of leaving them to age.' },
  ],
  controlHeading: 'Your data, your control',
  controlLead: 'We look after your information, but it never stops being yours.',
  control: [
    { title: 'You own your data', text: 'Your data and the software we build for you belong to your organisation. If you leave, we return or delete your data.' },
    { title: 'Never used to train public AI', text: 'Data used in our AI solutions stays private and access-controlled, and is never used to train public AI models.' },
    { title: 'Least-privilege access for our staff', text: 'Our team only accesses your systems when the work needs it, and only to the extent it needs.' },
    { title: 'We tell you promptly', text: 'If a security problem affects your data, we act quickly to contain it and tell you promptly what happened and what we are doing.' },
  ],
  lawHeading: 'Privacy and the law',
  lawText:
    "We handle personal information in line with Zimbabwe's Cyber and Data Protection Act and the data protection laws of the countries we serve. We do not sell personal information, and we sign confidentiality agreements on request.",
  privacyLink: 'Read our Privacy Policy',
  faqHeading: 'Security questions',
  faqs: [
    { q: 'Who owns the data in the systems you build?', a: 'You do. Your data and the software we build for you belong to your organisation. When a contract ends, we return or delete your data as you prefer.' },
    { q: 'Where is our data stored?', a: 'On secure cloud servers, which may be located outside Zimbabwe. Wherever it is stored, it is encrypted, backed up and protected to the same standard.' },
    { q: 'Can our staff see each other’s information?', a: 'Only if you want them to. We set up roles so each person sees only what they need, and every change is recorded.' },
    { q: 'Do you use our data to train AI?', a: 'No. Data used in our AI solutions is kept private and access-controlled, and is never used to train public AI models.' },
    { q: 'Will you sign a confidentiality agreement?', a: 'Yes. We are happy to sign a confidentiality or non-disclosure agreement before you share sensitive information with us.' },
    { q: 'What happens if there is a security problem?', a: 'We act quickly to contain it, restore from backups if needed, and tell you promptly what happened and what we are doing about it.' },
  ],
  ctaHeading: 'Ask us about security',
  ctaText: 'Have a question about how we would protect your data? We are happy to talk it through before you decide anything.',
  ctaButton: 'Ask us about security',
};

const fr: typeof en = {
  title: 'Sécurité et protection des données | Sengeti Technologies',
  description:
    'Comment Sengeti Technologies protège les données de ses clients : chiffrement, connexion en deux étapes, accès par rôle, historique des modifications, sauvegardes et propriété claire des données.',
  nav: 'Sécurité',
  eyebrow: 'Sécurité et protection des données',
  heading: 'Vos données sont',
  headingAccent: 'entre de bonnes mains.',
  lead: "Les systèmes que nous construisons contiennent souvent de l'argent, des dossiers du personnel et des informations clients. Voici les pratiques que nous suivons sur chaque projet pour que ces informations restent privées, protégées et entre vos mains.",
  practicesHeading: 'Comment nous protégeons vos données',
  practicesLead: 'Intégré à chaque système que nous livrons, pas ajouté à la fin.',
  practices: [
    { icon: 'lock', title: 'Chiffrées en transit et au repos', text: 'Les données circulent par des connexions chiffrées (HTTPS) et sont stockées chiffrées : elles restent illisibles si elles sont interceptées.' },
    { icon: 'shield', title: 'Connexion en deux étapes', text: "Les comptes peuvent être protégés par une seconde étape à la connexion : un mot de passe volé ne suffit pas." },
    { icon: 'users', title: 'Accès selon le rôle', text: 'Chacun ne voit que ce dont son rôle a besoin. Responsables, employés et clients ont chacun la bonne vue.' },
    { icon: 'doc', title: 'Chaque modification enregistrée', text: "Un historique indique qui a modifié quoi et quand, ce qui aide à repérer les erreurs et décourage les abus." },
    { icon: 'cloud', title: 'Sauvegardes régulières', text: 'Vos données sont sauvegardées régulièrement et peuvent être restaurées en cas de problème.' },
    { icon: 'bolt', title: 'Toujours à jour', text: 'Nous appliquons les mises à jour de sécurité et entretenons les systèmes que nous construisons, au lieu de les laisser vieillir.' },
  ],
  controlHeading: 'Vos données, sous votre contrôle',
  controlLead: 'Nous prenons soin de vos informations, mais elles restent toujours les vôtres.',
  control: [
    { title: 'Vous êtes propriétaire de vos données', text: 'Vos données et le logiciel que nous construisons pour vous appartiennent à votre organisation. Si vous partez, nous vous rendons ou supprimons vos données.' },
    { title: "Jamais utilisées pour entraîner une IA publique", text: "Les données utilisées dans nos solutions d'IA restent privées, à accès contrôlé, et ne servent jamais à entraîner des modèles d'IA publics." },
    { title: 'Accès minimal pour notre équipe', text: "Notre équipe n'accède à vos systèmes que lorsque le travail l'exige, et seulement dans la mesure nécessaire." },
    { title: 'Nous vous prévenons rapidement', text: 'Si un problème de sécurité touche vos données, nous agissons vite pour le contenir et vous expliquons rapidement ce qui s’est passé et ce que nous faisons.' },
  ],
  lawHeading: 'Vie privée et loi',
  lawText:
    "Nous traitons les informations personnelles conformément à la loi zimbabwéenne sur la cybersécurité et la protection des données (Cyber and Data Protection Act) et aux lois sur la protection des données des pays que nous servons. Nous ne vendons pas d'informations personnelles et nous signons des accords de confidentialité sur demande.",
  privacyLink: 'Lire notre politique de confidentialité',
  faqHeading: 'Questions sur la sécurité',
  faqs: [
    { q: 'À qui appartiennent les données des systèmes que vous construisez ?', a: "À vous. Vos données et le logiciel que nous construisons pour vous appartiennent à votre organisation. À la fin d'un contrat, nous vous rendons ou supprimons vos données, comme vous le souhaitez." },
    { q: 'Où nos données sont-elles stockées ?', a: "Sur des serveurs cloud sécurisés, qui peuvent se trouver hors du Zimbabwe. Où qu'elles soient, elles sont chiffrées, sauvegardées et protégées avec le même niveau d'exigence." },
    { q: 'Nos employés peuvent-ils voir les informations des uns et des autres ?', a: 'Seulement si vous le souhaitez. Nous configurons des rôles pour que chacun ne voie que ce dont il a besoin, et chaque modification est enregistrée.' },
    { q: "Utilisez-vous nos données pour entraîner une IA ?", a: "Non. Les données utilisées dans nos solutions d'IA restent privées, à accès contrôlé, et ne servent jamais à entraîner des modèles d'IA publics." },
    { q: 'Signez-vous un accord de confidentialité ?', a: 'Oui. Nous signons volontiers un accord de confidentialité avant que vous ne partagiez des informations sensibles avec nous.' },
    { q: 'Que se passe-t-il en cas de problème de sécurité ?', a: 'Nous agissons vite pour le contenir, restaurons les sauvegardes si nécessaire et vous expliquons rapidement ce qui s’est passé et ce que nous faisons.' },
  ],
  ctaHeading: 'Parlons sécurité',
  ctaText: 'Une question sur la façon dont nous protégerions vos données ? Parlons-en avant que vous ne décidiez quoi que ce soit.',
  ctaButton: 'Nous poser une question',
};

const pt: typeof en = {
  title: 'Segurança e proteção de dados | Sengeti Technologies',
  description:
    'Como a Sengeti Technologies protege os dados dos clientes: encriptação, início de sessão em dois passos, acesso por perfil, registo de alterações, cópias de segurança e propriedade clara dos dados.',
  nav: 'Segurança',
  eyebrow: 'Segurança e proteção de dados',
  heading: 'Os seus dados estão',
  headingAccent: 'seguros connosco.',
  lead: 'Os sistemas que construímos guardam muitas vezes dinheiro, registos de pessoal e dados de clientes. Estas são as práticas que seguimos em cada projeto para manter essa informação privada, protegida e nas suas mãos.',
  practicesHeading: 'Como protegemos os seus dados',
  practicesLead: 'Incorporado em cada sistema que entregamos, não acrescentado no fim.',
  practices: [
    { icon: 'lock', title: 'Encriptados em trânsito e em repouso', text: 'Os dados circulam por ligações encriptadas (HTTPS) e são guardados encriptados, por isso não podem ser lidos se forem intercetados.' },
    { icon: 'shield', title: 'Início de sessão em dois passos', text: 'As contas podem ser protegidas com um segundo passo no início de sessão, para que uma palavra-passe roubada não chegue.' },
    { icon: 'users', title: 'Acesso por perfil', text: 'Cada pessoa vê apenas o que a sua função precisa. Gestores, funcionários e clientes têm cada um a vista certa.' },
    { icon: 'doc', title: 'Registo de cada alteração', text: 'Um histórico mostra quem alterou o quê e quando, o que ajuda a detetar erros e desencoraja abusos.' },
    { icon: 'cloud', title: 'Cópias de segurança regulares', text: 'Os seus dados são copiados regularmente e podem ser restaurados se algo correr mal.' },
    { icon: 'bolt', title: 'Sempre atualizados', text: 'Aplicamos atualizações de segurança e mantemos os sistemas que construímos, em vez de os deixar envelhecer.' },
  ],
  controlHeading: 'Os seus dados, o seu controlo',
  controlLead: 'Cuidamos da sua informação, mas ela nunca deixa de ser sua.',
  control: [
    { title: 'Os dados são seus', text: 'Os seus dados e o software que construímos para si pertencem à sua organização. Se sair, devolvemos ou apagamos os seus dados.' },
    { title: 'Nunca usados para treinar IA pública', text: 'Os dados usados nas nossas soluções de IA são privados, com acesso controlado, e nunca são usados para treinar modelos de IA públicos.' },
    { title: 'Acesso mínimo para a nossa equipa', text: 'A nossa equipa só acede aos seus sistemas quando o trabalho o exige, e apenas na medida necessária.' },
    { title: 'Informamos sem demora', text: 'Se um problema de segurança afetar os seus dados, agimos depressa para o conter e informamo-lo sem demora sobre o que aconteceu e o que estamos a fazer.' },
  ],
  lawHeading: 'Privacidade e lei',
  lawText:
    'Tratamos informação pessoal de acordo com a Lei de Cibersegurança e Proteção de Dados do Zimbabué (Cyber and Data Protection Act) e com as leis de proteção de dados dos países que servimos. Não vendemos informação pessoal e assinamos acordos de confidencialidade a pedido.',
  privacyLink: 'Ler a nossa Política de Privacidade',
  faqHeading: 'Perguntas sobre segurança',
  faqs: [
    { q: 'A quem pertencem os dados dos sistemas que constroem?', a: 'A si. Os seus dados e o software que construímos para si pertencem à sua organização. Quando um contrato termina, devolvemos ou apagamos os seus dados, como preferir.' },
    { q: 'Onde ficam guardados os nossos dados?', a: 'Em servidores cloud seguros, que podem estar localizados fora do Zimbabué. Onde quer que estejam, são encriptados, copiados e protegidos com o mesmo rigor.' },
    { q: 'Os nossos funcionários podem ver a informação uns dos outros?', a: 'Só se quiser. Configuramos perfis para que cada pessoa veja apenas o que precisa, e cada alteração fica registada.' },
    { q: 'Usam os nossos dados para treinar IA?', a: 'Não. Os dados usados nas nossas soluções de IA são privados, com acesso controlado, e nunca são usados para treinar modelos de IA públicos.' },
    { q: 'Assinam um acordo de confidencialidade?', a: 'Sim. Assinamos de bom grado um acordo de confidencialidade antes de partilhar connosco informação sensível.' },
    { q: 'O que acontece se houver um problema de segurança?', a: 'Agimos depressa para o conter, restauramos as cópias de segurança se for preciso e informamo-lo sem demora sobre o que aconteceu e o que estamos a fazer.' },
  ],
  ctaHeading: 'Fale connosco sobre segurança',
  ctaText: 'Tem uma pergunta sobre como protegeríamos os seus dados? Teremos todo o gosto em conversar antes de decidir.',
  ctaButton: 'Perguntar sobre segurança',
};

export default { en, fr, pt };
