import React from "react";
import { Search } from "react-feather";

const SearchField: React.FC = () => {
  return (
    <div className="col-md-8 d-flex justify-content-start">
      <div className="row border-bottom border-2 border-light pb-1">
        <div className="col-2">
          <div className="d-flex justify-content-start align-items-start">
            <Search />
          </div>
        </div>
        <input
          className="col-10 border-0 bg-transparent text-light"
          type="text"
          placeholder="Search city..."
        />
      </div>
    </div>
  );
};

export default SearchField;
