import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moreImg from "../../images/more/moreimg1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  lazyLoad: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const AdvertisingServicesHighlights = ({ morehighlightsData, ImgBaseUrl }) => {
  const moreHighlightsSliderRef = useRef();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (moreHighlightsSliderRef.current) {
      moreHighlightsSliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (moreHighlightsSliderRef.current) {
      moreHighlightsSliderRef.current.slickPrev();
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
      disabled={currentSlide >= morehighlightsData?.length - 1}
    >
      <FaArrowRight fontSize={"24px"} />
    </button>
  );

  return (
    <>
      <div className="more_highlights_sec py-5 mb-5">
        <div className="container">
          <div className="header_wrape" data-aos="fade-down">
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
        </div>
        <div className="container-fluid">
          <Slider
            {...settings}
            ref={moreHighlightsSliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {morehighlightsData?.map((curElem, i) => (
              <div className="row row-cols-1" key={i}>
                <div className="col">
                  <div data-aos="zoom-in">
                    <figure>
                      <img
                        src={
                          curElem?.featured_img
                            ? ImgBaseUrl + curElem?.featured_img
                            : moreImg
                        }
                        alt="about"
                        className="image"
                      />
                    </figure>
                    <div className="detail_wrape">
                      <h3>{curElem?.title}</h3>
                      <p>
                        {new Date(curElem?.date)?.toLocaleDateString(
                          "en-US",
                          options
                        )}
                      </p>
                    </div>
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
export default AdvertisingServicesHighlights;
