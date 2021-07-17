import React from "react";
import { Search } from "react-feather";
import { useAppDispatch, useAppSelector } from "../../state";
import {
  clearSearchFieldValidation,
  setSearchFieldValidation,
  setSearchFieldValue,
} from "../../state/action_creators/search-field";
import { fetchWeatherData } from "../../state/thunks";
import { ValidationMessage } from "../../util";

const SearchField: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.searchField);

  const onSubmit = (e: any) => {
    if (state.value === "")
      dispatch(setSearchFieldValidation(ValidationMessage.EMPTY_FIELD));
    else dispatch(fetchWeatherData());
  };

  const onChange = (e: any) => {
    dispatch(setSearchFieldValue(e.target.value));
    dispatch(clearSearchFieldValidation());
  };

  return (
    <div className="col-md-8 d-flex justify-content-start align-self-start">
      <div className="row border-bottom border-2 border-light pb-1">
        <div className="col-2">
          <div onClick={onSubmit} role="button" className="d-flex ">
            <Search />
          </div>
        </div>
        <input
          onChange={onChange}
          value={state.value}
          className="col-10 border-0 bg-transparent text-light"
          type="text"
          placeholder="Search city..."
        />
      </div>
    </div>
  );
};

export default SearchField;
