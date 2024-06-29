import React, { useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { fetchMediaData } from "../http/apiService";
import CommonBanner from "../components/common/CommonBanner";
import MediaList from "../components/Media/MediaList";
import ConnectWithUs from "../components/common/ConnectWithUs";
import bannerImg from "../images/banners/aboutbanner.png";

const Media = () => {
  const ImgBaseUrl = useSelector((state) => state?.imgBaseUrl?.url);
  const [mediaData, setMediaData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMediaListData = async () => {
      try {
        setIsLoading(true); // Show the loader

        const { data } = await fetchMediaData();
        setMediaData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchMediaListData();
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
        <title>Media | Film Fusion</title>
        <meta name="description" content="Description" />
      </Helmet>
      <CommonBanner
        name="Media"
        indexpage="Home"
        indexvisit="/"
        activepage="Media"
        bgImg={bannerImg}
      />
      <MediaList
        mediaList={mediaData}
        isLoading={isLoading}
        ImgBaseUrl={ImgBaseUrl}
      />
      <ConnectWithUs />
    </>
  );
};

export default memo(Media);
