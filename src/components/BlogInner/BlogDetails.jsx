import React from "react";
import blogImg from "../../images/blog/blogdetailimg.png";

const BlogDetails = ({ blogData, ImgBaseUrl }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <>
      <div className="blog_inner_details_sec py-5">
        <div className="container">
          <h2 className="main_title" data-aos="fade-down">
            {blogData?.title}
            {/* Exploring the world Through <span>our Blog</span> */}
          </h2>
          <figure data-aos="fade-up">
            <img
              src={
                blogData?.featured_img
                  ? ImgBaseUrl + blogData?.featured_img
                  : blogImg
              }
              alt="blogdetails"
              className="image"
            />
          </figure>
          <ul className="list-unstyled blog_details_info">
            <li>
              <span>Category:</span> {blogData?.category?.name}
            </li>
            <li>
              <span>Date:</span>{" "}
              {new Date(blogData?.created_at)?.toLocaleDateString(
                "en-US",
                options
              )}
            </li>
            <li>
              <span>Author:</span> {blogData?.posted_by}
            </li>
          </ul>
          <p
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: blogData?.long_description }}
          />
        </div>
      </div>
    </>
  );
};
export default BlogDetails;
