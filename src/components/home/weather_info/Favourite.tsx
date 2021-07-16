import React from "react";
import { Heart } from "react-feather";
import { useAppDispatch, useAppSelector } from "../../../state";
import { addFavourite, removeFavourite } from "../../../state/action_creators";

const FavouriteButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.weatherData.data);
  const favouritedCities = useAppSelector((state) => state.favourites.cities);
  let isFavourited: Boolean = false;

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
      <button onClick={onFavourite} className="btn btn-info text-light">
        Favourite{" "}
        {isFavourited ? <Heart size={13} color="red" /> : <Heart size={13} />}
      </button>
    </div>
  );
};

export default FavouriteButton;
