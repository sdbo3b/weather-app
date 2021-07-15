import React from "react";
import Detail, { DetailProps } from "./Detail";

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

export default Details;
