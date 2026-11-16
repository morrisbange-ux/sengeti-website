/** Short labels for the home page: the announcement badge, the points under the hero buttons and the section kickers. */

interface HomeExtras {
  badgeTag: string;
  badge: string;
  trust: string[];
  kickers: { solutions: string; problems: string; services: string; process: string; product: string; work: string; why: string };
  flowLabel: string;
  hubLabel: string;
}

export const homeExtras: Record<'en' | 'fr' | 'pt', HomeExtras> = {
  en: {
    badgeTag: 'New',
    badge: 'SengetiEdu is here: book a free school demo',
    trust: ['First conversation free', 'Built for phones and slow connections', 'English, French and Portuguese'],
    kickers: {
      solutions: 'Solutions',
      problems: 'The problem',
      services: 'Services',
      process: 'How it works',
      product: 'For schools',
      work: 'Results',
      why: 'Why us',
    },
    flowLabel: 'An approval that runs itself',
    hubLabel: 'Your tools, connected',
  },
  fr: {
    badgeTag: 'Nouveau',
    badge: 'SengetiEdu est là : réservez une démo gratuite',
    trust: ['Premier échange gratuit', 'Pensé pour le mobile et les connexions lentes', 'Anglais, français et portugais'],
    kickers: {
      solutions: 'Solutions',
      problems: 'Le problème',
      services: 'Services',
      process: 'Comment ça marche',
      product: 'Pour les écoles',
      work: 'Résultats',
      why: 'Pourquoi nous',
    },
    flowLabel: 'Une validation qui se fait toute seule',
    hubLabel: 'Vos outils, connectés',
  },
  pt: {
    badgeTag: 'Novo',
    badge: 'O SengetiEdu chegou: marque uma demo gratuita',
    trust: ['Primeira conversa grátis', 'Feito para telemóveis e ligações lentas', 'Inglês, francês e português'],
    kickers: {
      solutions: 'Soluções',
      problems: 'O problema',
      services: 'Serviços',
      process: 'Como funciona',
      product: 'Para escolas',
      work: 'Resultados',
      why: 'Porquê nós',
    },
    flowLabel: 'Uma aprovação que avança sozinha',
    hubLabel: 'As suas ferramentas, ligadas',
  },
};
