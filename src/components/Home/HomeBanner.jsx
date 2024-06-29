import React, { useState, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from "../../images/banners/homebanner.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const settings = {
  dots: true,
  infinite: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
      },
    },
  ],
};

const HomeBanner = ({ bannerData, ImgBaseUrl }) => {
  const navigate = useNavigate();
  const bannerSliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (bannerSliderRef.current) {
      bannerSliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (bannerSliderRef.current) {
      bannerSliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const PrevArrow = () => (
    <button
      className="slider_custom_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= bannerData?.length - 1}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="home_slider_wraper">
      <Slider
        {...settings}
        ref={bannerSliderRef}
        afterChange={(index) => setCurrentSlide(index)}
      >
        {bannerData.map((banner, index) => (
          <div key={index}>
            <div
              className="home-banner"
              // style={{
              //   background: `url(${
              //     banner?.background
              //       ? ImgBaseUrl + banner?.background
              //       : bannerImg
              //   })`,
              // }}
              style={{
                background: `url(${
                  banner?.background ? banner?.background : bannerImg
                })`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-sm-10 col-12">
                    <div className="banner-content" data-aos="fade-down">
                      {/* <h4 className="tag_line">{banner?.title}</h4> */}
                      <h2 className="main_title">{banner?.sub_title}</h2>
                      <hr className="line_style" />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: banner?.description,
                        }}
                      />
                      <button
                        className="theme_white_btn"
                        onClick={() => navigate(banner?.see_more_route)}
                      >
                        <span className="btn-text">see details</span>
                      </button>
                      {bannerData?.length > 1 && (
                        <div className="mt-3">
                          <PrevArrow />
                          <NextArrow />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default memo(HomeBanner);
