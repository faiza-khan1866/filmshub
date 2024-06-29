import React, { useState } from "react";
import studioImg from "../../images/home/studioImg.png";
import ModalVideo from "react-modal-video";
import { FaPlay } from "react-icons/fa";
import CountUp from "react-countup";

const AboutWelcome = ({ aboutData, ImgBaseUrl }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="about_welcome_sec py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 gy-4 gy-lg-0">
            <div className="col-lg-7">
              <div data-aos="fade-down">
                <h4 className="tag_line">About Film Fusion</h4>
                <h2 className="main_title">{aboutData?.title}</h2>
                <hr className="line_style" />
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: aboutData?.description,
                  }}
                />
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 gy-4 gy-lg-0">
                  {aboutData?.storyCount?.map((curElem, i) => (
                    <div className="col" key={i}>
                      <div className="about_choose_sec" data-aos="zoom-in-up">
                        <h3>
                          <CountUp
                            enableScrollSpy={true}
                            start={0}
                            end={parseInt(curElem?.count)}
                            duration={4}
                          />
                          +
                        </h3>
                        <h5> {curElem?.name} </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5 img_wrape">
              <div className="image_container" data-aos="fade-up">
                <figure>
                  <img
                    src={
                      aboutData?.thumbnail
                        ? ImgBaseUrl + aboutData?.thumbnail
                        : studioImg
                    }
                    alt="about"
                    className="image"
                  />
                </figure>
                <div className="play_icon" onClick={() => setOpen(true)}>
                  <FaPlay />
                </div>
              </div>
              <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 1 }}
                isOpen={isOpen}
                videoId={aboutData?.story_video?.split("/")?.[3]}
                onClose={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutWelcome;
