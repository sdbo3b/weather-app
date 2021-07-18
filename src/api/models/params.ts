import { Mode, Units, Lang } from "./index";

export interface ByCityNameParams {
  /**[0] = City Name
   *
   * [1] = State Code (If US city)
   *
   * [2] = Country Code */
  q: [string, string?, string?];
  mode?: Mode;
  units?: Units;
  lang?: Lang;
}

export interface ByCityIdParams {
  id: string;
  mode?: Mode;
  units?: Units;
  lang?: Lang;
}

export interface ByGeoCoordParams {
  lat: string;
  lon: string;
  mode?: Mode;
  units?: Units;
  lang?: Lang;
}

export interface ByZipCodeParams {
  zip: string;
  mode: Mode;
  units: Units;
  lang: Lang;
}

export interface ByRectangleZoneParams {
  /** Bounding box:
   *
   * [0] = lon-left
   *
   * [1] = lat-bottom
   *
   * [2] = lon-right
   *
   * [3] = lat-top
   *
   * [4] = zoom */
  bbox: [number, number, number, number, number];
  units?: Units;
  lang?: Lang;
}

export interface ByCitiesInCircleParams {
  lat: string;
  lon: string;
  cnt?: string;
  mode?: Mode;
  units?: Units;
  lang?: Lang;
}
