import React from "react";

const CommonDetail = ({ commonData }) => {
  return (
    <>
      <div className="common_detail_sec py-5">
        <div className="container">
          <div data-aos="fade-down">
            <h4 className="tag_line">OUR Policy</h4>
            <h2 className="main_title">{commonData?.title}</h2>
            <hr className="line_style" />
          </div>
          <p
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: commonData?.description }}
          />
        </div>
      </div>
    </>
  );
};
export default CommonDetail;