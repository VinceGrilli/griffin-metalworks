import React, { Component } from "react";
import { Link } from "gatsby"
import logo from '../images/btc-logo.png'

class Footer extends Component {
    render() {
        return (
          <footer className="site-footer">
            <div className="footer_inner">
              <div className="container">
                <div className="footer-widget footer-content">
                  <section id="nav_menu-8" className="widget widget_nav_menu">
                    <div className="menu-main-container">
                      <ul id="menu-main" className="menu">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/store">Store</Link></li>
                        <li><Link to="/contact-us">Contact</Link></li>
                        <li><Link to="/copyright">Copyright</Link></li>
                      </ul>
                    </div>
                  </section>
                </div>
                <div className="footer-bottom social-right-menu ">
                  <div className="site-info">
                    ©
                    {' '}
                    {new Date().getFullYear()}
                    {' '}
                    All rights reserved. Website crafted by
                    {` `}
                    <a href="https://builttocode.dev">
                      <img
                        style={{
                                    maxWidth: `7rem`,
                                    marginTop: `1.5rem`
                                }}
                        src={logo}
                        alt="Built to Code"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer
