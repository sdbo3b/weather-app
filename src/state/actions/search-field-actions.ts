import { SearchFieldActionType } from "../action-types/action_types";

export interface SetSearchFieldValue {
  type: SearchFieldActionType.SET_SEARCH_FIELD_VALUE;
  payload: string;
}
