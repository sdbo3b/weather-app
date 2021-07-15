import React from "react";

const TemperatureUnits: React.FC = () => {
  return (
    <div className="col-md-4  d-flex justify-content-end align-self-start text-end">
      <div className="row ">
        <p className="col-md-12 text-decoration-underline fw-bold">Celsius</p>
        <p className="col-md-12 text-muted">Fahrenheit</p>
      </div>
    </div>
  );
};

export default TemperatureUnits;
