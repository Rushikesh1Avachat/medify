// src/Search/Search.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookingModal from "../components/BookingModal/BookingModal";

function Search() {
  const location = useLocation();
  const { stateName, cityName } = location.state || {};
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    if (stateName && cityName) {
      fetch(`https://meddata-backend.onrender.com/data?state=${stateName}&city=${cityName}`)
        .then(res => res.json())
        .then(setHospitals)
        .catch(() => setHospitals([]));
    }
  }, [stateName, cityName]);

  return (
    <div>
      <h1>{hospitals.length} medical centers available in {cityName?.toLowerCase()}</h1>

      {hospitals.map((hospital, idx) => (
        <div key={idx}>
          <h3>{hospital["Hospital Name"]}</h3>
          <button onClick={() => setSelectedHospital(hospital)}>
            Book FREE Center Visit
          </button>
        </div>
      ))}

      {selectedHospital && (
        <BookingModal
          hospital={selectedHospital}
          onClose={() => setSelectedHospital(null)}
        />
      )}
    </div>
  );
}

export default Search;
