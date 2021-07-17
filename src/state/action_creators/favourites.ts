import { ResponseData } from "../../api/models";
import { FavouriteActionType } from "../action-types/action_types";
import {
  AddFavourite,
  RefreshFavourites,
  RemoveFavourite,
} from "../actions/favourites-actions";

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

export const refreshFavouritesData = (
  payload: ResponseData[]
): RefreshFavourites => {
  return {
    type: FavouriteActionType.REFRESH_FAVOURITES,
    payload,
  };
};
