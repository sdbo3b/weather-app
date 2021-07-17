import React from "react";
import { useAppDispatch, useAppSelector } from "../../../state";
import { addFavourite, removeFavourite } from "../../../state/action_creators";

const FavouriteButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.weatherData.data);
  const favouritedCities = useAppSelector((state) => state.favourites.cities);
  let isFavourited = false;

  // Check if city has already been favourited
  favouritedCities.forEach((item) => {
    if (item.name === city.name) isFavourited = true;
  });

  const onFavourite = () => {
    if (city.name) {
      if (isFavourited) dispatch(removeFavourite(city));
      else dispatch(addFavourite(city));
    }
  };

  return (
    <div className="col-12 d-flex align-items-center justify-content-center">
      <button
        onClick={onFavourite}
        className="btn btn-info text-light"
        disabled={isFavourited}
      >
        {isFavourited ? "Favourited" : "Favourite"}
      </button>
    </div>
  );
};

export default FavouriteButton;
