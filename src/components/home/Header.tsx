import React from "react";
import SearchField from "./SearchField";
import TemperatureUnits from "./TemperatureUnits";

const Header: React.FC = () => {
  return (
    <div className="row text-light py-3 px-3 d-flex align-items-center justify-content-center">
      <SearchField />
      <TemperatureUnits />
    </div>
  );
};

export default Header;
