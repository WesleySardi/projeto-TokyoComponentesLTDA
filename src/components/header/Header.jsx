import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faChevronDown, faX } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import TopBar from './TopBar';
import Sidebar from '../sidebar/Sidebar';

import { useScreenPositionContext } from '../../context/ScreenPositionProvider'

const retractAnimation = keyframes`
from {
height: 17vh;
}
to {
height: 8vh;
}
`;

const expandAnimation = keyframes`
from {
height: 8vh;
}
to {
height: 17vh;
}
`;

const expandForDarkMode = keyframes`
0% {
height: 17vh;
}
75% {
height: 100vh;
}
100% {
height: 8vh;
}
`;

const retractForMobile = keyframes`
from {
height: 12vh;
}
to {
height: 8vh;
}
`;

const expandForMobile = keyframes`
0% {
height: 8vh;
}
100% {
height: 12vh;
}
`;

const fadeIn = keyframes`
from {
opacity: 0;
}
to {
opacity: 1;
}
`;

const fadeInForDarkMode = keyframes`
from {
background-color: rgba(255, 255, 255, 0.7);
}
to {
background-color: rgba(0, 0, 0, 0.8);
}
`;

const fadeOutForDarkMode = keyframes`
from {
background-color: rgba(0, 0, 0, 0.8);
}
to {
background-color: rgba(255, 255, 255, 0.7);
}
`;

const rotateAnimation = keyframes`
0% {
transform: rotate(0deg);
}
25% {
transform: rotate(90deg);
}
50% {
transform: rotate(180deg);
}
75% {
transform: rotate(270deg);
}
100% {
transform: rotate(360deg);
}
`;

const StyledContainer = styled.div`
align-items: center;  
display: flex;
justify-content: center;
margin: 0 2vw;
`;

const ComboBoxContainer = styled.div`
display: inline-block;
position: relative;

&:hover {
ul {
display: block;
animation: ${fadeIn} 0.2s ease;
}
button {
color: #d35400;
transition: color 0.3s ease;
}
}
`;

const ComboBoxList = styled.ul`
background-color: #f9f9f9;
border-radius: 0.5vw;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
display: none;
position: absolute;
width: 11vw;
z-index: 3;

&:hover {
display: block;
}
`;

const ComboBoxListItem = styled(Link)`
border-radius: 0.5vw;
cursor: pointer;
display: block;
font-size: 2.2vh;
padding: 12px 16px;
text-align: left;
text-decoration: none;

&:hover {
background-color: #ddd;
}
`;

const HeaderStyle = styled.div`
display: flex;
`;

const StyledDiv = styled.div`
align-items: end;    
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
`;

const StyledList = styled.ul`
align-items: center;    
display: flex;
flex-direction: row;
justify-content: center;
list-style-type: none;
z-index: 2;
`;

const Icon = styled(FontAwesomeIcon)`
  @media ${props => props.theme.breakpoints.mobile} {
    color: red;
    font-size: 4vh;
    margin-right: 12vw;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    margin-right: 10px;
  }
`;

const StyledIcon = styled.img`
margin-right: 5%;
height: auto;
width: 2rem;
`;

const IconComboBox = styled(FontAwesomeIcon)`
margin-left: 5px;
`;

const DarkModeIcon = styled(FontAwesomeIcon)`
${props =>
    props.rotate &&
    css`
animation: ${rotateAnimation} 0.3s linear;
`};    
font-size: 2.2vh;  
`;

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

const ExpandedHeaderContainer = styled.div`
  position: fixed;
  z-index: 3;
  background-color: transparent;

  @media ${props => props.theme.breakpoints.largeDesktop} {
    height: 17vh;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    height: 17vh;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    height: 17vh;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    height: ${props => (props.isAtTop ? '17vh' : props.isSidebarActive ? '12vh' : '8vh')};
  }
`;

