import React from "react";
import Advice from "./Advice";
import Details from "./Details";
import FavouriteButton from "./Favourite";
import PrimaryInfo from "./PrimaryInfo";

const WeatherInfo: React.FC = () => {
  return (
    <div className="row border border-warning min-vh-100 justify-content-center align-items-center">
      <div className="text-light w-25 row border border-danger">
        <PrimaryInfo />
        <Details details={deats} />
        <Advice />
        <FavouriteButton />
      </div>
    </div>
  );
};

const deats = [
  {
    detail: "Chance of Rain",
    value: "30%",
  },
  {
    detail: "Humidity",
    value: "55%",
  },
  {
    detail: "Feels Like",
    value: "3°",
  },
  {
    detail: "Wind",
    value: "10 km/hr",
  },
];

export default WeatherInfo;
