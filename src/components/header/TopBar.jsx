import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  border-bottom: 1px solid red;
  border-image: linear-gradient(to right, #2C0001, red) 1;
  display: flex;
  height: 5vh;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1000;
`;

const Section = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 33.33%;
`;

const Content = styled.div`
  align-items: center;  
  display: flex;
`;

const Image = styled.img`
  height: auto;
  margin-right: 10px;
  width: 2.2vh;
`;

const Text = styled.span`
  color: white;
  font-size: 1.8vh;

  font-weight: bold;
`;

const TopBar = () => {
  return (
    <HeaderContainer>
      <Section>
        <Content>
          <Image src="../img/phoneIcon.png" alt="Descrição 1" />
          <Text>(47) 3455-0015 | 3422-4249</Text>
        </Content>
      </Section>
      <Section>
        <Content>
          <Image src="../img/locationIcon.png" alt="Descrição 2" />
          <Text>Rua Anita Garibaldi, 439 - Anita Garibaldi | Joinville - SC</Text>
        </Content>
      </Section>
      <Section>
        <Content>
          <Image src="../img/wsIcon.png" alt="Descrição 3" />
          <Text>(47) 9 9708-7590 | 3455-0015 | 3422-4249</Text>
        </Content>
      </Section>
    </HeaderContainer>
  );
};

export default TopBar;
