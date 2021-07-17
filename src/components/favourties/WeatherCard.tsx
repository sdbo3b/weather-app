import React from "react";
import { CloudLightning } from "react-feather";
import { ResponseData } from "../../api/models";

interface WeatherCardProps {
  city: ResponseData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {
  return (
    <div className="col-sm-2 mx-1 py-1">
      <div className="row text-dark bg-light rounded border border-primary">
        <div className="col-6">
          <p className="fs-1 col-12">{city.main?.temp}°</p>
          <p className="col-12">{city.name}</p>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <CloudLightning size={48} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
