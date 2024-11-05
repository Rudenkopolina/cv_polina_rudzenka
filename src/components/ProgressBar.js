import React from "react";
import styled from "styled-components";
import { color2, color4 } from "../common/theme";

const ProgressBar = ({ grade }) => (
  <Container>
    <Progress grade={grade} />
  </Container>
);

export default ProgressBar;

const Container = styled.div`
  border: 1px solid ${color2};
  border-radius: 10px;
  width: 5rem;
  height: 0.5rem;
  overflow: hidden;
`;

const Progress = styled.div`
    background ${color4};
    width: ${({ grade }) => grade * 10}%;
    height: 100%;
`;
