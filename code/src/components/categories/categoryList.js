import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import _ from "lodash";

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
  categoryList.sort((a, b) => b.totalCount - a.totalCount);

  let categoryAsCards = categoryList.slice(0, 6);
  let categoryAsLinks = categoryList.slice(6);
  
  return (
   <>
     <div className="home-featured-categories">
      {
        categoryAsCards && categoryAsCards.map((category, index) => (
          
          <div className={`category-item level--${index+1}`} key={index}>
            <CategoryCard category = { category } />
          </div>
        ))
      }
      </div>

      {
        categoryAsLinks && categoryAsLinks.length > 0 &&
        <>
            <p className="p-light--sm text-center">
                There is a lot more to read about, choose your area of interest
            </p>
            <ul className="home-categories text-center">
                {
                categoryAsLinks.map((category, index) => (
                    <li key={index}>
                    <Link
                        to={`/categories/${_.kebabCase(category.fieldValue)}`}>
                        {category.fieldValue}
                    </Link>
                    </li>
                ))
                }
            </ul>
        </>
      }
      
    </>
  )
};