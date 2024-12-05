import React, { useState } from "react";
import "./App.css"; // Import du fichier CSS

function App() {
  const [index, setIndex] = useState(0); // Index actuel
  const cards = ["withdraw money", "deposit money", "check balance"]; // Liste des "cartes"

  // Gestion des changements de carte
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container">
      {/* Carte */}
      <div className="card">
        <p className="text">{cards[index]}</p>
      </div>

      {/* Boutons de navigation */}
      <div className="navigation">
        <button className="button" onClick={handlePrev}>
          &#8592;
        </button>
        <span className="counter">
          {index + 1}/{cards.length}
        </span>
        <button className="button" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default App;
