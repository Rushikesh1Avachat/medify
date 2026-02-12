import axios from 'axios';

const API = axios.create({ baseURL: 'https://meddata-backend.onrender.com' });

export const getStates = () => API.get('/states');
export const getCities = (state) => API.get(`/cities/${encodeURIComponent(state)}`);
export const getHospitals = (state, city) =>
  API.get(`/data?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`);
