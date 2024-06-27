import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import { useScreenPositionContext } from '../../context/ScreenPositionProvider';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.mobile} {
  }
`;

const FirstDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5% 0%;

  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
  }
`;

const FirstPart = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    margin-top: 20%;
  }
`;

const Line = styled.div`
  width: 85%;
  height: 2px;
  background-color: orange;
  margin-left: 15%;

  @media ${props => props.theme.breakpoints.mobile} {
    height: 2px;
    width: 85%;
    margin: auto;
  }
`;

const Title = styled.h2`
  position: absolute;
  left: 10%;
  font-size: 2rem;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
        font-size: 2rem;
        margin-bottom: 2.5%;
    }

    @media ${props => props.theme.breakpoints.largeDesktop} {
        font-size: 1.5rem;
        margin-bottom: 3.5%;
    }

    @media ${props => props.theme.breakpoints.smallDesktop} {
        font-size: 1.5rem;
        margin-bottom: 4%;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        font-size: 1.5rem;
        margin-bottom: 6%;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        left: 8%;
        margin-bottom: 10%;
        font-size: 1.5rem;
    }
`;

const SecondPart = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10% 0 2%;

  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const UpperText = styled.p`
    font-size: 1.15rem;
    color: ${props => props.isDarkMode ? 'white' : 'grey'};

    @media ${props => props.theme.breakpoints.hugeDesktop} {
        font-size: 1.1rem;
    }

    @media ${props => props.theme.breakpoints.largeDesktop} {
        font-size: 1rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        width: 76%;
        margin: 4% 15% 0% 4%;
        font-size: 1rem;
    }
`;

const SecondDiv = styled.div`
  display: flex;
  justify-content: center;

  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
    width: 100%;
    margin-top: 5%;
}
`;

const Card = styled.div`
    width: 25%;
    border: 1px solid ${props => props.isDarkMode ? 'black' : 'transparent'};
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;

    @media ${props => props.theme.breakpoints.mobile} {
        width: 80%;
        margin: 0 auto;
        margin-top: 2%;
    }

    &:hover {
        border-color: orange;
        button {
        background-color: orange;
        }
  }
`;

const CardImage = styled.img`
    height: 50%;
`;

const CardTitle = styled.h3`
    display: flex; 
    align-items: center;
    text-align: left;
    font-weight: bold;
    font-size: 1.15rem;
    padding: 0 1vw;
    color: ${props => props.isDarkMode ? 'orange' : 'black'};

    @media ${props => props.theme.breakpoints.hugeDesktop} {
        font-size: 1.1rem;
        min-height: 6vh;
    }

    @media ${props => props.theme.breakpoints.largeDesktop} {
        font-size: 1.1rem;
        min-height: 9vh;
    }

    @media ${props => props.theme.breakpoints.smallDesktop} {
        font-size: 1rem;
        min-height: 8vh;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        font-size: 1rem;
        min-height: 8vh;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        font-size: 1.2rem;
        min-height: 8vh;
    }
`;


const CardText = styled.p`
    text-align: left;
    font-size: 1rem;
    color: ${props => props.isDarkMode ? 'white' : 'grey'};
    padding: 0 1vw;

    @media ${props => props.theme.breakpoints.hugeDesktop} {
        font-size: 1rem;
        
    }

    @media ${props => props.theme.breakpoints.largeDesktop} {
        font-size: 1rem;
        min-height: 10vh;
    }

    @media ${props => props.theme.breakpoints.smallDesktop} {
        font-size: 1rem;
        min-height: 17vh;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        font-size: 1rem;
        min-height: 25vh;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        font-size: 1rem;
        min-height: 15vh;
    }

    span {
        color: orange;
    }
`;

const ButtonWrapper = styled.div`
    position: absolute;
    width: 4vw;
    height: 4vw;
    bottom: 0;
    right: 0;
    margin-right: 2%;
    margin-bottom: 2%;

    @media ${props => props.theme.breakpoints.hugeDesktop} {
        width: 3vw;
        height: 3vw;
    }

    @media ${props => props.theme.breakpoints.largeDesktop} {
        width: 3vw;
        height: 3vw;
    }

    @media ${props => props.theme.breakpoints.smallDesktop} {
        width: 3vw;
        height: 3vw;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        width: 3vw;
        height: 3vw;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        width: 8vw;
        height: 8vw;
    }
