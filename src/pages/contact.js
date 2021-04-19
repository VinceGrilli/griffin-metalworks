/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" keywords={[`gatsby`, `Contact Us`, `react`]} />
    <div className="Contact-us">
      <div className="container">
        <form action="https://formspree.io/f/mqkwkodg" method="POST" name="contact">
          <div>
            <label>
              Your name
              <input type="text" name="name" required />
            </label>
          </div>
          <div>
            <label>
              Your Email: 
              <input type="email" name="email" required />
            </label>
          </div>
          <div>
            <label>
              Message: 
              <textarea name="message" required />
            </label>
          </div>
          <div>
            <button type="submit" required>Send</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)
    


export default Contact
