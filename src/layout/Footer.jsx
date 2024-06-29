import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer_sec pt-5">
        <div className="container">
          <div className="row gy-5 gy-lg-0">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="comon-footer">
                <h5>About Us</h5>
                <ul className="list-unstyled">
                  <li>
                    At Film Fusion, we're not just about creating films; we're
                    about redefining excellence in media production.
                  </li>
                  <li>
                    <MdEmail className="icon-style" />{" "}
                    <a href="mailto:filmfusion@gmail.com">
                      filmfusion@gmail.com
                    </a>
                  </li>
                  <li>
                    <FaPhone /> <a href="tel:+xxxxxxxxxxxx">+xxx xx xxx xxxx</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-6">
              <div className="comon-footer justify-content-lg-center d-grid">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <NavLink to="/new-tech-service/chatbots-and-ai-assistants">
                      Chatbots And AI Assistants
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/advertising-service/virtual-reality-(vr)-advertising">
                      Virtual Reality (VR) Advertising
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/film-making-service/augmented-reality-filters-and-lenses">
                      Augmented Reality Filters And Lenses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/new-tech-service/5g-and-edge-computing">
                      5G And Edge Computing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/film-making-service/filming-and-cinematography">
                      Filming and Cinematography
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="comon-footer justify-content-lg-center d-grid">
                <h5>Quick Links</h5>
                <ul className="list-unstyled mb-1">
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq">FAQ's</NavLink>
                  </li>
                  <li>
                    <NavLink to="/careers">Careers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/media">Media</NavLink>
                  </li>
                </ul>
                <ul className="list-unstyled socialIcons">
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="icon-style" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="icon-style" />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon-style" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsTwitterX className="icon-style" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <center>
            <hr className="space_line" />
          </center>
          <p className="copyright-text py-4">
            <NavLink to="/privacy-policy">Privacy Policy</NavLink> |{" "}
            <NavLink to="/terms-of-use">Terms of Use</NavLink> | © Copyright
            2022 <NavLink to="/">FILM-FUSION</NavLink> | Designed and managed by{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaHeart />
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
