import React from "react";
import styled from "styled-components";
import { white, color3 } from "../common/theme";
import Header from "./Header";
import Section from "./Section";
import DotedContent from "./DotedContent";
import InfoContent from "./InfoContent";
import ContactsContent from "./ContactsContent";
import SkillsContent from "./SkillsContent";
import Avatar from "../common/images/avatar.jpeg";

import data from "../data";

const Sheet = () => {
  const { education, work, about, contacts, languages, skills, projects } =
    data;
  return (
    <Container id="root">
      <Header />
      <ContentWrapper>
        <LeftColumn>
          <Section data={about} color={color3}>
            <InfoContent content={about.info} />
          </Section>
          <Section data={education} color={color3}>
            <DotedContent data={education.content} />
          </Section>
          <Section data={work} color={color3}>
            <DotedContent data={work.content} />
          </Section>
          <Section data={projects} color={color3}>
            <DotedContent data={projects.content} />
          </Section>
        </LeftColumn>
        <RightColumn>
          <ImageWrapper>
            <Image src={Avatar} />
          </ImageWrapper>
          <Section data={contacts} isRightSide>
            <ContactsContent content={contacts.content} />
          </Section>
          <Section data={languages} isRightSide>
            <SkillsContent content={languages.content} />
          </Section>
          <Section data={skills} isRightSide>
            <SkillsContent content={skills.content} />
          </Section>
        </RightColumn>
      </ContentWrapper>
    </Container>
  );
};

export default Sheet;

const Container = styled.div`
  background: ${white};
  width: 21cm;
  padding: 2.5rem;
  margin: 16px auto;
  box-shadow: 0 0 0.5cm rgb(0 0 0 / 15%);
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7;
  margin-right: 1rem;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14rem;
  margin: -14rem 0 -4rem 0;
  background: ${color3};
`;

const ImageWrapper = styled.div`
  border-radius: 0 5px 5px 0;
  position: relative;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #fff;
`;
