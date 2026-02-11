import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HospitalCard from "../components/HospitalCard/HospitalCard";

function Search() {
  const [params] = useSearchParams();
  const state = params.get("state");
  const city = params.get("city");

  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    if (!state || !city) return;

    fetch(
      `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
    )
      .then(res => res.json())
      .then(data => setHospitals(data || []))
      .catch(err => console.error(err));
  }, [state, city]);

  return (
    <div>
      <h1>Hospitals in {city}</h1>

      <div id="hospitals">
        {hospitals.map((h, i) => (
          <HospitalCard
            key={i}
            hospital={h}
            onBook={() => setSelectedHospital(h)}
          />
        ))}
      </div>

      {selectedHospital && (
        <div id="booking-section">
          <HospitalCard hospital={selectedHospital} booking />
        </div>
      )}
    </div>
  );
}

export default Search;



