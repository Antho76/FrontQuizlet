import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilise `react-dom/client` pour React 18+
import QuizzPage from './QuizzPage';

// Sélectionne l'élément root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rends 
root.render(
  <React.StrictMode>
    <QuizzPage />
  </React.StrictMode>
);
