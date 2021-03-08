/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogDetails = ({ data }) => (
  <Layout>
    <SEO title={data.contentfulBlogs.title} keywords={[`gatsby`, `ecommerce`, `react`, `contentFul`, `Snipcart`]} />
    <div className="blogs-page">
      <div className="post-thumbnail">
        <Img sizes={data.contentfulBlogs.featureImage.fluid} />
      </div>
      <div className="container">
        <div className="post-details">
          <h2 className="title">{data.contentfulBlogs.title}</h2>
          <div className="post-date">
            <i className="fas fa-calendar-alt" />
            {data.contentfulBlogs.publicData}
          </div>
          <div className="author">
            <Img sizes={data.contentfulBlogs.author.photo.fixed} />
            <strong className="name">{data.contentfulBlogs.author.name}</strong>
          </div>
          <div
            dangerouslySetInnerHTML={{
                            __html: data.contentfulBlogs.description.childMarkdownRemark.html
                        }}
          />

        </div>
      </div>
    </div>
  </Layout>
)

export default BlogDetails

export const query = graphql`
  query BlogDetailsQuery($slug: String!) {
        contentfulBlogs(slug: {eq: $slug }) {
            id
            title
            slug
            publicData(formatString: "MMMM D, YYYY")
            author {
            name
            photo {
                fixed(width: 50, height: 50) {
                width
                height
                src
                srcSet
                }
            }
            }
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
