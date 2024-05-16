import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import FormBanner from '../components/FormBanner';
import SolutionsCards from '../components/SolutionsCards';
import CardCarousel from '../components/CardCarousel';
import Cards from '../components/Cards';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import OptionsFooter from '../components/OptionsFooter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import TopBar from '../components/TopBar';

const Container = styled.div`
  //background-color: #161616;
`;

const CarouselContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: black;
`;

const TextContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
height: 50%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
color: white;
`;

const TextTitle = styled.h2`
  font-size: 3.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  font-weight: bold;
  width: 50%;
  //color: #d35400;
  color: white;
`;

const TextDescription = styled.p`
  font-size: 1.5vw;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: bold;
  font-style: italic;
  color: red;
  //color: #d35400;
  margin: auto;
  width: 60%;
`;

const Button = styled.button`
  font-size: 1.4vw;
  margin: auto;
  height: 8vh;
  width: 15vw;
  color: white;
  border: none;
  border-radius: 1vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #9b111e, #ED2033); /* Degradê do vermelho escuro para o vermelho claro */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3); /* Leve sombra */
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 0;
`;

const LeftArrow = styled(ArrowButton)`
  left: 0;
`;

const RightArrow = styled(ArrowButton)`
  right: 0;
`;

const images = [
  '../img/backgroundHome.png',
  '../img/backgroundHome.png',
  '../img/backgroundHome.png',
  '../img/backgroundHome.png'
];

const textContents = [
  { title: 'Explore o mundo da eletrônica!', description: 'Mais de 12.000 itens em estoque!' },
  { title: 'O controle da sua empresa em um único lugar!', description: 'Oferecemos soluções completas para empresas de todos os tamanhos, do início ao fim.' },
  { title: 'A Maior Provedora de Soluções em Tecnologia', description: 'Soluções de ponta a ponta para empresas de todos os portes.' },
  { title: 'Centralize o controle da sua empresa em um único lugar!', description: '+20 anos investindo em P&D de softwares, somos o líder de crescimento no Brasil.' },
  // Add more text contents corresponding to images
];

const Icon = styled(FontAwesomeIcon)`
    margin: 1vw;
    color: white;
    font-size: 3rem;
  `;

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideOutAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setDirection('right'); // Change the direction to right for the previous button
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setDirection('left'); // Change the direction to left for the next button
  };

  const handleButtonClick = () => {
    console.log('Botão clicado!');
  };

  /*useEffect(() => {
    const intervalId = setInterval(goToNext, 15000); // Avança a cada 5 segundos
    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, [currentIndex]);*/

  const CarouselImage = styled.img`
    width: 100%;
    height: 100%;
    //object-fit: cover;
    animation: ${({ isPrevious }) =>
      isPrevious ? css`${slideOutAnimation} 0.5s forwards` : css`${slideInAnimation} 0.5s forwards`
    };
  `;

  return (
    <Container>
      <CarouselContainer>
        <LeftArrow onClick={goToPrevious}><Icon icon={faChevronLeft} /></LeftArrow>
        <CarouselImage
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          isPrevious={direction === 'right'} // Check the direction for the previous button
        />
        <TextContainer>
          <TextTitle>{textContents[currentIndex].title}</TextTitle>
          <TextDescription>{textContents[currentIndex].description}</TextDescription>
          <Button onClick={handleButtonClick}>Confira já</Button>
        </TextContainer>
        <RightArrow onClick={goToNext}><Icon icon={faChevronRight} /></RightArrow>
      </CarouselContainer>
      <Cards/>
      <Banner link={'/'} image={'../img/banner.png'}/>
      <CardCarousel/>
      <FormBanner />
      <OptionsFooter/>
      {/*<SolutionsCards />*/}
      <Footer/>
    </Container>
  );
}

export default Home;
