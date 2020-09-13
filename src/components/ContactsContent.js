import React from 'react';
import styled from 'styled-components';
import { dimGrey, grey } from '../common/theme';

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
    padding-bottom: 0;
`;

const ContentWrapper = styled.div`
    display: flex;
    padding-bottom: .5rem;
    color: ${grey};

    & svg {
        margin-right: .5rem;
        width: 1rem;
        height: 1rem;
        color: ${dimGrey};
    }
`;


const Info = styled.div``;
