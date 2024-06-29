import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import CommonBanner from "../components/common/CommonBanner";
import CareersForm from "../components/Careers/CareersForm";
import bannerImg from "../images/banners/aboutbanner.png";

const Careers = () => {
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
        <title>Careers | Film Fusion</title>
        <meta name="description" content="Description" />
      </Helmet>
      <CommonBanner
        name="Careers"
        indexpage="Home"
        indexvisit="/"
        activepage="Careers"
        bgImg={bannerImg}
      />
      <CareersForm />
    </>
  );
};
export default Careers;
