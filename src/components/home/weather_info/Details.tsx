import React from "react";
import { useAppSelector } from "../../../state";

const Details: React.FC = () => {
  const info = useAppSelector((state) => state.weatherData.data.main);

  return (
    <React.Fragment>
      <div className="col-12 container-sm row d-flex justify-content-center">
        <div className="w-50 row d-flex justify-content-center">
          <div className="col-12 row">
            <div className="col-2"></div>
            <div className="col-6 text-start">Low:</div>
            <div className="col-4 text-start">{info?.temp_min}°</div>
          </div>
          <div className="col-12 row">
            <div className="col-2"></div>

            <div className="col-6 text-start">High:</div>
            <div className="col-4 text-start">{info?.temp_max}°</div>
          </div>
          <div className="col-12 row ">
            <div className="col-2"></div>

            <div className="col-6 text-start">Feels:</div>
            <div className="col-4 text-start">{info?.feels_like}°</div>
          </div>
          <div className="col-12 row ">
            <div className="col-2"></div>

            <div className="col-6 text-start">Humidity:</div>
            <div className="col-4 text-start">{info?.humidity}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
