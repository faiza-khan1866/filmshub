import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataLoader from "../Loader/DataLoader";
import moreImg from "../../images/more/moreimg1.png";

const AdvertisingServicesList = ({
  moreServicesList,
  ImgBaseUrl,
  isLoading,
}) => {
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
  const totalList = moreServicesList?.length;

  const handleLoadMore = () => {
    // Increase the number of visible services
    setVisibleList((prevVisibleServices) => prevVisibleServices + 3);
  };

  return (
    <>
      <div className="more_list_sec pb-5">
        <div className="container">
          {isLoading ? (
            <DataLoader />
          ) : moreServicesList?.length > 0 ? (
            moreServicesList?.slice(0, visibleList)?.map((item) => (
              <div
                className="row row-cols-1 row-cols-lg-5 more_list_item align-items-center gy-3 gy-lg-0"
                key={item?.id}
                data-aos="fade-up"
              >
                <div className="col-lg-3">
                  <h3>{item?.name}</h3>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-4">
                  <div className="more_img_wrape">
                    <figure className="main_image_wrape">
                      <img
                        src={
                          item?.featured_img
                            ? ImgBaseUrl + item?.featured_img
                            : moreImg
                        }
                        alt="about"
                        className="main_image"
                      />
                    </figure>
                    <figure className="second_image_wrape">
                      <img
                        src={
                          item?.featured_img
                            ? ImgBaseUrl + item?.featured_img
                            : moreImg
                        }
                        alt="about"
                        className="second_image"
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item?.short_description,
                    }}
                  />
                  <button
                    className="theme_black_btn mt-3"
                    onClick={() =>
                      navigate(`/advertising-service/${item?.route}`)
                    }
                  >
                    <span className="btn-text">see details</span>
                  </button>
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
export default AdvertisingServicesList;
