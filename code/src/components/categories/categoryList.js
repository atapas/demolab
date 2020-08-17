import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import _ from "lodash";
import BubbleChart from '@weknow/react-bubble-chart-d3';

import CategoryCard from './cateoryCard';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___category___name) {
            fieldValue
            totalCount
            nodes {
              frontmatter {
                category {
                  desc
                  image
                }
              }
            }
          }
        }
      }`
  );

  const categoryList = data.allMarkdownRemark.group;
  
  
  return (
   <>
     <div className="home-featured-categories">
      {
        categoryList && categoryList.map((category, index) => (
          
          <div className={`category-item level--${index+1}`} key={index}>
            <CategoryCard category = { category } />
          </div>
        ))
      }
      </div>
    </>
  )
};