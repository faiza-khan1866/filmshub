import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const OurServices = ({ servicesList }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="our_services_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-12">
              <div data-aos="fade-down" className="py-5">
                <h4 className="tag_line">SERVICES</h4>
                <h2 className="main_title">
                  Explore Our Spectrum of Media Services
                </h2>
                <hr className="line_style" />
                <p>Where Innovative Technology Meets Creative Storytelling</p>
                <button
                  className="theme_white_btn mt-3"
                  onClick={() => navigate("/film-making-services")}
                >
                  <span className="btn-text">what we do</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row row-cols-md-2 row-cols-lg-3 row-cols-1 g-0">
            {servicesList?.map((service) => (
              <div className="col" key={service?.id}>
                <div className="our_service_item" data-aos="zoom-in-up">
                  <h3>{service?.name}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: service?.short_description,
                    }}
                  />
                  <FaArrowRight
                    className="arrow_style"
                    onClick={() => navigate(`/${service?.route}`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(OurServices);
