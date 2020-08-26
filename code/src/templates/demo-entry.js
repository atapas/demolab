import React, { useState, useEffect } from "react";
import sdk from "@stackblitz/sdk";
import {isMobileOnly, isTablet} from 'react-device-detect';
import { DiscussionEmbed } from "disqus-react";
import * as _ from "lodash";
import shortid from "shortid";

import Layout from "../components/layouts/layout";
import SEO from "../components/seo";

import demoEntryStyles from "./demo-entry.module.css";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function APIDemo({ data }) {
  console.log(data)
  const links = data.markdownRemark.frontmatter.links;
  const title = data.markdownRemark.frontmatter.title;
  const codeEmbedLink = data.markdownRemark.frontmatter['code_embed_link'];
  const category = data.markdownRemark.frontmatter.category;
  const disqusConfig = {
    shortname: "greenroots",
    config: { identifier: shortid.generate(), title },
  };
  const [demo, setDemo] = useState([]);
  const [hideCodeTab, setHideCodeTab] = useState(true);
  const [showDemoTab, setShowDemoTab] = useState(true);
  const [defaultTabKey, setDefaultTabKey] = useState('demo');

  console.log(isMobileOnly, isTablet);
  const shouldHideCodeTab =
    _.isUndefined(codeEmbedLink) || _.isNull(codeEmbedLink) || (isMobileOnly && !isTablet);

  const addComponent = async file => {
    console.log(`Loading ${file} component...`)
    const demoFolder = _.kebabCase(category.name)
    import(`../demos/${demoFolder}/${file}.js`)
      .then(component => {
        let temp = []
        temp.push(component.default)
        setDemo(temp)
        setShowDemoTab(true);
      })
      .catch(error => {
        setShowDemoTab(false);
        console.error(`"${file}" is not loaded successfully due to the ${error}`);
      })
  }

  useEffect(() => {
    async function fetchAPIDemo() {
      const fileName = data.markdownRemark.frontmatter.fileName
      await addComponent(fileName)
    }
    fetchAPIDemo();
  }, []);

  useEffect(() => {
    shouldHideCodeTab ? setHideCodeTab(true) : setHideCodeTab(false);
  }, [shouldHideCodeTab]);

  useEffect(() => {
    if (showDemoTab) {
      setDefaultTabKey('demo');
    } else if (!hideCodeTab) {
      setDefaultTabKey('scode');
    } else {
      setDefaultTabKey('read');
    }
  }, [showDemoTab, hideCodeTab]);

  const getDescription = () => {
    return { __html: data.markdownRemark.html }
  }

  const getLinkPart = (link, part) => {
    const SEPARATOR = "$#$#$#"
    const arr = link.split(SEPARATOR)
    if (part === "origin") {
      return arr[0]
    } else if (part === "base") {
      return arr[1]
    }
    return link
  }

  const showCode = () => {
      console.log('Show Code');
      sdk.embedProjectId(
        "codeEmbed",
        codeEmbedLink,
        {
            clickToLoad: true,
            openFile: 'index.js',
            view: 'editor',
            height: 500,
            hideExplorer: true,
            hideNavigation: true,
        }
      )
  }

  const manageTab = key => {
      if (key === 'scode') {
          showCode();
      }
  }

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={getDescription()} />

      <Tabs
        defaultActiveKey={defaultTabKey}
        id="demo-entry-tab"
        onSelect={k => manageTab(k)}
      >
        {
          showDemoTab &&
          <Tab eventKey="demo" title="Demo" style={{ padding: "10px" }}>
            <div>
              {demo.length > 0 &&
                demo.map((Component, index) => <Component key={index} />)}
            </div>
          </Tab>
        }
        { 
          !hideCodeTab && 
          <Tab eventKey="scode" title="Source Code" style={{ padding: "10px" }}>
            <div className="row" id="codeEmbed"></div>
          </Tab>
        }
        <Tab eventKey="read" title="Important Links" style={{ padding: "10px" }}>
          {links && links.length > 0 && (
            <div>
              More reads from:
              <ul>
                {links.map((link, index) => (
                  <li key={shortid.generate()}>
                    <a
                      href={getLinkPart(link, "base")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getLinkPart(link, "origin")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Tab>
      </Tabs>

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
        code_embed_link
      }
    }
  }
`
