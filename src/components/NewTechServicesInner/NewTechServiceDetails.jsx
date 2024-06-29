import React from "react";
import ntsdetailImg from "../../images/newtechservices/ntsdetailImg.png";

const NewTechServiceDetails = ({ ntserviceDetailsData, ImgBaseUrl }) => {
  return (
    <>
      <div className="new_tech_service_inner_detail_sec py-5">
        <div className="container">
          <div className="row gy-4 ">
            <div className="col-12">
              <div data-aos="fade-down">
                <h4 className="tag_line">Service</h4>
                <h2 className="main_title">{ntserviceDetailsData?.title}</h2>
                <hr className="line_style" />
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: ntserviceDetailsData?.description,
                  }}
                />
              </div>
            </div>
            <div className="col-12">
              <div data-aos="fade-up">
                <figure>
                  <img
                    src={
                      ntserviceDetailsData?.featured_img
                        ? ImgBaseUrl + ntserviceDetailsData?.featured_img
                        : ntsdetailImg
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
export default NewTechServiceDetails;
