import React from 'react';
import styled from 'styled-components';

function DotedContent({ data }) {
    return (
        <Container>
            {data.map(content => (
                <ContentWrapper>
                    <Header>
                        <Title>{content.title}</Title>
                        <Date>{content.date}</Date>
                    </Header>
                    <Description>{content.description}</Description>
                </ContentWrapper>
            ))}
        </Container>
    );
}

export default DotedContent;

const Container = styled.div`
    padding: 1rem;
    font-size: .8rem;
`;

const ContentWrapper = styled.div`
    position: relative;
    margin-left: 1rem;
    padding-bottom: 1rem;

    :before {
        content: '';
        position: absolute;
        top: 2px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: red;
        left: -1.25rem;
    }

    :after {
        content: '';
        position: absolute;
        top: 12px;
        width: 2px;
        height: 100%;
        background: #b5b5b5;
        left: -1rem;
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

const Date = styled.div``;

const Description = styled.div`
    color: #5f5f5f;
`;
