import { useState, useEffect } from 'react'
import { flashcards as initialCards } from './data/flashcards'
import Flashcard from './components/Flashcard'

function App() {
  const [cards, setCards] = useState(initialCards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const nextCard = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }, 150)
  }

  const prevCard = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
    }, 150)
  }

  const shuffleCards = () => {
    setIsFlipped(false)
    setTimeout(() => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5)
      setCards(shuffled)
      setCurrentIndex(0)
    }, 150)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextCard()
      if (e.key === 'ArrowLeft') prevCard()
      if (e.key === ' ' || e.key === 'Enter') setIsFlipped(!isFlipped)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFlipped, cards.length])

  const currentCard = cards[currentIndex]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Geschiedenis Flashcards</h1>
          <p className="text-lg text-gray-600">De tijd van pruiken en revoluties (1700-1815)</p>
        </header>

        <main>
          <div className="mb-8">
            <Flashcard 
              question={currentCard.question}
              answer={currentCard.answer}
              isFlipped={isFlipped}
              onClick={() => setIsFlipped(!isFlipped)}
            />
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="text-sm font-medium text-gray-500">
              Kaart {currentIndex + 1} van {cards.length}
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={prevCard}
                className="px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Vorige
              </button>
              
              <button 
                onClick={shuffleCards}
                className="px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Schudden
              </button>

              <button 
                onClick={nextCard}
                className="px-6 py-2 bg-blue-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Volgende
              </button>
            </div>

            <div className="text-xs text-gray-400 mt-4 italic">
              Tip: Gebruik de pijltoetsen om te navigeren en spatie om de kaart om te draaien.
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
