import { SearchFieldActionType } from "../action-types/action_types";
import {
  ClearSearchFieldValidation,
  SetSearchFieldValidation,
  SetSearchFieldValue,
} from "../actions/search-field-actions";

export interface SearchFieldState {
  value: string;
  valiadtion: string;
}

export const initialSearchFieldState: SearchFieldState = {
  value: "",
  valiadtion: "",
};

const searchFieldReducer = (
  state: SearchFieldState = initialSearchFieldState,
  action:
    | SetSearchFieldValue
    | SetSearchFieldValidation
    | ClearSearchFieldValidation
): SearchFieldState => {
  switch (action.type) {
    case SearchFieldActionType.SET_SEARCH_FIELD_VALUE:
      return { ...state, value: action.payload };
    case SearchFieldActionType.SET_SEARCH_FIELD_VALIDATION:
      return { ...state, valiadtion: action.payload };
    case SearchFieldActionType.CLEAR_SEARCH_FIELD_VALIDATION:
      return { ...state, valiadtion: "" };
    default:
      return state;
  }
};

export default searchFieldReducer;
