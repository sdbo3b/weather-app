import React from "react";
import { CloudRain } from "react-feather";

const PrimaryInfo: React.FC = () => {
  return (
    <div>
      <div className="col-12">New York</div>
      <div className="col-12 ">Rain</div>
      <div className=" col-12 d-flex justify-content-center my-3 align-items-center">
        <p className="fs-1 d-flex align-items-center justify-content-center">
          <span className="mx-2">5°</span>
          <CloudRain className="mx-2" size={40} />
        </p>
      </div>
    </div>
  );
};

export default PrimaryInfo;
