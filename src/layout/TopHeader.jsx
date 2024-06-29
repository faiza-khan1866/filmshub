import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const TopHeader = () => {
  return (
    <>
      <div className="top_header_sec">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <ul className="list-unstyled socialIcons">
              <li>Follow Us:</li>
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
            <ul className="list-unstyled socialIcons">
              <li>Get In Touch:</li>
              <li>
                <a href="mailto:filmfusion@gmail.com">
                  <MdEmail className="icon-style" />
                </a>
                <a href="tel:xxxxxxxxxxxx">
                  <FaPhone className="icon-style" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=xxxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="icon-style" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopHeader;
