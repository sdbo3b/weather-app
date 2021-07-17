import React from "react";
import { useAppDispatch, useAppSelector } from "../../state";
import { setSearchFieldValidation } from "../../state/action_creators";

import {
  fetchMeasurementUnitCelsius,
  fetchMeasurementUnitFahrenheit,
} from "../../state/thunks";
import { MeasurementUnit } from "../../state/util";
import { ValidationMessage } from "../../util";

const TemperatureUnits: React.FC = () => {
  const unit = useAppSelector((state) => state.measurementUnit.unit);
  const searchFieldState = useAppSelector((state) => state.searchField);
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
          onClick={() => {
            if (searchFieldState.value === "")
              dispatch(setSearchFieldValidation(ValidationMessage.EMPTY_FIELD));
            else dispatch(fetchMeasurementUnitCelsius());
          }}
          className={`col-md-12 ${isCelsiusSelected()}`}
        >
          Celsius
        </p>
        <p
          role="button"
          onClick={() => {
            if (searchFieldState.value === "")
              dispatch(setSearchFieldValidation(ValidationMessage.EMPTY_FIELD));
            else dispatch(fetchMeasurementUnitFahrenheit());
          }}
          className={`col-md-12 ${isFahrenheightSelected()}`}
        >
          Fahrenheit
        </p>
      </div>
    </div>
  );
};

export default TemperatureUnits;
