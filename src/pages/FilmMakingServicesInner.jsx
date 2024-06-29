import React, { useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { fetchServiceDeatilsData } from "../http/apiService";
import Loader from "../components/Loader/PagesLoader";
import CommonBanner from "../components/common/CommonBanner";
import FilmMakingServiceDetails from "../components/FilmMakingServicesInner/FilmMakingServiceDetails";
import WhyChooseUs from "../components/PortfolioInner/WhyChooseUs";
import Highlights from "../components/FilmMakingServicesInner/Highlights";
import ConnectWithUs from "../components/common/ConnectWithUs";
import bannerImg from "../images/banners/aboutbanner.png";

const FilmMakingServicesInner = () => {
  const { id } = useParams();
  const ImgBaseUrl = useSelector((state) => state?.imgBaseUrl?.url);
  const [singleServiceData, setSingleServiceData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSingleServiceData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchServiceDeatilsData(id);
        setSingleServiceData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchSingleServiceData();
  }, [id]);

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
        <title>
          {singleServiceData?.seo_tags?.title ??
            "Film Making Service Details | Film Fusion"}
        </title>
        <meta
          name="description"
          content={singleServiceData?.seo_tags?.description ?? "Description"}
        />
      </Helmet>
      <CommonBanner
        name={singleServiceData?.name ?? "Film Making Service Details"}
        indexpage="HOME"
        indexvisit="/"
        activepage={singleServiceData?.name ?? "Film Making Service Details"}
        bgImg={bannerImg}
      />
      <Loader isLoading={isLoading}>
        <FilmMakingServiceDetails
          serviceDetailsData={singleServiceData?.content?.[0]?.Main_detail?.[0]}
          ImgBaseUrl={ImgBaseUrl}
        />
        <WhyChooseUs
          title={singleServiceData?.content?.[1]?.slider_heading?.sub_title}
          subtitle={singleServiceData?.content?.[1]?.slider_heading?.title}
          sliderData={singleServiceData?.content?.[1]?.slider}
          ImgBaseUrl={ImgBaseUrl}
        />
        <Highlights
          title="Projects"
          subtitle="OUR"
          highlightsData={singleServiceData?.highlights}
          ImgBaseUrl={ImgBaseUrl}
        />
      </Loader>
      <ConnectWithUs />
    </>
  );
};
export default memo(FilmMakingServicesInner);
