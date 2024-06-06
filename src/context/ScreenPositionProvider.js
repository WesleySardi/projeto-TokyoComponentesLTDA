import React, { createContext, useContext } from 'react';

const ScreenPositionContext = createContext();

const ScreenPositionProvider = ({ children, isAtTop, isAtTheBannerRange }) => {
  return (
    <ScreenPositionContext.Provider value={{ isAtTop, isAtTheBannerRange }}>
      {children}
    </ScreenPositionContext.Provider>
  );
};

export const useScreenPositionContext = () => {
  return useContext(ScreenPositionContext);
};

export default ScreenPositionProvider; // Exporte o ScreenPositionProvider como default
