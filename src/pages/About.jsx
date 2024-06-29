import React, { useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import { QueryCache } from "react-query";
import { useSelector } from "react-redux";
import { useFetchAboutData } from "../http/apiService";
import Loader from "../components/Loader/PagesLoader";
import CommonBanner from "../components/common/CommonBanner";
import AboutWelcome from "../components/About/AboutWelcome";
import MissionVision from "../components/About/MissionVision";
import OurTeam from "../components/About/OurTeam";
import ConnectWithUs from "../components/common/ConnectWithUs";
import bannerImg from "../images/banners/aboutbanner.png";

const About = () => {
  const queryCache = new QueryCache();
  const ImgBaseUrl = useSelector((state) => state?.imgBaseUrl?.url);
  const { data: aboutData, isLoading, error } = useFetchAboutData(queryCache);
  const { seo, content } = aboutData?.data || {};

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
        <title>{seo?.title ?? "About Us | Film Fusion"}</title>
        <meta name="description" content={seo?.description ?? "Description"} />
      </Helmet>
      <CommonBanner
        name={content?.banerSection?.title ?? "About Us"}
        indexpage="HOME"
        indexvisit="/"
        activepage={content?.banerSection?.title ?? "About Us"}
        bgImg={
          content?.banerSection?.background_image
            ? ImgBaseUrl + content?.banerSection?.background_image
            : bannerImg
        }
      />
      <Loader isLoading={isLoading}>
        <AboutWelcome
          aboutData={content?.story_Section}
          ImgBaseUrl={ImgBaseUrl}
        />
        <MissionVision missionVisionData={content?.mission_vision_Section} />
        <OurTeam teamData={content?.TeamMembers} ImgBaseUrl={ImgBaseUrl} />
      </Loader>
      <ConnectWithUs />
    </>
  );
};
export default memo(About);
