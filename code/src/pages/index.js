import React from "react";
import Layout from "../components/layouts/layout";
import CategoryList from "../components/categories/categoryList";

export default function Home() {
  return (
    <Layout>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <CategoryList />
    </Layout>
  );
}