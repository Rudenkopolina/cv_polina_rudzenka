import React from 'react';
import styled from 'styled-components';
import { gradient, extraLightGrey, darkGreen } from '../common/theme';

function Section({ data, children, isRightSide }) {
    const { title, Icon } = data;
    const RenderSection = isRightSide ? RightSectionHeader : LeftSectionHeader;
    return (
        <Container>
            <RenderSection>
                <IconWrapper>
                    <Icon />
                </IconWrapper>
                <Title>{title}</Title>
            </RenderSection>
            {children}
        </Container>
    );
}

export default Section;

const Container = styled.div`
    background: ${extraLightGrey};
    :last-child {
        height: 100%;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    & svg {
        width: 1.5rem;
    }
`;

const SectionHeader = styled.div`
    background: ${gradient};
    color: #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: .5rem;
    position: relative;
    display: flex;
    align-items: center;
`;
    
const LeftSectionHeader = styled(SectionHeader)`    
    margin-left: -1rem;
    padding-left: 1.5rem;
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
    :before {
        content: '';
        position: absolute;
        top: 100%;
        right: 0;
        border: 1rem solid transparent;
        border-top-color: ${darkGreen};
        border-left: 0;
        border-right-width: 1rem;
    }
`;

const Title = styled.div`
    padding-left: 1.5rem;
`;
