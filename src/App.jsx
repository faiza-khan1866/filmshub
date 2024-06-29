import React, { useEffect, Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { fetchImgUrlData } from "./http/apiService";
import { useDispatch, useSelector } from "react-redux";
import { getImgUrl } from "./appRedux/actions/imgUrlAction";
// import Scrollbar from "react-smooth-scrollbar";
import Loader from "./components/Loader/Loader";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import FloatingIcon from "./components/common/FloatingIcon.jsx";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioInner = lazy(() => import("./pages/PortfolioInner"));
const FilmMakingServices = lazy(() => import("./pages/FilmMakingServices"));
const FilmMakingServicesInner = lazy(() =>
  import("./pages/FilmMakingServicesInner")
);
const NewTechServices = lazy(() => import("./pages/NewTechServices"));
const NewTechServicesInner = lazy(() => import("./pages/NewTechServicesInner"));
const AdvertisingServices = lazy(() =>
  import("./pages/AdvertisingServices.jsx")
);
const AdvertisingServicesInner = lazy(() =>
  import("./pages/AdvertisingServicesInner.jsx")
);
const Blog = lazy(() => import("./pages/Blog"));
const BlogInner = lazy(() => import("./pages/BlogInner"));
const Media = lazy(() => import("./pages/Media.jsx"));
const MediaInner = lazy(() => import("./pages/MediaInner.jsx"));
const Faq = lazy(() => import("./pages/Faq"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const Error = lazy(() => import("./pages/Error"));

const App = () => {
  const queryClient = new QueryClient();
  const dispatch = useDispatch();
  const ImgBaseUrl = useSelector((state) => state.imgBaseUrl.url);

  useEffect(() => {
    if (!ImgBaseUrl) {
      const fetchImgBaseUrlData = async () => {
        try {
          const { data } = await fetchImgUrlData();
          dispatch(getImgUrl(data));
        } catch (error) {
          console.error("Error fetching Data:", error);
        }
      };
      fetchImgBaseUrlData();
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <Router>
          {/* <Scrollbar
            damping={0.1}
            thumbMinSize={20}
            syncCallbacks={true}
            renderByPixels={true}
            alwaysShowTracks={true}
            continuousScrolling={true}
            // wheelEventTarget={element}
            // plugins={object}
            // onScroll={func}
          > */}
          <Header />
          <ToastContainer />
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route exact="true" path="/about" element={<About />} />
            <Route exact="true" path="/portfolio" element={<Portfolio />} />
            <Route
              exact="true"
              path="/portfolio/:cat"
              element={<Portfolio />}
            />
            <Route
              exact="true"
              path="/portfolio/:cat/:id"
              element={<PortfolioInner />}
            />
            <Route
              exact="true"
              path="/film-making-services"
              element={<FilmMakingServices />}
            />
            <Route
              exact="true"
              path="/film-making-service/:id"
              element={<FilmMakingServicesInner />}
            />
            <Route
              exact="true"
              path="/new-tech-services"
              element={<NewTechServices />}
            />
            <Route
              exact="true"
              path="/new-tech-service/:id"
              element={<NewTechServicesInner />}
            />
            <Route
              exact="true"
              path="/advertising-services"
              element={<AdvertisingServices />}
            />
            <Route
              exact="true"
              path="/advertising-service/:id"
              element={<AdvertisingServicesInner />}
            />
            <Route exact="true" path="/blog" element={<Blog />} />
            <Route exact="true" path="/blog/:id" element={<BlogInner />} />
            <Route exact="true" path="/media" element={<Media />} />
            <Route exact="true" path="/media/:id" element={<MediaInner />} />
            <Route exact="true" path="/faq" element={<Faq />} />
            <Route exact="true" path="/contact" element={<Contact />} />
            <Route exact="true" path="/careers" element={<Careers />} />
            <Route
              exact="true"
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route exact="true" path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <FloatingIcon />
          <Footer />
          {/* </Scrollbar> */}
        </Router>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
