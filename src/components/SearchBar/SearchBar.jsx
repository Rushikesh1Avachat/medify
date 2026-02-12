import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchStates, fetchCities } from "../../api";

function SearchBar() {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    fetchStates().then(setStates);
  }, []);

  useEffect(() => {
    if (state) fetchCities(state).then(setCities);
  }, [state]);

  const handleSearch = () => {
    if (!state || !city) return;
    navigate(`/search?state=${state}&city=${city}`);
  };

  return (
    <div>
      <div id="state">
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div id="city">
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;

