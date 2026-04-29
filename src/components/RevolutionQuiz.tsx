import React, { useState, useEffect } from 'react';
import { revolutionItems as initialItems, revolutions } from '../data/revolutionQuiz';

const RevolutionQuiz: React.FC = () => {
  const [items, setItems] = useState([...initialItems]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRevolution, setSelectedRevolution] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // Shuffle on mount
  useEffect(() => {
    const shuffled = [...initialItems].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, []);

  const currentItem = items[currentIndex];

  const handleGuess = (revolution: string) => {
    if (showResult) return;
    setSelectedRevolution(revolution);
    setShowResult(true);
    if (revolution === currentItem.revolution) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedRevolution(null);
    setShowResult(false);
    
    if (currentIndex === items.length - 1) {
      const shuffled = [...initialItems].sort(() => Math.random() - 0.5);
      setItems(shuffled);
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (!currentItem) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Bij welke revolutie hoort dit?</h2>
        <span className="text-blue-600 font-bold">Score: {score}</span>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500 text-xl font-medium text-gray-700 min-h-[100px] flex items-center justify-center text-center">
        {currentItem.item}
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {revolutions.map((rev) => (
          <button
            key={rev}
            onClick={() => handleGuess(rev)}
            disabled={showResult}
            className={`p-4 rounded-lg font-bold border-2 transition-all ${
              showResult
                ? rev === currentItem.revolution
                  ? 'bg-green-100 border-green-500 text-green-700'
                  : rev === selectedRevolution
                  ? 'bg-red-100 border-red-500 text-red-700'
                  : 'bg-gray-50 border-gray-200 text-gray-400'
                : 'bg-white border-blue-100 text-blue-800 hover:border-blue-500 hover:bg-blue-50 shadow-sm'
            }`}
          >
            {rev}
          </button>
        ))}
      </div>

      {showResult && (
        <div className="animate-fade-in">
          <div className={`p-4 rounded-lg mb-6 ${selectedRevolution === currentItem.revolution ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            <p className="font-bold mb-1">
              {selectedRevolution === currentItem.revolution ? 'Correct!' : 'Onjuist'}
            </p>
            <p>{currentItem.explanation}</p>
          </div>
          <button
            onClick={nextQuestion}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md"
          >
            {currentIndex === items.length - 1 ? 'Quiz herstarten' : 'Volgende vraag'}
          </button>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-gray-400">
        Vraag {currentIndex + 1} van {items.length}
      </div>
    </div>
  );
};

export default RevolutionQuiz;
