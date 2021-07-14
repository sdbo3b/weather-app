import axios from "axios";
import qs from "qs";

const key: string = "";
const baseURL: string = "https://api.openweathermap.org/data/2.5/";

export type ApiCb = (err: any, data: any) => any;

export type URL =
  | "/weather"
  | "/onecall"
  | "/forecast"
  | "/forecast/daily"
  | "/forecast/climate"
  | "/solar_radiation";

export const weatherApi = async (
  url: URL,
  params: any,
  callback?: ApiCb
): Promise<any> => {
  if (!params.appid) params.appid = key;

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
