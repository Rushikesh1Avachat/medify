import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookingModal from "../components/BookingModal/BookingModal";

function Search() {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const state = queryParams.get("state");
  const city = queryParams.get("city");

  useEffect(() => {
    if (state && city) {
      fetch(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      )
        .then(res => res.json())
        .then(data => setHospitals(data));
    }
  }, [state, city]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Results</h2>

      {hospitals.map((hospital, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: 16,
            marginBottom: 16,
          }}
        >
          <h3>{hospital["Hospital Name"]}</h3>
          <p>{hospital.City}, {hospital.State}</p>

          <button onClick={() => setSelectedHospital(hospital)}>
            Book Appointment
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


