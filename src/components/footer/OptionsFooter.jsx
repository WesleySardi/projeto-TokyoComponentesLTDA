import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

import { useScreenPositionContext } from '../../context/ScreenPositionProvider';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 40vh;
  padding-top: 10vh;
  margin-bottom: 7vh;

  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
    align-itens: center;
    justify-context: center;
    margin: auto;
    height: 100%;
    padding-top: 0vh;
    margin-top: 10vh;
    margin-bottom: 5vh;
  }
`;

const Part = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.mobile} {
    width: 70%;
    margin: 5vh auto;
  }
`;

const PartOne = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: left;
  padding-left: 2vw;

  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const PartOneTop = styled.div`
  height: 30%;
  display: flex;
  justify-content: left;
  align-items: left;

  @media ${props => props.theme.breakpoints.mobile} {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;

  @media ${props => props.theme.breakpoints.mobile} {
    max-width: 30%;
    max-height: 30%;
  }
`;

const PartOneMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  @media ${props => props.theme.breakpoints.mobile} {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 1.1rem;
  text-align: left;
  margin: 4% 0 4% 0;
  font-weight: bold;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.2rem;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    font-size: 1.1rem;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    font-size: 1.1rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.1rem;
    text-align: center;
  }
`;

const Text = styled(Link)`
  font-size: 1rem;
  text-align: left;
  margin: 2% 0 2% 0;
  color: grey;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.1rem;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 0.9rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1rem;
    text-align: center;
  }
`;

const TitlePartOne = styled.h1`
  font-size: 1.2rem;
  text-align: left;
  margin: 6% 0 1% 0;
  font-weight: bold;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.2rem;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    font-size: 1.1rem;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    font-size: 1.1rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
  font-size: 1rem;
  text-align: center;
  }
`;

const TextPartOne = styled.p`
  font-size: 1rem;
  text-align: left;
  margin: 1% 0% 1% 0%;
  color: grey;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.1rem;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    font-size: 1rem;
    margin: 2% 0% 6% 0%;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 0.8rem;
    margin: 2% 0% 4% 0%;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1rem;
    text-align: center;
  }
`;

const PartOneBottom = styled.div`
  display: flex;
  align-items: center;
  margin: 2% 0 2% 0;

  @media ${props => props.theme.breakpoints.tablet} {
    margin-top: 5%;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2vh;
  }
`;

const StyledLink = styled(Link)`
  width: auto;
  height: auto;
  margin-right: 2vw;
`;


const Icon = styled.img`
 width: 1.2vw;
 height: auto;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    width: 1.5vw;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    width: 1.5vw;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    width: 1.5vw;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width: 1.5vw;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 6vw;
  }
`;

const PartTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  @media ${props => props.theme.breakpoints.mobile} {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const PartThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  @media ${props => props.theme.breakpoints.mobile} {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const PartFour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  @media ${props => props.theme.breakpoints.mobile} {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  font-size: 0.9rem;
  width: 40%;
  background-color: red;
  color: white;
  padding: 4% 1% 4% 1%;
  border-radius: 0.5vw;

  @media ${props => props.theme.breakpoints.hugeDesktop} {
    font-size: 1.1rem;
    text-align: center;
    padding: 4% 0% 4% 0%;
    width: 40%;
    border-radius: 0.5vw;
  }

  @media ${props => props.theme.breakpoints.largeDesktop} {
    font-size: 1rem;
    text-align: center;
    padding: 4% 0% 4% 0%;
    width: 55%;
    border-radius: 0.5vw;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    font-size: 1rem;
    text-align: center;
    padding: 4% 0% 4% 0%;
    width: 55%;
    border-radius: 0.5vw;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 0.9rem;
    text-align: center;
    padding: 4% 0% 4% 0%;
    width: 60%;
    border-radius: 1vw;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1rem;
    text-align: center;
    padding: 5% 0% 5% 0%;
    width: 60%;
    border-radius: 2vw;
    margin-top: 2vh;
  }
`;

