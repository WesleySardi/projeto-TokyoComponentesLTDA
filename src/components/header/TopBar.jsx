import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 5vh;
  display: flex;
  z-index: 1000;
  border-bottom: 1px solid red;
  border-image: linear-gradient(to right, #2C0001, red) 1;
`;

const Section = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 1vw;
  height: auto;
  margin-right: 10px;
`;

const Text = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
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
