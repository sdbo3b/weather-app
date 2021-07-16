import React from "react";
import { CloudRain } from "react-feather";
import { useAppSelector } from "../../../state";
import { MeasurementUnit } from "../../../state/util";

const convertUnit = (value: string, unit: "C" | "F") => {
  const val = Number.parseFloat(value);
  if (unit === "C") {
    const result = val * 1.8 + 32;
    return result.toString();
  } else if (unit === "F") {
    const result = (val - 32) * 0.5556;
    return result.toString();
  }
};

const PrimaryInfo: React.FC = () => {
  const info = useAppSelector((state) => state.weatherData.data);
  const currentUnit = useAppSelector((state) => state.measurementUnit);

  return (
    <div>
      <div className="col-12 text-center">{info.name ? info.name : "City"}</div>
      <div className="col-12 text-center">
        {info.weather ? info.weather![0].main : "Rain"}
      </div>
      <div className=" col-12 d-flex justify-content-center my-3 align-items-center">
        <p className="fs-1 d-flex align-items-center justify-content-center">
          {currentUnit.unit === MeasurementUnit.CELSIUS ? (
            <span className="mx-2">
              {info.main ? info.main!.temp.toString() + "°" : ""}
            </span>
          ) : (
            <span className="mx-2">
              {info.main ? convertUnit(`${info.main!.temp}`, "C") : ""}
            </span>
          )}

          <CloudRain className="mx-2" size={40} />
        </p>
      </div>
    </div>
  );
};

export default PrimaryInfo;
