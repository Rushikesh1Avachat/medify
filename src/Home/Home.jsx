import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch states
  useEffect(() => {
    setLoadingStates(true);
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((res) => setStates(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoadingStates(false));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (selectedState) {
      setSelectedCity(""); // reset city
      setLoadingCities(true);

      axios
        .get(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        )
        .then((res) => setCities(res.data))
        .catch((err) => console.log(err))
        .finally(() => setLoadingCities(false));
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!selectedState || !selectedCity) return;

    // ✅ Use query params (important for tests)
    navigate(
      `/search?state=${encodeURIComponent(
        selectedState
      )}&city=${encodeURIComponent(selectedCity)}`
    );
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSearch}>

        {/* REQUIRED FOR CYPRESS */}
        <div id="state">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">
              {loadingStates ? "Loading States..." : "Select State"}
            </option>

            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* REQUIRED FOR CYPRESS */}
        <div id="city">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">
              {loadingCities ? "Loading Cities..." : "Select City"}
            </option>

            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* REQUIRED BUTTON */}
        <button type="submit" id="searchBtn">
          Search
        </button>
      </form>
    </div>
  );
}

export default Home;
