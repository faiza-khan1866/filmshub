import { useQuery } from "react-query";
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axios = setupCache(Axios);

const api = axios.create({
  baseURL: "https://prismcloudhosting.com/DEMO_FILMS_APIs/public/v1/api",
});

// Img Base Url API

export const fetchImgUrlData = () => {
  return api.get("/url");
};

// Header API

export const fetchHeaderDropDownData = () => {
  return api.get("/header-dropdown");
};

export const useFetchHeaderDropDownData = (queryCache) => {
  return useQuery("dropdownData", () => fetchHeaderDropDownData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

// Pages API

export const fetchHomeData = () => {
  return api.get("/home");
};

export const useFetchHomeData = (queryCache) => {
  return useQuery("homeData", () => fetchHomeData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

export const fetchAboutData = () => {
  return api.get("/about");
};

export const useFetchAboutData = (queryCache) => {
  return useQuery("aboutData", () => fetchAboutData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

export const fetchPrivacyPolicyData = () => {
  return api.get("/pages/privacy-policy");
};

export const useFetchPrivacyPolicyData = (queryCache) => {
  return useQuery("privacyPolicyData", () => fetchPrivacyPolicyData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

export const fetchTermsOfUseData = () => {
  return api.get("/pages/terms-of-use");
};

export const useFetchTermsOfUseData = (queryCache) => {
  return useQuery("termsOfUseData", () => fetchTermsOfUseData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

// Portfolio API

export const fetchPortfolioData = () => {
  return api.get("/front-portfolio-list");
};

export const fetchPortfolioDeatilsData = (id) => {
  return api.get(`/portfolio/${id}`);
};

export const fetchPortfolioCategoriesData = (id) => {
  return api.get("/portfolio-categories");
};

export const fetchPortfolioCategoryFilterData = (cat) => {
  return api.get(`/portfolio-by-category/${cat}`);
};

// Services API

export const fetchServicesData = (route) => {
  return api.get(`/front-services/${route}`);
};

export const fetchServiceDeatilsData = (id) => {
  return api.get(`/front-detail-sub-service/${id}`);
};

// Blogs API

export const fetchBlogData = () => {
  return api.get("/front-blogs-list");
};

export const fetchBlogDeatilsData = (id) => {
  return api.get(`/front-blog-detail/${id}`);
};

export const fetchBlogCategoriesData = (id) => {
  return api.get("/blog-categories");
};

export const fetchBlogCategoryFilterData = (id) => {
  return api.get(`/blog-by-category/${id}`);
};

// Media API

export const fetchMediaData = () => {
  return api.get("/front-media-list");
};

export const fetchMediaDeatilsData = (id) => {
  return api.get(`/front-media-detail/${id}`);
};

// Faqs API

export const fetchFaqData = () => {
  return api.get("/faqs");
};

export const useFetchFaqData = (queryCache) => {
  return useQuery("faqsData", () => fetchFaqData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

// Forms API

export const createContactData = (formData) => {
  return api.post("/contact-us", formData);
};

export const createCareerFormData = (formData) => {
  return api.post("/careers", formData);
};

// Add more API calls as needed
