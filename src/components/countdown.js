import React from "react";
import Img from "gatsby-image"
import { Link } from "gatsby"

const Countdown = ({ data }) => (
  <div className="countdown-section mb-n5">
    <Img sizes={data.featureImage.fluid} />
    <div className="container">
      <div className="countdown-inner">
        <h2 className="with-underline">{data.title}</h2>
        <span className="date">
          <strong>
            <i className="fas fa-clock" />
            {data.date}
          </strong>
        </span>
        <Link to="/shop">Shop Now</Link>
      </div>
    </div>
  </div>
)
  

export default Countdown