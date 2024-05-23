import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import FormBanner from '../components/banners/FormBanner';
import SolutionsCards from '../components/cards/SolutionsCards';
import CardCarousel from '../components/carousels/CardCarousel';
import Cards from '../components/cards/Cards';
import Banner from '../components/banners/Banner';
import Footer from '../components/footer/Footer';
import OptionsFooter from '../components/footer/OptionsFooter';

import MainCarousel from '../components/carousels/MainCarousel';

const Container = styled.div`
  width: 100vw;
`;

const CenterBottomImage = styled.img`
  position: absolute;
  bottom: -7.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 5%;
  height: auto;
  z-index: 1;

  @media ${props => props.theme.breakpoints.mobile} {
    bottom: -2.5%;
    width: 12%;
  }
`;
const CenterBottomImage2 = styled.img`
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  width: 0.6%;
  height: auto;
  z-index: 1;

  @media ${props => props.theme.breakpoints.mobile} {
    bottom: 4%;
    width: 2%;
  }
`;

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize(); // Define o estado inicial

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <CenterBottomImage src="../img/TokyoLogo.png" alt="Outra descrição da imagem" />
      <CenterBottomImage2 src="../img/dotsImage.png" alt="Outra descrição da imagem" />
      <MainCarousel />
      <Cards />
      <Banner link={'/'} image={'../img/banner.png'} />
      <CardCarousel />
      <FormBanner />{/*Isso que ta quebrando tudo o overflow*/}
      <OptionsFooter />
      {/*<SolutionsCards />*/}
      {isMobile ?
        <></>
        :
        <Footer />
      }
    </Container>
  );
}

export default Home;
