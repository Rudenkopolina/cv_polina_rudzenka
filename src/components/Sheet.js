import React from 'react';
import styled from 'styled-components';
import { sheetBackground } from '../common/theme';
import Header from './Header';
import Section from './Section';
import DotedContent from './DotedContent';
import InfoContent from './InfoContent';
import ContactsContent from './ContactsContent';
import SkillsContent from './SkillsContent';

import data from '../data';

function Sheet() {
    const {
        education,
        work,
        about,
        contacts,
        languages,
        skills,
        projects,
    } = data;
    return (
        <Container>
            <Header />
            <ContentWrapper>
                <LeftColumn>
                    <Section data={about}>
                        <InfoContent content={about.info} />
                    </Section>
                    <Section data={education}>
                        <DotedContent data={education.content} />
                    </Section>
                    <Section data={work}>
                        <DotedContent data={work.content} />
                    </Section>
                    <Section data={projects}>
                        <DotedContent data={projects.content} />
                    </Section>
                </LeftColumn>
                <RightColumn>
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
}

export default Sheet;

const Container = styled.div`
    background: ${sheetBackground};
    width: 21cm;
    padding: 2.5rem;
    margin: 16px auto;
    box-shadow: 0 0 0.5cm rgb(0 0 0 / 15%);
`;

const ContentWrapper = styled.div`
    display: flex;
    margin: 1.5rem 1rem;
`;

const LeftColumn = styled.div`
    flex: 7;
    margin-right: 1rem;
`;

const RightColumn = styled.div`
    flex: 3;
`;
