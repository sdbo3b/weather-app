import React from "react";
import { useAppSelector } from "../../../state";
import { adviceMap } from "../../../util";

const Advice: React.FC = () => {
  const forecast = useAppSelector(
    (state) => state.weatherData.data.weather![0].main
  );

  const advice = adviceMap(forecast);
  return (
    <div className="col-12 my-3">
      <p>{advice}</p>
    </div>
  );
};

export default Advice;
