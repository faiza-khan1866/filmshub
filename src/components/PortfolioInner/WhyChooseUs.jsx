import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slideImg from "../../images/portfolio/whychoose1.png";

const settings = {
  dots: true,
  infinite: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  lazyLoad: true,
  fade: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
      },
    },
  ],
};

const WhyChooseUs = ({ title, subtitle, sliderData, ImgBaseUrl }) => {
  const chooseSliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (chooseSliderRef.current) {
      chooseSliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (chooseSliderRef.current) {
      chooseSliderRef.current.slickPrev();
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
      disabled={currentSlide >= sliderData?.length - 1}
    >
      <FaArrowRight fontSize={"24px"} />
    </button>
  );

  return (
    <>
      <div className="why_choose_us_sec py-5">
        <div className="container">
          <div data-aos="fade-down">
            <h4 className="tag_line">{subtitle}</h4>
            <h2 className="main_title">{title}</h2>
            <hr className="line_style" />
          </div>
          <div className="arrows_wrape">
            <PrevArrow />
            <NextArrow />
          </div>
          <Slider
            {...settings}
            ref={chooseSliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {sliderData?.map((slide, i) => (
              <div className="item" key={i}>
                <div className="row row-cols-1 row-cols-lg-2 gy-3 gy-lg-0">
                  <div className="col">
                    <div data-aos="fade-up">
                      <figure>
                        <img
                          src={
                            slide?.featured_img
                              ? ImgBaseUrl + slide?.featured_img
                              : slideImg
                          }
                          alt="about"
                          className="image"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="col">
                    <div data-aos="fade-down">
                      <h3>0{i + 1}</h3>
                      <h5>{slide?.title}</h5>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: slide?.description,
                        }}
                      />
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
export default WhyChooseUs;
