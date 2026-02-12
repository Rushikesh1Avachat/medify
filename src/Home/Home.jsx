import { useEffect, useState } from "react";
import HospitalCard from "../components/HospitalCard/HospitalCard";

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

    fetch(
      `https://meddata-backend.onrender.com/cities/${selectedState}`
    )
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, [selectedState]);

  const handleSearch = () => {
    if (!selectedState || !selectedCity) return;

    fetch(
      `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
    )
      .then((res) => res.json())
      .then((data) => setHospitals(data));
  };

  return (
    <div>
      {/* IMPORTANT IDs REQUIRED BY CYPRESS */}
      <select
        id="state"
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

      <select
        id="city"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <button onClick={handleSearch}>Search</button>

      {/* Render hospitals */}
      {hospitals.map((hospital, index) => (
        <HospitalCard key={index} hospital={hospital} />
      ))}
    </div>
  );
}

export default Home;
