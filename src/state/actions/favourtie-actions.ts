import { FavouriteActionType } from "../action-types/action_types";

export interface AddFavourite {
  type: FavouriteActionType.ADD_FAVOURITE;
  payload: string;
}

export interface RemoveFavourite {
  type: FavouriteActionType.REMOVE_FAVOURITE;
  payload: string;
}
