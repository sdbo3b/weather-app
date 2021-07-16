import { FavouriteActionType } from "../action-types/action_types";
import { AddFavourite, RemoveFavourite } from "../actions/favourites-actions";

export const addFavourite = (payload: string): AddFavourite => {
  return {
    type: FavouriteActionType.ADD_FAVOURITE,
    payload,
  };
};

export const removeFavourite = (payload: string): RemoveFavourite => {
  return {
    type: FavouriteActionType.REMOVE_FAVOURITE,
    payload,
  };
};
