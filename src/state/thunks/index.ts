import weatherClient from "../../api/weather-api-client";
import {
  setErrorWeatherData,
  setLoadedWeatherData,
  setLoadingWeatherData,
} from "../action_creators/weather-data";
import { MeasurementUnit } from "../util";

export const fetchWeatherData = (): any => {
  return async (dispatch: any, getState: any) => {
    const unit =
      getState().measurementUnit.unit === MeasurementUnit.CELSIUS
        ? "metric"
        : "imperial";

    const city = getState().searchField.value;

    dispatch(setLoadingWeatherData());
    weatherClient
      .byCityName({ q: [city], units: unit })
      .then((data) => {
        dispatch(setLoadedWeatherData(data));
      })
      .catch((err) => {
        dispatch(setErrorWeatherData());
      });
  };
};
