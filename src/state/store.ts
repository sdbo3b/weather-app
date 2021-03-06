import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { State } from ".";
import reducers, { initialFavouritesState } from "./reducers";
import {
  initialMeasurementUnitState,
  initialWeatherDataState,
  initialSearchFieldState,
} from "./reducers/index";

const initialState: State = {
  measurementUnit: initialMeasurementUnitState,
  weatherData: initialWeatherDataState,
  searchField: initialSearchFieldState,
  favourites: initialFavouritesState,
};

const composedEnhancer = applyMiddleware(thunk);

export const store = createStore(reducers, initialState, composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
