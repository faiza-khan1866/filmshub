import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ContactMap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [src, setSrc] = useState("");

  useEffect(() => {
    if (inView) {
      // Set the Google Maps URL when the map section is in view
      setSrc(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.519073152653!2d55.277049973682466!3d25.185711832169027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f683045cdac7f%3A0x3e7ab93219dae54b!2sBay%20Square%20Building%203!5e0!3m2!1sen!2s!4v1705412797558!5m2!1sen!2s"
      );
    }
  }, [inView]);

  return (
    <>
      <div className="contact_map_sec" ref={ref}>
        {inView && (
          <iframe
            src={src}
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>
    </>
  );
};

export default ContactMap;
