import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import CommonBanner from "../components/common/CommonBanner";
import ContactMap from "../components/Contact/ContactMap";
import ContactForm from "../components/Contact/ContactForm";
import bannerImg from "../images/banners/aboutbanner.png";

const Contact = () => {
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
        <title>Contact Us | Film Fusion</title>
        <meta name="description" content="Description" />
      </Helmet>
      <CommonBanner
        name="Contact Us"
        indexpage="Home"
        indexvisit="/"
        activepage="Contact Us"
        bgImg={bannerImg}
      />
      <ContactMap />
      <ContactForm />
    </>
  );
};
export default Contact;
