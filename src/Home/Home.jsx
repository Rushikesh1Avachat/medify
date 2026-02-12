import { useEffect, useState } from "react";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import { List, ListItem } from "@mui/material";

function Home() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);

  useEffect(() => {
    if (!selectedState) return;

    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, [selectedState]);

  const handleSearch = () => {
    if (!selectedState || !selectedCity) return;

    fetch(
      `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
    )
      .then((res) => res.json())
      .then((data) => setHospitals(data || []));
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
      {/* IMPORTANT – IDs required by Cypress */}
      <div id="state">
        <select
          id="state-select"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div id="city">
        <select
          id="city-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSearch} style={{ marginLeft: 12 }}>
        Search
      </button>

      {hospitals.length > 0 && (
        <List sx={{ marginTop: 4 }}>
          {hospitals.map((hospital, index) => (
            <ListItem 
              key={index} 
              divider 
              sx={{ padding: "16px 0" }}
            >
              <HospitalCard hospital={hospital} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

export default Home;
