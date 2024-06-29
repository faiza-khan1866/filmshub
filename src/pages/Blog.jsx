import React, { useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import CommonBanner from "../components/common/CommonBanner";
import {
  fetchBlogData,
  fetchBlogCategoriesData,
  fetchBlogCategoryFilterData,
} from "../http/apiService";
import ExploreBlog from "../components/Blog/ExploreBlog";
import BlogList from "../components/Blog/BlogList";
import ConnectWithUs from "../components/common/ConnectWithUs";
import bannerImg from "../images/banners/aboutbanner.png";

const Blog = () => {
  const ImgBaseUrl = useSelector((state) => state?.imgBaseUrl?.url);
  const [blogData, setBlogData] = useState([]);
  const [expBlogData, setExpBlogData] = useState([]);
  const [blogCategories, setBlogCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCatLoading, setIsCatLoading] = useState(false);

  const fetchBlogListData = async () => {
    try {
      setIsLoading(true); // Show the loader

      const { data } = await fetchBlogData();
      setBlogData(data);
      setExpBlogData(data);
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };

  const fetchBlogCategoriesListData = async () => {
    try {
      const { data } = await fetchBlogCategoriesData();
      setBlogCategories(data);
    } catch (error) {
      console.error("Error fetching Data:", error);
    }
  };

  useEffect(() => {
    fetchBlogListData();
    fetchBlogCategoriesListData();
  }, []);

  const fetchBlogCategoryFilterListData = async (cat) => {
    try {
      setIsCatLoading(true); // Show the loader
      if (cat === "all") {
        const { data } = await fetchBlogData(cat);
        setBlogData(data);
      } else {
        const { data } = await fetchBlogCategoryFilterData(cat);
        setBlogData(data);
      }
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsCatLoading(false); // Hide the loader
    }
  };

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
        <title>Blog | Film Fusion</title>
        <meta name="description" content="Description" />
      </Helmet>
      <CommonBanner
        name="Blog"
        indexpage="Home"
        indexvisit="/"
        activepage="Blog"
        bgImg={bannerImg}
      />
      <ExploreBlog
        blogList={expBlogData}
        isLoading={isLoading}
        ImgBaseUrl={ImgBaseUrl}
      />
      <BlogList
        blogCategoriesList={blogCategories}
        blogList={blogData}
        isLoading={isLoading}
        ImgBaseUrl={ImgBaseUrl}
        filterBlogByCategory={fetchBlogCategoryFilterListData}
        isCatLoading={isCatLoading}
      />
      <ConnectWithUs />
    </>
  );
};

export default memo(Blog);
