// src/components/SearchBar/SearchBar.jsx
import { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  // Fetch states
  useEffect(() => {
    axios
      .get('https://meddata-backend.onrender.com/states')
      .then((res) => setStates(res.data || []))
      .catch((err) => console.error('States fetch error:', err));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!selectedState) {
      setCities([]);
      return;
    }

    axios
      .get(`https://meddata-backend.onrender.com/cities/${encodeURIComponent(selectedState)}`)
      .then((res) => setCities(res.data || []))
      .catch((err) => console.error('Cities fetch error:', err));
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate({
        pathname: '/search',
        search: createSearchParams({
          state: selectedState,
          city: selectedCity,
        }).toString(),
      });
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch} className={styles.form}>
        {/* State field */}
        <div className={styles.inputWrapper}>
          <SearchIcon className={styles.inputIcon} />
          <div id="state" className={styles.selectWrapper}>
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity(''); // reset city when state changes
              }}
              className={styles.select}
              required
            >
              <option value="" disabled>
                State
              </option>
              {states.map((stateName) => (
                <option key={stateName} value={stateName}>
                  {stateName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* City field */}
        <div className={styles.inputWrapper}>
          <SearchIcon className={styles.inputIcon} />
          <div id="city" className={styles.selectWrapper}>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className={styles.select}
              disabled={!selectedState}
              required
            >
              <option value="" disabled>
                City
              </option>
              {cities.map((cityName) => (
                <option key={cityName} value={cityName}>
                  {cityName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search button */}
        <button type="submit" id="searchBtn" className={styles.searchButton}>
          <SearchIcon className={styles.buttonIcon} />
          Search
        </button>
      </form>
    </div>
  );
}