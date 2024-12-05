import React from 'react';
import './App.css'; // Optionnel : pour le style du composant App.

function App() {
  const items = ['React', 'JavaScript', 'CSS', 'HTML']; // Données à afficher.

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur mon Front React</h1>
      </header>
      <main>
        <h2>Technologies Apprises</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
