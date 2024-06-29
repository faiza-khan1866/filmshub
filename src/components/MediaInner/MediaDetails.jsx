import React from "react";
import mediaImg from "../../images/media/mediadetailimg.png";

const MediaDetails = ({ mediaData, ImgBaseUrl }) => {
  return (
    <>
      <div className="media_detail_sec py-5">
        <div className="container">
          <h2 className="main_title" data-aos="fade-down">
            {mediaData?.title}
            {/* Exploring the world Through <span>our Media</span> */}
          </h2>
          <figure data-aos="fade-up">
            <img
              src={
                mediaData?.featured_img
                  ? ImgBaseUrl + mediaData?.featured_img
                  : mediaImg
              }
              alt="blogdetails"
              className="image"
            />
          </figure>
          <p
            dangerouslySetInnerHTML={{
              __html: mediaData?.long_description,
            }}
            data-aos="fade-up"
          />
        </div>
      </div>
    </>
  );
};
export default MediaDetails;
