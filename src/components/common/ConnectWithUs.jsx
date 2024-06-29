import React, { useState } from "react";
import { toast } from "react-toastify";
import { createContactData } from "../../http/apiService";
import { Form } from "react-bootstrap";

const initailObject = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ConnectWithUs = () => {
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.name === "phone") {
      // Regular expression to match only numbers
      const numberPattern = /^\d*$/;
      if (numberPattern.test(e.target.value)) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      }
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const fetchJoinClubFormData = async (updatedData) => {
    try {
      const response = await createContactData(updatedData);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        toast.success("Data has been Submitted Successfully!", {
          autoClose: 3000,
          theme: "dark",
        });
        setFormValues({ ...initailObject });
      }
    } catch (error) {
      console.error("Error fetching Data:", error);
      setLoading(false);
      toast.error("Something Went Wrong!", {
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.name === "") {
      toast.warn("Please Enter Full Name.", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    } else if (formValues?.email === "") {
      toast.warn("Please Enter Email.", {
        autoClose: 3000,
        theme: "dark",
      });
      return false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues?.email)
    ) {
      toast.warn("Please Enter Valid Email Address. e.g. abc@example.com", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    } else if (formValues.phone === "") {
      toast.warn("Please Enter Phone Number.", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    } else if (formValues.subject === "") {
      toast.warn("Please Enter Subject", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    } else if (formValues.message === "") {
      toast.warn("Please Enter Message", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }
    let updatedData = { ...formValues };
    setLoading(true);
    fetchJoinClubFormData(updatedData);
  };

  return (
    <>
      <div className="connect_us_sec py-5 mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 gy-3 gy-lg-0">
            <div className="col">
              <div data-aos="fade-down">
                <h4 className="tag_line">SUPPORT</h4>
                <h2 className="main_title">Let's Connect</h2>
                <hr className="line_style" />
                <p className="mt-4">Get in Touch to Discuss Your Project.</p>
              </div>
            </div>
            <div className="col">
              <Form data-aos="zoom-in-up">
                <div className="row mt-4">
                  <div className="col-md-6 col-lg-6">
                    <Form.Group controlId="name" className="mb-4">
                      <Form.Control
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <Form.Group controlId="email" className="mb-4">
                      <Form.Control
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <Form.Group controlId="phone" className="mb-4">
                      <Form.Control
                        type="text"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <Form.Group controlId="subject" className="mb-4">
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formValues.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12">
                    <Form.Group controlId="message" className="mb-4">
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formValues.message}
                        onChange={handleInputChange}
                        rows={6}
                        style={{ resize: "none" }}
                        placeholder="Message"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12">
                    <button
                      className="theme_white_btn"
                      onClick={handleSubmit}
                      disabled={loading ? true : false}
                    >
                      <span className="btn-text">
                        {loading ? "Sending..." : "send message"}
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConnectWithUs;
