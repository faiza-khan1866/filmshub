import React, { useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import {
  fetchPortfolioData,
  fetchPortfolioCategoryFilterData,
} from "../http/apiService";
import CommonBanner from "../components/common/CommonBanner";
import PortfolioList from "../components/Portfolio/PortfolioList";
import bannerImg from "../images/banners/aboutbanner.png";

const Portfolio = () => {
  const { cat } = useParams();
  const ImgBaseUrl = useSelector((state) => state?.imgBaseUrl?.url);
  const [portfolioData, setPortfolioData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cat && cat !== "") {
      const fetchPortfolioFilterData = async () => {
        try {
          setIsLoading(true); // Show the loader
          const { data } = await fetchPortfolioCategoryFilterData(cat);
          setPortfolioData(data);
        } catch (error) {
          console.error("Error fetching Data:", error);
        } finally {
          setIsLoading(false); // Hide the loader
        }
      };
      fetchPortfolioFilterData();
    } else {
      const fetchPortfolioListData = async () => {
        try {
          setIsLoading(true); // Show the loader
          const { data } = await fetchPortfolioData();
          setPortfolioData(data);
        } catch (error) {
          console.error("Error fetching Data:", error);
        } finally {
          setIsLoading(false); // Hide the loader
        }
      };

      fetchPortfolioListData();
    }
  }, [cat]);

  useEffect(() => {
    Aos.init({
      offset: 100,
      easing: "ease",
      delay: 0,
      once: true,
      duration: 800,
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio | Film Fusion</title>
        <meta name="description" content="Description" />
      </Helmet>
      <CommonBanner
        name="Portfolio"
        indexpage="HOME"
        indexvisit="/"
        activepage="Portfolio"
        bgImg={bannerImg}
      />
      <PortfolioList
        portfolioList={portfolioData}
        isLoading={isLoading}
        ImgBaseUrl={ImgBaseUrl}
      />
    </>
  );
};
export default memo(Portfolio);
