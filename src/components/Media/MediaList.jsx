import React from "react";
import { useNavigate } from "react-router-dom";
import DataLoader from "../Loader/DataLoader";
import mediaImg from "../../images/media/media1.png";

const MediaList = ({ mediaList, isLoading, ImgBaseUrl }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="media_list_sec py-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-8">
              <div data-aos="fade-down">
                <h4 className="tag_line">OUR MEDIA</h4>
                <h2 className="main_title">
                  Exploring the world Through <span>our Media</span>
                </h2>
                <hr className="line_style" />
              </div>
            </div>
          </div>
          {isLoading ? (
            <DataLoader />
          ) : mediaList?.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
              {mediaList?.map((media) => (
                <div className="col" key={media?.id}>
                  <div className="media_list_item" data-aos="zoom-in-up">
                    <figure>
                      <img
                        src={
                          media?.featured_img
                            ? ImgBaseUrl + media?.featured_img
                            : mediaImg
                        }
                        alt="about"
                        className="image"
                      />
                    </figure>
                    <div
                      className="media_list_item_detail"
                      onClick={() => navigate(`/media/${media?.route}`)}
                    >
                      <h3>{media?.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="not_found_note py-4" data-aos="fade-up">
              No Media Found!
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default MediaList;
