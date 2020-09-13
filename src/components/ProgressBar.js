import React from 'react';
import styled from 'styled-components';

function ProgressBar({ grade }) {
    return (
        <Container>
            <Progress grade={grade} />
        </Container>
    );
}

export default ProgressBar;

const Container = styled.div`
    border: 2px solid #282827;
    border-radius: 10px;
    width: 5rem;
    height: .5rem;
`;

const Progress = styled.div`
    background #282827;
    width: ${({ grade}) => grade * 10}%;
    height: 100%;
`;
