import React from "react";
import { Heart } from "react-feather";
import { useAppDispatch, useAppSelector } from "../../../state";
import { addFavourite, removeFavourite } from "../../../state/action_creators";

const FavouriteButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const cityName = useAppSelector((state) => state.weatherData.data.name);
  const favouritedCities = useAppSelector((state) => state.favourites.cities);
  const isFavourited = favouritedCities.includes(cityName!);

  const onFavourite = () => {
    if (cityName) {
      if (isFavourited) dispatch(removeFavourite(cityName));
      else dispatch(addFavourite(cityName));
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
