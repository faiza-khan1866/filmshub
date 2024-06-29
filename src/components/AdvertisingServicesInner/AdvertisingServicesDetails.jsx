import React from "react";
import moreimg1 from "../../images/more/moreimg1.png";

const AdvertisingServicesDetails = ({ moreServiceDetailsData1, ImgBaseUrl }) => {
  return (
    <>
      <div className="more_inner_detail_sec pt-5">
        <div className="container">
          <div data-aos="fade-down">
            <h4 className="tag_line">Service</h4>
            <h2 className="main_title">{moreServiceDetailsData1?.title}</h2>
            <hr className="line_style" />
          </div>
          <div className="row row-cols-1 row-cols-lg-2 mt-2 mt-lg-4 gy-4 gy-lg-0">
            <div className="col">
              <div data-aos="fade-up">
                <p
                  dangerouslySetInnerHTML={{
                    __html: moreServiceDetailsData1?.description,
                  }}
                />
              </div>
            </div>
            <div className="col">
              <div data-aos="fade-down">
                <figure>
                  <img
                    src={
                      moreServiceDetailsData1?.featured_img
                        ? ImgBaseUrl + moreServiceDetailsData1?.featured_img
                        : moreimg1
                    }
                    alt="about"
                    className="image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdvertisingServicesDetails;
