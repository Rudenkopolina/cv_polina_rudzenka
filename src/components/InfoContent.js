import React from 'react';
import styled from 'styled-components';
import { darkGrey } from '../common/theme';

function InfoContent({ content }) {
    return (
        <Container>
            <ContentWrapper>
                {content}
            </ContentWrapper>
        </Container>
    );
}

export default InfoContent;

const Container = styled.div`
    padding: 1rem;
    font-size: .8rem;
    padding-bottom: 0;
`;

const ContentWrapper = styled.div`
    position: relative;
    margin-left: 1rem;
    padding-bottom: 1rem;
    color: ${darkGrey};
`;
