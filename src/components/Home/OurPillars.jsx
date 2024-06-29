import React, { memo } from "react";
import { Nav, Tab, Row, Col } from "react-bootstrap";

const OurPillars = ({ pillarsData }) => {
  return (
    <>
      <div className="our_pillars_sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-12">
              <div data-aos="fade-down" className="pb-3">
                <h4 className="tag_line">Pillars of Excellence</h4>
                <h2 className="main_title">
                  The Core Elements Shaping Film Fusion
                </h2>
                <hr className="line_style" />
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey="1">
            <Row className="gy-4 gy-lg-0" data-aos="fade-up">
              <Col lg={5}>
                <Nav variant="pills" className="flex-column">
                  {pillarsData?.map((pillar, i) => (
                    <Nav.Item key={i}>
                      <Nav.Link eventKey={i + 1}>
                        <span>PILLAR {i + 1}</span> {pillar?.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col lg={7}>
                <Tab.Content>
                  {pillarsData?.map((pillar, i) => (
                    <Tab.Pane eventKey={i + 1} key={i}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: pillar?.description,
                        }}
                      />
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
export default memo(OurPillars);
