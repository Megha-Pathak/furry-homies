import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [animal, updateAnimal] = useState("dog");
  

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange = {e => updateLocation(e.target.value)}
          />
          <label>
              Animals: 
            <select
            id = "animal"
            value = {animal}
            onChange = {e => (e.target.value)}
            onBlur = {e => (e.target.value)}>
                <option>All</option>
               {/* Now we will map array of strings by the Pet API to Array of Option Component */}
                {ANIMALS.map(animal => <option value = {animal}>{animal}</option>)}
            </select>
          </label>

        </label>
      
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
