import { ResponseData } from "../../api/models";
import { WeatherDataActionType } from "../action-types/action_types";
import { WeatherDataStatus } from "../util";

export interface SetLoadingWeatherData {
  type: WeatherDataActionType.WEATHER_DATA_LOADING;
  status: WeatherDataStatus.LOADING;
}

export interface SetLoadedWeatherData {
  type: WeatherDataActionType.WEATHER_DATA_LOADED;
  status: WeatherDataStatus.LOADED;
  payload: ResponseData;
}
