import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Certifique-se de usar BrowserRouter se estiver usando a versão 6 do React Router

import GlobalStyles from './globalstyles/GlobalStyles'; // Importe seus estilos globais

// Components
import Header from './components/header/Header';

// Importe suas páginas aqui
import Home from './pages/Home';

function App() {

  return (
    <div>
      <GlobalStyles /> {/* Aplica os estilos globais */}
      <Router> {/* Use Router em volta de Routes */}
        <Header />
        {/*<div style={{ paddingTop: '17vh', backgroundColor: "white" }}>*/}
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        {/*</div>*/}
      </Router>
    </div>
  );
}

export default App;
