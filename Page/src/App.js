import React, { useState } from "react";
import "./App.css"; // Import du fichier CSS

function App() {
  const [index, setIndex] = useState(0); // Index actuel
  const [isFlipped, setIsFlipped] = useState(false); // Etat pour savoir si la carte est retournée
  const cards = [
    { front: "withdraw money", back: "retirer de l'argent" },
    { front: "deposit money", back: "déposer de l'argent" },
    { front: "check balance", back: "vérifier le solde" },
  ]; // Liste des "cartes"

  // Gestion des changements de carte
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    setIsFlipped(false); // Réinitialise l'état de retournement quand on change de carte
  };

  const handleNext = () => {
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    setIsFlipped(false); // Réinitialise l'état de retournement quand on change de carte
  };

  // Fonction pour retourner la carte
  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Change l'état pour retourner la carte
  };

  return (
    <div className="container">
      {/* Carte */}
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip} // Ajoute l'événement de clic pour retourner la carte
      >
        <div className="card-inner">
          <div className="card-front">
            <p className="text">{cards[index].front}</p>
          </div>
          <div className="card-back">
            <p className="text">{cards[index].back}</p>
          </div>
        </div>
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
