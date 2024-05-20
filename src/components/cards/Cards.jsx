import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 5vh 0 10vh 0;

  @media ${props => props.theme.breakpoints.mobile} {
     height: 100%;
  }
`;

const FirstDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 100%;

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
    margin-top: 10%;
  }
`;

const Line = styled.div`
  width: 85%;
  height: 2px;
  background-color: orange;
  margin-left: 15%;

  @media ${props => props.theme.breakpoints.mobile} {
    height: 4px;
    width: 85%;
    margin: auto;
  }
`;

const Title = styled.h2`
  position: absolute;
  left: 10%;
  margin-bottom: 3%;
  font-size: 2rem;

  @media ${props => props.theme.breakpoints.mobile} {
    left: 8%;
    margin-bottom: 8%;
    font-size: 4.5rem;
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
    color: grey;

    @media ${props => props.theme.breakpoints.mobile} {
        width: 76%;
        margin: 4% 15% 0% 4%;
        font-size: 3.5rem;
    }
`;

const SecondDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60%;

  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
    height: 100%;
    width: 100%;
    margin-top: 5%;
}
`;

const Card = styled.div`
    width: 25%;
    height: 100%;
    border: 1px solid transparent;
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
        height: 60vh;
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
    width: 50%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const CardTitle = styled.h3`
    height: 10%;
    text-align: left;
    font-weight: bold;
    font-size: 1.15rem;
    padding: 1vh 0;

    @media ${props => props.theme.breakpoints.mobile} {
        font-size: 4.5rem;
        padding: 0vh 2vw 2vh 2vw;
    }
`;

const CardText = styled.p`
    height: 40%;
    text-align: left;
    color: grey;
    font-size: 1rem;
    padding: 1vh 0;

    @media ${props => props.theme.breakpoints.mobile} {
        font-size: 3.5rem;
        padding: 1vh 2vw;
    }
`;

const ButtonWrapper = styled.div`
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const Button = styled.button`
    width: 4vh;
    height: 4vh;
    border-radius: 50%;
    border: 1px solid orange;
    background-color: transparent;

    @media ${props => props.theme.breakpoints.mobile} {
        width: 4vh;
        height: 4vh;
        margin-right: 3%;
    }
`;

const ThirdDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 6%;
    margin-top: 6%;

    @media ${props => props.theme.breakpoints.mobile} {
        width: 80%;
        margin: auto;
        margin-top: 15%;
    }
`;

const BottomTitle = styled.h3`
    font-weight: bold;
    font-size: 2.5rem;

    @media ${props => props.theme.breakpoints.mobile} {
        font-size: 6rem;
    }
`;

const StyledLink = styled(Link)`
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        color: orange;
    }
`;

const ContentContainer = styled.div`
    padding: 1vw;
`;

const Cards = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallDesktop, setIsSmallDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
            setIsSmallDesktop(window.innerWidth <= 1279);
        };

        handleResize(); // Define o estado inicial

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container>
            <FirstDiv>
                <FirstPart>
                    <Line />
                    <Title>Tudo que você precisa!</Title>
                </FirstPart>
                <SecondPart>
                    <UpperText>De componentes eletrônicos a cabos montados do seu jeito, oferecemos soluções personalizadas para atender exatamente às suas necessidades. Com nossa vasta gama de produtos e expertise, garantimos que você tenha tudo o que precisa para os seus projetos e desafios do dia a dia.</UpperText>
                </SecondPart>
            </FirstDiv>
            <SecondDiv>
                <Card>
                    <CardImage src="../img/motherBoardImg.png" alt="Card Image" style={isMobile ? { height: '40%', margin: 'auto' } : { height: '70%', margin: 'auto' }} />
                    <ContentContainer style={{ height: '30%' }}>
                        <CardTitle>Mais de 12.000 itens em estoque</CardTitle>
                        <CardText>Componentes Eletrônicos, Cabos e Fios, Químicos, Ferramentas, Pilhas e Baterias, Informática, Elétrica, Conversores, Adaptadores, Rede, Robótica, IOT e <StyledLink to="/">muito mais!</StyledLink></CardText>
                        <ButtonWrapper>
                            <Button></Button>
                        </ButtonWrapper>
                    </ContentContainer>
                </Card>
                <Card>
                    <CardImage src="../img/wireImg.png" alt="Card Image" style={isMobile ? { height: '55%', paddingBottom: '20%', margin: '0 auto' } : { height: '60%', paddingBottom: '5%', margin: '0 auto' }} />
                    <ContentContainer style={{ height: '35%' }}>
                        <CardTitle>Montagem de Cabos Personalizados</CardTitle>
                        <CardText>Profissionais especializados na montagem de cabos de áudio, vídeo, dados/serial, energia para facilitar ainda mais o seu dia a dia ou da sua empresa!</CardText>
                        <ButtonWrapper>
                            <Button></Button>
                        </ButtonWrapper>
                    </ContentContainer>
                </Card>
                <Card>
                    <CardImage src="../img/ShopCartImg.png" alt="Card Image" style={isMobile ? { height: '30%', margin: 'auto' } : { height: '40%', margin: 'auto' }} />
                    <ContentContainer style={{ height: '30%' }}>
                        <CardTitle>Suprimentos de produtos personalizados</CardTitle>
                        <CardText>Profissionais especializados na montagem de cabos de áudio, vídeo, dados/serial, energia para facilitar ainda mais o seu dia a dia ou da sua empresa!</CardText>
                        <ButtonWrapper>
                            <Button></Button>
                        </ButtonWrapper>
                    </ContentContainer>
                </Card>
            </SecondDiv>
            <ThirdDiv>
                <BottomTitle>As melhores ferramentas estão aqui!</BottomTitle>
            </ThirdDiv>
        </Container>
    );
};

export default Cards;
