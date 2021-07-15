import React from "react";
import SearchField from "./SearchField";
import TemperatureUnits from "./TemperatureUnits";

const Header: React.FC = () => {
  return (
    <div className="row text-light py-3 px-3">
      <SearchField />
      <TemperatureUnits />
    </div>
  );
};

export default Header;
