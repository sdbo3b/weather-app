import { combineReducers } from "redux";
import measurementUnitReducer from "./measurement-unit-reducer";

export * from "./measurement-unit-reducer";

const reducers = combineReducers({
  measurementUnit: measurementUnitReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
