import React, { memo } from "react";
import { Accordion } from "react-bootstrap";
import DataLoader from "../Loader/DataLoader";

const FaqList = ({ faqsList, isLoading }) => {
  return (
    <>
      <div className="faqs_sec py-5">
        <div className="container">
          <div data-aos="fade-down">
            <h4 className="tag_line">HELP</h4>
            <h2 className="main_title">FAQs</h2>
            <hr className="line_style" />
          </div>
          {isLoading ? (
            <DataLoader />
          ) : (
            <div className="pt-3">
              <Accordion flush>
                {faqsList?.map((item, i) => (
                  <Accordion.Item
                    key={item?.id}
                    eventKey={i}
                    data-aos="fade-up"
                  >
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
          )}
        </div>
      </div>
    </>
  );
};
export default memo(FaqList);
