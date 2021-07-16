import { MeasurementUnitActionType } from "../action-types/action_types";
import {
  SetMeasurementUnitCelsius,
  SetMeasureMentUnitFahrenheit,
} from "../actions";
import { MeasurementUnit } from "../util";

export const setMeasurementUnitCelsius = (): SetMeasurementUnitCelsius => {
  return {
    type: MeasurementUnitActionType.SET_UNIT_CELSIUS,
    unit: MeasurementUnit.CELSIUS,
  };
};

export const setMeasurementUnitFahrenheit =
  (): SetMeasureMentUnitFahrenheit => {
    return {
      type: MeasurementUnitActionType.SET_UNIT_FAHRENHEIT,
      unit: MeasurementUnit.FAHRENHEIT,
    };
  };
