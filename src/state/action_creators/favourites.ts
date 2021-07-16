import { ResponseData } from "../../api/models";
import { FavouriteActionType } from "../action-types/action_types";
import { AddFavourite, RemoveFavourite } from "../actions/favourites-actions";

export const addFavourite = (payload: ResponseData): AddFavourite => {
  return {
    type: FavouriteActionType.ADD_FAVOURITE,
    payload,
  };
};

export const removeFavourite = (payload: ResponseData): RemoveFavourite => {
  return {
    type: FavouriteActionType.REMOVE_FAVOURITE,
    payload,
  };
};
