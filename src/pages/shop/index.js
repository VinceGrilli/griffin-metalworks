/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react"
import { Link , graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"


const IndexPost = ({ data }) => {
  const [useNoOfPosts, setNoOfPosts] = useState(6)
  
  const handleScroll = () => {
    const lastScrollY = window.pageYOffset + 1100;

    if (lastScrollY > window.outerHeight) {
      setNoOfPosts(useNoOfPosts +3)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
    return (
      <>
        <div className="row product-main" onScroll={handleScroll}>
          {data.data.allContentfulProduct.edges.slice(0, useNoOfPosts).map(items => (
            <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
              <div className="details_List">
                {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fixed} />}

                <div className="details_inner">
                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                  <p>{items.node.details.childMarkdownRemark.excerpt}</p>
                  <div className="row">
                    <div className="col-sm-4 align-self-center">
                      <span className="price">
                        $
                        {items.node.price}
                      </span>
                    </div>
                    <div className="col-sm-8 text-right align-self-center">
                      <a
                        href="#"
                        className="Product snipcart-add-item"
                        data-item-id={items.node.slug}
                        data-item-price={items.node.price}
                        data-item-image={items.node.image === null ? "" : items.node.image.fixed.src}
                        data-item-name={items.node.name}
                        data-item-url="/"
                      >
                        <i className="fas fa-shopping-bag" />
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }


const IndexPage = data => (

  <Layout>
    <SEO title="Store" keywords={[`gatsby`, `store`, `react`]} />
    <div className="container store-page">
      <IndexPost data={data} />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query StoreQuery {
    allContentfulProduct{
      edges{
        node{
          id
          name
          category
          slug
          image {
            fixed(width: 1000, height: 500) {
              width
              height
              src
              srcSet
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
  }
`