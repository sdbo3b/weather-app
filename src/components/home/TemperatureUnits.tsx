import React from "react";
import { useAppDispatch, useAppSelector } from "../../state";
import {
  setMeasurementUnitCelsius,
  setMeasurementUnitFahrenheit,
} from "../../state/action_creators";
import { MeasurementUnit } from "../../state/util";

const TemperatureUnits: React.FC = () => {
  const unit = useAppSelector((state) => state.measurementUnit.unit);
  const dispatch = useAppDispatch();

  const selectedStyle: string = "text-decoration-underline fw-bold";
  const isCelsiusSelected = () =>
    unit === MeasurementUnit.CELSIUS ? selectedStyle : "text-muted";
  const isFahrenheightSelected = () =>
    unit === MeasurementUnit.FAHRENHEIT ? selectedStyle : "text-muted";

  return (
    <div className="col-md-4  d-flex justify-content-end align-self-start text-end">
      <div className="row ">
        <p
          role="button"
          onClick={() => dispatch(setMeasurementUnitCelsius())}
          className={`col-md-12 ${isCelsiusSelected()}`}
        >
          Celsius
        </p>
        <p
          role="button"
          onClick={() => dispatch(setMeasurementUnitFahrenheit())}
          className={`col-md-12 ${isFahrenheightSelected()}`}
        >
          Fahrenheit
        </p>
      </div>
    </div>
  );
};

export default TemperatureUnits;
