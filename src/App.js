import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Certifique-se de usar BrowserRouter se estiver usando a versão 6 do React Router
import { ThemeProvider } from 'styled-components'; // Adicione esta linha

import GlobalStyles from './globalstyles/GlobalStyles'; // Importe seus estilos globais

// Components
import Header from './components/header/Header';

import theme from './globalstyles/theme';

// Importe suas páginas aqui
import Home from './pages/Home';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
