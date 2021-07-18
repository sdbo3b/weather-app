import React from "react";
import { Cloud, CloudDrizzle, CloudLightning, Sun } from "react-feather";
import { useAppSelector } from "../../../state";

const WeatherIcon: React.FC = () => {
  const description = useAppSelector(
    (state) => state.weatherData.data.weather![0].main
  );
  const desc = description.toLocaleLowerCase();

  switch (desc) {
    case "clouds":
      return <Cloud className="mx-2" size={40} />;
    case "rain":
      return <CloudDrizzle className="mx-2" size={40} />;
    case "clear":
      return <Sun className="mx-2" size={40} />;
    case "thunderstorm":
      return <CloudLightning className="mx-2" size={40} />;
    default:
      return <Cloud className="mx-2" size={40} />;
  }
};

const PrimaryInfo: React.FC = () => {
  const info = useAppSelector((state) => state.weatherData.data);

  return (
    <div>
      <div className="col-12 text-center">{info.name ? info.name : ""}</div>
      <div className="col-12 text-center">
        {info.weather ? info.weather![0].main : ""}
      </div>
      <div className=" col-12 d-flex justify-content-center my-3 align-items-center">
        <p className="fs-1 d-flex align-items-center justify-content-center">
          {info.main!.temp.toString()}°
          <WeatherIcon />
        </p>
      </div>
    </div>
  );
};

export default PrimaryInfo;
