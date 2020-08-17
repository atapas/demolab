import React, { lazy, Suspense, useState, useEffect } from "react";
import { DiscussionEmbed } from "disqus-react";
import * as _ from "lodash";
import shortid from "shortid";

import Layout from "../components/layouts/layout";

import demoEntryStyles from './demo-entry.module.css';

const disqusConfig = {
    shortname: 'greenroots'
}

const importDemo = (demoFolder, file) =>
  lazy(() =>
    import(`../demos/${demoFolder}/${file}.js`)
      .catch(() => console.log('Error in importing'))
);

export default function APIDemo({data}) {
    console.log(data);
    const links = data.markdownRemark.frontmatter.links;
    const title = data.markdownRemark.frontmatter.title;
    const category = data.markdownRemark.frontmatter.category;
    const fileName = data.markdownRemark.frontmatter.fileName;
    const [demo, setDemo] = useState([]);

    const addComponent = async file => {
        console.log(`Loading ${file} component...`);
        const demoFolder = _.kebabCase(category.name);
        const Demo = await importDemo(demoFolder, file);
        const promise = [<Demo key={shortid.generate()}/>];
        Promise.all(promise).then(setDemo);
    };

    useEffect(() => {
        async function fetchAPIDemo() {
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
            {
                (links && links.length > 0) && <div>
                More reads from:
                    <ul>
                    {
                        links.map((link, index) => (
                            <li key={shortid.generate()}>
                                <a 
                                    href={link}
                                    target='_blank' 
                                    rel="noreferrer">Here
                                </a> 
                            </li>
                        ))
                    }
                    </ul>
                </div>
            }
            <div>
                <h2>Demo</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    {demo}
                </Suspense>
            </div>
            <div className={demoEntryStyles.comment}>
                <DiscussionEmbed {...disqusConfig} />
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