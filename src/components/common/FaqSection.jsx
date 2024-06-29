import React, { memo } from "react";
import { Accordion } from "react-bootstrap";
import faqimg from "../../images/portfolio/faqimg.png";

const FaqSection = ({ faqsList }) => {
  return (
    <>
      <div className="faqs_sec pb-5">
        <div className="container">
          <div data-aos="fade-down">
            <h4 className="tag_line">HELP</h4>
            <h2 className="main_title">FAQs</h2>
            <hr className="line_style" />
          </div>
          <div className="row gy-4 gy-lg-0">
            <div className="col-lg-7">
              <Accordion flush>
                {faqsList?.map((item, i) => (
                  <Accordion.Item key={i} eventKey={i} data-aos="fade-up">
                    <Accordion.Header>
                      {i + 1}. {item?.question}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p dangerouslySetInnerHTML={{ __html: item?.answer }} />
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <div className="col-lg-5">
              <div data-aos="fade-down">
                <figure>
                  <img src={faqimg} alt="about" className="image" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(FaqSection);
