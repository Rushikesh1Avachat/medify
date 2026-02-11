// src/Search/Search.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import SearchBar from "../components/SearchBar/SearchBar";

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
        .then((data) => setHospitals(data || []));
    }
  }, [state, city]);

  return (
    <div>
      {/* ✅ REQUIRED FOR CYPRESS */}
      <SearchBar />

      <h2>Hospitals in {city}</h2>

      <div id="hospitals">
        {hospitals.map((h, i) => (
          <HospitalCard key={i} hospital={h} />
        ))}
      </div>
    </div>
  );
}

export default Search;

