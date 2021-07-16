import { MeasurementUnitActionType } from "../action-types/action_types";
import {
  SetMeasurementUnitCelsius,
  SetMeasureMentUnitFahrenheit,
} from "../actions";
import { MeasurementUnit } from "../util";

export interface MeasurementUnitState {
  unit: MeasurementUnit;
}

export const initialMeasurementUnitState: MeasurementUnitState = {
  unit: MeasurementUnit.CELSIUS,
};

const measurementUnitReducer = (
  state: MeasurementUnitState = initialMeasurementUnitState,
  action: SetMeasurementUnitCelsius | SetMeasureMentUnitFahrenheit
): MeasurementUnitState => {
  switch (action.type) {
    case MeasurementUnitActionType.SET_UNIT_CELSIUS:
      return { ...state, unit: action.unit };
    case MeasurementUnitActionType.SET_UNIT_FAHRENHEIT:
      return { ...state, unit: action.unit };
    default:
      return state;
  }
};

export default measurementUnitReducer;
