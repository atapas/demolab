import React, { useState, useEffect } from "react";
import StyledButton from '../components/styled/styled-button';
import _ from 'lodash';
import shortid from 'shortid';

import * as themesFromStore from '../theme/theme.json';

export default (props) => {

    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);

    const themeSwitcher = selectedTheme => {
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, []);

    const ThemeCard = props => {
        console.log(props.theme);
        return(
            <>
                <StyledButton onClick={ (theme) => themeSwitcher(props.theme) }>
                    {props.theme.name}
                </StyledButton> {' '}
            </>
        )
    }

    return (
        <>
            <h2>Theme Selector</h2>
            {
                themes.length > 0 && 
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={shortid.generate()} />
                    ))
            }
        </>
    )
}
