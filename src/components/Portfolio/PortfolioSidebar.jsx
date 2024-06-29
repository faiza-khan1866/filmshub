import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPortfolioCategoriesData } from "../../http/apiService";

const PortfolioSidebar = () => {
  const navigate = useNavigate();
  const { cat } = useParams();
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const fetchCategoriesListData = async () => {
      try {
        const { data } = await fetchPortfolioCategoriesData();
        setCategoriesData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }
    };

    fetchCategoriesListData();
  }, []);

  return (
    <>
      <div className="portfolio_sidebar_sec" data-aos="zoom-in-up">
        <ul className="list-unstyled">
          <li
            className={!cat ? "active" : ""}
            onClick={() => navigate("/portfolio")}
          >
            All
          </li>
          {categoriesData?.map((category) => (
            <li
              key={category?.id}
              onClick={() => navigate(`/portfolio/${category?.route}`)}
              className={category?.route === cat ? "active" : ""}
            >
              {category?.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default PortfolioSidebar;
