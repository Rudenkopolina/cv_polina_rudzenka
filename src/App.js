import React from "react";
import styled from "styled-components";

import { extraLightGrey, white, color5 } from "./common/theme";
import Sheet from "./components/Sheet";
import { FaCode } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";

function App() {
  const goToCode = () => {
    window.open(
      "https://github.com/Rudenkopolina/cv_polina_rudzenka/tree/master",
      "_blank"
    );
  };

  const printDocument = () => {
    window.print();
  };

  return (
    <Container>
      <Sheet />
      <Button onClick={goToCode}>
        <FaCode />
      </Button>
      <Button onClick={printDocument} style={{ right: "6rem" }}>
        <FiPrinter />
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
  background: ${color5};
  border: 1px solid ${white};
  border-bottom: none;
  border-radius: 1rem 1rem 0 0;
  color: #fff;
  padding: 0.5rem 1rem;
  position: fixed;
  bottom: 0;
  right: 2rem;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  cursor: pointer;

  :hover {
    filter: brightness(90%);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media print {
    display: none;
  }
`;
