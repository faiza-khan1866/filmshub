import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import highlightImg from "../../images/services/highlight1.png";

const settings = {
  dots: false,
  infinite: false,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const Highlights = ({ title, subtitle, highlightsData, ImgBaseUrl }) => {
  const highlightsSliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (highlightsSliderRef.current) {
      highlightsSliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (highlightsSliderRef.current) {
      highlightsSliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const PrevArrow = () => (
    <button
      className="slider_custom_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaArrowLeft fontSize={"24px"} />
    </button>
  );

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= highlightsData?.length - 1}
    >
      <FaArrowRight fontSize={"24px"} />
    </button>
  );

  return (
    <>
      <div className="highlights_sec pb-5">
        <div className="container">
          <div className="header_wrape mb-3" data-aos="fade-down">
            <div>
              <h4 className="tag_line">{subtitle}</h4>
              <h2 className="main_title">{title}</h2>
              <hr className="line_style" />
            </div>
            <div className="arrows_wrape">
              <PrevArrow />
              <NextArrow />
            </div>
          </div>
          <Slider
            {...settings}
            ref={highlightsSliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {highlightsData?.map((item, i) => (
              <div className="row row-cols-1" key={i}>
                <div className="col">
                  <div data-aos="zoom-in">
                    <figure>
                      <img
                        src={
                          item?.featured_img
                            ? ImgBaseUrl + item?.featured_img
                            : highlightImg
                        }
                        alt="about"
                        className="image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default Highlights;
