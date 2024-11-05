import React from "react";
import styled from "styled-components";
import { color5, darkGrey, color1 } from "../common/theme";

const DotedContent = ({ data }) => (
  <Container>
    {data.map(
      ({ title, date, description, responsibilities, technologies }, index) => (
        <ContentWrapper key={`${title}-${index}`}>
          <Header>
            <Title>{title}</Title>
            <Date>{date}</Date>
          </Header>
          <Description>{description}</Description>
          {responsibilities && (
            <SubTitleWrapper>
              <SubTitle>Responsibilities:</SubTitle>
              <Description>{responsibilities}</Description>
            </SubTitleWrapper>
          )}
          {technologies && (
            <SubTitleWrapper>
              <SubTitle>Technologies:</SubTitle>
              <Description>{technologies}</Description>
            </SubTitleWrapper>
          )}
        </ContentWrapper>
      )
    )}
  </Container>
);

export default DotedContent;

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

  :before {
    content: "";
    position: absolute;
    top: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${color1};
    left: -2rem;
  }

  :after {
    content: "";
    position: absolute;
    top: 12px;
    width: 2px;
    height: 100%;
    background: ${color5};
    left: -1.75rem;
  }
  :last-child:after {
    content: none;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const Title = styled.div``;

const Date = styled.div`
  text-transform: none;
`;

const Description = styled.span``;

const SubTitleWrapper = styled.div`
  margin-top: 0.5rem;
`;

const SubTitle = styled.span`
  margin-right: 0.5rem;
  font-weight: 600;
`;
