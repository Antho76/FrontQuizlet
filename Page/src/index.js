import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilise `react-dom/client` pour React 18+
import QuizzPage from './QuizzPage.js';

// Sélectionne l'élément root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rends l'application
root.render(
  <React.StrictMode>
    <QuizzPage />
  </React.StrictMode>
);
