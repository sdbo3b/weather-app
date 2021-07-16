import { SearchFieldActionType } from "../action-types/action_types";
import { SetSearchFieldValue } from "../actions/search-field-actions";

export interface SearchFieldState {
  value: string;
}

export const initialSearchFieldState: SearchFieldState = {
  value: "",
};

const searchFieldReducer = (
  state: SearchFieldState = initialSearchFieldState,
  action: SetSearchFieldValue
): SearchFieldState => {
  switch (action.type) {
    case SearchFieldActionType.SET_SEARCH_FIELD_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default searchFieldReducer;
