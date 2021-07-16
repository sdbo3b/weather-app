import { SearchFieldActionType } from "../action-types/action_types";
import { SetSearchFieldValue } from "../actions/search-field-actions";

export const setSearchFieldValue = (payload: string): SetSearchFieldValue => {
  return {
    type: SearchFieldActionType.SET_SEARCH_FIELD_VALUE,
    payload,
  };
};
