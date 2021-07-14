import { WeatherApi, ApiCb } from "./index";
import {
  ByCitiesInCircleParams,
  ByCityIdParams,
  ByCityNameParams,
  ByGeoCoordParams,
  ByRectangleZoneParams,
  ByZipCodeParams,
} from "./models";

const weatherApi = new WeatherApi("");

const weatherClient = {
  byCityName: async (
    params: ByCityNameParams,
    callback?: ApiCb
  ): Promise<any> => weatherApi.api("/weather", params, callback),
  byCityId: async (params: ByCityIdParams, callback?: ApiCb): Promise<any> =>
    weatherApi.api("/weather", params, callback),
  byGeoCoord: async (
    params: ByGeoCoordParams,
    callback?: ApiCb
  ): Promise<any> => weatherApi.api("/weather", params, callback),
  byZipCode: async (params: ByZipCodeParams, callback: ApiCb): Promise<any> =>
    weatherApi.api("/weather", params, callback),
  byRectangleZone: async (
    params: ByRectangleZoneParams,
    callback: ApiCb
  ): Promise<any> => weatherApi.api("/box/city", params, callback),
  byCitiesInCircle: async (
    params: ByCitiesInCircleParams,
    callback: ApiCb
  ): Promise<any> => weatherApi.api("/find", params, callback),
};

export default weatherClient;
