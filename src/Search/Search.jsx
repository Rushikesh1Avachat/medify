import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

function Search() {
  const location = useLocation();
  const { stateName, cityName } = location.state || {};
  const [hospitals, setHospitals] = useState([]);
  const { openBooking } = useBooking(); // Use context

  useEffect(() => {
    if (stateName && cityName) {
      fetch(`https://meddata-backend.onrender.com/data?state=${stateName}&city=${cityName}`)
        .then(res => res.json())
        .then(data => setHospitals(data))
        .catch(() => setHospitals([]));
    }
  }, [stateName, cityName]);

  return (
    <div>
      <h1>{hospitals.length} medical centers available in {cityName?.toLowerCase()}</h1>

      {hospitals.map((hospital, idx) => (
        <div key={idx}>
          <h3>{hospital["Hospital Name"]}</h3>
          <button onClick={() => openBooking(hospital)}>
            Book FREE Center Visit
          </button>
        </div>
      ))}
    </div>
  );
}

export default Search;



