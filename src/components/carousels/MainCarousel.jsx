import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useScreenPositionContext } from '../../context/ScreenPositionProvider';

const CarouselContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: ${props => props.index * 100}%;
  transition: left 0.5s ease-in-out;
`;

const Content = styled.div`
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  margin: auto;
  font-weight: bold;
  width: 90%;

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 2.5rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 2.5rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 2.2rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  width: 90%;
  margin: 2% auto 4% auto;
  color: red;

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  background-color: rgba(170, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0.7vw;
  font-weight: bold;

  @media ${(props) => props.theme.breakpoints.largeDesktop} {
    font-size: 1.2rem;
    padding: 1.5vh 0;
    width: 30%;
  }

  @media ${(props) => props.theme.breakpoints.smallDesktop} {
    font-size: 1.2rem;
    padding: 1.5vh 0;
    width: 35%;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.2rem;
    padding: 1.5vh 0;
    width: 35%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.2rem;
    padding: 1.5vh 0;
    width: 40%;
  }
`;

const AbsoluteImage = styled.img`
  position: absolute;
  bottom: 5%;
  left: 2%;
  height: auto;

  @media ${props => props.theme.breakpoints.largeDesktop} {
    width: 30vh;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    width: 40vh;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width: 35vh;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 35vh;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 8%;
  right: 8%;
  display: flex;
  align-items: center;

  @media ${props => props.theme.breakpoints.largeDesktop} {
    bottom: 8%;
    right: 4%;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    bottom: 8%;
    right: 4%;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    bottom: 8%;
    right: 4%;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    bottom: 4%;
    right: 4%;
  }
`;

const Arrow = styled.div`
  font-size: 3rem;
  color: white;
  cursor: pointer;
  margin: 0 10px;

  @media ${props => props.theme.breakpoints.largeDesktop} {
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2.5rem;
  }
`;

const images = [
  {
    url: '../img/backgrounds/wallpaperWorld.jpg',
    title: 'Explore o mundo da eletrônica!',
    text: 'Mais de 12.000 itens em estoque!',
    buttonText: 'Confira já!'
  },
  {
    url: '../img/backgrounds/wallpaperWorld2.jpg',
    title: 'Explore o mundo da eletrônica!',
    text: 'Mais de 12.000 itens em estoque!',
    buttonText: 'Confira já!'
  },
  {
    url: '../img/backgrounds/wallpaperWorld3.jpg',
    title: 'Explore o mundo da eletrônica!',
    text: 'Mais de 12.000 itens em estoque!',
    buttonText: 'Confira já!'
  },
];

const StyledIconLeft = styled(FontAwesomeIcon)`
  color: red;
  ${({ currentIndex, images }) =>
    currentIndex === 0
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `}
`;

const StyledIconRight = styled(FontAwesomeIcon)`
  color: red;
  ${({ currentIndex, images }) =>
    currentIndex === images.length - 1
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `}
`;

const MainCarousel = () => {
  const { isMobile, isDarkMode } = useScreenPositionContext();

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <Slide key={index} bgImage={image.url} index={index - currentIndex}>
          <Content>
            <Title>{image.title}</Title>
            <Text>{image.text}</Text>
            <Button>{image.buttonText}</Button>
          </Content>
        </Slide>
      ))}
      {isMobile ? <></> : <AbsoluteImage src="../img/icones/wsBalloonImage.png" alt="Descrição da imagem" />}
      <ArrowContainer>
        <Arrow onClick={prevSlide}><StyledIconLeft icon={faArrowLeft} currentIndex={currentIndex} images={images} /></Arrow>
        <Arrow onClick={nextSlide}><StyledIconRight icon={faArrowRight} currentIndex={currentIndex} images={images} /></Arrow>
      </ArrowContainer>
    </CarouselContainer>
  );
};

export default MainCarousel;
