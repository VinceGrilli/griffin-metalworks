/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react"
import { Link , graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"


const IndexPost = ({ data }) => {
  const [useNoOfPosts, setNoOfPosts] = useState(9)
  
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
          {data.data.allContentfulProduct.edges
            .slice(0, useNoOfPosts)
            .map(items => (
              <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
                <div className="details_List">
                  {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fixed} />}

                  <div className="details_inner">
                    <h2>
                      <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                    </h2>
                    <p>{items.node.details.childMarkdownRemark.excerpt}</p>
                    <div className="row">
                      <div className="col-sm-4 align-self-center pr-0">
                        {items.node.price === null ? <h5 className='my-auto pb-2'>Contact us for an estimate</h5> : (
                          <span className="price">
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
                          data-item-image={items.node.image === null ? "" : items.node.image.fixed.src}
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
  }


const IndexPage = data => (

  <Layout>
    <SEO title="Store" keywords={[`gatsby`, `store`, `react`]} />
    <div className="container store-page">
      <div className="text-center mt-5"><h2 className="with-underline">Latest Items</h2></div>
      <IndexPost data={data} />
      <div className="text-center"><h2 className="with-underline"><Link style={{ textDecoration: 'none', color: 'black' }} to="/shop">See All Pieces</Link></h2></div>

    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query LatestQuery {
    allContentfulProduct(limit: 9,sort:{fields:createdAt,order: DESC}){
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