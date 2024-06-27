import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCartShopping, faPhone, faUser, faQuestion, faComment, faBookmark} from '@fortawesome/free-solid-svg-icons';

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
    border-bottom: 2px solid #161616;
    cursor: pointer;
    font-size: 1.2rem;
    
    @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.3rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1rem;
    }
    
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

  @media ${props => props.theme.breakpoints.tablet} {
    width: 30%;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 50%;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 5%;

  @media ${props => props.theme.breakpoints.tablet} {
    width: 20px;
    height: 20px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 20px;
    height: 20px;
  }
`;

const Sidebar = ({ isSidebarActive }) => {
  return (
    <SidebarContainer isSidebarActive={isSidebarActive}>
      <ButtonsContainer>
        <Button>Home <Icon icon={faHouse} /></Button>
        <Button>E-commerce <Icon icon={faCartShopping} /></Button>
        <Button>Produtos <Icon icon={faBookmark} /></Button>
        <Button>Blog <Icon icon={faComment} /></Button>
        <Button>Quem Somos <Icon icon={faQuestion} /></Button>
        <Button>Contato <Icon icon={faPhone} /></Button>
        <Button>Trabalhe Conosco <Icon icon={faUser} /></Button>
        <AbsoluteImage src='../img/icones/wsBalloonImage.png' />
      </ButtonsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
