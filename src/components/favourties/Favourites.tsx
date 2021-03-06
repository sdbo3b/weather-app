/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../state";
import { reloadFavouritesData } from "../../state/thunks";
import WeatherCard from "./WeatherCard";

const Favourites: React.FC = () => {
  const favourites = useAppSelector((state) => state.favourites.cities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reloadFavouritesData());
  }, []);

  return (
    <div className="container-fluid bg-dark h-100 w-100 text-white">
      {favourites.length === 0 ? (
        <div className="h-100 d-flex justify-content-center align-items-center">
          <p className="">
            {" "}
            No favourites. Search for a city and favourite it to save it here.
          </p>
        </div>
      ) : (
        <div className="row gy-2 px-2">
          {favourites.map((city) => {
            return <WeatherCard key={city.id} city={city} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Favourites;
