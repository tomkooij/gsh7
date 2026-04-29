export interface ThinkerStatement {
  id: number;
  statement: string;
  thinker: string;
  explanation: string;
}

export const thinkers = [
  "Voltaire",
  "John Locke",
  "Montesquieu",
  "Jean-Jacques Rousseau",
  "Adam Smith"
];

export const thinkerStatements: ThinkerStatement[] = [
  {
    id: 1,
    statement: "De overheid mag alleen geweld gebruiken om de natuurlijke rechten van burgers te beschermen.",
    thinker: "John Locke",
    explanation: "Locke geloofde dat de overheid een contract heeft met burgers om hun leven, vrijheid en bezit te beschermen."
  },
  {
    id: 2,
    statement: "Het is gevaarlijk als één persoon zowel de wetten maakt als ze uitvoert.",
    thinker: "Montesquieu",
    explanation: "Dit is de kern van de trias politica: de scheiding der machten om machtsmisbruik te voorkomen."
  },
  {
    id: 3,
    statement: "Ik ben het absoluut niet eens met wat u zegt, maar ik zal tot de dood uw recht verdedigen om het te mogen zeggen.",
    thinker: "Voltaire",
    explanation: "Voltaire was de grootste voorvechter van vrijheid van meningsuiting en religieuze tolerantie."
  },
  {
    id: 4,
    statement: "De mens wordt vrij geboren, maar ligt overal in ketenen door de wetten van slechte regeringen.",
    thinker: "Jean-Jacques Rousseau",
    explanation: "Rousseau vond dat de samenleving de mens bedierf en dat we terug moesten naar de 'algemene wil'."
  },
  {
    id: 5,
    statement: "Laat de markt zijn eigen gang gaan; een 'onzichtbare hand' regelt dan de welvaart voor iedereen.",
    thinker: "Adam Smith",
    explanation: "Smith is de vader van het economisch liberalisme en 'laissez-faire'."
  },
  {
    id: 6,
    statement: "Als een koning het volk niet goed beschermt, heeft het volk het recht om die koning af te zetten.",
    thinker: "John Locke",
    explanation: "Locke's ideeën vormden de basis voor de Amerikaanse Revolutie."
  },
  {
    id: 7,
    statement: "Religie is vaak een bron van onverdraagzaamheid en domheid; we moeten vaker ons verstand gebruiken.",
    thinker: "Voltaire",
    explanation: "Voltaire had veel kritiek op de macht van de kerk en godsdienstige bekrompenheid."
  },
  {
    id: 8,
    statement: "Een wetgevende macht moet nooit de macht hebben om zelf de wetten uit te voeren.",
    thinker: "Montesquieu",
    explanation: "Nogmaals een verwijzing naar de noodzaak van de scheiding der machten."
  },
  {
    id: 9,
    statement: "Echte democratie betekent dat iedereen zich moet onderwerpen aan wat de meerderheid (de algemene wil) besluit.",
    thinker: "Jean-Jacques Rousseau",
    explanation: "Volkssoevereiniteit volgens Rousseau betekende dat iedereen meedoet aan het algemeen belang."
  },
  {
    id: 10,
    statement: "Hoge belastingen en importverboden remmen de economie; vrije handel is de weg naar rijkdom.",
    thinker: "Adam Smith",
    explanation: "Smith verzette zich tegen het mercantilisme en voor economische vrijheid."
  }
];
