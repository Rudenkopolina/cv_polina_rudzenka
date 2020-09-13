import React from 'react';
import styled from 'styled-components';
import { sectionHeader, sectionBackground } from '../common/theme';

function Section({ data, children, isRightSide }) {
    const { title, Icon } = data;
    const RenderSection = isRightSide ? RightSectionHeader : LeftSectionHeader;
    return (
        <Container>
            <RenderSection>
                <Title>{title}</Title>
                <IconWrapper>
                    <Icon />
                </IconWrapper>
            </RenderSection>
            {children}
        </Container>
    );
}

export default Section;

const Container = styled.div`
    background: ${sectionBackground};
`;

const IconWrapper = styled.div`
    display: flex;
    & svg {
        width: 1.5rem;
    }
`;

const SectionHeader = styled.div`
    background: ${sectionHeader};
    color: #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: .5rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
    
const LeftSectionHeader = styled(SectionHeader)`    
    margin-left: -1rem;
    :before {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        border: 1rem solid transparent;
        border-top-color: #242f33;
        border-right: 0;
        border-left-width: 1rem;
    }
`;

const RightSectionHeader = styled(SectionHeader)`    
    margin-right: -1rem;
    flex-direction: row-reverse;
    justify-content: flex-end;
    :before {
        content: '';
        position: absolute;
        top: 100%;
        right: 0;
        border: 1rem solid transparent;
        border-top-color: #242f33;
        border-left: 0;
        border-right-width: 1rem;
    }
`;

const Title = styled.div`
    padding-left: 1.5rem;
`;
