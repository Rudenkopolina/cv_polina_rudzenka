import React from 'react';
import styled from 'styled-components';
import { sectionHeader } from '../common/theme';
import ProgressBar from './ProgressBar';

function SkillsContent({ content }) {
    return (
        <Container>
            {content.map(({ info, subInfo, grade }) => (
                <ContentWrapper>
                    <InfoWrapper>
                        <Info>{info}</Info>
                        <SubInfo>{subInfo}</SubInfo>
                    </InfoWrapper>
                    {grade && <ProgressBar grade={grade} />}
                </ContentWrapper>
            ))}
        </Container>
    );
}

export default SkillsContent;

const Container = styled.div`
    padding: 1rem;
    font-size: .8rem;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

    & svg {
        margin-right: .5rem;
        width: 1rem;
        height: 1rem;
        color: ${sectionHeader};
    }
`;

const InfoWrapper = styled.div``;

const Info = styled.span`
    font-weight: 700;
`;

const SubInfo = styled.span`
    margin-left: 5px;
`;
