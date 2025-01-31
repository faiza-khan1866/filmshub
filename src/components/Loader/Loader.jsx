import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`d-flex flex-column text-center align-items-center justify-content-center`}
          style={{
            position: "absolute",
            zIndex: 99999,
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,1)",
          }}
        >
          <PuffLoader color={"#eb6165"} size={70} />
        </div>
      )}
    </>
  );
};
export default Loader;
