import React from "react";
import Layout from "../components/layouts/layout";
import CategoryList from "../components/categories/categoryList";

export default function Home() {
  return (
    <Layout>
      <h1>Hey! Welcome to the GreenRoots Demo Pad</h1>
      <p>
        The demo pad helps you navigating through demo of several projects with 
        guided information. Hope you enjoy it being here.
      </p>
      <CategoryList />
    </Layout>
  );
}