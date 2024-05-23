import React from 'react';
import styled, { keyframes } from 'styled-components';

const Sidebar = (props) => {

  const SidebarContainer = styled.div`
    width: 40%;
    position: fixed;
    right: 0;
    ${props.isAtTop ?
        `
        top: 17vh;
        height: 83vh;
        `
        :
        `
        top: 7vh;
        height: 93vh;
        `
      }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: rgba(255, 255, 255, 0.7);;
    padding-top: 5vh;
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
    </SidebarContainer>
  );
};

export default Sidebar;
