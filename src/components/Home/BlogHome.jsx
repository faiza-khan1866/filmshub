import React, { useState, memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import blogImg from "../../images/home/blog1.png";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  lazyLoad: true,
  responsive: [
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

const BlogHome = ({ blogList, ImgBaseUrl }) => {
  const navigate = useNavigate();
  const blogSliderRef = useRef();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (blogSliderRef.current) {
      blogSliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (blogSliderRef.current) {
      blogSliderRef.current.slickPrev();
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
      disabled={currentSlide >= blogList?.length - 1}
    >
      <FaArrowRight fontSize={"24px"} />
    </button>
  );

  return (
    <>
      <div className="our_blog_sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-12">
              <div className="header_wrape" data-aos="fade-down">
                <div>
                  <h4 className="tag_line">Our Blog</h4>
                  <h2 className="main_title">
                    Explore the Latest Trends in Video Production and Digital
                    Advertising
                  </h2>
                  <hr className="line_style" />
                </div>
              </div>
            </div>
          </div>
          <div className="arrows_wrape">
            <PrevArrow />
            <NextArrow />
          </div>

          <div className="mt-4">
            <Slider
              {...settings}
              ref={blogSliderRef}
              afterChange={(index) => setCurrentSlide(index)}
            >
              {blogList?.map((blog, i) => (
                <div className="item" key={i}>
                  <div className="our_blog_item" data-aos="zoom-in-up">
                    <figure onClick={() => navigate(`/blog/${blog?.route}`)}>
                      <img
                        src={
                          blog?.featured_img
                            ? ImgBaseUrl + blog?.featured_img
                            : blogImg
                        }
                        alt="blog"
                        className="image"
                      />
                    </figure>
                    <div className="our_blog_item_details">
                      <ul className="list-unstyled d-flex gap-2">
                        <li>
                          <span>{blog?.posted_by}</span>{" "}
                          {new Date(blog?.created_at)?.toLocaleDateString(
                            "en-US",
                            options
                          )}
                        </li>
                      </ul>
                      <h3>{blog?.title}</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: blog?.short_description,
                        }}
                      />
                      <button
                        className="theme_black_btn"
                        onClick={() => navigate(`/blog/${blog?.route}`)}
                      >
                        <span className="btn-text">read more</span>
                      </button>
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
export default memo(BlogHome);
