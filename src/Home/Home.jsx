// Example: Home.jsx (or wherever Search is used)
import Search from '../Search/Search';  // adjust path
import HospitalCard from '../components/HospitalCard/HospitalCard';
import { useState } from 'react';
function Home() {
  const [hospitals, setHospitals] = useState([]);
  const [searchCity, setSearchCity] = useState('');

  const handleHospitalsLoad = (fetchedHospitals, city) => {
    setHospitals(fetchedHospitals);
    setSearchCity(city);
    console.log('Hospitals loaded:', fetchedHospitals.length, 'in', city);
  };

  return (
    <div>
      {/* Hero / other sections */}
      
      <Search onHospitalsLoad={handleHospitalsLoad} />

      {hospitals.length > 0 && (
        <h1>
          {hospitals.length} medical centers available in {searchCity.toLowerCase()}
        </h1>
      )}

      {/* Render hospital list / cards */}
      <div className="hospital-list">
        {hospitals.map((hosp, i) => (
          <HospitalCard key={i} hospital={hosp} />
        ))}
      </div>
    </div>
  );
}
export default Home


