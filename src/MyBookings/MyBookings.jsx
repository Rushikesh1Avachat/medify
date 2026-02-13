import { useContext } from 'react'
import { BookingContext } from '../context/BookingContext'

 function MyBookings() {
  const { bookings } = useContext(BookingContext)

  return (
    <div style={{ padding: '40px 16px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>My Bookings</h1>

      {bookings.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No bookings yet.</p>
      ) : (
        <div style={{ display: 'grid', gap: '24px' }}>
          {bookings.map((b, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '20px',
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <h3 style={{ margin: '0 0 12px' }}>{b.hospitalName}</h3>
              <p style={{ margin: '4px 0' }}>
                <strong>Date:</strong> {b.date} <strong>Time:</strong> {b.time}
              </p>
              <p style={{ margin: '4px 0', color: '#4b5563' }}>
                {b.address}, {b.city}, {b.state} {b.zip}
              </p>
              {b.rating && <p style={{ margin: '4px 0' }}>Rating: {b.rating}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default MyBookings