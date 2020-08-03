import React, { useState, useEffect } from "react";
import Layout from "../components/layout";

export default function APIDemo({data}) {
    const [demo, setDemo] = useState([]);
   

    const addComponent = async type => {
        console.log(`Loading ${type} component...`);
        
        import(`../demos/${type}.js`)
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
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={getDescription()} />
            <div>
                More read from <a 
                    href={data.markdownRemark.frontmatter.link}
                    target='_blank' rel="noreferrer">Here</a>. 
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
        category
        fileName
        link
    }
        
    }
  }
`