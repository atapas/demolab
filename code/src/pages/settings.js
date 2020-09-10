import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/layout";
import SEO from '../components/seo';
import StyledButton from '../components/styled/styled-button';
import ThemeSelector from '../theme/theme-selector';

const Settings = () => {
    const [theme, setTheme] = useState();
 
    const themeToggler = (selectedTheme) => {
        typeof window !== 'undefined' && window.localStorage.setItem('theme', JSON.stringify(selectedTheme))
        setTheme(selectedTheme)
    };


    useEffect(() => {
        const localTheme = typeof window !== 'undefined' && window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    return(
        <Layout>
            <SEO title="Settings" />
            <h1>Settings</h1>
            <ThemeSelector setter={ themeToggler }/>
        </Layout>
    )
};

export default Settings;

