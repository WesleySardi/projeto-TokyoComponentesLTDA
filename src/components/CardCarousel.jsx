import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  height: 40vh;
  margin: 10vh 0;
`;

const LeftPart = styled.div`
  flex: 20%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  background-color: #f0f0f0;
  padding: 0% 0% 0% 10%;
`;

const RightPart = styled.div`
  flex: 70%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  margin-bottom: 1%;
  color: red;
  font-weight: bold;
  font-size: 3vw;
`;

const Text = styled.p`
  font-size: 2vw;
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const Card = styled(Link)`
  width: 33.33%;
  min-width: 33.33%;
  height: 37vh;
  flex-shrink: 0;
  position: relative;
  background-color: white;
  border-radius: 3%;
  margin: 0 1%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #f0f0f0, white);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 50%;
  pointer-events: none;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
`;

const CardTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  max-width: 80%;
  height: 50%;
  font-weight: bold;
  user-select: none;
`;

const Tag = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-150%);
  //background-color: orange;
  background-color: red;
  padding: 5px;
  color: white;
  font-weight: bold;
  user-select: none;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;

const LeftButton = styled(Button)`
  left: 0;
  height: 100%;
  width: 7vw;
  background: linear-gradient(to right, transparent, transparent);

  &:hover {
    background: linear-gradient(to right, #f0f0f0, transparent);
  }
`;

const RightButton = styled(Button)`
  right: 0;
  height: 100%;
  width: 7vw;
  background: linear-gradient(to left, #f0f0f0, transparent);

  &:hover {
    background: linear-gradient(to left, white, transparent);
`;

const IconComboBox = styled(FontAwesomeIcon)`
`;

const data = [
    {
        image: '../img/Card3.png',
        title: '10 Dicas para analisar Circuitos Impressos',
        tag: 'Eletrônica',
        link: '/'
    },
    {
        image: '../img/Card2.png',
        title: 'Como entrar na mundo da robótica com projetos reais',
        tag: 'Robótica',
        link: '/'
    },
    {
        image: '../img/Card1.png',
        title: '10 Dicas para analisar Circuitos Impressos',
        tag: 'Eletrônica',
        link: '/'
    },
    {
        image: '../img/Card3.png',
        title: 'Como entrar na mundo da robótica com projetos reais',
        tag: 'Robótica',
        link: '/'
    },
    {
        image: '../img/Card2.png',
        title: '10 Dicas para analisar Circuitos Impressos',
        tag: 'Eletrônica',
        link: '/'
    }
];

const YourComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimationRunning, setIsAnimationRunning] = useState(false);

    const timerForAnimation = () => {
        setIsAnimationRunning(true);
        setTimeout(() => {
            setIsAnimationRunning(false);
        }, 300);
    }

    const handleRightClick = () => {
        if (!isAnimationRunning) {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % data.length;
                if (nextIndex === data.length - 1) {
                    setCurrentIndex(0);
                }
                return nextIndex;
            });
            timerForAnimation();
        }
    };

    const handleLeftClick = () => {
        if (!isAnimationRunning) {
            setCurrentIndex((prevIndex) => {
                let nextIndex = (prevIndex - 1 + data.length) % data.length;
                if (prevIndex === 0) {
                    nextIndex = data.length - 2;
                }
                return nextIndex;
            });
            timerForAnimation();
        }
    };

    return (
        <Container>
            <LeftPart>
                <Title>Posts</Title>
                <Text>Destaques do Blog</Text>
            </LeftPart>
            <RightPart>
                <LeftButton onClick={handleLeftClick}>{/*<IconComboBox icon={faChevronLeft} />*/}</LeftButton>
                <Carousel style={{ transform: `translateX(-${currentIndex * 35.33}%)` }}>
                    {data.map((item, index) => (
                        <Card key={index} to={item.link}>
                            <CardImage src={item.image} alt={`Image ${index + 1}`} />
                            <Tag>{item.tag}</Tag>
                            <CardTitle>{item.title}</CardTitle>
                        </Card>
                    ))}
                </Carousel>
                <RightButton onClick={handleRightClick}>{/*<IconComboBox icon={faChevronRight} />*/}</RightButton>
            </RightPart>
        </Container>
    );
};

export default YourComponent;
