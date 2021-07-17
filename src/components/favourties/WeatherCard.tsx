import React from "react";
import { ResponseData } from "../../api/models";
import { useAppDispatch } from "../../state";
import { removeFavourite } from "../../state/action_creators";

interface WeatherCardProps {
  city: ResponseData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {
  const dispatch = useAppDispatch();

  const onUnfavourited = () => {
    dispatch(removeFavourite(city));
  };

  return (
    <div className="col-sm-2 mx-1 py-1">
      <div className="row text-dark bg-light rounded border border-primary">
        <div className="col-6">
          <p className="fs-1 col-12">{city.main?.temp}°</p>
          <p className="col-12">{city.name}</p>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-end row">
          <div className="col-12 d-flex justify-content-center mb-2">
            <button onClick={onUnfavourited} className="btn btn-danger">
              Unfavourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
