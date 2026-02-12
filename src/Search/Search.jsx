import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import { List, ListItem, Typography, Box } from "@mui/material";

function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramState = params.get("state");
  const paramCity = params.get("city");

  const { stateName: stateFromState, cityName: cityFromState } = location.state || {};

  const stateName = paramState || stateFromState;
  const cityName = paramCity || cityFromState;

  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (stateName && cityName) {
      setLoading(true);
      axios
        .get(
          `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(stateName)}&city=${encodeURIComponent(cityName)}`
        )
        .then((res) => {
          setHospitals(res.data || []);
        })
        .catch(() => setHospitals([]))
        .finally(() => setLoading(false));
    } else {
      setHospitals([]);
      setLoading(false);
    }
  }, [stateName, cityName]);

  if (loading) {
    return <Typography variant="h5">Loading medical centers...</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", px: 3, py: 4 }}>
      <Typography variant="h4" gutterBottom>
        {hospitals.length} medical centers available in {cityName}
      </Typography>

      {hospitals.length === 0 ? (
        <Typography color="text.secondary">No hospitals found</Typography>
      ) : (
        <List disablePadding>
          {hospitals.map((hospital) => (
            <ListItem 
              key={hospital["Provider ID"] || hospital["Hospital Name"]}
              divider
              sx={{ py: 2.5 }}
            >
              <HospitalCard hospital={hospital} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default Search;

