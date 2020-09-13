import React from 'react';
import styled from 'styled-components';
import { extraLightGrey } from './common/theme';
import Sheet from './components/Sheet';

function App() {
  return (
    <Container>
      <Sheet />
    </Container>
  );
}

export default App;

const Container = styled.div`
    display: flex;
    background: ${extraLightGrey};
`;
