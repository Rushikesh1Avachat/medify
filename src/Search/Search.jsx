import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { List, ListItem, Typography, Box } from "@mui/material";
import HospitalCard from "../components/HospitalCard/HospitalCard";

function Search() {
  const [hospitals, setHospitals] = useState([]);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const state = params.get("state");
  const city = params.get("city");

  useEffect(() => {
    if (state && city) {
      fetch(
        `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`
      )
        .then(res => res.json())
        .then(data => setHospitals(data || []));
    }
  }, [state, city]);

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Medical Centers in {city || "Selected Location"}
      </Typography>

      {hospitals.length === 0 ? (
        <Typography color="text.secondary">No hospitals found</Typography>
      ) : (
        <List disablePadding>
          {hospitals.map((hospital, index) => (
            <ListItem 
              key={index} 
              divider 
              sx={{ py: 3 }}
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