function Header() {
  const { isAtTop, isAtTheBannerRange } = useScreenPositionContext();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDarkModeAnimationRunning, setIsDarkModeAnimationRunning] = useState(false);
  const [retract, setRetract] = useState(true);

  const [rotateIcon, setRotateIcon] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
      setIsSmallDesktop(window.innerWidth <= 1279);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setRetract(window.scrollY > window.innerHeight);
    }, 300);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [retract]);

  const toggleDarkMode = () => {
    setRotateIcon(true);
    setIsDarkMode(prevMode => !prevMode);
    setIsDarkModeAnimationRunning(true);

    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';

    setTimeout(() => {
      setIsDarkModeAnimationRunning(false)
      setRotateIcon(false);

      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    }, isAtTop ? 300 : 1500);
  };

  const handleMouseEnter = () => {
    if (!isAtTheBannerRange && !isDarkModeAnimationRunning) {
      setRetract(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isAtTheBannerRange && !isDarkModeAnimationRunning) {
      setRetract(true);
    }
  };

  const toggleSidebar = () => {
    if (isSidebarActive) {
      setIsSidebarActive(false);
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    } else {
      setIsSidebarActive(true);
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'hidden';
    }
  };

  const BackgroundStyle = styled.div`
    animation: ${isDarkModeAnimationRunning
      ? isAtTop
        ? 'none'
        : retractAnimation
      : isAtTop
        ? 'none'
        : isAtTheBannerRange
          ? expandAnimation
          : retract
            ? retractAnimation
            : expandAnimation
    } 0.2s forwards;
    
    background-color: ${isAtTop ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.7)'};
      
    display: flex;
    height: 100%;
    width: 100vw;
    z-index: 1;

    @media ${props => props.theme.breakpoints.mobile} {
      height: 100%;
      ${isAtTop && isSidebarActive ?
      `background-color: rgba(10, 10, 10, 1);`
      : isSidebarActive ?
        `background-color: rgba(10, 10, 10, 1);` :
        `background-color: rgba(0, 0, 0, 0);`
    }
      animation: ${isAtTop ? 'none' : isSidebarActive ? expandForMobile : 'none'} 0.2s forwards;
    }
  `;

  const BackgroundStyleBlur = styled.div`
    &::before {
      animation: ${isDarkModeAnimationRunning
      ? isAtTop
        ? 'none'
        : retractAnimation
      : isAtTop
        ? 'none'
        : isAtTheBannerRange
          ? expandAnimation
          : retract
            ? retractAnimation
            : expandAnimation
    } 0.2s forwards,
      
      ${isDarkModeAnimationRunning ? !isAtTop ? expandForDarkMode : 'none' : 'none'} 1.5s forwards,

      ${!isAtTop ? isDarkModeAnimationRunning ? isDarkMode ? fadeInForDarkMode : fadeOutForDarkMode : 'none' : 'none'} 1.5s forwards;

      background-color: ${isAtTop ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.7)'};
      
      backdrop-filter: blur(${isAtTop ? '0px' : '2px'});
      content: '';
      height: 100%;
      position: absolute;
      -webkit-backdrop-filter: blur(${isAtTop ? '0px' : '2px'});
      width: 100vw;
      z-index: -1;

      @media ${props => props.theme.breakpoints.mobile} {
        animation: ${isAtTop ? 'none' : isSidebarActive ? expandForMobile : 'none'} 0.2s forwards;
      }
    }
  `;

  const StyledListItem = styled(Link)`
    color: ${isAtTop ? 'rgba(255, 255, 255, 1)' : 'color: rgba(0, 0, 0, 1)'};  
    font-size: 2.5vh;
    text-align: center;
    text-decoration: none;
    margin-right: 3vw;
  `;

  const StyledListItemAndIcon = styled(Link)`
    align-items: center;
    border: 1px solid red;
    border-radius: 0.5vw;
    color: ${isAtTop ? 'rgba(255, 255, 255, 1)' : 'color: rgba(0, 0, 0, 1)'};
    display: flex;
    height: 30px;
    justify-content: center;
    padding: 5px;

    @media ${props => props.theme.breakpoints.largeDesktop} {  
      font-size: 1.8vh;
    }

    @media ${props => props.theme.breakpoints.smallDesktop} {
      font-size: 2.2vh;
      padding: 5px 10px;
    }

    &:hover {
      background-color: red;
      color: white;
    }
  `;

  const StyledContactItem = styled(Link)`
    align-items: center;
    border: 1px solid red;
    border-radius: 0.5vw;
    color: ${isAtTop ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'};
    display: flex;
    font-size: 2.2vh;
    height: 30px;
    justify-content: center;
    padding: 5px;
    padding: 5px 10px;

    &:hover {
      background-color: red;
      color: white;
    }
  `;

  const ComboBoxButton = styled.button`
    background-color: transparent;
    color: ${isAtTop ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'};
    cursor: pointer;
    font-size: 2.5vh;
  `;

  const DarkModeContainer = styled.div`
    background-color: ${props => (props.isDarkMode ? isAtTop ? 'grey' : 'black' : '#EEA200')};
    border: 2px solid transparent;
    border-radius: 50%;
    height: 40px;
    margin-left: 2vw;
    width: 40px;
  `;

  const DarkModeButton = styled.button`
    background-color: ${props => (props.isDarkMode ? isAtTop ? 'white' : 'black' : '#EEA200')};
    border: 1px solid ${props => (props.isDarkMode ? isAtTop ? 'black' : 'white' : 'white')};
    border-radius: 50%;
    color: ${isDarkModeAnimationRunning ? (props => (props.isDarkMode ? isAtTop ? 'black' : 'white' : 'white')) : (props => (props.isDarkMode ? isAtTop ? 'black' : 'white' : 'white'))};
    cursor: pointer;
    height: 100%;
    transition: background-color 0.3s ease;
    width: 100%;

    ${DarkModeContainer}:hover & {
      background-color: ${props => (props.isDarkMode ? '#323232' : '#DE9800')};
      color: ${props => (props.isDarkMode ? 'white' : 'white')};
    }
  `;

  const ImgStyleLogo = styled.img`
    position: absolute;
    height: auto;
    left: 10vw;
    opacity: 1;
    ${isAtTop ? { width: '15vh', top: '10vh' } :
      { display: 'none' }}

    @media ${props => props.theme.breakpoints.mobile} {
        ${isAtTop ? { width: '7vh', top: '5vh' } :
      { display: 'none' }}
    }
  `;

  return (
    <ExpandedHeaderContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isAtTop={isAtTop} isSidebarActive={isSidebarActive}>
      {isSidebarActive ?
        <Sidebar isSidebarActive={isSidebarActive} isAtTop={isAtTop} isAtTheBannerRange={isAtTheBannerRange} />
        :
        <></>
      }
      {isAtTop && !isMobile ? <TopBar /> : <></>}
      <BackgroundStyle>
        <BackgroundStyleBlur />
        <HeaderStyle>
          <ImgStyleLogo src={'/img/tokyoLogo.png'} alt="ZloLogo" />
        </HeaderStyle>
        <StyledDiv>
          {!isMobile ?
            <StyledList style={isAtTop ? { padding: '18vh 5vw 0 0' } : { padding: '0 5vw 0 0' }}>
              <StyledListItem to="/">Home</StyledListItem>
              <StyledListItem to="/">Produtos</StyledListItem>
              <StyledListItem to="/">Blog</StyledListItem>
              <ComboBoxContainer>
                <ComboBoxButton>Institucional <IconComboBox icon={faChevronDown} /></ComboBoxButton>
                <ComboBoxList>
                  <ComboBoxListItem to="/">
                    Quem Somos
                  </ComboBoxListItem>
                  <ComboBoxListItem to="/">
                    Trabalhe Conosco
                  </ComboBoxListItem>
                </ComboBoxList>
              </ComboBoxContainer>
              <StyledContainer>
                <StyledContactItem to="/">Contato</StyledContactItem>
                <DarkModeContainer isDarkMode={isDarkMode}>
                  <DarkModeButton isDarkMode={isDarkMode} onClick={toggleDarkMode} disabled={isDarkModeAnimationRunning ? true : false}>
                    <DarkModeIcon icon={isDarkMode ? faMoon : faSun} rotate={rotateIcon} />
                  </DarkModeButton>
                </DarkModeContainer>
              </StyledContainer>
              <StyledListItemAndIcon to="/">
                {/*<StyledIcon src="../img/EcommerceIcon.png" />*/}
                <Icon icon={faCartShopping} />
                {isSmallDesktop ? '' : 'E-commerce'}
              </StyledListItemAndIcon>
            </StyledList>
            :
            <StyledList>
              <Icon icon={isMobile ? isSidebarActive ? faX : faBars : faCartShopping} onClick={() => toggleSidebar()} />
            </StyledList>
          }
        </StyledDiv>
      </BackgroundStyle>
    </ExpandedHeaderContainer>
  );
}

export default Header;
