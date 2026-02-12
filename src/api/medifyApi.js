export const fetchStates = async () => {
  const res = await fetch("https://meddata-backend.onrender.com/states");
  return res.json();
};

export const fetchCities = async (state) => {
  const res = await fetch(
    `https://meddata-backend.onrender.com/cities/${state}`
  );
  return res.json();
};

export const fetchHospitals = async (state, city) => {
  const res = await fetch(
    `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
  );
  return res.json();
};

