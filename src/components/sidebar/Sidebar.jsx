import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const retractForMobile = keyframes`
    from {
      top: 12vh;
      height: 88vh;
    }
    to {
      top: 8vh;
      height: 92vh;
    }
  `;

const expandForMobile = keyframes`
    0% {
      top: 8vh;
      height: 92vh;
    }
    100% {
      top: 12vh;
      height: 88vh;
    }
  `;

const SidebarContainer = styled.div`
    width: 100%;
    position: fixed;
    right: 0;
    top: 12vh;
    height: 88vh;
    background-color: black;
    animation: ${props => (props.isSidebarActive ? expandForMobile : 'none')} 0.2s forwards;
    border-top: ${props => (props.isSidebarActive ? '1px solid white' : 'none')};
  `;

const ButtonsContainer = styled.div`
    padding-top: 5%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  `

const Button = styled.button`
    width: 90%;
    height: 10%;
    text-align: left;
    padding-left: 3%;
    background-color: black;
    color: #fff;
    border-left: 2px solid red;
    cursor: pointer;
    font-size: 1.2rem;
    
    &:hover {
      background-color: orange;
      color: black;
    }
  `;

const AbsoluteImage = styled.img`
  position: absolute;
  bottom: 3%;
  left: 5%;
  width: 60%;
  height: auto;
  `;

const Sidebar = ({ isSidebarActive }) => {
  return (
    <SidebarContainer isSidebarActive={isSidebarActive}>
      <ButtonsContainer>
        <Button>Home</Button>
        <Button>E-commerce</Button>
        <Button>Produtos</Button>
        <Button>Blog</Button>
        <Button>Quem Somos</Button>
        <Button>Contato</Button>
        <Button>Trabalhe Conosco</Button>
        <AbsoluteImage src='../img/icones/wsBalloonImage.png' />
      </ButtonsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
