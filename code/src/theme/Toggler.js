import React from 'react';
import { func, string } from 'prop-types';
import StyledButton from '../components/styled/styled-button';


const Toggle = ({theme,  toggleTheme }) => {
    return (
        <StyledButton onClick={toggleTheme}>
          Switch Theme
        </StyledButton>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
