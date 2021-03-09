/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import Img from "gatsby-image";

const settings = {
  dots: true,
  speed: 500,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Banner = ({ BannerData }) => (
  <div className="slider-section">
    <Slider {...settings}>
      {BannerData.map(items => (
        <div key={items.node.id} className="item">
          <div className="site-Banner">
            <Img sizes={items.node.image.fluid} />
            <div className="Banner-details">
              <div>
                <span className="sub-title">{items.node.subHeading}</span>
                <h1>{items.node.title}</h1>
              </div>
            </div>
          </div>
        </div>
        ))}
    </Slider>
  </div>
)
  

export default Banner