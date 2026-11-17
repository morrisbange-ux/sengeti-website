/**
 * Text for the "ten countries, seven languages" section (home page and SengetiEdu page).
 * Country names come from the browser's own list (Intl.DisplayNames), so they follow the page language.
 */

interface WorldText {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  lead: string;
  label: string;
  hq: string;
  countriesLabel: string;
  languagesLabel: string;
  languagesNote: string;
  adapts: { title: string; text: string }[];
}

/** The ten countries SengetiEdu is set up for, head office first. */
export const worldCountries = ['ZW', 'MZ', 'CD', 'CM', 'KE', 'NA', 'BW', 'AE', 'PL', 'LK'] as const;

/** The seven app languages, each written in its own language. */
export const worldLanguages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'pt', name: 'Português' },
  { code: 'pl', name: 'Polski' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'si', name: 'සිංහල' },
  { code: 'ta', name: 'தமிழ்' },
] as const;

export const world: Record<'en' | 'fr' | 'pt', WorldText> = {
  en: {
    eyebrow: 'Worldwide',
    heading: 'Ten countries. Seven languages.',
    headingAccent: 'One platform.',
    lead: 'SengetiEdu is set up for schools from Harare to Warsaw to Colombo. Each school picks its country, and each person picks their own language.',
    label: 'Map of the world with the ten countries SengetiEdu is set up for highlighted',
    hq: 'Head office',
    countriesLabel: 'Set up for',
    languagesLabel: 'Speaks',
    languagesNote: 'Every screen, in every product, including Arabic from right to left.',
    adapts: [
      { title: 'Terms and classes', text: 'The school year, terms and class names of your country.' },
      { title: 'Currencies', text: 'Fees and receipts in your currency, with the payment methods families use there.' },
      { title: 'Exam boards', text: 'ZIMSEC, Cambridge and national boards, with entries and returns built in.' },
      { title: 'University grading', text: 'Degree classes, GPA, marks out of 20, the Polish 2 to 5 scale and more.' },
    ],
  },
  fr: {
    eyebrow: 'Dans le monde',
    heading: 'Dix pays. Sept langues.',
    headingAccent: 'Une plateforme.',
    lead: 'SengetiEdu est configuré pour les écoles de Harare à Varsovie et Colombo. Chaque école choisit son pays, et chaque personne choisit sa langue.',
    label: 'Carte du monde où sont mis en évidence les dix pays pour lesquels SengetiEdu est configuré',
    hq: 'Siège',
    countriesLabel: 'Configuré pour',
    languagesLabel: 'Parle',
    languagesNote: 'Chaque écran, dans chaque produit, y compris l’arabe de droite à gauche.',
    adapts: [
      { title: 'Trimestres et classes', text: 'L’année scolaire, les trimestres et les noms de classes de votre pays.' },
      { title: 'Devises', text: 'Frais et reçus dans votre devise, avec les moyens de paiement utilisés par les familles.' },
      { title: 'Examens nationaux', text: 'ZIMSEC, Cambridge et les jurys nationaux, avec inscriptions et rapports intégrés.' },
      { title: 'Notation universitaire', text: 'Mentions, GPA, notes sur 20, l’échelle polonaise de 2 à 5 et plus encore.' },
    ],
  },
  pt: {
    eyebrow: 'Em todo o mundo',
    heading: 'Dez países. Sete línguas.',
    headingAccent: 'Uma plataforma.',
    lead: 'O SengetiEdu está preparado para escolas de Harare a Varsóvia e Colombo. Cada escola escolhe o seu país, e cada pessoa escolhe a sua língua.',
    label: 'Mapa do mundo com os dez países para os quais o SengetiEdu está preparado em destaque',
    hq: 'Sede',
    countriesLabel: 'Preparado para',
    languagesLabel: 'Fala',
    languagesNote: 'Todos os ecrãs, em todos os produtos, incluindo o árabe da direita para a esquerda.',
    adapts: [
      { title: 'Períodos e turmas', text: 'O ano letivo, os períodos e os nomes das turmas do seu país.' },
      { title: 'Moedas', text: 'Propinas e recibos na sua moeda, com os meios de pagamento que as famílias usam.' },
      { title: 'Exames nacionais', text: 'ZIMSEC, Cambridge e os exames nacionais, com inscrições e relatórios incluídos.' },
      { title: 'Classificação universitária', text: 'Classes de curso, GPA, notas de 0 a 20, a escala polaca de 2 a 5 e mais.' },
    ],
  },
};
