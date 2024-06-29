import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import studioImg from "../../images/home/studioImg.png";

const OurStudio = ({ studioData, ImgBaseUrl }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="our_studio_sec">
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center gy-4 gy-lg-0">
            <div className="col">
              <div data-aos="fade-down">
                <h4 className="tag_line">About Film Fusion</h4>
                <h2 className="main_title">{studioData?.title}</h2>
                <hr className="line_style" />
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: studioData?.description }}
                />
                <button
                  className="theme_black_btn"
                  onClick={() => navigate("/about")}
                >
                  <span className="btn-text">see details</span>
                </button>
              </div>
            </div>
            <div className="col">
              <figure data-aos="fade-up">
                <img
                  src={
                    studioData?.featured_img
                      ? ImgBaseUrl + studioData?.featured_img
                      : studioImg
                  }
                  alt="about"
                  className="image"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(OurStudio);
