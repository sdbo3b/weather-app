import { combineReducers } from "redux";
import favouritesReducer from "./favourites-reducer";
import measurementUnitReducer from "./measurement-unit-reducer";
import searchFieldReducer from "./search-field-reducer";
import weatherDataReducer from "./weather-data-reducer";

export * from "./measurement-unit-reducer";
export * from "./weather-data-reducer";
export * from "./search-field-reducer";
export * from "./favourites-reducer";

const reducers = combineReducers({
  measurementUnit: measurementUnitReducer,
  weatherData: weatherDataReducer,
  searchField: searchFieldReducer,
  favourites: favouritesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
