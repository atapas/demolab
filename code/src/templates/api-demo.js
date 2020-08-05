import React, { useState, useEffect } from "react";
import * as _ from "lodash";

import Layout from "../components/layouts/layout";

export default function APIDemo({data}) {
    const links = data.markdownRemark.frontmatter.links;
    const title = data.markdownRemark.frontmatter.title;
    const category = data.markdownRemark.frontmatter.category;
    const [demo, setDemo] = useState([]);

    const addComponent = async type => {
        console.log(`Loading ${type} component...`);
        const demoFolder = _.kebabCase(category.name);
        import(`../demos/${demoFolder}/${type}.js`)
          .then(component => {
                let temp = [];
                temp.push(component.default);
                setDemo(temp);
          })
          .catch(error => {
            console.error(`"${type}" not yet supported`);
          });
    };

    useEffect(() => {
        async function fetchAPIDemo() {
            const fileName = data.markdownRemark.frontmatter.fileName;
            await addComponent(fileName);
        }
        fetchAPIDemo();
    }, []);

    const getDescription = () => {
        return {__html: data.markdownRemark.html};
    }

    
    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={getDescription()} />
            <div>
                More reads from:
                    <ul>
                        {
                            (links && links.length > 0) &&
                                links.map((link, index) => (
                                    <li>
                                        <a 
                                            key = {index}
                                            href={link}
                                            target='_blank' 
                                            rel="noreferrer">Here
                                        </a> 
                                    </li>
                            ))
                        }
                    </ul>
                
                
            </div>
            
            <div>
                <h2>Demo</h2>
                {
                    demo.length>0 && demo.map((Component, index) => (
                        <Component key={index} />
                    ))
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        category {
            desc
            image
            name
        }
        fileName
        links
    }
        
    }
  }
`