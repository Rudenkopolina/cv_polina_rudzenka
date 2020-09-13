import React from 'react';
import styled from 'styled-components';
import { sectionHeader } from '../common/theme';

function ContactsContent({ content }) {
    return (
        <Container>
            {content.map(({ info, Icon }) => (
                <ContentWrapper>
                    <Icon />
                    <Info>{info}</Info>
                </ContentWrapper>
            ))}
        </Container>
    );
}

export default ContactsContent;

const Container = styled.div`
    padding: 1rem;
    font-size: .8rem;
`;

const ContentWrapper = styled.div`
    display: flex;
    padding-bottom: .5rem;
    color: #5f5f5f;

    & svg {
        margin-right: .5rem;
        width: 1rem;
        height: 1rem;
        color: ${sectionHeader};
    }
`;


const Info = styled.div``;
