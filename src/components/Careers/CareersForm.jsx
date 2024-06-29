import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { createCareerFormData } from "../../http/apiService";
import { MdOutlineFileUpload } from "react-icons/md";
import moreimg1 from "../../images/more/moreimg1.png";

const initailObject = {
  name: "",
  email: "",
  phone: "",
  resume: "",
  message: "",
};

const CareersForm = () => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  const [uploadFile, setUploadFie] = useState("");
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    let downloadFile = event.target.files[0];
    setUploadFie(downloadFile);
  };

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

  const fetchCareerGetInTouchFormData = async (imagesFormData) => {
    try {
      let header = {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${imagesFormData._boundary}`,
        },
      };
      const response = await createCareerFormData(imagesFormData, header);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        toast.success("Data has been Submitted Successfully!", {
          autoClose: 3000,
          theme: "dark",
        });
        setFormValues({ ...initailObject });
        setUploadFie("");
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
    }
    if (formValues?.email === "") {
      toast.warn("Please Enter Email Address.", {
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
    } else if (uploadFile === "") {
      toast.warn("Please Upload Resume.", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    } else if (formValues.message === "") {
      toast.warn("Please Enter Message.", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    let updatedData = { ...formValues };
    let imagesFormData = new FormData();
    imagesFormData.append("resume", uploadFile);
    imagesFormData.append("data", JSON.stringify(updatedData));
    setLoading(true);
    fetchCareerGetInTouchFormData(imagesFormData);
  };

  return (
    <>
      <div className="careers_form_sec py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center gy-4 gy-lg-0">
            <div className="col">
              <div data-aos="fade-down">
                <h4 className="tag_line">Careers</h4>
                <h2 className="main_title">Let's Connect</h2>
                <hr className="line_style" />
                <p className="mt-4">Fill the form to get in touch with us.</p>
              </div>
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
                    <Form.Group controlId="resume" className="mb-3">
                      <InputGroup>
                        <Form.Control
                          type="text"
                          name="resume"
                          readOnly
                          value={uploadFile ? uploadFile?.name : ""}
                          placeholder="Upload Resume"
                          style={{ borderRight: "0" }}
                        />
                        <InputGroup.Text>
                          <MdOutlineFileUpload
                            fontSize="20px"
                            onClick={handleClick}
                          />
                        </InputGroup.Text>
                      </InputGroup>
                      <input
                        type="file"
                        accept="image/*"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{ display: "none" }}
                        name="property_images"
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
                      className="theme_black_btn"
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
            <div className="col">
              <div data-aos="zoom-in">
                <figure>
                  <img src={moreimg1} alt="about" className="image" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CareersForm;
