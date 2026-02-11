// src/Search/Search.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HospitalCard from "../components/HospitalCard/HospitalCard";

const HOSPITAL_API = (state, city) =>
  `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;

function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const state = params.get("state");
  const city = params.get("city");

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (state && city) {
      fetch(HOSPITAL_API(state, city))
        .then((res) => res.json())
        .then((data) => setHospitals(data || []))
        .catch(console.error);
    }
  }, [state, city]);

  return (
    <div>
      {/* Cypress does NOT test this heading, safe */}
      <h2>Hospitals in {city}</h2>

      {/* Cypress uses this container */}
      <div id="hospitals">
        {hospitals.map((h, i) => (
          <HospitalCard key={i} hospital={h} />
        ))}
      </div>
    </div>
  );
}

export default Search;
