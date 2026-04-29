export interface RevolutionItem {
  id: number;
  item: string;
  revolution: 'Amerikaanse Revolutie' | 'Bataafse Revolutie' | 'Franse Revolutie';
  explanation: string;
}

export const revolutions = [
  'Amerikaanse Revolutie',
  'Bataafse Revolutie',
  'Franse Revolutie'
];

export const revolutionItems: RevolutionItem[] = [
  {
    id: 1,
    item: "De bestorming van de Bastille (1789)",
    revolution: "Franse Revolutie",
    explanation: "Dit was het symbolische startsein van de revolutie in Frankrijk."
  },
  {
    id: 2,
    item: "Het pamflet 'Aan het volk van Nederland' (1781)",
    revolution: "Bataafse Revolutie",
    explanation: "Geschreven door Joan Derk van der Capellen tot den Pol, een startpunt voor de patriottenbeweging."
  },
  {
    id: 3,
    item: "De onafhankelijkheidsverklaring van 4 juli 1776",
    revolution: "Amerikaanse Revolutie",
    explanation: "Hiermee verklaarden de dertien koloniën zich onafhankelijk van Groot-Brittannië."
  },
  {
    id: 4,
    item: "De invoering van de eerste Nederlandse grondwet (1798)",
    revolution: "Bataafse Revolutie",
    explanation: "Deze grondwet maakte van Nederland een eenheidsstaat en een democratie."
  },
  {
    id: 5,
    item: "De Terreur onder leiding van Robespierre",
    revolution: "Franse Revolutie",
    explanation: "Een radicale fase waarin tienduizenden 'tegenstanders' onder de guillotine stierven."
  },
  {
    id: 6,
    item: "De dertien koloniën komen in opstand tegen het moederland",
    revolution: "Amerikaanse Revolutie",
    explanation: "De strijd tegen de Britse overheersing en belastingen."
  },
  {
    id: 7,
    item: "Stadhouder Willem V vlucht naar Engeland (1795)",
    revolution: "Bataafse Revolutie",
    explanation: "Zijn vlucht markeerde het einde van de Republiek der Zeven Verenigde Nederlanden en het begin van de Bataafse tijd."
  },
  {
    id: 8,
    item: "De Verklaring van de Rechten van de Mens en de Burger",
    revolution: "Franse Revolutie",
    explanation: "Een beroemd document uit 1789 dat de grondrechten van Franse burgers vastlegde."
  },
  {
    id: 9,
    item: "George Washington wordt de eerste president",
    revolution: "Amerikaanse Revolutie",
    explanation: "Hij leidde het leger in de onafhankelijkheidsoorlog en werd de eerste leider van de nieuwe republiek."
  },
  {
    id: 10,
    item: "De strijd tussen de Patriotten en de Prinsgezinden",
    revolution: "Bataafse Revolutie",
    explanation: "Een binnenlands conflict in Nederland over de macht van de stadhouder en de invloed van het volk."
  },
  {
    id: 11,
    item: "De executie van koning Lodewijk XVI",
    revolution: "Franse Revolutie",
    explanation: "De koning werd in 1793 onder de guillotine ter dood gebracht wegens landverraad."
  },
  {
    id: 12,
    item: "Geen belasting zonder vertegenwoordiging ('No taxation without representation')",
    revolution: "Amerikaanse Revolutie",
    explanation: "De belangrijkste slogan van de Amerikanen tegen de Britse belastingen."
  },
  {
    id: 13,
    item: "Hulp van het Franse leger om de macht over te nemen",
    revolution: "Bataafse Revolutie",
    explanation: "De patriotten konden in 1795 alleen winnen dankzij de steun van de Franse revolutionaire legers."
  },
  {
    id: 14,
    item: "De opkomst van Napoleon Bonaparte",
    revolution: "Franse Revolutie",
    explanation: "Na de chaos van de revolutie greep deze generaal de macht en kroonde zichzelf tot keizer."
  },
  {
    id: 15,
    item: "Het ontstaan van de eerste democratische rechtsstaat in de westerse wereld",
    revolution: "Amerikaanse Revolutie",
    explanation: "De VS was het eerste land dat volledig volgens verlichte principes werd ingericht."
  },
  {
    id: 16,
    item: "Nederland wordt voor het eerst een 'eenheidsstaat'",
    revolution: "Bataafse Revolutie",
    explanation: "Voor 1795 was Nederland een verzameling zelfstandige gewesten; de Bataafse Republiek maakte er één geheel van."
  },
  {
    id: 17,
    item: "De Staten-Generaal komen na 175 jaar weer bijeen (1789)",
    revolution: "Franse Revolutie",
    explanation: "Vanwege de financiële crisis riep de Franse koning de drie standen bijeen, wat de revolutie ontketende."
  },
  {
    id: 18,
    item: "Thomas Jefferson schrijft de Declaration of Independence",
    revolution: "Amerikaanse Revolutie",
    explanation: "Jefferson was de hoofdauteur van dit wereldberoemde document."
  },
  {
    id: 19,
    item: "De afschaffing van de standenmaatschappij",
    revolution: "Franse Revolutie",
    explanation: "Tijdens de revolutie werden de voorrechten van de adel en geestelijkheid volledig ingetrokken."
  },
  {
    id: 20,
    item: "De 'Nationale Vergadering' wordt uitgeroepen in een kaatsbaan",
    revolution: "Franse Revolutie",
    explanation: "Toen de derde stand uit de Staten-Generaal stapte, zwoeren ze pas uit elkaar te gaan als er een grondwet was."
  },
  {
    id: 21,
    item: "De inval van een Pruisisch leger in 1787 om de patriotten te stoppen",
    revolution: "Bataafse Revolutie",
    explanation: "De koning van Pruisen hielp de stadhouder (zijn zwager) om de eerste patriottenopstand neer te slaan."
  }
];
