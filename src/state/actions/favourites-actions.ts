import { ResponseData } from "../../api/models";
import { FavouriteActionType } from "../action-types/action_types";

export interface AddFavourite {
  type: FavouriteActionType.ADD_FAVOURITE;
  payload: ResponseData;
}

export interface RemoveFavourite {
  type: FavouriteActionType.REMOVE_FAVOURITE;
  payload: ResponseData;
}

export interface RefreshFavourites {
  type: FavouriteActionType.REFRESH_FAVOURITES;
  payload: ResponseData[];
}
