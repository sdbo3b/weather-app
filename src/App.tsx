import React from "react";
import weatherApiClient from "./api/weather-api-client";
import "./App.css";

function App() {
  const click = (e: any) => {
    e.preventDefault();
    weatherApiClient.byCityName({ q: ["London", "uk"] }).then((data) => {
      console.log(data.main);
    });
  };

  return (
    <div className="App">
      <p>Hello World</p>
      <button onClick={click}>test</button>
    </div>
  );
}

export default App;
