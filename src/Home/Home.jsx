import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, Typography } from "@mui/material";
import HospitalCard from "../components/HospitalCard/HospitalCard";

function Home() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]); // ← this was missing!

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data || []))
      .catch((err) => console.error("Failed to fetch states:", err));
  }, []);

  useEffect(() => {
    if (!selectedState) return;

    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((res) => res.json())
      .then((data) => setCities(data || []))
      .catch((err) => console.error("Failed to fetch cities:", err));
  }, [selectedState]);

  const handleSearch = () => {
    if (!selectedState || !selectedCity) return;

    fetch(
      `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(selectedState)}&city=${encodeURIComponent(selectedCity)}`
    )
      .then((res) => res.json())
      .then((data) => setHospitals(data || []))
      .catch((err) => {
        console.error("Failed to fetch hospitals:", err);
        setHospitals([]);
      });
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
      <Typography variant="h4" gutterBottom>
        Find Medical Centers
      </Typography>

      {/* Cypress required IDs */}
      <div id="state" style={{ marginBottom: 16 }}>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={{ padding: 8, fontSize: 16 }}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div id="city" style={{ marginBottom: 16 }}>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
          style={{ padding: 8, fontSize: 16 }}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleSearch}
        disabled={!selectedState || !selectedCity}
        style={{
          padding: "10px 20px",
          background: selectedState && selectedCity ? "#1976d2" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: selectedState && selectedCity ? "pointer" : "not-allowed",
        }}
      >
        Search
      </button>

      {/* Hospital list – now with <li> */}
      {hospitals.length > 0 && (
        <List sx={{ marginTop: 5 }}>
          {hospitals.map((hospital, index) => (
            <ListItem key={index} divider sx={{ py: 3 }}>
              <HospitalCard hospital={hospital} />
            </ListItem>
          ))}
        </List>
      )}

      {hospitals.length === 0 && selectedState && selectedCity && (
        <Typography color="text.secondary" sx={{ mt: 4 }}>
          No hospitals found in {selectedCity}, {selectedState}
        </Typography>
      )}
    </div>
  );
}

export default Home;

