import React from 'react';
import styled from 'styled-components';
import { gradient, extraLightGrey, darkGrey } from '../common/theme';
import Avatar from '../common/images/avatar.jpeg'

function Header() {
    return (
        <Container>
            <ImageWrapper>
                <ImageBlock>
                    <Image src={Avatar} />
                </ImageBlock>
                <Separator />
            </ImageWrapper>
            <NameBlock>
                Polina Rudzenka
            </NameBlock>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    background: ${extraLightGrey};
    display: flex;
`;

const ImageWrapper = styled.div`
    background: ${gradient};
    padding: .5rem 3rem .5rem 1rem;
    border-radius: 0 5px 5px 0;
    position: relative;
`;

const ImageBlock = styled.div`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
`;

const Image = styled.img`
    width: 6rem;
`;

const Separator = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    border-top: 56px solid transparent;
    border-bottom: 56px solid transparent;
    border-right: 30px solid ${extraLightGrey};
`;
    
const NameBlock = styled.div`
    font-size: 2rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    color: ${darkGrey};
`;