`;

const Button = styled.button`
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    border: 1px solid orange;
    background-color: transparent;

    @media ${props => props.theme.breakpoints.hugeDesktop} {
        width: 3vw;
        height: 3vw;
    }

    @media ${props => props.theme.breakpoints.largeDesktop} {
        width: 3vw;
        height: 3vw;
    }

    @media ${props => props.theme.breakpoints.smallDesktop} {
        width: 3vw;
        height: 3vw;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        width: 3vw;
        height: 3vw;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        width: 8vw;
        height: 8vw;
    }
`;

const ThirdDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10% 0%;
`;

const BottomTitle = styled.h3`
    font-weight: bold;
    font-size: 2.5rem;
    max-width: 70%;

    @media ${props => props.theme.breakpoints.hugeDesktop} {
        font-size: 2rem;
    }

    @media ${props => props.theme.breakpoints.largeDesktop} {
        font-size: 2rem;
    }

    @media ${props => props.theme.breakpoints.smallDesktop} {
        font-size: 2rem;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        font-size: 1.5rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
       font-size: 1.5rem;
    }
`;

const ContentContainer = styled.div`
    padding: 4%;
`;

const Cards = () => {
    const { isMobile, isTablet, isDarkMode } = useScreenPositionContext();

    const navigate = useNavigate();

    return (
        <Container>
            <FirstDiv>
                <FirstPart>
                    <Line />
                    <Title isDarkMode={isDarkMode}>Tudo que você precisa!</Title>
                </FirstPart>
                <SecondPart>
                    <UpperText isDarkMode={isDarkMode}>
                        {isTablet ?
                            'De componentes eletrônicos a cabos montados do seu jeito, oferecemos soluções personalizadas para atender exatamente às suas necessidades.'
                            : 'De componentes eletrônicos a cabos montados do seu jeito, oferecemos soluções personalizadas para atender exatamente às suas necessidades. Com nossa vasta gama de produtos e expertise, garantimos que você tenha tudo o que precisa para os seus projetos e desafios do dia a dia.'}
                    </UpperText>
                </SecondPart>
            </FirstDiv>
            <SecondDiv>
                <Card onClick={isMobile ? () => setTimeout(() => { navigate('/') }, 1000) : () => { navigate('/') }} isDarkMode={isDarkMode}>
                    <CardImage src="../img/cards/motherBoardImg.png" alt="Card Image" />
                    <ContentContainer>
                        <CardTitle isDarkMode={isDarkMode}>Mais de 12.000 itens em estoque</CardTitle>
                        <CardText isDarkMode={isDarkMode}>Componentes Eletrônicos, Cabos e Fios, Químicos, Ferramentas, Pilhas e Baterias, Informática, Elétrica, Conversores, Adaptadores, Rede, Robótica, IOT e <span>muito mais!</span></CardText>
                        <ButtonWrapper>
                            <Button></Button>
                        </ButtonWrapper>
                    </ContentContainer>
                </Card>
                <Card onClick={isMobile ? () => setTimeout(() => { navigate('/') }, 1000) : () => { navigate('/') }} isDarkMode={isDarkMode}>
                    {/*<CardImage src="../img/cards/wireImg.png" alt="Card Image" />*/}
                    <CardImage src="../img/cards/motherBoardImg.png" alt="Card Image" />
                    <ContentContainer>
                        <CardTitle isDarkMode={isDarkMode}>Montagem de Cabos Personalizados</CardTitle>
                        <CardText isDarkMode={isDarkMode}>Profissionais especializados na montagem de cabos de áudio, vídeo, dados/serial, energia para facilitar ainda mais o seu dia a dia ou da sua empresa!</CardText>
                        <ButtonWrapper>
                            <Button></Button>
                        </ButtonWrapper>
                    </ContentContainer>
                </Card>
                <Card onClick={isMobile ? () => setTimeout(() => { navigate('/') }, 1000) : () => { navigate('/') }} isDarkMode={isDarkMode}>
                    {/*<CardImage src="../img/cards/ShopCartImg.png" alt="Card Image" />*/}
                    <CardImage src="../img/cards/motherBoardImg.png" alt="Card Image" />
                    <ContentContainer>
                        <CardTitle isDarkMode={isDarkMode}>Suprimentos de produtos personalizados</CardTitle>
                        <CardText isDarkMode={isDarkMode}>Profissionais especializados na montagem de cabos de áudio, vídeo, dados/serial, energia para facilitar ainda mais o seu dia a dia ou da sua empresa!</CardText>
                        <ButtonWrapper>
                            <Button></Button>
                        </ButtonWrapper>
                    </ContentContainer>
                </Card>
            </SecondDiv>
            <ThirdDiv>
                <BottomTitle isDarkMode={isDarkMode}>As melhores ferramentas estão aqui!</BottomTitle>
            </ThirdDiv>
        </Container>
    );
};

export default Cards;
