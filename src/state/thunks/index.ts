import { ResponseData } from "../../api/models";
import weatherClient from "../../api/weather-api-client";
import {
  refreshFavouritesData,
  setMeasurementUnitCelsius,
  setMeasurementUnitFahrenheit,
} from "../action_creators";
import {
  setErrorWeatherData,
  setLoadedWeatherData,
  setLoadingWeatherData,
} from "../action_creators/weather-data";
import { AppDispatch, RootState } from "../store";
import { MeasurementUnit } from "../util";

export const fetchWeatherData = (): any => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
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

export const reloadFavouritesData = (): any => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();

    const unit =
      state.measurementUnit.unit === MeasurementUnit.CELSIUS
        ? "metric"
        : "imperial";

    const favouriteCities = [...state.favourites.cities];
    let newData: ResponseData[] = [];

    for (let i = 0; i < favouriteCities.length; i++) {
      await weatherClient
        .byCityName({ q: [favouriteCities[i].name!], units: unit })
        .then((data) => {
          newData.push(data);
        })
        .catch((err) => {
          // Dispatch error refresh
          console.log(err);
        });
    }

    dispatch(refreshFavouritesData(newData));
  };
};

export const fetchMeasurementUnitCelsius = (): any => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setMeasurementUnitCelsius());
    dispatch(fetchWeatherData());
  };
};

export const fetchMeasurementUnitFahrenheit = (): any => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setMeasurementUnitFahrenheit());
    dispatch(fetchWeatherData());
  };
};
