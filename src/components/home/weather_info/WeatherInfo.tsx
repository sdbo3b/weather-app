import React from "react";
import { Sun } from "react-feather";
import { useAppSelector } from "../../../state";
import { WeatherDataStatus } from "../../../state/util";
import Advice from "./Advice";
import Details from "./Details";
import FavouriteButton from "./Favourite";
import PrimaryInfo from "./PrimaryInfo";

const RenderIdle: React.FC = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <Sun size={64} />
      <p className="mt-2 text-center">
        Enter a city, then select a measurement unit to start search.
      </p>
    </div>
  );
};

const RenderSpinner: React.FC = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

const RenderError: React.FC = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div>
        <p>Error loading weather data. Please try again.</p>
      </div>
    </div>
  );
};

const RenderInfo: React.FC = () => {
  return (
    <React.Fragment>
      <PrimaryInfo />
      <Details />
      <Advice />
      <FavouriteButton />
    </React.Fragment>
  );
};

const WeatherInfo: React.FC = () => {
  const state = useAppSelector((state) => state.weatherData.status);

  const renderState = () => {
    switch (state) {
      case WeatherDataStatus.LOADING:
        return <RenderSpinner />;
      case WeatherDataStatus.LOADED:
        return <RenderInfo />;
      case WeatherDataStatus.ERROR:
        return <RenderError />;
      case WeatherDataStatus.IDLE:
        return <RenderIdle />;
      default:
        return <RenderIdle />;
    }
  };

  return (
    <div className="row justify-content-center align-items-center d-flex h-50">
      <div className="text-light w-25 row">{renderState()}</div>
    </div>
  );
};

export default WeatherInfo;
