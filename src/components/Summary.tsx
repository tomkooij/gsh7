import React from 'react';

const Summary: React.FC = () => {
  return (
    <div className="p-4 text-left max-w-4xl mx-auto leading-relaxed text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">Samenvatting: De Tijd van Pruiken en Revoluties</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-blue-700">1. De Verlichting (Rationalisme en Optimisme)</h3>
        <p className="mb-4">
          In de 18e eeuw ontstond de <strong className="text-blue-900">Verlichting</strong>, een intellectuele stroming die voortbouwde op de wetenschappelijke revolutie. Centraal stond het <strong className="text-blue-900">rationalisme</strong>: het vertrouwen dat de mens met zijn verstand (<strong className="text-blue-900">de rede</strong>) alles kon begrijpen en de wereld kon verbeteren. Dit leidde tot een groot <strong className="text-blue-900">optimisme</strong>. Een symbool van deze kennisdrang was de <strong className="text-blue-900">Encyclopédie</strong> van Diderot en d’Alembert.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Voltaire</strong>: Streed voor godsdienstige verdraagzaamheid en was een <strong className="text-blue-900">deïst</strong>.</li>
          <li><strong>John Locke</strong>: Stelde dat de overheid de natuurlijke <strong className="text-blue-900">mensenrechten</strong> (leven, vrijheid, bezit) moet beschermen.</li>
          <li><strong>Montesquieu</strong>: Bedacht de <strong className="text-blue-900">trias politica</strong> (scheiding van de wetgevende, uitvoerende en rechterlijke macht).</li>
          <li><strong>Jean-Jacques Rousseau</strong>: Pleitte voor <strong className="text-blue-900">volkssoevereiniteit</strong>; de macht ligt bij het volk.</li>
          <li><strong>Adam Smith</strong>: Pleitte voor de vrije markt en <strong className="text-blue-900">laissez-faire</strong> (weinig overheidsbemoeienis).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-blue-700">2. Het Ancien Régime en Verlicht Absolutisme</h3>
        <p className="mb-4">
          De bestaande orde van voor de revoluties wordt het <strong className="text-blue-900">Ancien Régime</strong> genoemd, gekenmerkt door een standenmaatschappij. Sommige vorsten, zoals <strong className="text-blue-900">Frederik de Grote</strong>, pasten verlichte ideeën toe. Dit noemen we <strong className="text-blue-900">verlicht absolutisme</strong>: zij regeerden als absolute vorsten, maar wel voor het welzijn van het volk. In Frankrijk leidde onvrede en starheid tot verzet, mede door de strenge <strong className="text-blue-900">censuur</strong>.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-blue-700">3. De Democratische Revoluties</h3>
        <p className="mb-4">
          Aan het eind van de 18e eeuw vonden er verschillende <strong className="text-blue-900">democratische revoluties</strong> plaats, waarbij burgers streden voor een <strong className="text-blue-900">grondwet</strong> en <strong className="text-blue-900">grondrechten</strong>:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-blue-900">Amerikaanse Revolutie</strong>: De koloniën braken met het Britse <strong className="text-blue-900">moederland</strong> (1776).</li>
          <li><strong className="text-blue-900">Bataafse Revolutie</strong>: In Nederland grepen de <strong className="text-blue-900">patriotten</strong> de macht (1795). Nederland werd een <strong className="text-blue-900">eenheidsstaat</strong> (1798).</li>
          <li><strong className="text-blue-900">Franse Revolutie</strong>: Begon in 1789. De <strong className="text-blue-900">Verklaring van de Rechten van de Mens en de Burger</strong> werd opgesteld. Na de <strong className="text-blue-900">terreur</strong> greep <strong className="text-blue-900">Napoleon</strong> de macht via een <strong className="text-blue-900">staatsgreep</strong>.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-3 text-blue-700">4. Kolonialisme en Slavernij</h3>
        <p className="mb-4">
          De <strong className="text-blue-900">trans-Atlantische slavenhandel</strong> vond plaats via de <strong className="text-blue-900">driehoekshandel</strong>. Slaven moesten werken op <strong className="text-blue-900">plantages</strong>. 
          Onder invloed van de Verlichting ontstond het <strong className="text-blue-900">abolitionisme</strong>: de beweging voor de afschaffing van de slavernij. In de Nederlandse koloniën werd de slavernij pas in <strong className="text-blue-900">1863</strong> definitief afgeschaft. Voormalige slaven werden vaak vervangen door <strong className="text-blue-900">contractarbeiders</strong>.
        </p>
      </section>
    </div>
  );
};

export default Summary;
