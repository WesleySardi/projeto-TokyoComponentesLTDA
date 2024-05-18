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

function Home() {
  return (
    <Container>
      <MainCarousel />
      <Cards />
      <Banner link={'/'} image={'../img/banner.png'} />
      <CardCarousel />
      <FormBanner />
      <OptionsFooter />
      {/*<SolutionsCards />*/}
      <Footer />
    </Container>
  );
}

export default Home;
