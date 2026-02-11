import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import HospitalCard from "../components/HospitalCard/HospitalCard";

 function Search() {
  const [params] = useSearchParams();
  const state = params.get("state");
  const city = params.get("city");

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (!state || !city) return;
    axios
      .get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      )
      .then(res => setHospitals(res.data));
  }, [state, city]);

  return (
    <div>
      {/* ✅ REQUIRED HEADING */}
      <h1>
        {hospitals.length} medical centers available in {city?.toLowerCase()}
      </h1>

      {hospitals.map(h => (
        <HospitalCard key={h["Hospital Name"]} hospital={h} />
      ))}
    </div>
  );
}
export default Search