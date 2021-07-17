import { SearchFieldActionType } from "../action-types/action_types";
import {
  ClearSearchFieldValidation,
  SetSearchFieldValidation,
  SetSearchFieldValue,
} from "../actions/search-field-actions";

export const setSearchFieldValue = (payload: string): SetSearchFieldValue => {
  return {
    type: SearchFieldActionType.SET_SEARCH_FIELD_VALUE,
    payload,
  };
};

export const setSearchFieldValidation = (
  payload: string
): SetSearchFieldValidation => {
  return {
    type: SearchFieldActionType.SET_SEARCH_FIELD_VALIDATION,
    payload,
  };
};

export const clearSearchFieldValidation = (): ClearSearchFieldValidation => {
  return {
    type: SearchFieldActionType.CLEAR_SEARCH_FIELD_VALIDATION,
  };
};
