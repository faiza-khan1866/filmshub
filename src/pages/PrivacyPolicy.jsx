import React, { useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import { QueryCache } from "react-query";
import { useFetchPrivacyPolicyData } from "../http/apiService";
import Loader from "../components/Loader/PagesLoader";
import CommonBanner from "../components/common/CommonBanner";
import CommonDetail from "../components/common/CommonDetail";
import bannerImg from "../images/banners/aboutbanner.png";

const PrivacyPolicy = () => {
  const queryCache = new QueryCache();
  const {
    data: privacyPolicyData,
    isLoading,
    error,
  } = useFetchPrivacyPolicyData(queryCache);
  const { seo, content } = privacyPolicyData?.data || {};

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
        <title>{seo?.title ?? "Privacy Policy | Film Fusion"}</title>
        <meta name="description" content={seo?.description ?? "Description"} />
      </Helmet>
      <CommonBanner
        name="Privacy Policy"
        indexpage="Home"
        indexvisit="/"
        activepage="Privacy Policy"
        bgImg={bannerImg}
      />
      <Loader isLoading={isLoading}>
        <CommonDetail commonData={content?.Policy} />
      </Loader>
    </>
  );
};
export default memo(PrivacyPolicy);
