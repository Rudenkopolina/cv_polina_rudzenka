import React from 'react';
import styled from 'styled-components';
import { extraLightGrey, white, green, darkGreen } from './common/theme';
import Sheet from './components/Sheet';
import { FaCode } from "react-icons/fa";


function App() {
  const onClick = () => {
    window.open('https://github.com/Rudenkopolina/cv_polina_rudzenka/tree/master','_blank');
  }

  return (
    <Container>
      <Sheet />
      <Button onClick={onClick}>
        <FaCode />
      </Button>
    </Container>
  );
}

export default App;

const Container = styled.div`
    display: flex;
    background: ${extraLightGrey};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  background: ${green};
  border: 1px solid ${white};
  border-bottom: none;
  border-radius: 1rem 1rem 0 0;
  color: #fff;
  padding: .5rem 1rem;
  position: fixed;
  bottom: 0;
  right: 2rem;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background: ${darkGreen};
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
