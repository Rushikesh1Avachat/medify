import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then(res => res.json())
      .then(data => setStates(data))
      .catch(() => setStates([]));
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
        .then(res => res.json())
        .then(data => setCities(data))
        .catch(() => setCities([]));
    }
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate("/search", { state: { stateName: selectedState, cityName: selectedCity } });
    }
  };

  return (
    <div>
      <div id="state">
        <select value={selectedState} onChange={e => setSelectedState(e.target.value)}>
          <option value="">Select State</option>
          {states.map((state, idx) => (
            <option key={idx} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div id="city">
        <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
          <option value="">Select City</option>
          {cities.map((city, idx) => (
            <option key={idx} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <button type="submit" id="searchBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Home;



