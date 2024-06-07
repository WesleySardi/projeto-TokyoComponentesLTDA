import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${props => (props.isDarkMode ? '#161616' : '#f0f0f0')};
    font-size: 1vw;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
