import { useState } from "react";
import { saveBooking } from "../../utils/bookingStorage";
import styles from "./BookingModal.module.css";

const timeSlots = {
  Morning: ["09:00 AM", "10:00 AM", "11:00 AM"],
  Afternoon: ["12:00 PM", "01:00 PM", "02:00 PM"],
  Evening: ["05:00 PM", "06:00 PM", "07:00 PM"],
};

const getNext7Days = () => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push(d.toDateString());
  }
  return days;
};

 function BookingModal({ hospital }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = getNext7Days();

  const handleBooking = (time) => {
    saveBooking({
      hospital: hospital["Hospital Name"],
      address: hospital.Address,
      date: selectedDate,
      time,
    });
    alert("Booking confirmed!");
  };

  return (
    <div className={styles.booking}>
      <h4>Select Date</h4>

      <div className={styles.dates}>
        {dates.map((d) => (
          <button
            key={d}
            className={selectedDate === d ? styles.active : ""}
            onClick={() => setSelectedDate(d)}
          >
            {d}
          </button>
        ))}
      </div>

      {selectedDate && (
        <>
          <h4>Available Slots</h4>

          {Object.keys(timeSlots).map((period) => (
            <div key={period}>
              <p>{period}</p>
              <div className={styles.slots}>
                {timeSlots[period].map((time) => (
                  <button
                    key={time}
                    onClick={() => handleBooking(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
export default BookingModal