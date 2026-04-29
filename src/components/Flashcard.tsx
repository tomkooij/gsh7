import React from 'react';

interface FlashcardProps {
  question: string;
  answer: string;
  isFlipped: boolean;
  onClick: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer, isFlipped, onClick }) => {
  // We use a simple conditional render to ensure only one face is in the DOM.
  // This avoids all z-index, absolute positioning, and transparency bugs.
  if (!isFlipped) {
    return (
      <div 
        className="w-full max-w-md h-64 cursor-pointer mx-auto bg-white text-gray-900 rounded-xl shadow-2xl flex items-center justify-center p-8 border-4 border-blue-500"
        onClick={onClick}
      >
        <div className="text-center">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 block">VRAAG</span>
          <p className="text-2xl font-bold">{question}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="w-full max-w-md h-64 cursor-pointer mx-auto bg-blue-700 text-white rounded-xl shadow-2xl flex items-center justify-center p-8 border-4 border-blue-900"
      onClick={onClick}
    >
      <div className="text-center">
        <span className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-4 block">ANTWOORD</span>
        <p className="text-xl font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default Flashcard;
