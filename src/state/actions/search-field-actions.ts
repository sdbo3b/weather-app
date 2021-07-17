import { SearchFieldActionType } from "../action-types/action_types";

export interface SetSearchFieldValue {
  type: SearchFieldActionType.SET_SEARCH_FIELD_VALUE;
  payload: string;
}

export interface SetSearchFieldValidation {
  type: SearchFieldActionType.SET_SEARCH_FIELD_VALIDATION;
  payload: string;
}

export interface ClearSearchFieldValidation {
  type: SearchFieldActionType.CLEAR_SEARCH_FIELD_VALIDATION;
}
