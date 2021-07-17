import React from "react";
import { Cloud, CloudDrizzle, CloudLightning, Sun } from "react-feather";
import { useAppSelector } from "../../../state";
import { MeasurementUnit } from "../../../state/util";

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

const convertUnit = (value: string, conversion: "toF" | "toC") => {
  const val = Number.parseFloat(value);
  if (conversion === "toF") {
    const result = val * 1.8 + 32;
    return result.toString();
  } else if (conversion === "toC") {
    const result = (val - 32) * 0.5556;
    return result.toString();
  }
};

const PrimaryInfo: React.FC = () => {
  const info = useAppSelector((state) => state.weatherData.data);
  const currentUnit = useAppSelector((state) => state.measurementUnit);
  const celsiusValue = () => {
    if (currentUnit.unit === MeasurementUnit.FAHRENHEIT) {
      return `${convertUnit(info.main!.temp.toString(), "toF")}`;
    }
    if (currentUnit.unit === MeasurementUnit.CELSIUS) {
      return `${info.main!.temp.toString()}°`;
    } else {
      return `${convertUnit(info.main!.temp.toString(), "toC")}`;
    }
  };
  return (
    <div>
      <div className="col-12 text-center">{info.name ? info.name : "City"}</div>
      <div className="col-12 text-center">
        {info.weather ? info.weather![0].main : "Rain"}
      </div>
      <div className=" col-12 d-flex justify-content-center my-3 align-items-center">
        <p className="fs-1 d-flex align-items-center justify-content-center">
          {celsiusValue()}

          <WeatherIcon />
        </p>
      </div>
    </div>
  );
};

export default PrimaryInfo;
