import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DataLoader from "../Loader/DataLoader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ntsImg from "../../images/newtechservices/ntsimg1.png";

const ITEMS_PER_PAGE = 6;

const NewTechServicesList = ({ ntservicesList, ImgBaseUrl, isLoading }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const Viewref = useRef(null);
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const [initialData, setInitialData] = useState(
    structuredClone(ntservicesList?.slice(firstItemIndex, lastItemIndex))
  );

  useEffect(() => {
    let currentData = structuredClone(
      ntservicesList?.slice(firstItemIndex, lastItemIndex)
    );
    setInitialData(currentData);
    let newData = shuffle(structuredClone(currentData));
    setTimeout(() => {
      setInitialData(newData);
      return;
    }, 500);
  }, [currentPage, ntservicesList?.length]);
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    const maxPages = Math.ceil(ntservicesList?.length / ITEMS_PER_PAGE);
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];

      // Swap
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <>
      <div className="new_tech_services_list_area pb-5">
        <div className="container">
          {isLoading ? (
            <DataLoader />
          ) : initialData?.length > 0 ? (
            <div
              className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3"
              ref={Viewref}
            >
              <AnimatePresence>
                {initialData?.map((item) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    layout
                    className="col"
                    key={item?.id}
                  >
                    <div
                      className="new_tech_services_list_item"
                      style={{
                        backgroundImage: `url(${
                          item?.featured_img
                            ? ImgBaseUrl + item?.featured_img
                            : ntsImg
                        })`,
                      }}
                    >
                      <h3>{item?.name}</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item?.short_description,
                        }}
                      />
                      <FaArrowRight
                        className="arrow_style"
                        onClick={() =>
                          navigate(`/new-tech-service/${item?.route}`)
                        }
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <p className="not_found_note text-white" data-aos="fade-up">
              No Service Found!
            </p>
          )}
          {currentPage * ITEMS_PER_PAGE >= ntservicesList?.length ? (
            ""
          ) : (
            <div className="d-flex justify-content-end align-items-center mt-4">
              <button
                className="custom_arrow_style"
                onClick={handlePrevClick}
                disabled={currentPage === 1}
              >
                <FaArrowLeft />
              </button>
              <button
                className="custom_arrow_style ms-3"
                onClick={handleNextClick}
                disabled={
                  currentPage * ITEMS_PER_PAGE >= ntservicesList?.length
                }
              >
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default NewTechServicesList;
