import { useState, useEffect } from 'react'
import axios from 'axios'
import HospitalCard from '../components/HospitalCard/HospitalCard'
 function Search() {
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [hospitals, setHospitals] = useState([])

  useEffect(() => {
    axios.get('https://meddata-backend.onrender.com/states')
      .then(res => {
        const sorted = [...res.data].sort((a, b) => a.localeCompare(b))
        setStates(sorted)
      })
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    if (!selectedState) {
      setCities([])
      setSelectedCity('')
      return
    }
    axios.get(`https://meddata-backend.onrender.com/cities/${encodeURIComponent(selectedState)}`)
      .then(res => setCities([...res.data].sort((a, b) => a.localeCompare(b))))
      .catch(err => console.error(err))
  }, [selectedState])

  const handleSearch = e => {
    e.preventDefault()
    if (!selectedState || !selectedCity) return

    axios.get(
      `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(selectedState)}&city=${encodeURIComponent(selectedCity)}`
    )
      .then(res => setHospitals(res.data || []))
      .catch(err => console.error(err))
  }

  return (
    <div style={{ padding: '32px 16px', maxWidth: '1200px', margin: '0 auto' }}>
      <form
        onSubmit={handleSearch}
        style={{
          display: 'flex',
          gap: '16px',
          maxWidth: '900px',
          margin: '0 auto 40px',
        }}
      >
        <div id="state" style={{ flex: 1 }}>
          <select
            value={selectedState}
            onChange={e => setSelectedState(e.target.value)}
            style={{
              width: '100%',
              padding: '14px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '16px',
            }}
          >
            <option value="" disabled>Select State</option>
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div id="city" style={{ flex: 1 }}>
          <select
            value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}
            disabled={!selectedState}
            style={{
              width: '100%',
              padding: '14px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '16px',
              background: selectedState ? 'white' : '#f3f4f6',
            }}
          >
            <option value="" disabled>Select City</option>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <button
          type="submit"
          id="searchBtn"
          style={{
            padding: '14px 32px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Search
        </button>
      </form>

      {hospitals.length > 0 && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>
            {hospitals.length} medical centers available in {selectedCity.toLowerCase()}
          </h1>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}>
            {hospitals.map((h, i) => (
              <HospitalCard key={i} hospital={h} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Search