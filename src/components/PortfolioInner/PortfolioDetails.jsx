import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import portfolioImg from "../../images/portfolio/portfolio1.png";

const PortfolioDetails = ({ portfolioDetailsData, ImgBaseUrl }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <>
      <div className="portfolio_inner_detail_sec py-5">
        <div className="container">
          <div className="row gy-4 gy-lg-0">
            <div className="col-lg-7">
              <div data-aos="fade-down">
                <h4 className="tag_line">PORTFOLIO</h4>
                <h2 className="main_title">{portfolioDetailsData?.title}</h2>
                <hr className="line_style" />
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: portfolioDetailsData?.description,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div data-aos="fade-up">
                <figure>
                  <img
                    src={
                      portfolioDetailsData?.featured_img
                        ? ImgBaseUrl + portfolioDetailsData?.featured_img
                        : portfolioImg
                    }
                    alt="about"
                    className="image"
                  />
                </figure>
                <div className="detail_item">
                  <ul className="list-unstyled">
                    <li>
                      CATEGORY{" "}
                      <span>{portfolioDetailsData?.category_used}</span>
                    </li>
                    <li>
                      CLIENT <span>{portfolioDetailsData?.client}</span>
                    </li>
                    <li>
                      START DATE{" "}
                      <span>
                        {new Date(
                          portfolioDetailsData?.start_date
                        )?.toLocaleDateString("en-US", options)}
                      </span>
                    </li>
                    <li>
                      END DATE{" "}
                      <span>
                        {new Date(
                          portfolioDetailsData?.end_date
                        )?.toLocaleDateString("en-US", options)}
                      </span>
                    </li>
                    <li>
                      SHARE{" "}
                      <span>
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
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PortfolioDetails;
