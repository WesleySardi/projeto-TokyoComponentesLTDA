import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 40vh;
  padding-top: 10vh;
  margin-bottom: 7vh;
`;

const Part = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
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
`;

const PartOneTop = styled.div`
  height: 30%;
  display: flex;
  justify-content: left;
  align-items: left;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const PartOneMiddle = styled.div`
  height: 47%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const Title = styled.h1`
  font-size: 0.9vw;
  text-align: left;
  margin: 4% 0 4% 0;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1vw;
  text-align: left;
  margin: 2% 0 2% 0;
  color: grey;
`;

const TitlePartOne = styled.h1`
  font-size: 1.3vw;
  text-align: left;
  margin: 6% 0 1% 0
`;

const TextPartOne = styled.p`
  font-size: 1vw;
  text-align: left;
  margin: 1% 0 1% 0;
  color: grey;
`;

const PartOneBottom = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  margin: 2% 0 2% 0
`;


const Icon = styled.img`
  width: 1.2vw;
  height: auto;
  padding-right: 2vw;
`;

const PartTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const PartThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const PartFour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const Button = styled.button`
  font-size: 1vw;
  width: 40%;
  background-color: red;
  color: white;
  padding: 3% 1% 3% 1%;
  border-radius: 0.5vw;
`;

const OptionsFooter = () => {
    return (
        <Container>
            <Part>
                <PartOne>
                    <PartOneTop>
                        <Image src="../img/TokyoLogo.png" alt="Descrição da imagem" />
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
                        <Icon src='../img/tiktokIcon.png'/>
                        <Icon src='../img/instagramIcon.png'/>
                        <Icon src='../img/facebookIcon.png'/>
                        <Icon src='../img/youtubeIcon.png'/>
                        <Icon src='../img/linkedinIcon.png'/>
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
        </Container>
    );
};

export default OptionsFooter;
