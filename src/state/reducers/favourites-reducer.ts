import { ResponseData } from "../../api/models";
import { FavouriteActionType } from "../action-types/action_types";
import {
  AddFavourite,
  RefreshFavourites,
  RemoveFavourite,
} from "../actions/favourites-actions";

export interface FavouritesState {
  cities: ResponseData[];
}

export const initialFavouritesState: FavouritesState = {
  cities: [],
};

const favouritesReducer = (
  state: FavouritesState = initialFavouritesState,
  action: AddFavourite | RemoveFavourite | RefreshFavourites
): FavouritesState => {
  switch (action.type) {
    case FavouriteActionType.ADD_FAVOURITE:
      return { ...state, cities: [...state.cities, action.payload] };
    case FavouriteActionType.REMOVE_FAVOURITE:
      const updatedCities = state.cities.filter(
        (element) => element.name !== action.payload.name
      );
      return { ...state, cities: [...updatedCities] };
    case FavouriteActionType.REFRESH_FAVOURITES:
      return { ...state, cities: [...action.payload] };
    default:
      return state;
  }
};

export default favouritesReducer;
