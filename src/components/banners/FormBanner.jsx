import React from 'react';
import styled from 'styled-components';

import { useScreenPositionContext } from '../../context/ScreenPositionProvider';

const AdditionalContent = styled.div`
width: 90%;

@media ${props => props.theme.breakpoints.tablet} {
  width: 100vw;
}

@media ${props => props.theme.breakpoints.mobile} {
  width: 100vw;
}
`;

const StyledSecondDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
border: 1px solid red;
border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
background-color: #A90101;
background-color: red;
box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);

@media ${props => props.theme.breakpoints.tablet} {
  border-radius: 0;
}

@media ${props => props.theme.breakpoints.mobile} {
  border-radius: 0;
}
`;

const StyledThirdDiv = styled.div`
padding: 40px 30px 30px 30px;
display: flex;
justify-content: center;
align-items: center;


@media ${props => props.theme.breakpoints.tablet} {
  padding: 40px 10px 30px 10px;
}

@media ${props => props.theme.breakpoints.mobile} {
  padding: 60px 10px 30px 10px;
}
`;

const TitleDiv = styled.div`
color: white;
font-weight: bold;
font-size: 1.3rem;
display: flex;
justify-content: center;
align-items: center;

  @media ${props => props.theme.breakpoints.largeDesktop} {
    font-size: 2.3rem;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    font-size: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.2rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.7rem;
  }
`;

const ImageDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;

img {
  width: 30%;
  margin-top: 6%;
  position: absolute;

  @media ${props => props.theme.breakpoints.largeDesktop} {
    position: absolute;
    width: 500px;
  }

  @media ${props => props.theme.breakpoints.smallDesktop} {
    position: absolute;
    width: 400px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    position: absolute;
    right: 0;
    margin-bottom: -350px;
    width: 200px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    position: absolute;
    left: -30px;
    margin-bottom: 650px;
    width: 200px;
  }
}
`;

const FormDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;

const FormContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;

@media ${props => props.theme.breakpoints.tablet} {
  width: 70%;
}

@media ${props => props.theme.breakpoints.mobile} {
  width: 90%;
}
`;

const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 3%;

@media ${props => props.theme.breakpoints.tablet} {
  margin-bottom: 2vh;
}

@media ${props => props.theme.breakpoints.mobile} {
  margin-bottom: 2vh;
}
`;

const TitleForm = styled.h3`
flex: 70%;
font-size: 1.3rem;
font-weight: bold;
text-align: left;
color: white;

@media ${props => props.theme.breakpoints.largeDesktop} {
    font-size: 1.5rem;
}

@media ${props => props.theme.breakpoints.smallDesktop} {
    font-size: 1.2rem;
}

@media ${props => props.theme.breakpoints.tablet} {
  font-size: 1.3rem;
}

@media ${props => props.theme.breakpoints.mobile} {
  font-size: 1.3rem;
}
`;

const IconContainer = styled.div`
flex: 30%;
display: flex;
justify-content: center;
align-items: center;
margin-left: 5%;
color: white;
font-size: 1.3rem;

@media ${props => props.theme.breakpoints.smallDesktop} {
    justify-content: right;
    margin-left: 0;
  }

@media ${props => props.theme.breakpoints.tablet} {
  justify-content: center;
  margin-left: 0;
}

@media ${props => props.theme.breakpoints.mobile} {
  justify-content: center;
  margin-left: 0;
}
`;

const StyledIcon = styled.img`
width: 3rem;

@media ${props => props.theme.breakpoints.tablet} {
  width: 4rem;
}

@media ${props => props.theme.breakpoints.mobile} {
  width: 4rem;
}
`;

const FieldContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 3%;
`;

const InputField = styled.input`
margin-bottom: 2%;
border-radius: 0.5vw;
padding: 15px;

@media ${props => props.theme.breakpoints.tablet} {
  font-size: 1rem;
}

@media ${props => props.theme.breakpoints.mobile} {
  padding: 15px;
  font-size: 1rem;
}
`;

const CheckBoxLabel = styled.label`
font-size: 1rem;
color: gray;
text-align: center;
color: white;
padding: 0px 10px;

@media ${props => props.theme.breakpoints.tablet} {
  font-size: 1rem;
  font-weight: normal;
}

@media ${props => props.theme.breakpoints.mobile} {
  font-size: 1rem;
  font-weight: normal;
}
`;

const SendButton = styled.button`
background-color: green;
color: white;
padding: 15px;
border: none;
border-radius: 0.5vw;
cursor: pointer;
margin: 0 auto;
margin-top: 15px;
width: 30%;

@media ${props => props.theme.breakpoints.tablet} {
  font-size: 1.2rem;
  width: 40%;
}

@media ${props => props.theme.breakpoints.mobile} {
  font-size: 1.2rem;
  width: 40%;
}
`;

const CheckBoxContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;

@media ${props => props.theme.breakpoints.tablet} {
  margin: 2vh;
}

@media ${props => props.theme.breakpoints.mobile} {
  margin: 2vh;
}
`;

const TermsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`;

const RequiredFieldsLabel = styled.label`
margin-top: 5%;
display: block;
color: white;

@media ${props => props.theme.breakpoints.tablet} {
  font-size: 1rem;
  font-weight: normal;
  margin-top: 3vh;
}

@media ${props => props.theme.breakpoints.mobile} {
  font-size: 1rem;
  font-weight: normal;
  margin-top: 3vh;
}
`;

const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
width: auto;
cursor: pointer;
accent-color: green;
`;

function FormBanner() {
  const { isMobile, isTablet } = useScreenPositionContext();

  return (
    <AdditionalContent>
      <StyledSecondDiv>
        {isMobile || isTablet ?
          <></>
          :
          <StyledThirdDiv style={{ width: '40%' }}>
            <TitleDiv>
              <h2>Entre em contato e obtenha as melhores soluções!</h2>
            </TitleDiv>
          </StyledThirdDiv>
        }
        {isMobile || isTablet ?
          <ImageDiv>
            <img src="/img/banners/robotImg.png" alt="Imagem Centralizada" />
          </ImageDiv>
          :
          <StyledThirdDiv style={{ width: '20%' }}>
            <ImageDiv>
              <img src="/img/banners/robotImg.png" alt="Imagem Centralizada" />
            </ImageDiv>
          </StyledThirdDiv>
        }
        <StyledThirdDiv style={isMobile || isTablet ? { width: '100%' } : { width: '40%' }}>
          <FormDiv>
            <FormContainer>
              <TitleContainer>
                {isMobile || isTablet ?
                  <TitleForm>Entre em contato e obtenha as melhores soluções!</TitleForm>
                  :
                  <TitleForm>Receba tudo em primeira mão</TitleForm>
                }
                <IconContainer>
                  <StyledIcon src='../img/icones/CardIcon.png' />
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
