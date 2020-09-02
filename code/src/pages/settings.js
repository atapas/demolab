import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/layout";
import SEO from '../components/seo';
import StyledButton from '../components/styled/styled-button';
import { lightTheme, darkTheme, electricGreenTheme } from '../theme/theme';

const Settings = () => {
    const [theme, setTheme] = useState(lightTheme);

    const SELECTED_THEME = electricGreenTheme;
    
    const themeToggler = () => {
        typeof window !== 'undefined' && window.localStorage.setItem('theme', JSON.stringify(SELECTED_THEME))
        setTheme(SELECTED_THEME)
    };

    useEffect(() => {
        const localTheme = typeof window !== 'undefined' && window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    return(
        <Layout>
            <SEO title="Settings" />
            <h1>Settings</h1>
            <h2>What do you love (light or dark) ?</h2>
            <StyledButton onClick={ themeToggler }>
                Switch Theme
            </StyledButton>
        </Layout>
    )
};

export default Settings;

