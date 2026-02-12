import { useEffect, useState } from "react";
import HospitalCard from "../components/HospitalCard/HospitalCard";

function Home() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);

  // Fetch states
  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);

  // Fetch cities
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
    <div style={{ maxWidth: 1000, margin: "auto", padding: 20 }}>

      {/* STATE DROPDOWN */}
      <div id="state">
        <button type="button">
          {selectedState || "Select State"}
        </button>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {states.map((state) => (
            <li
              key={state}
              style={{ cursor: "pointer", padding: 4 }}
              onClick={() => {
                setSelectedState(state);
                setSelectedCity("");
              }}
            >
              {state}
            </li>
          ))}
        </ul>
      </div>

      {/* CITY DROPDOWN */}
      <div id="city" style={{ marginTop: 20 }}>
        <button type="button" disabled={!selectedState}>
          {selectedCity || "Select City"}
        </button>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {cities.map((city) => (
            <li
              key={city}
              style={{ cursor: "pointer", padding: 4 }}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSearch}
        style={{ marginTop: 20 }}
      >
        Search
      </button>

      {/* HOSPITAL LIST */}
      <div style={{ marginTop: 40 }}>
        {hospitals.map((hospital, index) => (
          <HospitalCard key={index} hospital={hospital} />
        ))}
      </div>
    </div>
  );
}

export default Home;
