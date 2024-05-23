import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import TopBar from './TopBar';
import Sidebar from '../sidebar/Sidebar';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

const ImgStyleLogo = styled.img`
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
    margin-right: 10px;

    @media ${props => props.theme.breakpoints.mobile} {
      color: red;
      font-size: 4vh;
      margin-right: 12vw;
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

const ExpandedHeaderContainer = styled.div`
    background-color: transparent;    
    position: fixed;
    z-index: 3;
`;

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDarkModeAnimationRunning, setIsDarkModeAnimationRunning] = useState(false);

  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtTheBannerRange, setIsAtTheBannerRange] = useState(true);

  const [rotateIcon, setRotateIcon] = useState(false);

  const [retract, setRetract] = useState(false);

  const [animationActive, setAnimationActive] = useState(false);

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
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDarkModeAnimationRunning) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const threshold = windowHeight * 1;

        if (scrollPosition > threshold && !retract && !animationActive) {
          setAnimationActive(true);
          setRetract(true);
          setIsAtTheBannerRange(false);
        } else if (scrollPosition <= threshold && retract && animationActive) {
          setAnimationActive(false);
          setRetract(false);
          setIsAtTheBannerRange(true);
        } else if (scrollPosition > threshold && !retract && animationActive) {
          setAnimationActive(true);
          setRetract(true);
          setIsAtTheBannerRange(false);
        };
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [retract, animationActive]);

  const toggleDarkMode = () => {
    setRotateIcon(true);
    setIsDarkMode(prevMode => !prevMode);
    setIsDarkModeAnimationRunning(true);
    setTimeout(() => {
      setIsDarkModeAnimationRunning(false)
      setRotateIcon(false);
    }, isAtTop ? 300 : 1500);
  };

  const handleMouseEnter = () => {
    if (!isDarkModeAnimationRunning) {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.5;

      if (animationActive) {
        if (scrollPosition >= threshold) {
          setRetract(false);
        } else {
          setAnimationActive(false);
          setRetract(false);
        }
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isDarkModeAnimationRunning) {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.5;

      if (animationActive) {
        if (scrollPosition >= threshold) {
          setRetract(true);
        } else {
          setAnimationActive(false);
          setRetract(false);
        }
      }
    }
  };

  const toggleSidebar = () => {
    if (isSidebarActive) {
      setIsSidebarActive(false);
    } else {
      setIsSidebarActive(true);
    }
  };

  const BackgroundStyle = styled.div`
  animation: 
    ${isMobile ? 'none' : isAtTop ? 'none' :
      isDarkModeAnimationRunning && isAtTop ? 'none' :
        isDarkModeAnimationRunning && !isAtTop && isAtTheBannerRange ? retractAnimation :
          isDarkModeAnimationRunning && !isAtTop && !isAtTheBannerRange ? retractAnimation :
            (!isDarkModeAnimationRunning && isAtTop ? expandAnimation :
              (isAtTheBannerRange ? expandAnimation :
                (retract ? retractAnimation : expandAnimation)))
    } 0.2s forwards;
    background-color: ${isAtTop ? `rgba(0, 0, 0, 0)` : `rgba(255, 255, 255, 0.7)`};
    display: flex;
    height: 100%;
    width: 100vw;
    z-index: 1;

    @media ${props => props.theme.breakpoints.mobile} {
      height: 100%;
      ${isMobile && isAtTop && isSidebarActive ?
          `background-color: rgba(255, 255, 255, 0.7);`
        :
          `background-color: rgba(0, 0, 0, 0);`
      }
    }
  `;

  const BackgroundStyleBlur = styled.div`
    &::before {
      animation: 
      ${isMobile ? 'none' : isAtTop ? 'none' :
      isDarkModeAnimationRunning && isAtTop ? 'none' :
        isDarkModeAnimationRunning && !isAtTop && isAtTheBannerRange ? retractAnimation :
          isDarkModeAnimationRunning && !isAtTop && !isAtTheBannerRange ? retractAnimation :
            (!isDarkModeAnimationRunning && isAtTop ? expandAnimation :
              (isAtTheBannerRange ? expandAnimation :
                (retract ? retractAnimation : expandAnimation)))} 0.2s forwards,

      ${isMobile ? 'none' : (isDarkModeAnimationRunning && isAtTop ? 'none' :
      isDarkModeAnimationRunning && !isAtTop && isAtTheBannerRange ? expandForDarkMode :
        isDarkModeAnimationRunning && !isAtTop && !isAtTheBannerRange ? expandForDarkMode : 'none')} 1.5s forwards,

      ${isMobile ? 'none' : (!isAtTop && isDarkModeAnimationRunning && isDarkMode ? fadeOutForDarkMode :
      !isAtTop && isDarkModeAnimationRunning && !isDarkMode ? fadeInForDarkMode :
        !isAtTop && !isDarkModeAnimationRunning ? 'none' : 'none'
    )} 1.5s forwards;
      background-color: ${isAtTop ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.7)'};
      backdrop-filter: blur(2px);
      content: '';
      height: 160%;
      position: absolute;
      -webkit-backdrop-filter: blur(2px);
      width: 100vw;
      z-index: -1;

      @media ${props => props.theme.breakpoints.smalldesktop} {
        height: 100%;
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
    font-size: 1.8vh;
    height: 2vw;
    justify-content: center;
    padding: 5px;
    width: 9vw;

    @media ${props => props.theme.breakpoints.smalldesktop} {
      align-items: center;
      border: 1px solid red;
      border-radius: 0.5vw;
      color: ${isAtTop ? 'rgba(255, 255, 255, 1)' : 'color: rgba(0, 0, 0, 1)'};
      display: flex;
      font-size: 2.2vh;
      height: 2vw;
      justify-content: center;
      padding: 5px;
      width: 5vw;
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
    height: 2vw;
    justify-content: center;
    padding: 5px;
    width: 7vw;

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
    background-color: ${props => (props.isDarkMode ? '#EEA200' : isAtTop ? 'grey' : 'black')};
    border: 2px solid transparent;
    border-radius: 50%;
    height: 2.5vw;
    margin-left: 2vw;
    width: 2.5vw;
  `;

  const DarkModeButton = styled.button`
    background-color: ${props => (props.isDarkMode ? '#EEA200' : isAtTop ? 'white' : 'black')};
    border: 1px solid ${props => (props.isDarkMode ? 'white' : isAtTop ? 'black' : 'white')};
    border-radius: 50%;
    color: ${isDarkModeAnimationRunning ? (props => (props.isDarkMode ? 'white' : isAtTop ? 'black' : 'white')) : (props => (props.isDarkMode ? 'white' : isAtTop ? 'black' : 'white'))};
    cursor: pointer;
    height: 100%;
    transition: background-color 0.3s ease;
    width: 100%;

    ${DarkModeContainer}:hover & {
      background-color: ${props => (props.isDarkMode ? '#DE9800' : '#323232')};
      color: ${props => (props.isDarkMode ? 'white' : 'white')};
    }
  `;

  return (
    <ExpandedHeaderContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ height: isMobile ? isAtTop ? '17vh' : '7vh' : '17vh' }}>
      {isSidebarActive ?
        <Sidebar isAtTop={isAtTop}/>
        :
        <></>
      }
      {isAtTop && !isMobile ? <TopBar /> : <></>}
      <BackgroundStyle>
        <BackgroundStyleBlur />
        <HeaderStyle>
          <ImgStyleLogo src={'/img/tokyoLogo.png'} alt="ZloLogo"
            style={isAtTop && !isMobile ? { position: 'absolute', width: '15vh', height: 'auto', top: '10vh', left: '10vw', opacity: 1 } :
              isAtTop && isMobile ? { position: 'absolute', width: '7vh', height: 'auto', top: '5vh', left: '10vw', opacity: 1 } :
                { opacity: 0 }}
          />
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
                    <DarkModeIcon icon={isDarkMode ? faSun : faMoon} rotate={rotateIcon} />
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
              <Icon icon={isMobile ? faBars : faCartShopping} onClick={isMobile ? () => toggleSidebar() : () => { }} />
            </StyledList>
          }
        </StyledDiv>
      </BackgroundStyle>
    </ExpandedHeaderContainer>
  );
}

export default Header;
