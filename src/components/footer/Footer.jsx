import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  height: 10vh;
  //background-color: #A90101;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  color: white;
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Tokyo Componentes Eletrônicos LTDA - 2024 - Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
