import React from "react";
import { useNavigate } from "react-router-dom";
import DataLoader from "../Loader/DataLoader";
import blogImg from "../../images/blog/blogexplore1.png";

const ExploreBlog = ({ blogList, isLoading, ImgBaseUrl }) => {
  const navigate = useNavigate();
  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <>
      <div className="explore_our_blog_sec py-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-8">
              <div data-aos="fade-down">
                <h4 className="tag_line">OUR Blog</h4>
                <h2 className="main_title">
                  Exploring the world Through <span>our Blog</span>
                </h2>
                <hr className="line_style" />
              </div>
            </div>
          </div>
          {isLoading ? (
            <DataLoader />
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
              {blogList?.map((blog) => (
                <div className="col" key={blog?.id}>
                  <div className="explore_our_blog_item" data-aos="zoom-in-up">
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
                    <div className="explore_our_blog_item_detail">
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default ExploreBlog;