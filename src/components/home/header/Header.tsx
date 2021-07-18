import React from "react";
import { useAppSelector } from "../../../state/index";
import SearchField from "./SearchField";
import TemperatureUnits from "./TemperatureUnits";

const Header: React.FC = () => {
  return (
    <div className="row text-light py-3 px-3 d-flex align-items-center justify-content-center">
      <SearchField />
      <TemperatureUnits />
      <Validation />
    </div>
  );
};

const Validation: React.FC = () => {
  const state = useAppSelector((state) => state.searchField.valiadtion);

  return (
    <div>
      {state === "" ? (
        <div></div>
      ) : (
        <div className="col-sm-12 d-flex">
          <span className="text-danger">{state}</span>
        </div>
      )}
    </div>
  );
};
export default Header;
