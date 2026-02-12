import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HospitalCard from "../components/HospitalCard/HospitalCard";

function Search() {
  const location = useLocation();

  // Support both location.state and URL query params
  const params = new URLSearchParams(location.search);
  const paramState = params.get("state");
  const paramCity = params.get("city");

  const { stateName: stateFromState, cityName: cityFromState } =
    location.state || {};

  const stateName = paramState || stateFromState;
  const cityName = paramCity || cityFromState;

  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (stateName && cityName) {
      setLoading(true);

      axios
        .get(
          `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(
            stateName
          )}&city=${encodeURIComponent(cityName)}`
        )
        .then((res) => {
          setHospitals(res.data || []);
        })
        .catch(() => setHospitals([]))
        .finally(() => setLoading(false));
    } else {
      // If no search params, clear
      setHospitals([]);
      setLoading(false);
    }
  }, [stateName, cityName]);

  if (loading) return <h2>Loading medical centers...</h2>;

  return (
    <div>
      <h1>
        {hospitals.length} medical centers available in {cityName?.toLowerCase()}
      </h1>

      {hospitals.map((hospital) => (
        <HospitalCard key={hospital["Provider ID"]} hospital={hospital} />
      ))}
    </div>
  );
}

export default Search;


