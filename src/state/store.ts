import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { State } from ".";
import reducers from "./reducers";
import { initialMeasurementUnitState } from "./reducers/index";

const initialState: State = {
  measurementUnit: initialMeasurementUnitState,
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducers, initialState, composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
