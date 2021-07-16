import React from "react";
import { CloudRain } from "react-feather";
import { useAppSelector } from "../../../state";

const PrimaryInfo: React.FC = () => {
  const info = useAppSelector((state) => state.weatherData.data);

  return (
    <div>
      <div className="col-12">{info.name ? info.name : "City"}</div>
      <div className="col-12 ">
        {info.weather ? info.weather![0].main : "Rain"}
      </div>
      <div className=" col-12 d-flex justify-content-center my-3 align-items-center">
        <p className="fs-1 d-flex align-items-center justify-content-center">
          <span className="mx-2">{info.main ? info.main!.temp : "25"}°</span>
          <CloudRain className="mx-2" size={40} />
        </p>
      </div>
    </div>
  );
};

export default PrimaryInfo;
