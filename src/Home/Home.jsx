// src/Home/Home.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const STATES_API = "https://meddata-backend.onrender.com/states";
const CITIES_API = (state) =>
  `https://meddata-backend.onrender.com/cities/${state}`;

 function Home() {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch(STATES_API)
      .then((res) => res.json())
      .then(setStates);
  }, []);

  useEffect(() => {
    if (state) {
      fetch(CITIES_API(state))
        .then((res) => res.json())
        .then(setCities);
    }
  }, [state]);

  const handleSearch = () => {
    if (state && city) {
      navigate("/search", { state: { state, city } });
    }
  };

  return (
    <div>
      <h1>Find Medical Centers</h1>

      <div id="state">
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div id="city">
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
export default Home