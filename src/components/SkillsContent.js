import React from "react";
import styled from "styled-components";
import { color4, white } from "../common/theme";
import ProgressBar from "./ProgressBar";

const SkillsContent = ({ content }) => (
  <Container>
    {content.map(({ info, subInfo, grade }, index) => (
      <ContentWrapper key={`${info}-${index}`}>
        <InfoWrapper>
          <Info>{info}</Info>
          <SubInfo>{subInfo}</SubInfo>
        </InfoWrapper>
        {grade && <ProgressBar grade={grade} />}
      </ContentWrapper>
    ))}
  </Container>
);

export default SkillsContent;

const Container = styled.div`
  font-size: 0.8rem;
  padding-top: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  color: ${white};

  & svg {
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    color: ${color4};
  }
`;

const InfoWrapper = styled.div``;

const Info = styled.span`
  font-weight: 700;
`;

const SubInfo = styled.span`
  margin-left: 5px;
`;
