import React from "react";
import teamImg from "../../images/home/team1.png";

const OurTeam = ({ teamData, ImgBaseUrl }) => {
  return (
    <>
      <div className="our_team_sec py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 gy-4 gy-lg-0">
            <div className="col">
              <div data-aos="fade-down">
                <h4 className="tag_line">Our Dedicated Team</h4>
                <h2 className="main_title">
                  Get to Know the People Powering Film Fusion' Success
                </h2>
                <hr className="line_style" />
              </div>
            </div>
            <div className="col">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                {teamData?.slice(0, 2)?.map((team, i) => (
                  <div className="col" key={i}>
                    <div className="our_team_item" data-aos="zoom-in">
                      <figure>
                        <img
                          src={
                            team?.featured_image
                              ? ImgBaseUrl + team?.featured_image
                              : teamImg
                          }
                          alt="team"
                          className="image"
                        />
                      </figure>
                      <div className="our_team_details">
                        <h3>{team?.name}</h3>
                        <p>{team?.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {teamData?.slice(2, 6)?.map((team, i) => (
              <div className="col" key={i}>
                <div className="our_team_item" data-aos="zoom-in">
                  <figure>
                    <img
                      src={
                        team?.featured_image
                          ? ImgBaseUrl + team?.featured_image
                          : teamImg
                      }
                      alt="team"
                      className="image"
                    />
                  </figure>
                  <div className="our_team_details">
                    <h3>{team?.name}</h3>
                    <p>{team?.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default OurTeam;
