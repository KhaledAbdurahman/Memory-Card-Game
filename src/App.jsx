import GameHeader from "./components/GameHeader";
import Card from "./components/Card";
import { useState, useEffect } from "react";

const CardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {
  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    // Shuffle cards

    const finalCards = CardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className="app">
      <GameHeader score={1} moves={3} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
