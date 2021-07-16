import { MeasurementUnitActionType } from "../action-types/action_types";
import { MeasurementUnit } from "../util";

export interface SetMeasurementUnitCelsius {
  type: MeasurementUnitActionType.SET_UNIT_CELSIUS;
  unit: MeasurementUnit.CELSIUS;
}

export interface SetMeasureMentUnitFahrenheit {
  type: MeasurementUnitActionType.SET_UNIT_FAHRENHEIT;
  unit: MeasurementUnit.FAHRENHEIT;
}
