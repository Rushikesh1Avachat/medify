import React, { useContext, useState } from 'react';
import { BookingContext } from '../../context/BookingContext'; // adjust path if needed
import { format, addDays } from 'date-fns'; // npm install date-fns

function BookingModal({ hospital, onClose }) {
  const { addBooking } = useContext(BookingContext);
  const [selectedDate, setSelectedDate] = useState(new Date()); // default today
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeClick = (period, time) => {
    setSelectedTime(`${period} ${time}`);
  };

  const handleConfirm = () => {
    if (!selectedTime) {
      alert('Please select a time slot');
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
      time: selectedTime,
      bookedAt: new Date().toISOString(),
    };

    addBooking(booking); // save via context → auto-saves to localStorage

    alert('Appointment booked successfully!');
    onClose();
  };

  // Simple date selector (today + next 6 days)
  const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        className="modal-content"
        style={{
          background: 'white',
          borderRadius: '12px',
          padding: '24px',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '28px',
            cursor: 'pointer',
            color: '#666',
          }}
        >
          ×
        </button>

        <h3 style={{ margin: '0 0 16px', color: '#1e40af' }}>
          {hospital['Hospital Name'] || 'Hospital Booking'}
        </h3>

        <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Select Date</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {dates.map((d, i) => {
            const isSelected = selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(d, 'yyyy-MM-dd');
            return (
              <button
                key={i}
                onClick={() => setSelectedDate(d)}
                style={{
                  padding: '8px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  background: isSelected ? '#2563eb' : 'white',
                  color: isSelected ? 'white' : '#000',
                  cursor: 'pointer',
                  minWidth: '80px',
                }}
              >
                {isToday(d) ? 'Today' : format(d, 'EEE dd')}
              </button>
            );
          })}
        </div>

        <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Available Slots</p>

        {/* Today label */}
        <p style={{ fontWeight: 600, margin: '16px 0 8px' }}>Today</p>

        {/* Morning */}
        <p
          onClick={() => handleTimeClick('Morning', '09:00 AM')}
          style={{
            padding: '10px',
            margin: '4px 0',
            background: selectedTime === 'Morning 09:00 AM' ? '#dbeafe' : '#f8fafc',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Morning
        </p>

        {/* Afternoon */}
        <p
          onClick={() => handleTimeClick('Afternoon', '02:00 PM')}
          style={{
            padding: '10px',
            margin: '4px 0',
            background: selectedTime === 'Afternoon 02:00 PM' ? '#dbeafe' : '#f8fafc',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Afternoon
        </p>

        {/* Evening */}
        <p
          onClick={() => handleTimeClick('Evening', '06:00 PM')}
          style={{
            padding: '10px',
            margin: '4px 0',
            background: selectedTime === 'Evening 06:00 PM' ? '#dbeafe' : '#f8fafc',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Evening
        </p>

        <button
          onClick={handleConfirm}
          disabled={!selectedTime}
          style={{
            marginTop: '24px',
            width: '100%',
            padding: '14px',
            background: selectedTime ? '#10b981' : '#d1d5db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: selectedTime ? 'pointer' : 'not-allowed',
          }}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default BookingModal;











