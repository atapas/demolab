import React from "react";
import { Link } from "gatsby";
import _ from "lodash";

export default (props) => {
    let category = props.category;
    console.log(category);
    let categoryImage = category.nodes[0].frontmatter.category.image;

    return (
        <>
        { category ?
            <Link
                to={`/categories/${_.kebabCase(category.fieldValue)}`}>
                <h3 className="category-item__title">{ category.fieldValue }</h3>
            </Link>: null
        }
        </>
    )
}