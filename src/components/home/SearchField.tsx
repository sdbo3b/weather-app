import React, { ChangeEvent } from "react";
import { Search } from "react-feather";
import { useAppDispatch } from "../../state";
import { setSearchFieldValue } from "../../state/action_creators/search-field";
import { fetchWeatherData } from "../../state/thunks";

const SearchField: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (e: any) => {
    dispatch(fetchWeatherData());
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchFieldValue(e.target.value));
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
          className="col-10 border-0 bg-transparent text-light"
          type="text"
          placeholder="Search city..."
        />
      </div>
    </div>
  );
};

export default SearchField;
