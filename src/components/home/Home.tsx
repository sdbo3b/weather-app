import React from "react";
import Header from "./Header";
import WeatherInfo from "./weather_info/WeatherInfo";

const Home: React.FC = () => {
  return (
    <div className="container-fluid bg-dark h-100 text-light">
      <Header />
      <WeatherInfo />
    </div>
  );
};

export default Home;
