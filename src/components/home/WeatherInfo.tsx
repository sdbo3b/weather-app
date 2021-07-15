import React from "react";
import { CloudRain } from "react-feather";
const MainInfo: React.FC = () => {
  return (
    <div>
      <div className="col-12">New York</div>
      <div className="col-12 ">Rain</div>
      <div className=" col-12 d-flex justify-content-center my-3 align-items-center">
        <p className="fs-1 d-flex align-items-center justify-content-center">
          <span className="mx-2">5°</span>
          <CloudRain className="mx-2" size={40} />
        </p>
      </div>
    </div>
  );
};

const WeatherInfo: React.FC = () => {
  return (
    <div className="row border border-warning min-vh-100 justify-content-center align-items-center">
      <div className="text-light w-25 row border border-danger">
        <MainInfo />
        <Details details={deats} />
        <Advice />
        <FavouriteButton />
      </div>
    </div>
  );
};

interface DetailsProps {
  details: DetailProps[];
}

const Details: React.FC<DetailsProps> = (props) => {
  return (
    <React.Fragment>
      {props.details.map((detail) => (
        <Detail detail={detail.detail} value={detail.value}></Detail>
      ))}
    </React.Fragment>
  );
};

interface DetailProps {
  detail: string;
  value: string;
}
const Detail: React.FC<DetailProps> = ({ detail, value }) => {
  return (
    <div className="col-12 row ">
      <div className="col-sm-8 text-start">{detail}</div>
      <div className="col-sm-4 text-start">{value}</div>
    </div>
  );
};

const Advice: React.FC = () => {
  return (
    <div className="col-12 my-3">
      <p>
        It's raining. Put on your raincoat. Don't forget your umbrella. The high
        today will be 15 and the low will be 3.
      </p>
    </div>
  );
};

const FavouriteButton: React.FC = () => {
  return (
    <div className="col-12 d-flex align-items-center justify-content-center">
      <button className="btn btn-info">Add to Favourites</button>
    </div>
  );
};

const deats = [
  {
    detail: "Chance of Rain",
    value: "30%",
  },
  {
    detail: "Humidity",
    value: "55%",
  },
  {
    detail: "Feels Like",
    value: "3°",
  },
  {
    detail: "Wind",
    value: "10 km/hr",
  },
];

export default WeatherInfo;
