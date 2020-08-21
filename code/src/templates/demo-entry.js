import React, { useState, useEffect } from "react";
// import { DiscussionEmbed } from "disqus-react";
import * as _ from "lodash";
import shortid from "shortid";

import Layout from "../components/layouts/layout";
import SEO from '../components/seo';

// import demoEntryStyles from './demo-entry.module.css';

/*const disqusConfig = {
    shortname: 'greenroots'
}*/

export default function APIDemo({data}) {
    console.log(data);
    const links = data.markdownRemark.frontmatter.links;
    const title = data.markdownRemark.frontmatter.title;
    const category = data.markdownRemark.frontmatter.category;
    const [demo, setDemo] = useState([]);

    const addComponent = async file => {
        console.log(`Loading ${file} component...`);
        const demoFolder = _.kebabCase(category.name);
        import(`../demos/${demoFolder}/${file}.js`)
          .then(component => {
                let temp = [];
                temp.push(component.default);
                setDemo(temp);
          })
          .catch(error => {
            console.error(`"${file}" not yet supported`);
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

    const getLinkPart = (link, part) => {
        const SEPARATOR = '$#$#$#'
        const arr = link.split(SEPARATOR);
        if (part === 'origin') {
            return arr[0];
        } else if (part === 'base'){
            return arr[1];
        }
        return link;
    }

    const getOrigin = link => {

    }

    return (
        <Layout>
            <SEO title={title} />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={getDescription()} />
            {
                (links && links.length > 0) && <div>
                More reads from:
                    <ul>
                    {
                        links.map((link, index) => (
                            <li key={shortid.generate()}>
                                <a 
                                    href={getLinkPart(link, 'base')}
                                    target='_blank' 
                                    rel="noreferrer">{getLinkPart(link, 'origin')}
                                </a> 
                            </li>
                        ))
                    }
                    </ul>
                </div>
            }
            <div>
                <h2>Demo</h2>
                {
                    demo.length > 0 && demo.map((Component, index) => (
                        <Component key={index} />
                    ))
                }
            </div>
            {/*<div className={demoEntryStyles.comment}>
                <DiscussionEmbed {...disqusConfig} />
            </div>*/}
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