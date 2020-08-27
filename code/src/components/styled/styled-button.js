import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.toggleBackgrnd};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.toggleText};
  border-radius: .25rem;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;

`;

export default StyledButton;