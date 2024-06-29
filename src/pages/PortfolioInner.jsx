import React, { useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { fetchPortfolioDeatilsData } from "../http/apiService";
import Loader from "../components/Loader/PagesLoader";
import CommonBanner from "../components/common/CommonBanner";
import PortfolioDetails from "../components/PortfolioInner/PortfolioDetails";
import PortfolioGallery from "../components/PortfolioInner/PortfolioGallery";
import WhyChooseUs from "../components/PortfolioInner/WhyChooseUs";
import FaqSection from "../components/common/FaqSection";
import ConnectWithUs from "../components/common/ConnectWithUs";
import bannerImg from "../images/banners/aboutbanner.png";

const PortfolioInner = () => {
  const { id } = useParams();
  const ImgBaseUrl = useSelector((state) => state?.imgBaseUrl?.url);
  const [singlePortfolioData, setSinglePortfolioData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSinglePortfolioData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPortfolioDeatilsData(id);
        setSinglePortfolioData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchSinglePortfolioData();
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
          {singlePortfolioData?.seo?.meta_title ??
            "Portfolio Details | Film Fusion"}
        </title>
        <meta
          name="description"
          content={singlePortfolioData?.seo?.meta_description ?? "Description"}
        />
      </Helmet>
      <CommonBanner
        name={singlePortfolioData?.name ?? "Portfolio Details"}
        indexpage="HOME"
        indexvisit="/"
        activepage={singlePortfolioData?.name ?? "Portfolio Details"}
        bgImg={
          singlePortfolioData?.banner_img
            ? ImgBaseUrl + singlePortfolioData?.banner_img
            : bannerImg
        }
      />
      <Loader isLoading={isLoading}>
        <PortfolioDetails
          portfolioDetailsData={singlePortfolioData?.content?.about?.[0]}
          ImgBaseUrl={ImgBaseUrl}
        />
        <PortfolioGallery
          imagesData={singlePortfolioData?.gallery}
          ImgBaseUrl={ImgBaseUrl}
        />
        <WhyChooseUs
          title="Choose Us"
          subtitle="WHY"
          sliderData={singlePortfolioData?.content?.slider}
          ImgBaseUrl={ImgBaseUrl}
        />
        {singlePortfolioData?.content?.faqs?.length > 0 && (
          <FaqSection faqsList={singlePortfolioData?.content?.faqs} />
        )}
      </Loader>
      <ConnectWithUs />
    </>
  );
};
export default memo(PortfolioInner);
