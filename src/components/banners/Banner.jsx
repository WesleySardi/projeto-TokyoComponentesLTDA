import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = (props) => {

  const FullScreenImage = styled.div`
  width: 100vw;
  height: 70vh;
  margin: 6% 0;
  background-image: url(${props.image});
  background-size: cover;
  background-position: center;
  `;

  return (
    <Link to={props.link}>
      <FullScreenImage />
    </Link>
  );
};

export default Banner;
