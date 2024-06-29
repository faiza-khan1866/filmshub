import React, { useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { fetchMediaDeatilsData } from "../http/apiService";
import CommonBanner from "../components/common/CommonBanner";
import MediaDetails from "../components/MediaInner/MediaDetails";
import RelatedMedia from "../components/MediaInner/RelatedMedia";
import bannerImg from "../images/banners/aboutbanner.png";
import Loader from "../components/Loader/PagesLoader";

const MediaInner = () => {
  const { id } = useParams();
  const ImgBaseUrl = useSelector((state) => state?.imgBaseUrl?.url);
  const [singleMediaData, setSingleMediaData] = useState({});
  const [relatedMediaData, setRelatedMediaData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSingleMediaData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchMediaDeatilsData(id);
        setSingleMediaData(data?.media);
        setRelatedMediaData(data?.similar);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchSingleMediaData();
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
          {singleMediaData?.seo?.meta_title ?? "Media Details | Film Fusion"}
        </title>
        <meta
          name="description"
          content={singleMediaData?.seo?.meta_description ?? "Description"}
        />
      </Helmet>
      <CommonBanner
        name={singleMediaData?.title ?? "Media Details"}
        indexpage="Home"
        indexvisit="/"
        activepage={singleMediaData?.title ?? "Media Details"}
        bgImg={bannerImg}
      />
      <Loader isLoading={isLoading}>
        <MediaDetails mediaData={singleMediaData} ImgBaseUrl={ImgBaseUrl} />
        {relatedMediaData?.length > 0 && (
          <RelatedMedia
            relatedMediaList={relatedMediaData}
            ImgBaseUrl={ImgBaseUrl}
          />
        )}
      </Loader>
    </>
  );
};
export default memo(MediaInner);
