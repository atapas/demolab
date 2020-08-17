import React from "react";
import Layout from "../components/layouts/layout";
import CategoryList from "../components/categories/categoryList";

import SEO from '../components/seo';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hey! Welcome to the Demo Lab</h1>
      <p>
        The demo lab helps you navigating through demos of several projects with 
        guided information. Hope you enjoy it being here.
      </p>
      <CategoryList />
    </Layout>
  );
}