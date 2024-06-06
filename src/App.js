import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Certifique-se de usar BrowserRouter se estiver usando a versão 6 do React Router
import { ThemeProvider } from 'styled-components'; // Adicione esta linha

import GlobalStyles from './globalstyles/GlobalStyles'; // Importe seus estilos globais

// Components
import Header from './components/header/Header';

import theme from './globalstyles/theme';

// Importe suas páginas aqui
import Home from './pages/Home';

import ScreenPositionProvider from './context/ScreenPositionProvider'; // Importe o HeaderProvider

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

function App() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtTheBannerRange, setIsAtTheBannerRange] = useState(true);
  
  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsAtTheBannerRange(window.scrollY < window.innerHeight);
    }, 300);

    const handleTopScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleTopScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleTopScroll);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScreenPositionProvider isAtTop={isAtTop} isAtTheBannerRange={isAtTheBannerRange}>
        <Router>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </ScreenPositionProvider>
    </ThemeProvider>
  );
}

export default App;
