import React from "react";
import { useAppSelector } from "../../../state";

const Details: React.FC = () => {
  const info = useAppSelector((state) => state.weatherData.data.main);

  return (
    <React.Fragment>
      <div className="col-12 row ">
        <div className="col-sm-8 text-start">Low:</div>
        <div className="col-sm-4 text-start">{info?.temp_min}</div>
      </div>
      <div className="col-12 row ">
        <div className="col-sm-8 text-start">High:</div>
        <div className="col-sm-4 text-start">{info?.temp_max}</div>
      </div>
      <div className="col-12 row ">
        <div className="col-sm-8 text-start">Feels Like:</div>
        <div className="col-sm-4 text-start">{info?.feels_like}</div>
      </div>
      <div className="col-12 row ">
        <div className="col-sm-8 text-start">Humidity:</div>
        <div className="col-sm-4 text-start">{info?.humidity}</div>
      </div>
    </React.Fragment>
  );
};

export default Details;
