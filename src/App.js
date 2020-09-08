import React, { useState } from "react";
import './App.css';
import Search from "./SearchParams"
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";


function App() {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <Search path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  </ThemeContext.Provider>
  );
}

export default App;
