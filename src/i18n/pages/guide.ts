/**
 * Text for the free guide "Automation checklist for SMEs" (/guides/automation-checklist).
 * Keep the same groups and items, in the same order, in en, fr and pt
 * (item ids are used to remember which boxes a visitor ticked).
 * In `countText`, {x} is the number ticked and {n} the total.
 */
const en = {
  title: 'Free automation checklist for SMEs | Sengeti Technologies',
  description:
    'A free, printable checklist of 20 everyday business tasks worth automating, across finance, HR, sales, operations and reporting.',
  nav: 'Automation checklist',
  eyebrow: 'Free guide',
  heading: 'The automation checklist',
  headingAccent: 'for SMEs.',
  lead: '20 everyday tasks that small and growing organisations can hand over to software, with a one-line reason for each. Tick the ones that apply to you and see where you could save time.',
  formHeading: 'Get the checklist',
  formText: 'Tell us where to find you and the checklist opens straight away. We will not share your details.',
  formButton: 'Show me the checklist',
  formSuccess: 'Thank you. Your checklist is below.',
  formError: 'We could not send your details, but here is your checklist anyway.',
  checklistHeading: 'Automation checklist for SMEs',
  checklistIntro: 'Tick every task your team still does by hand. Each one is a good candidate for automation.',
  countText: '{x} of {n} could save you time',
  printButton: 'Print or save as PDF',
  resetButton: 'Clear ticks',
  printFooter: 'Want help automating these tasks? Contact us:',
  groups: [
    {
      id: 'finance',
      title: 'Finance',
      items: [
        { title: 'Creating invoices', why: 'Invoices can be generated the moment a job or order is complete, with no retyping.' },
        { title: 'Payment reminders', why: 'Polite reminders go out on time, so overdue invoices do not depend on someone remembering.' },
        { title: 'Matching payments to invoices', why: 'Bank and EcoCash payments can be matched automatically instead of line by line.' },
        { title: 'Expense claims and approvals', why: 'Claims reach the right approver at once and nothing sits forgotten in an inbox.' },
      ],
    },
    {
      id: 'hr',
      title: 'HR and staff',
      items: [
        { title: 'Leave requests', why: 'Staff apply on their phone, managers approve in one tap and balances update themselves.' },
        { title: 'Attendance and timesheets', why: 'Hours flow straight into payroll, without copying from paper registers.' },
        { title: 'Onboarding new staff', why: 'Every new starter gets the same accounts, documents and checklist, so no step is missed.' },
        { title: 'Contract and certificate renewals', why: 'Reminders arrive before contracts, licences and certificates expire, not after.' },
      ],
    },
    {
      id: 'sales',
      title: 'Sales and customers',
      items: [
        { title: 'Capturing enquiries', why: 'Messages from your website, WhatsApp and email land in one list, so no lead is lost.' },
        { title: 'Preparing quotations', why: 'Quotes built from templates and price lists are faster and free of calculation errors.' },
        { title: 'Following up on quotes', why: 'Automatic follow-ups win work that would otherwise go quiet.' },
        { title: 'Order and payment confirmations', why: 'Customers get instant confirmation by WhatsApp, SMS or email, and call you less.' },
      ],
    },
    {
      id: 'operations',
      title: 'Operations',
      items: [
        { title: 'Stock levels and reorder alerts', why: 'You hear about low stock before you run out, not when a customer asks.' },
        { title: 'Purchase requests and approvals', why: 'Requests follow clear rules and leave a record of who approved what.' },
        { title: 'Assigning jobs and tasks', why: 'Work goes to the right person with all the details, and progress is visible to everyone.' },
        { title: 'Vehicle and equipment servicing', why: 'Service reminders based on dates or mileage prevent costly breakdowns.' },
      ],
    },
    {
      id: 'reporting',
      title: 'Reporting',
      items: [
        { title: 'Daily sales summary', why: 'A short summary lands on your phone every evening without anyone compiling it.' },
        { title: 'Month-end management reports', why: 'Reports that build themselves from live data end the month-end scramble.' },
        { title: 'Dashboards for managers', why: 'Key numbers are always up to date, instead of days old when they arrive.' },
        { title: 'Combining spreadsheets', why: 'Data from several spreadsheets and systems comes together in one reliable place.' },
      ],
    },
  ],
  ctaHeading: 'Ticked a few?',
  ctaText: 'Tell us which tasks take up your time. We will suggest where to start, and the first conversation is free.',
};

