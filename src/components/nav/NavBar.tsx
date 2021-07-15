import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Weather
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <button className="btn btn-light mx-1 rounded-pill" type="submit">
            Home
          </button>
          <button
            className="btn btn-outline-light mx-1 rounded-pill"
            type="submit"
          >
            Favourites
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
