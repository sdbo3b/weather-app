import React from "react";
import { useAppSelector } from "../../state";
import WeatherCard from "./WeatherCard";

const Favourites: React.FC = () => {
  const favourites = useAppSelector((state) => state.favourites.cities);

  return (
    <div className="container-fluid bg-dark h-100 w-100 text-white">
      <div className="row gy-2 px-2">
        {favourites.map((city) => {
          return <WeatherCard city={city} />;
        })}
      </div>
    </div>
  );
};

export default Favourites;
