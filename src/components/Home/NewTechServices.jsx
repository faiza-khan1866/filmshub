import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FaArrowRight } from "react-icons/fa";
import ntsImg from "../../images/home/nts1.png";

const NewTechServices = ({
  newTechServicesData,
  newTechServicesList,
  ImgBaseUrl,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="new_tech_services_sec">
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center gy-4 gy-lg-0">
            <div className="col">
              <div data-aos="fade-down">
                <h4 className="tag_line">New Tech Services</h4>
                <h2 className="main_title">{newTechServicesData?.title}</h2>
                <hr className="line_style" />
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: newTechServicesData?.description,
                  }}
                />
                <button
                  className="theme_black_btn"
                  onClick={() => navigate("/new-tech-services")}
                >
                  <span className="btn-text">explore more</span>
                </button>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: newTechServicesData?.sub_title,
                  }}
                />
                {/* We <span>delivering</span> <br /> exceptional{" "}
                  <span>results.</span> */}
              </div>
            </div>
            <div className="col">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
              >
                <Masonry columnsCount={2} gutter="1rem">
                  {newTechServicesList?.map((ntservice) => (
                    <div
                      key={ntservice?.id}
                      className="new_tech_service_item"
                      style={{
                        backgroundImage: `url(${
                          ntservice?.featured_img
                            ? ImgBaseUrl + ntservice?.featured_img
                            : ntsImg
                        })`,
                      }}
                      data-aos="zoom-in"
                    >
                      <h3>{ntservice?.name}</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: ntservice?.short_description,
                        }}
                      />
                      <FaArrowRight
                        className="arrow_style"
                        onClick={() =>
                          navigate(`/new-tech-service/${ntservice?.route}`)
                        }
                      />
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(NewTechServices);
