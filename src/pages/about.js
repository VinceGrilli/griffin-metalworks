/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `ecommerce`, `react`, `contentFul`, `Snipcart`]} />
    <div className="site-About">
      <div className="text-center">
        <h2 className="title with-underline">{data.contentfulAbout.title}</h2>
      </div>
      <div className="post-thumbnail">
        <Img sizes={data.contentfulAbout.featureImage.fluid} />
      </div>
      <div className="container">
        <div dangerouslySetInnerHTML={{
            __html: data.contentfulAbout.description.childMarkdownRemark.html
          }}
        />
      </div>
    </div>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
        contentfulAbout {
            id
            title
            slug
            description {
                childMarkdownRemark {
                    html
                    excerpt(pruneLength: 250)
                }
            }
            featureImage {
                fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
        }
    }
}
`