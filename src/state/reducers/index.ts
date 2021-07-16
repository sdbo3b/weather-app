import { combineReducers } from "redux";
import measurementUnitReducer from "./measurement-unit-reducer";
import searchFieldReducer from "./search-field-reducer";
import weatherDataReducer from "./weather-data-reducer";

export * from "./measurement-unit-reducer";
export * from "./weather-data-reducer";
export * from "./search-field-reducer";

const reducers = combineReducers({
  measurementUnit: measurementUnitReducer,
  weatherData: weatherDataReducer,
  searchField: searchFieldReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
