import React, { createContext, useContext } from 'react';

const ScreenPositionContext = createContext();

const ScreenPositionProvider = ({ children, isAtTop, isAtTheBannerRange, isMobile, isSmallDesktop }) => {
  return (
    <ScreenPositionContext.Provider value={{ isAtTop, isAtTheBannerRange, isMobile, isSmallDesktop }}>
      {children}
    </ScreenPositionContext.Provider>
  );
};

export const useScreenPositionContext = () => {
  return useContext(ScreenPositionContext);
};

export default ScreenPositionProvider; // Exporte o ScreenPositionProvider como default
