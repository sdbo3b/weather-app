import { ResponseData } from "../../api/models";
import { FavouriteActionType } from "../action-types/action_types";
import { AddFavourite, RemoveFavourite } from "../actions/favourites-actions";

export interface FavouritesState {
  cities: ResponseData[];
}

export const initialFavouritesState: FavouritesState = {
  cities: [],
};

const favouritesReducer = (
  state: FavouritesState = initialFavouritesState,
  action: AddFavourite | RemoveFavourite
): FavouritesState => {
  switch (action.type) {
    case FavouriteActionType.ADD_FAVOURITE:
      return { ...state, cities: [...state.cities, action.payload] };
    case FavouriteActionType.REMOVE_FAVOURITE:
      const updatedCities = state.cities.filter(
        (element) => element.name !== action.payload.name
      );
      return { ...state, cities: [...updatedCities] };
    default:
      return state;
  }
};

export default favouritesReducer;
