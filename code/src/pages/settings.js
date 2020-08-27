import React from "react";
import Layout from "../components/layouts/layout";
import SEO from '../components/seo';

import Toggle from '../theme/Toggler';
import { useTheme } from "../theme/useTheme";


const Settings = () => {
    const [theme, themeToggler] = useTheme();
    return(
        <Layout>
            <SEO title="Settings" />
            <h1>Settings</h1>
            <Toggle theme={theme} toggleTheme={themeToggler} />
            
        </Layout>
    )
};

export default Settings;

