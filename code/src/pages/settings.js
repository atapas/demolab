import React from "react";
import Layout from "../components/layouts/layout";
import SEO from '../components/seo';

import Toggle from '../theme/Toggler';
import { useDarkMode } from "../theme/useDarkMode";


const Settings = () => {
    const [theme, themeToggler] = useDarkMode();
    return(
        <Layout>
            <SEO title="Settings" />
            <h1>Settings</h1>
            <Toggle theme={theme} toggleTheme={themeToggler} />
            
        </Layout>
    )
};

export default Settings;

