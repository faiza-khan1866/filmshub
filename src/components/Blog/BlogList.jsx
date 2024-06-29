import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import blogImg from "../../images/blog/blog1.png";
import DataLoader from "../Loader/DataLoader";
import ReactPaginate from "react-paginate";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const BlogList = ({
  blogList,
  isLoading,
  ImgBaseUrl,
  blogCategoriesList,
  filterBlogByCategory,
  isCatLoading,
}) => {
  const navigate = useNavigate();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const [activeCatId, setActiveCatId] = useState(null);
  const [data, setData] = useState(blogList);
  const [currentPage, setCurrentPage] = useState(0);

  const handleCatClick = (catId, catName) => {
    setActiveCatId(catId);
    filterBlogByCategory(catName);
  };

  useEffect(() => {
    setData(blogList);
  }, [blogList]);

  const itemsPerPage = 4;

  // Calculate the total number of pages
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  // Slice the data array to display only the items for the current page
  const displayedItems = data?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="our_blog_list_sec pb-5">
        <div className="container">
          <div data-aos="fade-down">
            <h2 className="main_title">Categories</h2>
          </div>

          <div>
            <ul className="list-unstyled categories_wrape" data-aos="fade-down">
              {blogCategoriesList?.map((category, i) => (
                <li
                  key={category?.id}
                  onClick={() => handleCatClick(i, category?.route)}
                  className={activeCatId === i ? "active" : ""}
                >
                  {category?.name}
                </li>
              ))}

              <li
                className={!activeCatId ? "active" : ""}
                onClick={() => handleCatClick(null, "all")}
              >
                All
              </li>
            </ul>
            {isLoading || isCatLoading ? (
              <DataLoader />
            ) : displayedItems?.length > 0 ? (
              displayedItems?.map((blog) => (
                <div
                  key={blog?.id}
                  className="row row-cols-1 row-cols-md-2 row-cols-lg-2 gy-4 align-items-center"
                  data-aos="fade-up"
                >
                  <div className="col-md-4 col-lg-3">
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
                  </div>
                  <div className="col-md-8 col-lg-9">
                    <div className="our_blog_list_item">
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
              ))
            ) : (
              <p className="not_found_note py-4" data-aos="fade-up">
                No Blog Found!
              </p>
            )}
          </div>

          {data?.length > itemsPerPage && (
            <ReactPaginate
              previousLabel={<FaAngleDoubleLeft fontSize={15} />}
              nextLabel={<FaAngleDoubleRight fontSize={15} />}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default BlogList;
