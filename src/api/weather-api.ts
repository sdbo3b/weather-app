import axios from "axios";
import qs from "qs";
import { ResponseData } from "./models";

const baseURL: string = "https://api.openweathermap.org/data/2.5/";

export type ApiCb = (err: any, data: ResponseData | undefined) => any;

export type URL =
  | "/weather"
  | "/onecall"
  | "/forecast"
  | "/forecast/daily"
  | "/forecast/climate"
  | "/solar_radiation"
  | "/box/city"
  | "/find";

export class WeatherApi {
  readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  api = async (
    url: URL,
    params: any,
    callback?: ApiCb
  ): Promise<ResponseData> => {
    if (!params.appid) params.appid = this.apiKey;

    const response = axios({
      method: "GET",
      baseURL,
      url,
      params,
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "comma" }),
    })
      .then((res) => {
        if (callback) callback(undefined, res.data);
        return res.data;
      })
      .catch((err) => {
        if (callback) callback(err, undefined);
        else throw err;
      });

    return response;
  };
}
