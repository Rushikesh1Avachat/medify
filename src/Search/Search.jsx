import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import HospitalCard from '../components/HospitalCard/HospitalCard';   // ← CORRECT PATH
// If your HospitalCard is in a different folder, change the path accordingly

function Search() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const [showStates, setShowStates] = useState(false);
  const [showCities, setShowCities] = useState(false);

  const stateContainer = useRef(null);
  const cityContainer = useRef(null);

  // Fetch states
  useEffect(() => {
    axios
      .get('https://meddata-backend.onrender.com/states')
      .then((res) => {
        const sorted = [...res.data].sort();
        setStates(sorted);
        console.log('States loaded, Alabama present?', sorted.includes('Alabama'));
      })
      .catch((err) => console.error('States fetch error:', err));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!selectedState) {
      setCities([]);
      setSelectedCity('');
      return;
    }
    axios
      .get(`https://meddata-backend.onrender.com/cities/${encodeURIComponent(selectedState)}`)
      .then((res) => {
        setCities([...res.data].sort());
      })
      .catch((err) => console.error('Cities fetch error:', err));
  }, [selectedState]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stateContainer.current && !stateContainer.current.contains(event.target)) {
        setShowStates(false);
      }
      if (cityContainer.current && !cityContainer.current.contains(event.target)) {
        setShowCities(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedState || !selectedCity) return;

    axios
      .get(
        `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(selectedState)}&city=${encodeURIComponent(selectedCity)}`
      )
      .then((res) => {
        const data = res.data || [];
        setHospitals(data);
        console.log('Hospitals loaded:', data.length, 'in', selectedCity);
      })
      .catch((err) => console.error('Hospitals fetch error:', err));
  };

  return (
    <>
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        style={{
          display: 'flex',
          gap: '16px',
          maxWidth: '960px',
          margin: '0 auto 32px',
          padding: '0 16px',
        }}
      >
        {/* State Dropdown */}
        <div id="state" ref={stateContainer} style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
          <div
            onClick={() => setShowStates((prev) => !prev)}
            style={{
              padding: '12px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              background: 'white',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            {selectedState || 'Select State'}
          </div>
          {showStates && (
            <ul
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                maxHeight: '320px',
                overflowY: 'auto',
                background: 'white',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                marginTop: '4px',
                padding: 0,
                listStyle: 'none',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                zIndex: 100,
              }}
            >
              {states.map((st) => (
                <li
                  key={st}
                  onClick={() => {
                    setSelectedState(st);
                    setShowStates(false);
                  }}
                  style={{
                    padding: '12px 16px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #f3f4f6',
                  }}
                >
                  {st}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* City Dropdown */}
        <div id="city" ref={cityContainer} style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
          <div
            onClick={() => selectedState && setShowCities((prev) => !prev)}
            style={{
              padding: '12px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              background: selectedState ? 'white' : '#f3f4f6',
              cursor: selectedState ? 'pointer' : 'not-allowed',
              fontSize: '16px',
              opacity: selectedState ? 1 : 0.6,
            }}
          >
            {selectedCity || 'Select City'}
          </div>
          {showCities && (
            <ul
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                maxHeight: '320px',
                overflowY: 'auto',
                background: 'white',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                marginTop: '4px',
                padding: 0,
                listStyle: 'none',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                zIndex: 100,
              }}
            >
              {cities.map((ct) => (
                <li
                  key={ct}
                  onClick={() => {
                    setSelectedCity(ct);
                    setShowCities(false);
                  }}
                  style={{
                    padding: '12px 16px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #f3f4f6',
                  }}
                >
                  {ct}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="submit"
          id="searchBtn"
          style={{
            padding: '12px 32px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>

      {/* Search Results */}
      {hospitals.length > 0 && (
        <div style={{ marginTop: '32px', padding: '0 16px' }}>
          <h1 style={{ marginBottom: '24px' }}>
            {hospitals.length} medical centers available in {selectedCity.toLowerCase()}
          </h1>

          <div className="hospital-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {hospitals.map((hosp, i) => (
              <HospitalCard key={i} hospital={hosp} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Search;