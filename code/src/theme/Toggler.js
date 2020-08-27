import React from 'react';
import { func, string } from 'prop-types';
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.toggleBackgrnd};
  border: 2px solid ${({ theme }) => theme.colors.toggleBackgrnd};
  color: ${({ theme }) => theme.colors.toggleText};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;

`;

const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button onClick={toggleTheme}>
          Switch Theme
        </Button>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
