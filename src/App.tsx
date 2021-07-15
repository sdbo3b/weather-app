import React from "react";
import weatherApiClient from "./api/weather-api-client";
import "./App.css";
import NavBar from "./components/nav/NavBar";

function App() {
  const click = (e: any) => {
    e.preventDefault();
    weatherApiClient.byCityName({ q: ["London", "uk"] }).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <p>Hello World</p>
      <button onClick={click}>test</button>
    </div>
  );
}

export default App;
