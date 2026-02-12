// src/Home/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (state && city) {
      navigate("/search", { state: { stateName: state, cityName: city } });
    }
  };

  return (
    <div>
      <h1>Find Your Medical Center</h1>

      {/* State Dropdown */}
      <div id="state" onClick={() => setState("Alabama")}>
        {state || "Select State"}
        <ul>
          <li onClick={() => setState("Alabama")}>Alabama</li>
          <li onClick={() => setState("Texas")}>Texas</li>
        </ul>
      </div>

      {/* City Dropdown */}
      <div id="city" onClick={() => setCity("DOTHAN")}>
        {city || "Select City"}
        <ul>
          <li onClick={() => setCity("DOTHAN")}>DOTHAN</li>
          <li onClick={() => setCity("HOUSTON")}>HOUSTON</li>
        </ul>
      </div>

      <button id="searchBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Home;

