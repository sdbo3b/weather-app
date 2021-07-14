import { Mode, Units, Lang } from "./index";

export interface ByCityNameParams {
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
