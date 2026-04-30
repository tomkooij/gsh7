export interface SlaveryItem {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const slaveryQuizItems: SlaveryItem[] = [
  {
    id: 1,
    question: "Welke Spaanse priester zette zich in 1514 in voor de inheemse bevolking van Amerika, wat onbedoeld leidde tot de import van Afrikaanse slaven?",
    options: ["Christopher Columbus", "Bartolomé de las Casas", "Koning Karel V", "Hernán Cortés"],
    answer: "Bartolomé de las Casas",
    explanation: "De las Casas was geschokt door de massale sterfte van inheemse mensen en bereikte dat Karel V hun slavernij verbood, wat leidde tot de invoer van Afrikanen."
  },
  {
    id: 2,
    question: "Hoe wordt de handel genoemd waarbij Afrikanen over zee naar Amerika werden vervoerd om op plantages te werken?",
    options: ["De Europese overheersing", "De VOC-handel", "De trans-Atlantische slavenhandel", "Het abolitionisme"],
    answer: "De trans-Atlantische slavenhandel",
    explanation: "Deze handel bracht miljoenen Afrikanen naar Amerika. Het was een belangrijk onderdeel van de driehoekshandel."
  },
  {
    id: 3,
    question: "Welk aandeel had Nederland ongeveer in de trans-Atlantische slavenhandel?",
    options: ["Ongeveer 50 procent", "Ongeveer 25 procent", "Ongeveer 5 procent", "Minder dan 1 procent"],
    answer: "Ongeveer 5 procent",
    explanation: "Hoewel Nederland (via de WIC) actief was, was hun aandeel vergeleken met landen als Engeland, Spanje en Portugal relatief klein (ruim 550.000 mensen)."
  },
  {
    id: 4,
    question: "Naast de handel in de Atlantische oceaan, was Nederland (via de VOC) ook zeer actief in slavenhandel in een ander gebied. Waar was dit?",
    options: ["Oost-Afrika", "Azië", "Australië", "Zuid-Europa"],
    answer: "Azië",
    explanation: "De VOC vervoerde honderdduizenden tot slaaf gemaakten in Azië. Ze werkten bijvoorbeeld op plantages of als bedienden in het huishouden."
  },
  {
    id: 5,
    question: "Met welk religieus argument probeerden sommige slavenhouders de slavernij goed te praten?",
    options: ["Het verhaal over Adam en Eva", "Het verhaal over de ark van Noach en de vloek van Cham", "De tien geboden", "Het idee van de 'onzichtbare hand'"],
    answer: "Het verhaal over de ark van Noach en de vloek van Cham",
    explanation: "In dit Bijbelverhaal was Cham, wiens nakomelingen volgens hen zwart zouden zijn, door Noach vervloekt om 'de minste van alle knechten' te worden."
  },
  {
    id: 6,
    question: "Wat was de belangrijkste reden dat Adam Smith tegen slavernij was?",
    options: ["Het was in strijd met het christendom", "Het was economisch inefficiënt: mensen werken beter voor loon dan onder dwang", "Hij vond dat alle mensen van nature gelijk zijn", "Hij vond dat de overheid dit moest verbieden"],
    answer: "Het was economisch inefficiënt: mensen werken beter voor loon dan onder dwang",
    explanation: "Als econoom keek Adam Smith vooral naar de economische effecten. Hij stelde dat een vrije markt met loonarbeid beter werkt."
  },
  {
    id: 7,
    question: "Wat is 'abolitionisme'?",
    options: ["De beweging voor de afschaffing van de slavernij", "Het streven naar gelijke rechten voor mannen en vrouwen", "Het idee dat de overheid zich niet met de economie moet bemoeien", "De uitbreiding van Europese koloniën"],
    answer: "De beweging voor de afschaffing van de slavernij",
    explanation: "Deze beweging ontstond in de tijd van pruiken en revoluties, sterk beïnvloed door verlichtingsideeën over gelijkheid."
  },
  {
    id: 8,
    question: "In welk jaar schafte Nederland de slavernij in Suriname en op de Antillen definitief af?",
    options: ["1807", "1833", "1860", "1863"],
    answer: "1863",
    explanation: "Nederland was een van de laatste Europese landen. In Groot-Brittannië was het in 1833 al afgeschaft. In Nederlands-Indië gebeurde het in 1860."
  }
];
