import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizzPage from './QuizzPage.jsx'; // Page du quiz
import HomePage from './HomePage'; // Page accueil


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Définissez les routes ici */}
        <Route path="/" element={<QuizzPage />} /> {/* Page d'accueil */}
        <Route path="/lll" element={<HomePage />} /> {/* Page d'accueil */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
