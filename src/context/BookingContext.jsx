import React, { createContext, useState, useContext } from "react";
import BookingModal from "../components/BookingModal/BookingModal";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [hospital, setHospital] = useState(null);

  const openBooking = (hospitalData) => setHospital(hospitalData);
  const closeBooking = () => setHospital(null);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {hospital && <BookingModal hospital={hospital} onClose={closeBooking} />}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
