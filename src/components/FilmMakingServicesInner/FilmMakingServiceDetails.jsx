import React from "react";
import serviceImg from "../../images/services/serviceimg.png";

const FilmMakingServiceDetails = ({ serviceDetailsData, ImgBaseUrl }) => {
  return (
    <>
      <div className="service_inner_detail_sec py-5">
        <div className="container">
          <div className="row gy-4 gy-lg-0">
            <div className="col-lg-8">
              <div data-aos="fade-down">
                <h4 className="tag_line">Service</h4>
                <h2 className="main_title">{serviceDetailsData?.title}</h2>
                <hr className="line_style" />
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: serviceDetailsData?.description,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div data-aos="fade-up">
                <figure>
                  <img
                    src={
                      serviceDetailsData?.featured_img
                        ? ImgBaseUrl + serviceDetailsData?.featured_img
                        : serviceImg
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
export default FilmMakingServiceDetails;
