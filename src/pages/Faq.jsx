import React, { useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import { QueryCache } from "react-query";
import { useFetchFaqData } from "../http/apiService";
import CommonBanner from "../components/common/CommonBanner";
import FaqList from "../components/Faq/FaqList";
import bannerImg from "../images/banners/aboutbanner.png";

const Faq = () => {
  const queryCache = new QueryCache();
  const { data: faqsData, isLoading, error } = useFetchFaqData(queryCache);
  const faqsList = faqsData?.data || [];

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

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Helmet>
        <title>FAQs | Film Fusion</title>
        <meta name="description" content="Description" />
      </Helmet>
      <CommonBanner
        name="FAQs"
        indexpage="Home"
        indexvisit="/"
        activepage="FAQs"
        bgImg={bannerImg}
      />
      <FaqList faqsList={faqsList} isLoading={isLoading} />
    </>
  );
};
export default memo(Faq);
