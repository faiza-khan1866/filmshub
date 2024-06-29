import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataLoader from "../Loader/DataLoader";
import PortfolioSidebar from "./PortfolioSidebar";
import portfolioImg from "../../images/portfolio/portfolio1.png";

const PortfolioList = ({ portfolioList, ImgBaseUrl, isLoading }) => {
  const navigate = useNavigate();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const [visibleList, setVisibleList] = useState(5);
  const totalList = portfolioList?.length;

  const handleLoadMore = () => {
    // Increase the number of visible services
    setVisibleList((prevVisibleServices) => prevVisibleServices + 3);
  };
  return (
    <>
      <div className="portfolio_list_sec py-5">
        <div className="container">
          <div data-aos="fade-down">
            <h4 className="tag_line">OUR WORK</h4>
            <h2 className="main_title">Portfolio</h2>
            <hr className="line_style" />
          </div>
          <div className="row gy-3 gy-lg-0 mt-3">
            <div className="col-lg-3">
              <PortfolioSidebar />
            </div>
            <div className="col-lg-9">
              {isLoading ? (
                <DataLoader />
              ) : portfolioList?.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 gy-4">
                  {portfolioList?.slice(0, visibleList)?.map((portfolio, i) => (
                    <div
                      key={portfolio?.id}
                      className={i === 2 ? "col-lg-12 col-md-12" : "col"}
                    >
                      <div className="portfolio_item" data-aos="fade-up">
                        <figure
                          onClick={() =>
                            navigate(
                              `/portfolio/${portfolio?.category_route}/${portfolio?.route}`
                            )
                          }
                        >
                          <img
                            src={
                              portfolio?.featured_img
                                ? ImgBaseUrl + portfolio?.featured_img
                                : portfolioImg
                            }
                            alt="about"
                            className="image"
                          />
                        </figure>
                        <div className="portfolio_item_detail">
                          <ul className="list-unstyled d-flex gap-2">
                            <li>{portfolio?.category_name}</li>
                            <li>
                              {new Date(
                                portfolio?.end_date
                              )?.toLocaleDateString("en-US", options)}
                            </li>
                          </ul>
                          <h3>{portfolio?.name}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="not_found_note" data-aos="fade-up">
                  No Portfolio Found!
                </p>
              )}
              {visibleList < totalList && (
                <button
                  className="theme_black_btn mt-4"
                  onClick={handleLoadMore}
                >
                  <span className="btn-text">load more</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PortfolioList;