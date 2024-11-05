import React from "react";
import styled from "styled-components";
import { color2, darkGrey } from "../common/theme";

const Header = () => (
  <Container>
    <NameBlock>Polina Rudzenka</NameBlock>
  </Container>
);

export default Header;

const Container = styled.div`
  background: ${color2};
  display: flex;
  justify-content: space-between;
  height: 10rem;
  margin: 0 -2.5rem;
  padding-left: 2.5rem;
`;

const NameBlock = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  color: ${darkGrey};
`;
