/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Link , graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"


const IndexPost = ({ data }) => {  
  
    return (
      <>
        <div className="text-center mt-5">
          <h2 className="with-underline">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/knives">
              Kitchen Knives
            </Link>
          </h2>
        </div>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges
          .filter(item => item.node.category === 'Knives')
          .slice(0, 3)
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
        <div className="text-center">
          <h4 className="with-underline">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/knives">
              See All Kitchen Knives
            </Link>
          </h4>
        </div>

        {/* Axes               */}

        <div className="text-center mt-5">
          <h2 className="with-underline">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/axes">
              Historical Blades & Axes
            </Link>
          </h2>
        </div>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges
          .filter(item => item.node.category === 'Axes')
          .slice(0, 6)
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
        <div className="text-center">
          <h4 className="with-underline">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/axes">
              See All Historical Blades & Axes
            </Link>
          </h4>
        </div>

        {/* Architectural              */}

        <div className="text-center mt-5">
          <h2 className="with-underline">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/architectural">
              Architectural Pieces
            </Link>
          </h2>
        </div>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges
          .filter(item => item.node.category === 'Architectural')
          .slice(0, 6)
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
        <div className="text-center">
          <h4 className="with-underline">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/Architectural">
              See All Architectural Pieces
            </Link>
          </h4>
        </div>

        {/* Sculptures */}

        <div className="text-center mt-5">
          <h2 className="with-underline">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/sculpture">
              Sculptures
            </Link>
          </h2>
        </div>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges
          .filter(item => item.node.category === 'Sculpture')
          .slice(0, 6)
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
        <div className="text-center">
          <h4 className="with-underline">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/sculpture">
              See All Sculptures
            </Link>
          </h4>
        </div>

        {/* Fireplace Tools               */}

        <div className="text-center mt-5">
          <h2 className="with-underline">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/fireplace">
              Fireplace Tools
            </Link>
          </h2>
        </div>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges
          .filter(item => item.node.category === 'Fireplace')
          .slice(0, 6)
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
        <div className="text-center">
          <h4 className="with-underline">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/shop/fireplace">
              See All Fireplace Tools
            </Link>
          </h4>
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