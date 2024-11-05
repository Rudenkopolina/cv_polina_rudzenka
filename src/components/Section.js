import React from "react";
import styled from "styled-components";
import { white } from "../common/theme";

const Section = ({ data, children, color = white }) => {
  const { title, Icon } = data;
  return (
    <Container>
      <SectionHeader style={{ color }}>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Title>{title}</Title>
      </SectionHeader>
      {children}
    </Container>
  );
};

export default Section;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

const IconWrapper = styled.div`
  display: flex;
  & svg {
    width: 1.5rem;
  }
`;

const SectionHeader = styled.div`
  color: ${white};
  font-size: 1.2rem;
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  padding-left: 1rem;
`;
