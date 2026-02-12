// src/components/HospitalCard/HospitalCard.jsx
import { useState, useContext } from 'react';
import { BookingContext } from '../../context/BookingContext'; // adjust path
import { format, addDays, isToday } from 'date-fns'; // npm install date-fns if not installed

const timeSlotsByPeriod = {
  Morning: ['09:00 AM', '10:00 AM', '11:00 AM'],
  Afternoon: ['12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'],
  Evening: ['04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'],
};

function HospitalCard({ hospital }) {
  const { addBooking } = useContext(BookingContext);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
    // Auto-select today by default
    if (!selectedDate) setSelectedDate(new Date());
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setSelectedSlot(''); // reset time when date changes
  };

  const handleSelectSlot = (period, time) => {
    setSelectedSlot(`${period} ${time}`);
  };

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedSlot) {
      alert('Please select both date and time slot');
      return;
    }

    const booking = {
      hospitalName: hospital['Hospital Name'] || 'Unknown Hospital',
      address: hospital.Address || '',
      city: hospital.City || '',
      state: hospital.State || '',
      zip: hospital['ZIP Code'] || '',
      rating: hospital['Hospital overall rating'] || 'N/A',
      date: format(selectedDate, 'yyyy-MM-dd'),
      time: selectedSlot,
      bookedAt: new Date().toISOString(),
    };

    addBooking(booking);
    alert('Appointment booked successfully!');

    // Reset & close
    setSelectedDate(null);
    setSelectedSlot('');
    setIsBookingOpen(false);
  };

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '20px',
      background: 'white',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{ margin: '0 0 8px', fontSize: '1.25rem' }}>
        {hospital['Hospital Name']}
      </h3>
      <p style={{ color: '#4b5563', margin: '4px 0' }}>
        {hospital.Address}, {hospital.City}, {hospital.State} {hospital['ZIP Code']}
      </p>
      <p style={{ fontWeight: '500' }}>
        Rating: {hospital['Hospital overall rating'] || 'N/A'}
      </p>

      <button
        onClick={handleOpenBooking}
        style={{
          marginTop: '16px',
          padding: '10px 20px',
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '500',
        }}
      >
        Book FREE Center Visit
      </button>

      {isBookingOpen && (
        <div style={{
          marginTop: '24px',
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h4 style={{ margin: 0 }}>Book Appointment</h4>
            <button
              onClick={() => setIsBookingOpen(false)}
              style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}
            >
              ×
            </button>
          </div>

          {/* Date selection */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontWeight: '500', marginBottom: '8px' }}>Select Date</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {Array.from({ length: 7 }).map((_, i) => {
                const date = addDays(new Date(), i);
                const isSelected = selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectDate(date)}
                    style={{
                      padding: '8px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      background: isSelected ? '#2563eb' : 'white',
                      color: isSelected ? 'white' : 'black',
                      cursor: 'pointer',
                      minWidth: '70px',
                    }}
                  >
                    {isToday(date) ? 'Today' : format(date, 'EEE dd')}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div>
              <p style={{ fontWeight: '500', marginBottom: '12px' }}>Available Slots</p>
              
              {Object.entries(timeSlotsByPeriod).map(([period, times]) => (
                <div key={period} style={{ marginBottom: '16px' }}>
                  <p style={{ fontWeight: '600', margin: '0 0 8px' }}>{period}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {times.map((time) => {
                      const fullSlot = `${period} ${time}`;
                      const isSelected = selectedSlot === fullSlot;
                      return (
                        <button
                          key={time}
                          onClick={() => handleSelectSlot(period, time)}
                          style={{
                            padding: '8px 16px',
                            border: '1px solid #3b82f6',
                            borderRadius: '6px',
                            background: isSelected ? '#3b82f6' : 'white',
                            color: isSelected ? 'white' : '#3b82f6',
                            cursor: 'pointer',
                          }}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <button
                onClick={handleConfirmBooking}
                disabled={!selectedSlot}
                style={{
                  marginTop: '16px',
                  padding: '12px 24px',
                  background: selectedSlot ? '#10b981' : '#d1d5db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: selectedSlot ? 'pointer' : 'not-allowed',
                  fontWeight: '500',
                }}
              >
                Confirm Booking
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HospitalCard;

