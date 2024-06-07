import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Certifique-se de usar BrowserRouter se estiver usando a versão 6 do React Router
import { ThemeProvider } from 'styled-components'; // Adicione esta linha

import GlobalStyles from './globalstyles/GlobalStyles'; // Importe seus estilos globais

// Components
import Header from './components/header/Header';

import theme from './globalstyles/theme';

// Importe suas páginas aqui
import Home from './pages/Home';

import ScreenPositionProvider, { useScreenPositionContext } from './context/ScreenPositionProvider'; // Importe o HeaderProvider

const AppWrapper = () => {
  const { isDarkMode } = useScreenPositionContext(); // Certifique-se de usar o hook no lugar certo

  return (
    <>
      <GlobalStyles isDarkMode={isDarkMode} />
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScreenPositionProvider>
        <AppWrapper />
      </ScreenPositionProvider>
    </ThemeProvider>
  );
}

export default App;
