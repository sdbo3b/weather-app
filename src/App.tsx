import React from "react";
import weatherApiClient from "./api/weather-api-client";
import "./App.css";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";

function App() {
  const click = (e: any) => {
    e.preventDefault();
    weatherApiClient.byCityName({ q: ["London", "uk"] }).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="App min-vh-100">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
