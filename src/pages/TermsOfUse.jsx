import React, { useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import { QueryCache } from "react-query";
import { useFetchTermsOfUseData } from "../http/apiService";
import Loader from "../components/Loader/PagesLoader";
import CommonBanner from "../components/common/CommonBanner";
import CommonDetail from "../components/common/CommonDetail";
import bannerImg from "../images/banners/aboutbanner.png";

const TermsOfUse = () => {
  const queryCache = new QueryCache();
  const {
    data: termsOfUseData,
    isLoading,
    error,
  } = useFetchTermsOfUseData(queryCache);
  const { seo, content } = termsOfUseData?.data || {};

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
        <title>{seo?.title ?? "Terms of Use | Film Fusion"}</title>
        <meta name="description" content={seo?.description ?? "Description"} />
      </Helmet>
      <CommonBanner
        name="Terms of Use"
        indexpage="Home"
        indexvisit="/"
        activepage="Terms of Use"
        bgImg={bannerImg}
      />
      <Loader isLoading={isLoading}>
        <CommonDetail commonData={content?.Policy} />
      </Loader>
    </>
  );
};
export default memo(TermsOfUse);
