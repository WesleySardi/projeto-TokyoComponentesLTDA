import React from 'react';
import styled, { keyframes } from 'styled-components';

const retractForMobile = keyframes`
    from {
      top: 17vh;
      height: 83vh;
    }
    to {
      top: 7vh;
      height: 93vh;
    }
  `;

const expandForMobile = keyframes`
    0% {
      top: 7vh;
      height: 93vh;
    }
    100% {
      top: 17vh;
      height: 83vh;
    }
  `;

const Sidebar = (props) => {

  const SidebarContainer = styled.div`
    width: 40%;
    position: fixed;
    right: 0;
    top: 17vh;
    height: 83vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: rgba(255, 255, 255, 0.7);;

    background-image: url('../img/wallpaperWorld.jpg'); /* Adicione esta linha */
    background-size: cover; /* Ajusta a imagem para cobrir toda a área */
    background-position: right; /* Centraliza a imagem */

    padding-top: 5vh;

    animation: ${props.isSidebarActive ? props.isAtTop ? 'none' : props.isAtTheBannerRange ? 'none' : expandForMobile : retractForMobile
    } 0.2s forwards;
  `;

  const Button = styled.button`
    width: 80%;
    padding: 10px;
    margin: 1vh 0;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 3.5rem;
    
    &:hover {
      background-color: orange;
      color: black;
    }
  `;

  const AbsoluteImage = styled.img`
  position: absolute;
  bottom: 10%;
  width: 50%;
  height: auto;
`;

  return (
    <SidebarContainer>
      <Button>Home</Button>
      <Button>Produtos</Button>
      <Button>Blog</Button>
      <Button>Quem Somos</Button>
      <Button>Trabalhe Conosco</Button>
      <Button>Contato</Button>
      <Button>Dark Mode</Button>
      <Button>E-commerce</Button>
      <AbsoluteImage src="../img/TokyoLogo.png" alt="Descrição da imagem" />
    </SidebarContainer>
  );
};

export default Sidebar;
