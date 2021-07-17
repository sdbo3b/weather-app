import { WeatherApi, ApiCb } from "./index";
import {
  ByCitiesInCircleParams,
  ByCityIdParams,
  ByCityNameParams,
  ByGeoCoordParams,
  ByRectangleZoneParams,
  ByZipCodeParams,
  ResponseData,
} from "./models";

const weatherApi = new WeatherApi("6dbbb02f8c1533de469419abbb56c106");

const weatherClient = {
  byCityName: async (
    params: ByCityNameParams,
    callback?: ApiCb
  ): Promise<ResponseData> => weatherApi.api("/weather", params, callback),
  byCityId: async (
    params: ByCityIdParams,
    callback?: ApiCb
  ): Promise<ResponseData> => weatherApi.api("/weather", params, callback),
  byGeoCoord: async (
    params: ByGeoCoordParams,
    callback?: ApiCb
  ): Promise<ResponseData> => weatherApi.api("/weather", params, callback),
  byZipCode: async (
    params: ByZipCodeParams,
    callback?: ApiCb
  ): Promise<ResponseData> => weatherApi.api("/weather", params, callback),
  byRectangleZone: async (
    params: ByRectangleZoneParams,
    callback?: ApiCb
  ): Promise<ResponseData> => weatherApi.api("/box/city", params, callback),
  byCitiesInCircle: async (
    params: ByCitiesInCircleParams,
    callback?: ApiCb
  ): Promise<ResponseData> => weatherApi.api("/find", params, callback),
};

export default weatherClient;
