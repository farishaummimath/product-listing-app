import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  margin: 2rem auto;
  border: 5px solid #eee;
  border-top: 5px solid #0070f3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => <Spinner />;

export default Loader;
