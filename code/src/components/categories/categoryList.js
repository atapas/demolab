import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import _ from "lodash";
import BubbleChart from "@weknow/react-bubble-chart-d3";

import categoryListStyles from './categoryList.module.css';

export default () => {
  const categoryGroupedData = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___category___name) {
            fieldValue
            totalCount
            nodes {
              frontmatter {
                category {
                  color
                  desc
                  image
                }
              }
            }
          }
        }
      }
    `
  )

  const [chartData, setChartData] = useState([])

  useEffect(() => {
    let categories = categoryGroupedData.allMarkdownRemark.group
    let ret = categories.map((elem, index) => {
      let obj = {};
      obj["label"] = elem.fieldValue;
      obj["value"] = elem.totalCount;
      obj["color"] = elem.nodes[0].frontmatter.category.color;
      return obj;
    })
    setChartData(ret)
  }, [categoryGroupedData])

  const bubbleClick = label => {
    let slug = `/categories/${_.kebabCase(label)}`
    navigate(slug)
  }

  return (
    <>
      {chartData.length > 0 ? (
        <div className={categoryListStyles.bubble}>
          <BubbleChart
            width={500}
            padding={30} // optional value, number that set the padding between bubbles
            showLegend={false} // optional value, pass false to disable the legend.
            valueFont={{
              size: 16,
              color: "#000000",
              weight: "bold",
            }}
            labelFont={{
              size: 20,
              color: "#000000",
              weight: "bold",
            }}
            bubbleClickFun={bubbleClick}
            data={chartData}
          />
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  )
}
