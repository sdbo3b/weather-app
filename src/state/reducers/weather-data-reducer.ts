import { ResponseData } from "../../api/models";
import { WeatherDataActionType } from "../action-types/action_types";
import {
  SetErrorWeatherData,
  SetLoadedWeatherData,
  SetLoadingWeatherData,
} from "../actions";
import { WeatherDataStatus } from "../util";

export interface WeatherDataState {
  status: WeatherDataStatus;
  data: ResponseData;
}

export const initialWeatherDataState: WeatherDataState = {
  status: WeatherDataStatus.LOADED,
  data: {},
};

const weatherDataReducer = (
  state: WeatherDataState = initialWeatherDataState,
  action: SetLoadingWeatherData | SetLoadedWeatherData | SetErrorWeatherData
): WeatherDataState => {
  switch (action.type) {
    case WeatherDataActionType.WEATHER_DATA_LOADING:
      return { ...state, status: action.status };
    case WeatherDataActionType.WEATHER_DATA_LOADED:
      return { ...state, status: action.status, data: action.payload };
    case WeatherDataActionType.WEATHER_DATA_ERROR:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default weatherDataReducer;
