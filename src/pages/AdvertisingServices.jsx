import React, { useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { fetchServicesData } from "../http/apiService";
import CommonBanner from "../components/common/CommonBanner";
import AdvertisingServicesInfo from "../components/AdvertisingServices/AdvertisingServicesInfo";
import AdvertisingServicesList from "../components/AdvertisingServices/AdvertisingServicesList";
import bannerImg from "../images/banners/aboutbanner.png";

const AdvertisingServices = () => {
  const ImgBaseUrl = useSelector((state) => state?.imgBaseUrl?.url);
  const [servicesData, setServicesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const route = window.location.pathname.split("/")[1];

  useEffect(() => {
    const fetchServicesListData = async () => {
      try {
        setIsLoading(true); // Show the loader

        const { data } = await fetchServicesData(route);
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchServicesListData();
  }, []);

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
        <title>Advertising Services | Film Fusion</title>
        <meta name="description" content="Description" />
      </Helmet>
      <CommonBanner
        name="Advertising Services"
        indexpage="HOME"
        indexvisit="/"
        activepage="Advertising Services"
        bgImg={bannerImg}
      />
      <AdvertisingServicesInfo />
      <AdvertisingServicesList
        moreServicesList={servicesData}
        isLoading={isLoading}
        ImgBaseUrl={ImgBaseUrl}
      />
    </>
  );
};
export default memo(AdvertisingServices);
