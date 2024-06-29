import React, { useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { fetchBlogDeatilsData } from "../http/apiService";
import CommonBanner from "../components/common/CommonBanner";
import BlogDetails from "../components/BlogInner/BlogDetails";
import SimilarBlogs from "../components/BlogInner/SimilarBlogs";
import ConnectWithUs from "../components/common/ConnectWithUs";
import bannerImg from "../images/banners/aboutbanner.png";
import Loader from "../components/Loader/PagesLoader";

const BlogInner = () => {
  const { id } = useParams();
  const ImgBaseUrl = useSelector((state) => state?.imgBaseUrl?.url);
  const [singleBlogData, setSingleBlogData] = useState({});
  const [similarBlogData, setSimilarBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSingleBlogData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchBlogDeatilsData(id);
        setSingleBlogData(data?.blog);
        setSimilarBlogData(data?.similar);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchSingleBlogData();
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
          {singleBlogData?.seo?.meta_title ?? "Blog Details | Film Fusion"}
        </title>
        <meta
          name="description"
          content={singleBlogData?.seo?.meta_description ?? "Description"}
        />
      </Helmet>
      <CommonBanner
        name={singleBlogData?.title ?? "Blog Details"}
        indexpage="Home"
        indexvisit="/"
        activepage={singleBlogData?.title ?? "Blog Details"}
        bgImg={bannerImg}
      />
      <Loader isLoading={isLoading}>
        <BlogDetails blogData={singleBlogData} ImgBaseUrl={ImgBaseUrl} />
        {similarBlogData?.length > 0 && (
          <SimilarBlogs
            similarBlogList={similarBlogData}
            ImgBaseUrl={ImgBaseUrl}
          />
        )}
      </Loader>
      <ConnectWithUs />
    </>
  );
};
export default memo(BlogInner);
