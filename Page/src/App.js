import React, { useState } from "react";
import "./App.css"; // Import du fichier CSS
import data from "./questions.json";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(null); // Thème sélectionné
  const [index, setIndex] = useState(0); // Index actuel
  const [isFlipped, setIsFlipped] = useState(false); // État pour savoir si la carte est retournée

  // Récupérer les cartes du thème sélectionné
  const cards = selectedTheme ? data[selectedTheme] : [];

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

  // Fonction pour changer de thème
  const handleThemeChange = (event) => {
    const theme = event.target.value; // Récupère la valeur du menu déroulant
    setSelectedTheme(theme !== "" ? theme : null); // Met à jour le thème sélectionné
    setIndex(0); // Réinitialise l'index à 0
    setIsFlipped(false); // Réinitialise l'état de retournement
  };

  return (
    <div className="container">
      {/* Menu déroulant pour sélectionner un thème */}
      <div className="theme-selection">
        <select
          onChange={handleThemeChange}
          value={selectedTheme || ""}
          className="theme-dropdown"
        >
          <option value="">Select a theme</option>
          {Object.keys(data).map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>

      {/* Vérifie si un thème est sélectionné */}
      {selectedTheme ? (
        <>
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
        </>
      ) : (
        <p className="instruction">Please select a theme to start!</p>
      )}
    </div>
  );
}

export default App;