const fr: typeof en = {
  title: "Liste gratuite d'automatisation pour les PME | Sengeti Technologies",
  description:
    "Une liste gratuite et imprimable de 20 tâches courantes qui méritent d'être automatisées : finances, RH, ventes, opérations et rapports.",
  nav: "Liste d'automatisation",
  eyebrow: 'Guide gratuit',
  heading: "La liste d'automatisation",
  headingAccent: 'pour les PME.',
  lead: "20 tâches quotidiennes que les petites organisations et celles en croissance peuvent confier à un logiciel, avec une ligne d'explication pour chacune. Cochez celles qui vous concernent et voyez où vous pourriez gagner du temps.",
  formHeading: 'Recevoir la liste',
  formText: "Dites-nous qui vous êtes et la liste s'affiche aussitôt. Nous ne partageons pas vos coordonnées.",
  formButton: 'Afficher la liste',
  formSuccess: 'Merci. Votre liste se trouve ci-dessous.',
  formError: "Nous n'avons pas pu envoyer vos coordonnées, mais voici quand même votre liste.",
  checklistHeading: "Liste d'automatisation pour les PME",
  checklistIntro: 'Cochez chaque tâche que votre équipe fait encore à la main. Chacune est une bonne candidate à l’automatisation.',
  countText: '{x} sur {n} pourraient vous faire gagner du temps',
  printButton: 'Imprimer ou enregistrer en PDF',
  resetButton: 'Tout décocher',
  printFooter: 'Besoin d’aide pour automatiser ces tâches ? Contactez-nous :',
  groups: [
    {
      id: 'finance',
      title: 'Finances',
      items: [
        { title: 'Établir les factures', why: "Les factures peuvent être créées dès qu'un travail ou une commande est terminé, sans ressaisie." },
        { title: 'Relances de paiement', why: "Des relances courtoises partent à temps : les impayés ne dépendent plus de la mémoire de quelqu'un." },
        { title: 'Rapprocher paiements et factures', why: 'Les paiements bancaires et EcoCash peuvent être rapprochés automatiquement, pas ligne par ligne.' },
        { title: 'Notes de frais et validations', why: "Les demandes arrivent tout de suite chez la bonne personne et rien ne reste oublié dans une boîte mail." },
      ],
    },
    {
      id: 'hr',
      title: 'RH et personnel',
      items: [
        { title: 'Demandes de congé', why: "Le personnel fait sa demande sur téléphone, le responsable valide d'un geste et les soldes se mettent à jour." },
        { title: 'Présences et feuilles de temps', why: 'Les heures vont directement dans la paie, sans recopier de registres papier.' },
        { title: 'Accueil des nouveaux employés', why: 'Chaque nouvel arrivant reçoit les mêmes comptes, documents et étapes : rien n’est oublié.' },
        { title: 'Renouvellement des contrats et certificats', why: "Les rappels arrivent avant l'expiration des contrats, licences et certificats, pas après." },
      ],
    },
    {
      id: 'sales',
      title: 'Ventes et clients',
      items: [
        { title: 'Recueillir les demandes', why: "Les messages du site, de WhatsApp et de l'e-mail arrivent dans une seule liste : aucun prospect n'est perdu." },
        { title: 'Préparer les devis', why: 'Des devis basés sur des modèles et des listes de prix sont plus rapides et sans erreurs de calcul.' },
        { title: 'Relancer les devis', why: 'Les relances automatiques remportent des affaires qui seraient restées sans suite.' },
        { title: 'Confirmations de commande et de paiement', why: 'Les clients reçoivent une confirmation immédiate par WhatsApp, SMS ou e-mail, et appellent moins.' },
      ],
    },
    {
      id: 'operations',
      title: 'Opérations',
      items: [
        { title: 'Niveaux de stock et alertes de réapprovisionnement', why: "Vous êtes prévenu d'un stock bas avant la rupture, pas quand un client le demande." },
        { title: "Demandes d'achat et validations", why: 'Les demandes suivent des règles claires et gardent une trace de qui a validé quoi.' },
        { title: 'Attribuer les travaux et les tâches', why: 'Le travail va à la bonne personne avec tous les détails, et chacun voit où il en est.' },
        { title: 'Entretien des véhicules et équipements', why: 'Des rappels selon la date ou le kilométrage évitent des pannes coûteuses.' },
      ],
    },
    {
      id: 'reporting',
      title: 'Rapports',
      items: [
        { title: 'Résumé quotidien des ventes', why: 'Un court résumé arrive sur votre téléphone chaque soir, sans que personne ne le prépare.' },
        { title: 'Rapports de gestion de fin de mois', why: 'Des rapports qui se construisent à partir des données en direct mettent fin à la course de fin de mois.' },
        { title: 'Tableaux de bord pour les responsables', why: "Les chiffres clés sont toujours à jour, au lieu d'avoir plusieurs jours de retard." },
        { title: 'Regrouper les tableurs', why: 'Les données de plusieurs tableurs et systèmes sont réunies en un seul endroit fiable.' },
      ],
    },
  ],
  ctaHeading: 'Vous avez coché quelques cases ?',
  ctaText: 'Dites-nous quelles tâches vous prennent du temps. Nous vous suggérerons par où commencer, et le premier échange est gratuit.',
};

