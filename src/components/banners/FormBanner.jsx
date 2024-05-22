import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Define a animação de rotação, rolagem e escala
const scrollRotateAnimation = keyframes`
0% {
  transform: translateX(0) rotate(0deg) scale(1);
}
25% {
  transform: translateX(0) rotate(10deg) scale(1.1);
}
50% {
  transform: translateX(0) rotate(0deg) scale(1); /* Rotação, rolagem e escala para a direita */
}
75% {
  transform: translateX(0) rotate(-10deg) scale(0.9);
}
100% {
  transform: translateX(0) rotate(0deg) scale(1);
}
`;

const AdditionalContent = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
width: 90vw;
height: 100%;

@media ${props => props.theme.breakpoints.mobile} {
  width: 100vw;
}
`;

const StyledSecondDiv = styled.div`
width: 100%;
height: 60%;
display: flex;
justify-content: space-around; /* Distribui o espaço igualmente entre as divs filhas */
align-items: center;
border: 1px solid red;
border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
background-color: #A90101;
background-color: red;
box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);

@media ${props => props.theme.breakpoints.mobile} {
  border-radius: 0;
}
`;

const StyledThirdDiv = styled.div`
height: 80%;
display: flex;
justify-content: center;
align-items: center;
padding: 4vh;

@media ${props => props.theme.breakpoints.mobile} {
  padding: 7vh 5vw 4vh 5vw;
}
`;

const TitleDiv = styled.div`
color: white;
font-weight: bold;
font-size: 2.3rem;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;

const ImageDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;

img {
  width: 30%;
  margin-top: 6%;
  position: absolute;
  height: auto;

  @media ${props => props.theme.breakpoints.mobile} {
    position: absolute;
    left: 0;
    margin-bottom: 140vw;
  }
}
`;

const FormDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`;

const FormContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center; /* Alinha verticalmente ao centro */
margin-bottom: 3%;

@media ${props => props.theme.breakpoints.mobile} {
  margin-bottom: 2vh;
}
`;

const TitleForm = styled.h3`
flex: 70%;
font-size: 1.3rem;
font-weight: bold;
text-align: right;
color: white;

@media ${props => props.theme.breakpoints.mobile} {
  font-size: 5rem;
  text-align: left;
}
`;

const IconContainer = styled.div`
flex: 30%;
display: flex;
justify-content: start;
align-items: center;
margin-left: 5%;
color: white;
font-size: 1.3rem;

@media ${props => props.theme.breakpoints.mobile} {
  justify-content: center;
  margin-left: 0;
}
`;

const StyledIcon = styled.img`
width: 3rem;
height: auto;

@media ${props => props.theme.breakpoints.mobile} {
  width: 12rem;
}
`;

const FieldContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
`;

const InputField = styled.input`
margin-bottom: 10px;
border-radius: 5px;
padding: 2%;

@media ${props => props.theme.breakpoints.mobile} {
  padding: 5%;
  font-size: 5vw;
}
`;

const CheckBoxLabel = styled.label`
font-size: 1rem;
color: gray;
text-align: center;
color: white;
padding: 0% 3%;

@media ${props => props.theme.breakpoints.mobile} {
  font-size: 4rem;
  font-weight: normal;
}
`;

const SendButton = styled.button`
background-color: green;
color: white;
padding: 3.5%;
border: none;
border-radius: 5px;
cursor: pointer;
margin: 0 auto;
margin-top: 3%;
width: 30%;

@media ${props => props.theme.breakpoints.mobile} {
  font-size: 5rem;
  width: 40%;
}
`;

const CheckBoxContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;

@media ${props => props.theme.breakpoints.mobile} {
  margin: 2vh;
}
`;

const TermsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 100%;
width: 100%;
`;

const RequiredFieldsLabel = styled.label`
margin-top: 5%;
display: block;
color: white;

@media ${props => props.theme.breakpoints.mobile} {
  font-size: 4rem;
  font-weight: normal;
  margin-top: 3vh;
}
`;

const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
width: auto;
height: 100%;
cursor: pointer;
accent-color: green;
`;

function FormBanner() {
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
    <AdditionalContent>
      <StyledSecondDiv>
        {isMobile ?
          <></>
          :
          <StyledThirdDiv style={{ width: '40%' }}>
            <TitleDiv>
              <h2>Entre em contato e obtenha as melhores soluções!</h2>
            </TitleDiv>
          </StyledThirdDiv>
        }
        {isMobile ?
          <ImageDiv>
            <img src="/img/robotImg.png" alt="Imagem Centralizada" />
          </ImageDiv>
          :
          <StyledThirdDiv style={{ width: '20%' }}>
            <ImageDiv>
              <img src="/img/robotImg.png" alt="Imagem Centralizada" />
            </ImageDiv>
          </StyledThirdDiv>
        }
        <StyledThirdDiv style={isMobile ? { width: '100%' } : { width: '40%' }}>
          <FormDiv>
            <FormContainer>
              <TitleContainer>
                {isMobile ?
                  <TitleForm>Entre em contato e obtenha as melhores soluções!</TitleForm>
                  :
                  <TitleForm>Receba tudo em primeira mão</TitleForm>
                }
                <IconContainer>
                  <StyledIcon src='../img/CardIcon.png' />
                </IconContainer>
              </TitleContainer>
              <FieldContainer>
                <InputField type="text" placeholder="Digite o seu nome completo... *" />
                <InputField type="email" placeholder="Seu melhor e-mail... *" />
                <InputField type="number" placeholder="Seu melhor telefone... *" />
                <CheckBoxContainer>
                  <TermsContainer>
                    <StyledCheckBox id="termos" name="termos" />
                    <CheckBoxLabel htmlFor="termos">Aceito os termos de privacidade</CheckBoxLabel>
                  </TermsContainer>
                  <RequiredFieldsLabel>* Campos Obrigatórios</RequiredFieldsLabel>
                </CheckBoxContainer>
              </FieldContainer>
              <SendButton>Enviar</SendButton>
            </FormContainer>
          </FormDiv>
        </StyledThirdDiv>
      </StyledSecondDiv>
    </AdditionalContent>
  );
}

export default FormBanner;
