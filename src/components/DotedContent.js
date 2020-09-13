import React from 'react';
import styled from 'styled-components';

function DotedContent({ data }) {
    return (
        <Container>
            {data.map(({
                title,
                date,
                description,
                responsibilities,
                technologies
            }) => (
                <ContentWrapper>
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

const Description = styled.span`
    color: #5f5f5f;
`;

const SubTitleWrapper = styled.div`
    margin-top: .5rem;
`;

const SubTitle = styled.span`
    margin-right: .5rem;
`;
