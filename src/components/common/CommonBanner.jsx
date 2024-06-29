import React from "react";
import { NavLink } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";

const CommonBanner = ({ bgImg, name, indexvisit, indexpage, activepage }) => {
  return (
    <>
      <div
        className="common_banner_area"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="common_banner_content">
            <h2 className="main_title">{name}</h2>
            <hr className="line_style" />
            <ul className="list-unstyled d-flex justify-content-start align-items-center">
              <li>
                <NavLink to={indexvisit}> {indexpage} </NavLink>
              </li>
              <li>
                <RxDividerVertical />
              </li>
              <li>{activepage}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommonBanner;
