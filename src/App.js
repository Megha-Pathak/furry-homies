import React from 'react';
import './App.css';
import Search from "./SearchParams"
import { Router, Link } from "@reach/router";
import Details from "./Details";

function App() {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <Search path="/" />
        <Details path="/details/:id" />
      </Router>
  </div>
  );
}

export default App;
