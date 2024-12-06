import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./questions.json";

function QuizzPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // État pour savoir si l'animation est en cours

  // Styles en ligne
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh", // Remplace height par minHeight pour s'assurer que le fond couvre toute la page
      width: "100vw", // Prend toute la largeur de la fenêtre
      backgroundColor: "#1c1c2b", // Fond bleu foncé sur toute la page
      color: "white",
      margin: 0,
      fontFamily: "Arial, sans-serif",
    },
  
    themeSelection: {
      margin: "20px 0",
      display: "flex",
      justifyContent: "center",
    },
    themeDropdown: {
      padding: "10px 15px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
      maxWidth: "300px",
      margin: "0 auto",
      display: "block",
    },
    card: {
      width: "300px",
      height: "200px",
      perspective: "1000px",
      marginBottom: "30px",
      position: "relative",
    },
    cardInner: {
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      transition: "transform 0.4s ease-in-out", // Animation de retournement
    },
    cardFace: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      fontSize: "18px",
      fontWeight: "bold",
      textAlign: "center",
    },
    cardFront: {
      backgroundColor: "#3c3c4b",
      color: "#ffffff",
    },
    cardBack: {
      backgroundColor: "#4b5b6b",
      color: "#ffffff",
      transform: "rotateY(180deg)",
    },
    button: {
      padding: "10px 15px",
      fontSize: "16px",
      backgroundColor: "#4b4b5b",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      marginTop: "20px",
    },
    buttonHover: {
      backgroundColor: "#626276",
    },
  };

  // Récupérer les cartes du thème sélectionné
  const cards = selectedTheme ? data[selectedTheme] : [];

  // Fonction pour retourner la carte
  const flipCard = () => {
    if (isAnimating) return; // Si une animation est en cours, on ne fait rien
    setIsFlipped(!isFlipped); // Retourner la carte
  };

  // Fonction pour changer de carte après que l'animation de retournement soit terminée
  const changeCard = () => {
    if (isAnimating) return; // Empêche de changer la carte si une animation est en cours

    // D'abord, retourner la carte pour la remettre à l'endroit
    setIsFlipped(true);
    setIsAnimating(true); // Commence l'animation

    // Quand l'animation de retournement est terminée, on passe à la carte suivante
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
      setIsFlipped(false); // Retourner la carte pour la remettre à l'endroit
    }, 400); // Délai correspondant à la durée de l'animation (0.4s)
  };

  // Fonction pour gérer la sélection du thème
  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value); // Met à jour le thème sélectionné
    setIndex(0); // Réinitialise l'index à 0
    setIsFlipped(false); // Réinitialise l'état de retournement
    setIsAnimating(false); // Réinitialise l'animation
  };

  return (
    <div style={styles.container}>
      {/* Menu déroulant pour sélectionner un thème */}
      <div style={styles.themeSelection}>
        <select
          onChange={handleThemeChange}
          value={selectedTheme || ""}
          style={styles.themeDropdown}
        >
          <option value="">Select a theme</option>
          <option value="Ocean Geography">Ocean Geography</option>
          <option value="Marine Ecosystems">Marine Ecosystems</option>
          <option value="Carbon Cycle and Environmental Impact">Carbon Cycle and Environmental Impact</option>
          <option value="Oceanic Phenomena and Currents">Oceanic Phenomena and Currents</option>
        </select>
      </div>

      {/* Vérifie si un thème est sélectionné */}
      {selectedTheme && cards.length > 0 ? (
        <>
          {/* Carte */}
          <div
            style={styles.card}
            onClick={flipCard} // Retourne la carte au clic
          >
            <div
              style={{
                ...styles.cardInner,
                transform: isFlipped ? "rotateY(180deg)" : "none", // Rotation de la carte
              }}
            >
              <div style={{ ...styles.cardFace, ...styles.cardFront }}>
                <p>{cards[index].front}</p>
              </div>
              <div style={{ ...styles.cardFace, ...styles.cardBack }}>
                <p>{cards[index].back}</p>
              </div>
            </div>
          </div>

          {/* Boutons de navigation */}
          <div>
            <button
              style={styles.button}
              onClick={changeCard} // Change de carte en cliquant sur ce bouton
            >
              &#8592; Prev
            </button>
            <span style={{ margin: "0 20px", fontSize: "18px", color: "#fff" }}>
              {index + 1}/{cards.length}
            </span>
            <button
              style={styles.button}
              onClick={changeCard} // Change de carte en cliquant sur ce bouton
            >
              Next &#8594;
            </button>
          </div>
        </>
      ) : (
        <p style={{ color: "#fff", fontSize: "18px" }}>Please select a theme to start!</p>
      )}

      {/* Bouton pour revenir à la page d'accueil */}
      <Link to="/">
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default QuizzPage;
