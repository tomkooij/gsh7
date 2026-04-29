import React, { useState, useEffect } from 'react';
import { thinkerStatements as initialStatements, thinkers } from '../data/thinkerQuiz';

const ThinkerQuiz: React.FC = () => {
  const [statements, setStatements] = useState([...initialStatements]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedThinker, setSelectedThinker] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // Shuffle statements on mount
  useEffect(() => {
    const shuffled = [...initialStatements].sort(() => Math.random() - 0.5);
    setStatements(shuffled);
  }, []);

  const currentStatement = statements[currentIndex];

  const handleGuess = (thinker: string) => {
    if (showResult) return;
    setSelectedThinker(thinker);
    setShowResult(true);
    if (thinker === currentStatement.thinker) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedThinker(null);
    setShowResult(false);
    
    // If we've reached the end, reshuffle and start over
    if (currentIndex === statements.length - 1) {
      const shuffled = [...initialStatements].sort(() => Math.random() - 0.5);
      setStatements(shuffled);
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (!currentStatement) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Wie zei dit?</h2>
        <span className="text-blue-600 font-bold bg-white px-3 py-1 rounded-full shadow-sm border border-blue-100">Score: {score}</span>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500 italic text-xl text-gray-700 min-h-[120px] flex items-center justify-center">
        "{currentStatement.statement}"
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {thinkers.map((thinker) => (
          <button
            key={thinker}
            onClick={() => handleGuess(thinker)}
            disabled={showResult}
            className={`p-4 rounded-lg font-medium border-2 transition-all ${
              showResult
                ? thinker === currentStatement.thinker
                  ? 'bg-green-100 border-green-500 text-green-700'
                  : thinker === selectedThinker
                  ? 'bg-red-100 border-red-500 text-red-700'
                  : 'bg-gray-50 border-gray-200 text-gray-400'
                : 'bg-white border-blue-100 text-blue-800 hover:border-blue-500 hover:bg-blue-50'
            }`}
          >
            {thinker}
          </button>
        ))}
      </div>

      {showResult && (
        <div className="animate-fade-in">
          <div className={`p-4 rounded-lg mb-6 ${selectedThinker === currentStatement.thinker ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            <p className="font-bold mb-1">
              {selectedThinker === currentStatement.thinker 
                ? `Correct! Het was inderdaad ${currentStatement.thinker}.` 
                : `Helaas... Het juiste antwoord was ${currentStatement.thinker}.`}
            </p>
            <p>{currentStatement.explanation}</p>
          </div>
          <button
            onClick={nextQuestion}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            {currentIndex === statements.length - 1 ? 'Quiz herstarten' : 'Volgende stelling'}
          </button>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-gray-400">
        Stelling {currentIndex + 1} van {statements.length}
      </div>
    </div>
  );
};

export default ThinkerQuiz;
