import { useState, useContext } from 'react'
import { BookingContext } from '../../context/BookingContext'
import { format, addDays, isToday } from 'date-fns'

const periods = {
  Morning: ['09:00 AM', '10:00 AM', '11:00 AM'],
  Afternoon: ['12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'],
  Evening: ['04:00 PM', '05:00 PM', '06:00 PM'],
}

 function HospitalCard({ hospital }) {
  const { addBooking } = useContext(BookingContext)
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(null)
  const [slot, setSlot] = useState('')

  const openBooking = () => {
    setOpen(true)
    setDate(new Date())
  }

  const chooseDate = d => {
    setDate(d)
    setSlot('')
  }

  const chooseSlot = (p, t) => setSlot(`${p} ${t}`)

  const confirm = () => {
    if (!date || !slot) return alert('Select date and time')

    const booking = {
      hospitalName: hospital['Hospital Name'],
      address: hospital.Address,
      city: hospital.City,
      state: hospital.State,
      zip: hospital['ZIP Code'],
      rating: hospital['Hospital overall rating'] || 'N/A',
      date: format(date, 'yyyy-MM-dd'),
      time: slot,
      bookedAt: new Date().toISOString(),
    }

    addBooking(booking)
    alert('Appointment booked!')
    setOpen(false)
    setDate(null)
    setSlot('')
  }

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '20px',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    }}>
      <h3 style={{ margin: '0 0 8px' }}>{hospital['Hospital Name']}</h3>
      <p style={{ color: '#4b5563', margin: '0 0 8px' }}>
        {hospital.Address}, {hospital.City}, {hospital.State} {hospital['ZIP Code']}
      </p>
      <p style={{ fontWeight: 500 }}>Rating: {hospital['Hospital overall rating'] || 'N/A'}</p>

      <button
        onClick={openBooking}
        style={{
          marginTop: '12px',
          padding: '10px 20px',
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Book FREE Center Visit
      </button>

      {open && (
        <div style={{ marginTop: '24px', padding: '16px', background: '#f8fafc', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h4 style={{ margin: 0 }}>Book Appointment</h4>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
          </div>

          <p style={{ fontWeight: 500, marginBottom: '8px' }}>Select Date</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {Array.from({ length: 7 }).map((_, i) => {
              const d = addDays(new Date(), i)
              const active = date && format(date, 'yyyy-MM-dd') === format(d, 'yyyy-MM-dd')
              return (
                <button
                  key={i}
                  onClick={() => chooseDate(d)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    background: active ? '#2563eb' : 'white',
                    color: active ? 'white' : '#000',
                  }}
                >
                  {isToday(d) ? 'Today' : format(d, 'EEE dd')}
                </button>
              )
            })}
          </div>

          {date && (
            <>
              <p style={{ fontWeight: 500, marginBottom: '8px' }}>Available Slots</p>
              {Object.entries(periods).map(([p, times]) => (
                <div key={p} style={{ marginBottom: '16px' }}>
                  <p style={{ fontWeight: 600, margin: '0 0 8px' }}>{p}</p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {times.map(t => {
                      const full = `${p} ${t}`
                      const active = slot === full
                      return (
                        <button
                          key={t}
                          onClick={() => chooseSlot(p, t)}
                          style={{
                            padding: '8px 16px',
                            border: '1px solid #2563eb',
                            borderRadius: '6px',
                            background: active ? '#2563eb' : 'white',
                            color: active ? 'white' : '#2563eb',
                          }}
                        >
                          {t}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}

              <button
                onClick={confirm}
                disabled={!slot}
                style={{
                  marginTop: '16px',
                  padding: '12px 24px',
                  background: slot ? '#10b981' : '#d1d5db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: slot ? 'pointer' : 'not-allowed',
                }}
              >
                Confirm Booking
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
export default HospitalCard