const OptionsFooter = () => {
  const { isMobile, isDarkMode } = useScreenPositionContext();
  const theme = useTheme();

  return (
    <Container>
      {isMobile ?
        <>
          <Part>
            <PartTwo>
              <Title>Fale conosco</Title>
              <Button>Entrar em contato</Button>
            </PartTwo>
          </Part>
          <Part>
            <PartThree>
              <Title>Links úteis</Title>
              <Text>Fale conosco</Text>
              <Text>Quem somos</Text>
              <Text>Trabalhe conosco</Text>
              <Text>Nossa cultura</Text>
              <Text>Blog</Text>
            </PartThree>
          </Part>
          <Part>
            <PartFour>
              <Title>Ferramentas</Title>
              <Text>Ninja Ai</Text>
              <Text>Calculadora de Resistores</Text>
              <Text>Tabelas de Conversão</Text>
            </PartFour>
          </Part>
          <Part>
            <PartOne>
              <PartOneTop>
                <Image src={theme.images.footerTokyoLogo} alt="Descrição da imagem" />
              </PartOneTop>
              <PartOneMiddle>
                <TitlePartOne>Tokyo Componentes Eletrônicos</TitlePartOne>
                <TextPartOne>
                  Somos uma empresa de tecnologia com mais de 12.000 itens em eletrônica,
                  automação e robótica. Desde 2010, oferecemos soluções inovadoras e um
                  atendimento que compreende suas necessidades.
                </TextPartOne>
              </PartOneMiddle>
              <PartOneBottom>
                <StyledLink><Icon src={theme.images.footerIcons.icon1} /></StyledLink>
                <StyledLink><Icon src={theme.images.footerIcons.icon2} /></StyledLink>
                <StyledLink><Icon src={theme.images.footerIcons.icon3} /></StyledLink>
                <StyledLink><Icon src={theme.images.footerIcons.icon4} /></StyledLink>
                <StyledLink><Icon src={theme.images.footerIcons.icon5} /></StyledLink>
              </PartOneBottom>
            </PartOne>
          </Part>
        </>
        :
        <>
          <Part>
            <PartOne>
              <PartOneTop>
                <Image src={theme.images.footerTokyoLogo} alt="Descrição da imagem" />
              </PartOneTop>
              <PartOneMiddle>
                <TitlePartOne>Tokyo Componentes Eletrônicos</TitlePartOne>
                <TextPartOne>
                  Somos uma empresa de tecnologia com mais de 12.000 itens em eletrônica,
                  automação e robótica. Desde 2010, oferecemos soluções inovadoras e um
                  atendimento que compreende suas necessidades.
                </TextPartOne>
              </PartOneMiddle>
              <PartOneBottom>
              <StyledLink><Icon src={theme.images.footerIcons.icon1} /></StyledLink>
                <StyledLink><Icon src={theme.images.footerIcons.icon2} /></StyledLink>
                <StyledLink><Icon src={theme.images.footerIcons.icon3} /></StyledLink>
                <StyledLink><Icon src={theme.images.footerIcons.icon4} /></StyledLink>
                <StyledLink><Icon src={theme.images.footerIcons.icon5} /></StyledLink>
              </PartOneBottom>
            </PartOne>
          </Part>
          <Part>
            <PartTwo>
              <Title>Fale conosco</Title>
              <Button>Entrar em contato</Button>
            </PartTwo>
          </Part>
          <Part>
            <PartThree>
              <Title>Links úteis</Title>
              <Text>Fale conosco</Text>
              <Text>Quem somos</Text>
              <Text>Trabalhe conosco</Text>
              <Text>Nossa cultura</Text>
              <Text>Blog</Text>
            </PartThree>
          </Part>
          <Part>
            <PartFour>
              <Title>Ferramentas</Title>
              <Text>Ninja Ai</Text>
              <Text>Calculadora de Resistores</Text>
              <Text>Tabelas de Conversão</Text>
            </PartFour>
          </Part>
        </>
      }
    </Container>
  );
};

export default OptionsFooter;
