import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataLoader from "../Loader/DataLoader";
import serviceImg from "../../images/services/serviceimg1.png";

const FilmMakingServicesList = ({ servicesList, ImgBaseUrl, isLoading }) => {
  //   const [data, setData] = useState([]);
  //   const [pageNumber, setPageNumber] = useState(1);

  //   useEffect(() => {
  //     const fetchServicesListData = async () => {
  //       try {
  //         setIsLoading(true); // Show the loader
  //         const { data } = await fetchServicesData(pageNumber);
  //         setData((prevData) => [...prevData, ...data]);
  //       } catch (error) {
  //         console.error("Error fetching Data:", error);
  //       } finally {
  //         setIsLoading(false); // Hide the loader
  //       }
  //     };
  //     fetchServicesListData();
  //   }, [pageNumber]);

  //   const handleLoadMore = () => {
  //     setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //   };
  const navigate = useNavigate();

  const [visibleList, setVisibleList] = useState(6);
  const totalList = servicesList?.length;

  const handleLoadMore = () => {
    // Increase the number of visible services
    setVisibleList((prevVisibleServices) => prevVisibleServices + 3);
  };

  return (
    <>
      <div className="services_list_sec pb-5">
        <div className="container">
          {isLoading ? (
            <DataLoader />
          ) : servicesList?.length > 0 ? (
            servicesList?.slice(0, visibleList)?.map((item, index) => (
              <div
                className="row row-cols-1 row-cols-md-2 row-cols-lg-2 gy-2 gy-md-4 gy-lg-4 mb-4 mb-md-0 mb-lg-0  "
                key={item?.id}
              >
                <div
                  className={`col-md-7 col-lg-8 mobile_service_siv ${
                    (index + 1) % 2 === 0 ? "order-last" : ""
                  }`}
                >
                  <div data-aos="fade-up">
                    <figure>
                      <img
                        src={
                          item?.featured_img
                            ? ImgBaseUrl + item?.featured_img
                            : serviceImg
                        }
                        alt="about"
                        className="image"
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-md-5 col-lg-4">
                  <div
                    className={`services_list_item ${
                      (index + 1) % 2 === 0 ? "align-items-end text-end" : ""
                    }`}
                    data-aos="fade-down"
                  >
                    <h4 className="tag_line">SERVICES</h4>
                    <h3>{item?.name}</h3>
                    <button
                      className="theme_white_btn mt-3"
                      onClick={() =>
                        navigate(`/film-making-service/${item?.route}`)
                      }
                    >
                      <span className="btn-text">see details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="not_found_note" data-aos="fade-up">
              No Service Found!
            </p>
          )}
          {visibleList < totalList && (
            <div className="d-flex justify-content-center align-items-center">
              <button className="theme_black_btn mt-4" onClick={handleLoadMore}>
                <span className="btn-text">load more</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default FilmMakingServicesList;