const pt: typeof en = {
  title: 'Lista gratuita de automatização para PME | Sengeti Technologies',
  description:
    'Uma lista gratuita e imprimível de 20 tarefas do dia a dia que vale a pena automatizar: finanças, RH, vendas, operações e relatórios.',
  nav: 'Lista de automatização',
  eyebrow: 'Guia gratuito',
  heading: 'A lista de automatização',
  headingAccent: 'para PME.',
  lead: '20 tarefas do dia a dia que organizações pequenas e em crescimento podem passar para o software, com uma linha a explicar cada uma. Assinale as que se aplicam a si e veja onde pode poupar tempo.',
  formHeading: 'Receber a lista',
  formText: 'Diga-nos quem é e a lista abre de imediato. Não partilhamos os seus dados.',
  formButton: 'Mostrar a lista',
  formSuccess: 'Obrigado. A sua lista está abaixo.',
  formError: 'Não conseguimos enviar os seus dados, mas aqui está a sua lista na mesma.',
  checklistHeading: 'Lista de automatização para PME',
  checklistIntro: 'Assinale cada tarefa que a sua equipa ainda faz à mão. Cada uma é uma boa candidata a automatização.',
  countText: '{x} de {n} podem poupar-lhe tempo',
  printButton: 'Imprimir ou guardar em PDF',
  resetButton: 'Limpar seleção',
  printFooter: 'Quer ajuda para automatizar estas tarefas? Contacte-nos:',
  groups: [
    {
      id: 'finance',
      title: 'Finanças',
      items: [
        { title: 'Emitir faturas', why: 'As faturas podem ser criadas assim que um trabalho ou encomenda termina, sem voltar a digitar.' },
        { title: 'Lembretes de pagamento', why: 'Lembretes cordiais saem a tempo, e as faturas em atraso deixam de depender da memória de alguém.' },
        { title: 'Conciliar pagamentos e faturas', why: 'Os pagamentos bancários e por EcoCash podem ser conciliados automaticamente, e não linha a linha.' },
        { title: 'Despesas e aprovações', why: 'Os pedidos chegam logo a quem aprova e nada fica esquecido numa caixa de correio.' },
      ],
    },
    {
      id: 'hr',
      title: 'RH e pessoal',
      items: [
        { title: 'Pedidos de férias', why: 'Os funcionários pedem no telemóvel, o gestor aprova com um toque e os saldos atualizam-se sozinhos.' },
        { title: 'Assiduidade e folhas de horas', why: 'As horas passam diretamente para o processamento salarial, sem copiar registos em papel.' },
        { title: 'Integração de novos funcionários', why: 'Cada novo funcionário recebe as mesmas contas, documentos e passos, sem nada esquecido.' },
        { title: 'Renovação de contratos e certificados', why: 'Os lembretes chegam antes de contratos, licenças e certificados expirarem, e não depois.' },
      ],
    },
    {
      id: 'sales',
      title: 'Vendas e clientes',
      items: [
        { title: 'Registar pedidos de contacto', why: 'As mensagens do site, do WhatsApp e do e-mail chegam a uma só lista, e nenhum contacto se perde.' },
        { title: 'Preparar orçamentos', why: 'Orçamentos feitos a partir de modelos e tabelas de preços são mais rápidos e sem erros de cálculo.' },
        { title: 'Dar seguimento a orçamentos', why: 'Seguimentos automáticos ganham negócios que de outra forma ficariam esquecidos.' },
        { title: 'Confirmações de encomenda e pagamento', why: 'Os clientes recebem confirmação imediata por WhatsApp, SMS ou e-mail, e telefonam menos.' },
      ],
    },
    {
      id: 'operations',
      title: 'Operações',
      items: [
        { title: 'Níveis de stock e alertas de reposição', why: 'Sabe que o stock está baixo antes de esgotar, e não quando um cliente pede.' },
        { title: 'Pedidos de compra e aprovações', why: 'Os pedidos seguem regras claras e fica registado quem aprovou o quê.' },
        { title: 'Atribuir trabalhos e tarefas', why: 'O trabalho chega à pessoa certa com todos os detalhes, e todos veem o progresso.' },
        { title: 'Manutenção de viaturas e equipamentos', why: 'Lembretes por data ou quilometragem evitam avarias caras.' },
      ],
    },
    {
      id: 'reporting',
      title: 'Relatórios',
      items: [
        { title: 'Resumo diário de vendas', why: 'Um resumo curto chega ao seu telemóvel todas as noites, sem ninguém o preparar.' },
        { title: 'Relatórios de gestão de fim de mês', why: 'Relatórios que se fazem sozinhos a partir de dados em tempo real acabam com a correria do fim do mês.' },
        { title: 'Painéis para gestores', why: 'Os números principais estão sempre atualizados, em vez de chegarem com dias de atraso.' },
        { title: 'Juntar folhas de cálculo', why: 'Os dados de várias folhas de cálculo e sistemas ficam reunidos num só lugar fiável.' },
      ],
    },
  ],
  ctaHeading: 'Assinalou algumas?',
  ctaText: 'Diga-nos que tarefas lhe tomam tempo. Sugerimos por onde começar, e a primeira conversa é gratuita.',
};

export default { en, fr, pt };
