import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from '../images/btc-logo.png'

const Copyright = () => (
  <Layout>
    <SEO title="Copyright" keywords={[`gatsby`, `Copyright`, `react`]} />
    <div className="site-About">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Copyright</h2>
            <p>
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              All rights reserved. Website crafted by
              {` `}
              <a href="https://builttocode.dev">
                <img
                  style={{  maxWidth: `7rem`,  }}
                  src={logo}
                  alt="Built to Code"
                />
              </a>

            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
    

export default Copyright
