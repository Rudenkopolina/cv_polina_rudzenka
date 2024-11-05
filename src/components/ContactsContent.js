import React from "react";
import styled from "styled-components";
import { color4, white } from "../common/theme";

const ContactsContent = ({ content }) => (
  <Container>
    {content.map(({ info, Icon }, index) => (
      <ContentWrapper key={`${info}-${index}`}>
        <Icon />
        <Info>{info}</Info>
      </ContentWrapper>
    ))}
  </Container>
);

export default ContactsContent;

const Container = styled.div`
  font-size: 0.8rem;
  padding: 1rem 0 0 0.25rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  color: ${white};

  & svg {
    margin-right: 1rem;
    width: 1rem;
    height: 1rem;
    color: ${color4};
  }
`;

const Info = styled.div``;
