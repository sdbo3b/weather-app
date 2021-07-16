import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Favourites from "./components/favourties/Favourites";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App min-vh-100">
        <NavBar />
        <Switch>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
