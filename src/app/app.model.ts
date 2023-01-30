export const FOGLIO_1 = [
  {
    id: 1,
    question: 'Di che colore era il cavallo bianco di Napoleone???',
    anwswer: 'Giallo',
  },
  {
    id: 2,
    question: 'Quanti sono i pilotti di via CippaLippa?',
    anwswer: '42',
  },
  {
    id: 3,
    question: 'Come si chiama il primo ministro francese?',
    anwswer: 'Pippo',
  },
];

export const FOGLIO_2 = [
  {
    id: 1,
    question: 'Come si chiama il pesce?',
    anwswer: 'Squalo',
  },
  {
    id: 2,
    question: 'Quanti sono i i colori?',
    anwswer: '5',
  },
  {
    id: 3,
    question: 'Di chi è quella mano?',
    anwswer: 'Luigi',
  },
];

export const QUESTIONS: Map<string, any[]> = new Map([
  ['123', FOGLIO_1],
  ['bah', FOGLIO_2],
]);

export const TEAMS = [
  {
    name: 'I migliori della zona',
    teamCode: '1763'
  },
  {
    name: 'Quattro per quattro',
    teamCode: '1194'
  },
];

export const VALIDATION_CODES = new Map([
  ['123', 'nvjsakabsdmbsdpmbiorepib'],
  ['bah', '124898fwsdsudivnhwe8ovnh8o'],
]);
