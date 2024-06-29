import React, { useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { fetchServiceDeatilsData } from "../http/apiService";
import Loader from "../components/Loader/PagesLoader";
import CommonBanner from "../components/common/CommonBanner";
import NewTechServiceDetails from "../components/NewTechServicesInner/NewTechServiceDetails";
import WhyChooseUs from "../components/PortfolioInner/WhyChooseUs";
import NewTechServiceHighlights from "../components/NewTechServicesInner/NewTechServiceHighlights";
import ConnectWithUs from "../components/common/ConnectWithUs";
import bannerImg from "../images/banners/aboutbanner.png";

const NewTechServicesInner = () => {
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
            "New Tech Service Details | Film Fusion"}
        </title>
        <meta
          name="description"
          content={singleServiceData?.seo_tags?.description ?? "Description"}
        />
      </Helmet>
      <CommonBanner
        name={singleServiceData?.name ?? "New Tech Service Details"}
        indexpage="HOME"
        indexvisit="/"
        activepage={singleServiceData?.name ?? "New Tech Service Details"}
        bgImg={bannerImg}
      />
      <Loader isLoading={isLoading}>
        <NewTechServiceDetails
          ntserviceDetailsData={
            singleServiceData?.content?.[0]?.Main_detail?.[0]
          }
          ImgBaseUrl={ImgBaseUrl}
        />
        <WhyChooseUs
          title={singleServiceData?.content?.[1]?.slider_heading?.sub_title}
          subtitle={singleServiceData?.content?.[1]?.slider_heading?.title}
          sliderData={singleServiceData?.content?.[1]?.slider}
          ImgBaseUrl={ImgBaseUrl}
        />
        <NewTechServiceHighlights
          title="Projects"
          subtitle="OUR"
          ntshighlightsData={singleServiceData?.highlights}
          ImgBaseUrl={ImgBaseUrl}
        />
      </Loader>
      <ConnectWithUs />
    </>
  );
};
export default memo(NewTechServicesInner);
