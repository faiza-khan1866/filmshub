import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import CommonBanner from "../components/common/CommonBanner";
import bannerImg from "../images/banners/aboutbanner.png";

export default function Error() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Error | Film Fusion</title>
        <meta name="description" content="Description" />
      </Helmet>
      <CommonBanner
        name="Error"
        indexpage="Home"
        indexvisit="/"
        activepage="Error"
        bgImg={bannerImg}
      />
      <div className="error-wrapper py-5">
        <div className="txt-wrapper">
          <h2 className="status-code pb-2">404</h2>
          <h3 className="subtext pb-2">Oops, something went wrong!</h3>
          <p className="description pb-2">
            The page you are looking for was moved, removed, renamed or might
            never have existed.
          </p>
          <button className="theme_black_btn" onClick={() => navigate("/")}>
            <span className="btn-text">Home</span>
          </button>
        </div>
      </div>
    </>
  );
}
