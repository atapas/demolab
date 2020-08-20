import React from "react";
import Layout from "../components/layouts/layout";
import SEO from '../components/seo';

import UnderConstruction from '../components/utils/under-construction';

export default () => {
    return(
        <Layout>
            <SEO title="About" />
            <h1>About Page</h1>
            <UnderConstruction />
        </Layout>
    )
}