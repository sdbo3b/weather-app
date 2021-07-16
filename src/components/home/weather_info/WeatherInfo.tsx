import React from "react";
import { useAppSelector } from "../../../state";
import { WeatherDataStatus } from "../../../state/util";
import Advice from "./Advice";
import Details from "./Details";
import FavouriteButton from "./Favourite";
import PrimaryInfo from "./PrimaryInfo";

const RenderSpinner: React.FC = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
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
      default:
        return <RenderInfo />;
    }
  };

  return (
    <div className="row min-vh-100 justify-content-center align-items-center">
      <div className="text-light w-25 row">{renderState()}</div>
    </div>
  );
};

export default WeatherInfo;
