import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function FormBanner() {

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
    flex: 1; /* Cresce para ocupar o espaço restante */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw; /* Ocupa metade da largura da tela */
    height: 100%;
  `;

  const StyledSecondDiv = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-around; /* Distribui o espaço igualmente entre as divs filhas */
    align-items: center;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    border-right: 1px solid grey;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #A90101;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  `;

  const StyledThirdDiv = styled.div`
    height: 80%; /* Altura ajustada para o conteúdo centralizado */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4vh;
  `;

  const TitleDiv = styled.div`
    color: white;
    font-weight: bold;
    font-size: 27px;
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
      height: auto; /* Mantém a proporção da imagem */
      //animation: ${scrollRotateAnimation} 8s linear infinite; /* Aplica a animação */
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
  margin-bottom: 5%;
`;

  const TitleForm = styled.h3`
  flex: 70%;
  font-size: 1.3vw;
  font-weight: bold;
  text-align: right;
  color: white;
`;

  const IconContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 5%;
    color: white;
    font-size: 1.3vw;
  `;

  const Icon = styled.img`
    /* Estilos do ícone */
  `;

  const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  `;

  const InputField = styled.input`
    /* Estilos dos campos de input */
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 2%;
  `;

  const SelectField = styled.select`
    /* Estilos da comboBox */
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 2%;
  `;

  const CheckBoxLabel = styled.label`
    font-size: 12px;
    color: gray;
    margin-top: 3%;
    text-align: center;
    color: white;
    padding: 0% 3%;
  `;

  const SendButton = styled.button`
    background-color: green;
    color: white;
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 3%;
    width: 40%;
  `;

  const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
  `;

  const WhiteCircle = styled.div`
    z-index: 0;
    position: absolute;
    width: 30%;
    height: 60%;
    background-color: white;
    border-radius: 50%;
  `;

  return (
    <AdditionalContent>
      <StyledSecondDiv>
        {/*<WhiteCircle />*/}
        <StyledThirdDiv style={{ width: '40%' }}>
          <TitleDiv>
            <h2>Entre em contato e obtenha as melhores soluções!</h2>
          </TitleDiv>
        </StyledThirdDiv>
        <StyledThirdDiv style={{ width: '20%' }}>
          <ImageDiv>
            <img src="/img/robotImg.png" alt="Imagem Centralizada" />
          </ImageDiv>
        </StyledThirdDiv>
        <StyledThirdDiv style={{ width: '40%' }}>
          <FormDiv>
            <FormContainer>
              {/* Div do título com o ícone */}
              <TitleContainer>
                <TitleForm>Receba tudo em primeira mão</TitleForm>
                <IconContainer>
                  <FontAwesomeIcon icon={faEnvelope} className={Icon.styledComponentId} size={"2x"} />
                </IconContainer>
              </TitleContainer>
              {/* Div do formulário */}
              <FieldContainer>
                <InputField type="text" placeholder="Digite o seu nome completo..." />
                <InputField type="email" placeholder="Seu melhor e-mail..." />
                <InputField type="number" placeholder="Seu melhor telefone..." />
                <SelectField>
                  <option value="opcao1">Opção 1</option>
                  <option value="opcao2">Opção 2</option>
                  <option value="opcao3">Opção 3</option>
                </SelectField>
                <CheckBoxContainer>
                  <div>
                    <input type="checkbox" id="termos" name="termos" />
                    <CheckBoxLabel htmlFor="termos">Li e concordo com os termos de uso</CheckBoxLabel>
                  </div>
                  <CheckBoxLabel>* Campos Obrigatórios</CheckBoxLabel>
                </CheckBoxContainer>
              </FieldContainer>
              {/* Botão de enviar */}
              <SendButton>Enviar</SendButton>
            </FormContainer>
          </FormDiv>
        </StyledThirdDiv>
      </StyledSecondDiv>
    </AdditionalContent>
  );
}

export default FormBanner;
