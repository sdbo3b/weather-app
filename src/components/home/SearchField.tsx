import React from "react";

const SearchField: React.FC = () => {
  return (
    <div className="col-md-8 border border-primary d-flex justify-content-start">
      <input type="text" placeholder="Search Here..." />
    </div>
  );
};

export default SearchField;
