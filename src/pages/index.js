/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Link , graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import LatestBlogs from "../components/latestBlog"
import Countdown from "../components/countdown"


const IndexPost = ({ data }) => (
  <>
    <div className="row product-main">
      {data.data.allContentfulProduct.edges.map(items => (
        <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
          <div className="details_List">
            {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fluid} />}

            <div className="details_inner">

              <h2>
                <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
              </h2>
              <p>{items.node.details.childMarkdownRemark.excerpt}</p>
              <div className="row">
                <div className="col-sm-4 align-self-center pr-0">
                  {items.node.price === null ? <h6 className='my-auto'>Contact us for an estimate</h6> : (
                    <span className="price ">
                      $
                      {items.node.price}
                    </span>
                      )}
                </div>
                {items.node.price === null ? (
                  <div className="col-sm-8 text-right align-self-center">
                    <Link
                      to="/contact"
                      className="Product snipcart-add-item"
                    >
                      <i className="fas fa-envelope" />
                      Contact
                    </Link>
                  </div>
                    ) : (
                      <div className="col-sm-8 text-right align-self-center">
                        <a
                          href="#"
                          className="Product snipcart-add-item"
                          data-item-id={items.node.slug}
                          data-item-price={items.node.price}
                          data-item-image={items.node.image === null ? "" : items.node.image.fluid.src}
                          data-item-name={items.node.name}
                          data-item-url="/"
                        >
                          <i className="fas fa-shopping-bag" />
                          Add to Cart
                        </a>
                      </div>
                    )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);
  


const IndexPage = data => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `oneshopper`, `react`, `Ecommerce`]} />
    <Banner BannerData={data.data.allContentfulHeaderBanner.edges} />
    <div className="container">
      <div className="text-center">
        <h2 className="with-underline">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/latest">
            Latest Items
          </Link>
        </h2>
      </div>
      <IndexPost data={data} />
    </div>
    <LatestBlogs data={data.data.allContentfulBlogs} />
    <Countdown data={data.data.contentfulDealCountDown} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allContentfulProduct(limit: 6,sort:{fields:createdAt,order: DESC}){
      edges{
        node{
          id
          name
          slug
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          price
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1800) {
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
    }
    contentfulDealCountDown {
      title
      featureImage {
        fluid(maxWidth: 1800) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      date(formatString: "D MMMM, YYYY")
    }
    allContentfulBlogs(limit: 3,sort:{fields:createdAt,order: DESC}) {
      edges {
        node {
          id
          title
          slug
          featureImage {
            fluid(maxWidth: 1120) {
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
    }
  }
`