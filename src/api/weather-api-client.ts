import { weatherApi, ApiCb } from "./index";
import { ByCityNameParams } from "./models";

const weatherApiClient = {
  byCityName: async (
    params: ByCityNameParams,
    callback?: ApiCb
  ): Promise<any> => weatherApi("/weather", params, callback),
  // byCityId: async (params, callback: ApiCb): Promise<any> => {

  // }
};

export default weatherApiClient;
