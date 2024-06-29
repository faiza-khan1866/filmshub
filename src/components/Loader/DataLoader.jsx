import React, { memo } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const DataLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <PuffLoader color={"#eb6165"} size={60} />
    </div>
  );
};
export default memo(DataLoader);
