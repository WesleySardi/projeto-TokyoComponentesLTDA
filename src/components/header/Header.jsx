import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import TopBar from './TopBar';

const StyledContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 20%;
margin: 0 1vw;
`;

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const ComboBoxContainer = styled.div`
position: relative;
display: inline-block;

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
position: absolute;
display: none;
background-color: #f9f9f9;
min-width: 170px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
z-index: 1;
border-radius: 0.5vw;

&:hover {
  display: block;
}
`;

const ComboBoxListItem = styled(Link)`
font-size: 1.1rem;
display: block;
padding: 12px 16px;
text-align: left;
cursor: pointer;
border-radius: 0.5vw;
text-decoration: none;

&:hover {
  background-color: #ddd;
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

const expandForDarkModeTopZero = keyframes`
    0% {
      height: 17vh;
    }
    75% {
      height: 100vh;
    }
    100% {
      height: 0vh;
    }
  `;

const fadeInForDarkMode = keyframes`
    from {
        background-color: rgba(255, 255, 255, 0.6);
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
      background-color: rgba(255, 255, 255, 0.6);
    }
`;

const HeaderStyle = styled.div`
    width: 100%;
    display: flex;
  `;

const ImgStyleLogo = styled.img`
    /*width: 5vw,
    padding: 4vh,
    opacity: 1*/
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

const StyledList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
  `;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 10px;
  `;

const IconComboBox = styled(FontAwesomeIcon)`
    margin-left: 5px;
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

const DarkModeIcon = styled(FontAwesomeIcon)`
    font-size: 1rem;
    ${props =>
    props.rotate &&
    css`
        animation: ${rotateAnimation} 0.3s linear;
      `};
  `;

const ExpandedHeaderContainer = styled.div`
    position: fixed;
    height: 17vh;
    width: 100vw;
    background-color: transparent;
    z-index: 1000;
`;

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDarkModeAnimationRunning, setIsDarkModeAnimationRunning] = useState(false);

  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtTheBannerRange, setIsAtTheBannerRange] = useState(true);

  const [rotateIcon, setRotateIcon] = useState(false);

  const [tokyoLogo] = useState('/img/tokyoLogo.png');

  const [tokyoLogoStyleZeroOpacity] = useState({
    width: '5vw',
    padding: '4vh 4vh 4vh 5vw',
    opacity: 0
  });

  const [tokyoLogoStyleAtTop] = useState({
    position: 'absolute',
    width: '6vw',
    height: 'auto',
    top: '8vh',
    left: '10vw',
    opacity: 1
  });

  const [retract, setRetract] = useState(false);

  const [animationActive, setAnimationActive] = useState(false);

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

  const BackgroundStyle = styled.div`
    background-color: ${isAtTop ? `rgba(0, 0, 0, 0)` : `rgba(255, 255, 255, 0.6)`};
    height: 17vh;
    width: 100vw;
    display: flex;
    justify-content: left;
    z-index: 1000;
    animation: 
    ${isAtTop ? 'none' :
      isDarkModeAnimationRunning && isAtTop ? 'none' :
        isDarkModeAnimationRunning && !isAtTop && isAtTheBannerRange ? retractAnimation :
          isDarkModeAnimationRunning && !isAtTop && !isAtTheBannerRange ? retractAnimation :
            (!isDarkModeAnimationRunning && isAtTop ? expandAnimation :
              (isAtTheBannerRange ? expandAnimation :
                (retract ? retractAnimation : expandAnimation)))
    } 0.2s forwards;
  `;

  const BackgroundStyleBlur = styled.div`
    z-index: -1;
    height: 17vh;

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100vw;
      background-color: ${isAtTop ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.6)'};
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      animation: 
      ${isAtTop ? 'none' :
      isDarkModeAnimationRunning && isAtTop ? 'none' :
        isDarkModeAnimationRunning && !isAtTop && isAtTheBannerRange ? retractAnimation :
          isDarkModeAnimationRunning && !isAtTop && !isAtTheBannerRange ? retractAnimation :
            (!isDarkModeAnimationRunning && isAtTop ? expandAnimation :
              (isAtTheBannerRange ? expandAnimation :
                (retract ? retractAnimation : expandAnimation)))} 0.2s forwards,

      ${(isDarkModeAnimationRunning && isAtTop ? 'none' :
      isDarkModeAnimationRunning && !isAtTop && isAtTheBannerRange ? expandForDarkMode :
        isDarkModeAnimationRunning && !isAtTop && !isAtTheBannerRange ? expandForDarkMode : 'none')} 1.5s forwards,

      ${(!isAtTop && isDarkModeAnimationRunning && isDarkMode ? fadeOutForDarkMode :
        !isAtTop && isDarkModeAnimationRunning && !isDarkMode ? fadeInForDarkMode :
        !isAtTop && !isDarkModeAnimationRunning ? 'none' : 'none'
    )} 1.5s forwards;
    }
  `;

  const StyledListItem = styled(Link)`
    font-size: 1.2rem;
    text-align: center;
    color: black;
    width: 7vw;
    text-decoration: none;
    ${isAtTop ? `color: rgba(255, 255, 255, 1);` : `color: rgba(0, 0, 0, 1);`}
  `;

  const StyledListItemAndIcon = styled(Link)`
  font-size: 1.1rem;
    text-align: center;
    color: black;
    width: 9vw;
    text-decoration: none;
    ${isAtTop ? `color: rgba(255, 255, 255, 1);` : `color: rgba(0, 0, 0, 1);`}
    border: 1px solid red;
    border-radius: 0.5vw;
    padding: 1.2vh 0.1vw 1vh 0.1vw;

    &:hover {
      background-color: red;
      color: white;
    }
  `;

  const StyledContactItem = styled(Link)`
  font-size: 1.1rem;
  flex-basis: 50%;
  border: 1px solid red;
  border-radius: 0.5vw;
  padding: 1.2vh 1vw 1vh 1vw;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  ${isAtTop ? `color: rgba(255, 255, 255, 1);` : `color: rgba(0, 0, 0, 1);`}
  
  &:hover {
      background-color: red;
      color: white;
  }
  `;

  const ComboBoxButton = styled.button`
  font-size: 1.2rem;
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
  display: flex;
  ${isAtTop ? `color: rgba(255, 255, 255, 1);` : `color: rgba(0, 0, 0, 1);`}
  `;

  const DarkModeContainer = styled.div`
    background-color: ${props => (props.isDarkMode ? '#EEA200' : isAtTop ? 'grey' : 'black')};
    padding: 1px;
    margin-left: 1vw;
    border: 2px solid transparent;
    border-radius: 50%;
    width: 2.5vw;
    height: 4vh;
  `;

  const DarkModeButton = styled.button`
    background-color: ${props => (props.isDarkMode ? '#EEA200' : isAtTop ? 'white' : 'black')};
    color: ${isDarkModeAnimationRunning ? (props => (props.isDarkMode ? 'white' : isAtTop ? 'black' : 'white')) : (props => (props.isDarkMode ? 'white' : isAtTop ? 'black' : 'white'))};
    border: 1px solid ${props => (props.isDarkMode ? 'white' : isAtTop ? 'black' : 'white')};
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 50%;

    ${DarkModeContainer}:hover & {
      background-color: ${props => (props.isDarkMode ? '#DE9800' : '#323232')};
      color: ${props => (props.isDarkMode ? 'white' : 'white')};
    }
  `;

  return (
    <ExpandedHeaderContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isAtTop ? <TopBar /> : <></>}
      <BackgroundStyle>
        <BackgroundStyleBlur />
        <HeaderStyle>
          <ImgStyleLogo src={tokyoLogo} alt="ZloLogo" style={isAtTop ? tokyoLogoStyleAtTop : tokyoLogoStyleZeroOpacity} />
        </HeaderStyle>
        <StyledDiv>
          <StyledList style={isAtTop ? { padding: '10vh 5vw 0 0' } : { padding: '0 5vw 0 0' }}>
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
              <Icon icon={faCartShopping} />
              E-commerce
            </StyledListItemAndIcon>
          </StyledList>
        </StyledDiv>
      </BackgroundStyle>
    </ExpandedHeaderContainer>
  );
}

export default Header;
