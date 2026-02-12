// MyBookings/MyBookings.jsx  ← keep this one
import { useContext } from 'react';
import { BookingContext } from '../context/BookingContext'; // adjust path if needed

function MyBookings() {
  const { bookings } = useContext(BookingContext);

  return (
    <div>
      <h1>My Bookings</h1>

      {bookings?.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div>
          {bookings.map((booking, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #ddd', 
                padding: '16px', 
                margin: '16px 0', 
                borderRadius: '8px',
                background: '#f9fafb'
              }}
            >
              <h3>{booking.hospitalName || 'Unknown Hospital'}</h3>
              <p><strong>Date:</strong> {booking.date || '—'}</p>
              <p><strong>Time:</strong> {booking.time || '—'}</p>
              <p>{booking.address}, {booking.city}, {booking.state} {booking.zip}</p>
              {booking.rating && <p>Rating: {booking.rating}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;





