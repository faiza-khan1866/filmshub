import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ntsImg from "../../images/newtechservices/ntsimg1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const settings = {
  dots: false,
  infinite: false,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  lazyLoad: true,
  //   fade: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const NewTechServiceHighlights = ({ ntshighlightsData, ImgBaseUrl }) => {
  const ntsHightlightsSliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (ntsHightlightsSliderRef.current) {
      ntsHightlightsSliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (ntsHightlightsSliderRef.current) {
      ntsHightlightsSliderRef.current.slickPrev();
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
      disabled={currentSlide >= ntshighlightsData?.length - 1}
    >
      <FaArrowRight fontSize={"24px"} />
    </button>
  );

  return (
    <>
      <div className="new_tech_service_highlights_sec pb-5">
        <div className="container">
          <div className="header_wrape mb-3" data-aos="fade-down">
            <div>
              <h4 className="tag_line">OUR</h4>
              <h2 className="main_title">Projects</h2>
              <hr className="line_style" />
            </div>
            <div className="arrows_wrape">
              <PrevArrow />
              <NextArrow />
            </div>
          </div>
          <Slider
            {...settings}
            ref={ntsHightlightsSliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {ntshighlightsData?.map((curElem, i) => (
              <div className="row row-cols-1" key={i}>
                <div className="col">
                  <div data-aos="zoom-in-up">
                    <figure>
                      <img
                        src={
                          curElem?.featured_img
                            ? ImgBaseUrl + curElem?.featured_img
                            : ntsImg
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
export default NewTechServiceHighlights;
