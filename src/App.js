import React from 'react';
import './App.css';
import Pet from "./Pet";
import Search from "./SearchParams"

function App() {
  return (
    <div>
    <h1>Furry Homies</h1>
    <Search/>
    <Pet name="Luna" animal="dog" breed="Havanese" />
    <Pet name="Pepper" animal="bird" breed="Cockatiel" />
    <Pet name="Doink" animal="cat" breed="Mix" />
  </div>
  );
}

export default App;
