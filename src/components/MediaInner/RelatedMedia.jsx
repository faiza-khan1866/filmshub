import React, { useState, memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import mediaImg from "../../images/media/media1.png";

const settings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const RelatedMedia = ({ relatedMediaList, ImgBaseUrl }) => {
  const navigate = useNavigate();
  const mediaSliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (mediaSliderRef.current) {
      mediaSliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (mediaSliderRef.current) {
      mediaSliderRef.current.slickPrev();
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
      disabled={currentSlide >= relatedMediaList?.length - 1}
    >
      <FaArrowRight fontSize={"24px"} />
    </button>
  );

  return (
    <>
      <div className="related_media_sec pb-5">
        <div className="container">
          <div className="header_wrape">
            <div data-aos="fade-down">
              <h4 className="tag_line">Media</h4>
              <h2 className="main_title">
                You might also <span>like</span>
              </h2>
              <hr className="line_style" />
            </div>
            <div className="arrows_wrape">
              <PrevArrow />
              <NextArrow />
            </div>
          </div>
          <div className="mt-3">
            <Slider
              {...settings}
              ref={mediaSliderRef}
              afterChange={(index) => setCurrentSlide(index)}
            >
              {relatedMediaList?.map((media) => (
                <div className="item" key={media?.id}>
                  <div className="related_media_item" data-aos="zoom-in-up">
                    <figure>
                      <img
                        src={
                          media?.featured_img
                            ? ImgBaseUrl + media?.featured_img
                            : mediaImg
                        }
                        alt="about"
                        className="image"
                      />
                    </figure>
                    <div
                      className="related_media_item_detail"
                      onClick={() => navigate(`/media/${media?.route}`)}
                    >
                      <h3>{media?.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(RelatedMedia);
