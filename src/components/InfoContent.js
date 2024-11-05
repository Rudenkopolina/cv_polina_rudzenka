import React from "react";
import styled from "styled-components";
import { darkGrey } from "../common/theme";

const InfoContent = ({ content }) => (
  <Container>
    <ContentWrapper>{content}</ContentWrapper>
  </Container>
);

export default InfoContent;

const Container = styled.div`
  padding: 1rem;
  font-size: 0.8rem;
  padding-bottom: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  margin-left: 1.5rem;
  padding-bottom: 1rem;
  color: ${darkGrey};
`;
