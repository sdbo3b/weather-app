import { ResponseData } from "../../api/models";
import { WeatherDataActionType } from "../action-types/action_types";
import { SetLoadedWeatherData, SetLoadingWeatherData } from "../actions";
import { WeatherDataStatus } from "../util";

export const setLoadedWeatherData = (
  payload: ResponseData
): SetLoadedWeatherData => {
  return {
    type: WeatherDataActionType.WEATHER_DATA_LOADED,
    status: WeatherDataStatus.LOADED,
    payload,
  };
};

export const setLoadingWeatherData = (): SetLoadingWeatherData => {
  return {
    type: WeatherDataActionType.WEATHER_DATA_LOADING,
    status: WeatherDataStatus.LOADING,
  };
};
