import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import { getHospitals } from "../api/medifyApi";

 function Search() {
  const { state } = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    getHospitals(state.state, state.city)
      .then(res => setData(res.data));
  }, [state]);

  return (
    <>
      <h1>
        {data.length} medical centers available in {state.city.toLowerCase()}
      </h1>

      {data.map((h, i) => (
        <HospitalCard key={i} hospital={h} />
      ))}
    </>
  );
}
export default Search