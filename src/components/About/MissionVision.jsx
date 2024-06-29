import React from "react";
import { BsBullseye, BsFillEyeFill } from "react-icons/bs";

const MissionVision = ({ missionVisionData }) => {
  return (
    <>
      <div className="mission_vision_sec py-5">
        <div className="container">
          <div data-aos="fade-down">
            <h4 className="tag_line">OUR</h4>
            <h2 className="main_title">Mission & Vision</h2>
            <hr className="line_style" />
          </div>
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <div className="mission_vision_item" data-aos="fade-up">
                <h3>{missionVisionData?.Mission_title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: missionVisionData?.Mission_description,
                  }}
                />
                <div className="icon_wrape">
                  <BsBullseye className="icon_style" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mission_vision_item" data-aos="fade-up">
                <h3>{missionVisionData?.Vision_title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: missionVisionData?.Vision_description,
                  }}
                />
                <div className="icon_wrape">
                  <BsFillEyeFill className="icon_style" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MissionVision;
