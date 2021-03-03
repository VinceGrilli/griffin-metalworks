import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { graphql, Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductDetails = ({ data }) => (
  <Layout>

    <SEO title={data.contentfulProduct.name} keywords={[`gatsby`, `application`, `react`]} />
    <div className="container details-page">
      <div className="product-details">
        <div className="Product-Screenshot">
          {data.contentfulProduct.productMorePhotos === null ? <div className="no-image">No Image</div> : (
            <Tabs>
              {data.contentfulProduct.productMorePhotos.map(items => (
                <TabPanel key={items.id}>
                  <Tab><img src={items.fixed.src} alt={items.id} /></Tab>
                </TabPanel>
              ))}
              <TabList>
                {data.contentfulProduct.productMorePhotos.map(items => (
                  <Tab key={items.id}><img src={items.fixed.src} alt={items.id} /></Tab>
                ))}
              </TabList>
            </Tabs>
          )}

        </div>
        <div>
          <h2>{data.contentfulProduct.name}</h2>
        </div>
        <div className="row buynowinner">
          <div className="col-6 align-self-center pr-0">
            {data.contentfulProduct.price === null ? <h4 className='my-auto'>Contact us for an estimate</h4> : (
              <span className="price">
                Price: $
                {data.contentfulProduct.price}
              </span>
            )}  
          </div>
          {data.contentfulProduct.price === null ? (
            <div className="col-6 text-right align-self-center">
              <Link
                to="/contact"
                className="Product snipcart-add-item"
              >
                <i className="fas fa-envelope" />
                Contact
              </Link>
            </div>
              ) : (
                <div className="col-6 text-right ">
                  <a
                    href="#"
                    className="Product snipcart-add-item"
                    data-item-id={data.contentfulProduct.slug}
                    data-item-price={data.contentfulProduct.price}
                    data-item-image={data.contentfulProduct.image === null ? "" : data.contentfulProduct.image.fixed.src}
                    data-item-name={data.contentfulProduct.name}
                    data-item-url="/"
                  >
                    <i className="fas fa-tags" />
                    Buy Now
                  </a>
                </div>
              )}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulProduct.details.childMarkdownRemark.html
          }}
        />
      </div>
    </div>
  </Layout>
)

export default ProductDetails

export const query = graphql`
  query ProductDetailsQuery($slug: String!) {
    contentfulProduct(slug: {eq: $slug }) {
      id
      name
      slug
      image {
        fixed(width: 1120, height: 500) {
        width
        height
        src
        srcSet
      }
    }
    price
      details {
      childMarkdownRemark {
        html
      }
    }
    productMorePhotos {
      id
      fixed(width: 1120, height: 600){
        src
      }
    }
  }
}
`