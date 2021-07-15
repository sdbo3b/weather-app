import React from "react";

export interface DetailProps {
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

export default Detail;
