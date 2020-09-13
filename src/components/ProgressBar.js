import React from 'react';
import styled from 'styled-components';
import { grey, green } from '../common/theme';

function ProgressBar({ grade }) {
    return (
        <Container>
            <Progress grade={grade} />
        </Container>
    );
}

export default ProgressBar;

const Container = styled.div`
    border: 2px solid ${grey};
    border-radius: 10px;
    width: 5rem;
    height: .5rem;
    overflow: hidden;
`;

const Progress = styled.div`
    background ${green};
    width: ${({ grade}) => grade * 10}%;
    height: 100%;
`;
