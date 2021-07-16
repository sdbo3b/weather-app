import React from "react";
import WeatherCard from "./WeatherCard";

const Favourites: React.FC = () => {
  return (
    <div>
      <div className="container-fluid border border-danger">
        <div className="row flex-grow-1 border border-primary">
          <WeatherCard />
        </div>
      </div>
    </div>
  );
};

export default Favourites;
