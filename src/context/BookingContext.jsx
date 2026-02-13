import { createContext, useState, useEffect } from 'react'

export const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('bookings')
    if (stored) {
      try {
        setBookings(JSON.parse(stored))
      } catch (e) {
        console.error('Invalid bookings data', e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings))
  }, [bookings])

  const addBooking = (booking) => {
    setBookings(prev => [...prev, booking])
  }

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  )
}