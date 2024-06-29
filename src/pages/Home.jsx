import React, { useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import { QueryCache } from "react-query";
import { useSelector } from "react-redux";
import { useFetchHomeData } from "../http/apiService";
import Loader from "../components/Loader/PagesLoader";
import HomeBanner from "../components/Home/HomeBanner";
import OurStudio from "../components/Home/OurStudio";
import OurServices from "../components/Home/OurServices";
import NewTechServices from "../components/Home/NewTechServices";
import OurPillars from "../components/Home/OurPillars";
import BlogHome from "../components/Home/BlogHome";
import ConnectWithUs from "../components/common/ConnectWithUs";
import banner1 from "../images/banners/homebanner.webp";

const bannerSecData = [
  {
    // title: "Lorem Ipsum",
    sub_title: "Transforming Ideas into Impactful Visual Realities",
    description:
      "<p>Experience the synergy of creativity and technology with our bespoke video production and innovative advertising services.</p>",
    background_type0: "image",
    // background: "/pages/homebanner-170141420452.webp",
    background: banner1,
    see_more_route: "/film-making-services",
  },
];

const servicesData = [
  {
    id: 1,
    name: "Video Production & Film Making",
    route: "film-making-services",
    short_description:
      "From script to screen – bringing stories to life with cinematic flair.",
  },
  {
    id: 2,
    name: "Advertising",
    route: "advertising-services",
    short_description:
      "Crafting engaging ads with AR, VR, and AI for a digital worl",
  },
  {
    id: 3,
    name: "New Tech Services",
    route: "new-tech-services",
    short_description:
      "Innovating with AI, AR, and sustainable solutions for a dynamic market.",
  },
];

const Home = () => {
  const queryCache = new QueryCache();
  const ImgBaseUrl = useSelector((state) => state?.imgBaseUrl?.url);
  const { data: homedata, isLoading, error } = useFetchHomeData(queryCache);
  const { seo, content } = homedata?.data?.home || {};
  const { newTechServices, blogs } = homedata?.data || {};

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
        <title>{seo?.title ?? "Home | Film Fusion"}</title>
        <meta name="description" content={seo?.description ?? "Description"} />
      </Helmet>
      <HomeBanner
        // bannerData={
        //   content?.banerSection ? content?.banerSection : bannerSecData
        // }
        bannerData={bannerSecData}
        ImgBaseUrl={ImgBaseUrl}
      />
      <Loader isLoading={isLoading}>
        <OurStudio
          studioData={content?.aboutSection?.[0]}
          ImgBaseUrl={ImgBaseUrl}
        />
        <OurServices servicesList={servicesData} />
        <NewTechServices
          newTechServicesData={content?.newTechSection?.[0]}
          newTechServicesList={newTechServices}
          ImgBaseUrl={ImgBaseUrl}
        />
        <OurPillars pillarsData={content?.ourPillarsSection} />
        <BlogHome blogList={blogs} ImgBaseUrl={ImgBaseUrl} />
      </Loader>
      <ConnectWithUs />
    </>
  );
};
export default memo(Home);
