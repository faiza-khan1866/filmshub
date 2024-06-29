import React, { useState, memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import blogImg from "../../images/blog/blog1.png";

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

const SimilarBlogs = ({ similarBlogList, ImgBaseUrl }) => {
  const navigate = useNavigate();
  const similarBlogSliderRef = useRef();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (similarBlogSliderRef.current) {
      similarBlogSliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (similarBlogSliderRef.current) {
      similarBlogSliderRef.current.slickPrev();
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
      disabled={currentSlide >= similarBlogList?.length - 1}
    >
      <FaArrowRight fontSize={"24px"} />
    </button>
  );

  return (
    <>
      <div className="similar_blogs_sec pb-5">
        <div className="container">
          <div className="header_wrape">
            <div data-aos="fade-down">
              <h4 className="tag_line">BLOG</h4>
              <h2 className="main_title">
                Similar <span>Blog</span>
              </h2>
              <hr className="line_style" />
            </div>
            <div className="arrows_wrape">
              <PrevArrow />
              <NextArrow />
            </div>
          </div>
          <div className="mt-4">
            <Slider
              {...settings}
              ref={similarBlogSliderRef}
              afterChange={(index) => setCurrentSlide(index)}
            >
              {similarBlogList?.map((blog) => (
                <div className="item" key={blog?.id}>
                  <div className="similar_blog_item" data-aos="zoom-in-up">
                    <figure onClick={() => navigate(`/blog/${blog?.route}`)}>
                      <img
                        src={
                          blog?.featured_img
                            ? ImgBaseUrl + blog?.featured_img
                            : blogImg
                        }
                        alt="about"
                        className="image"
                      />
                    </figure>
                    <div className="similar_blog_detail">
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
                        className="theme_black_btn mt-3"
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
export default memo(SimilarBlogs);
