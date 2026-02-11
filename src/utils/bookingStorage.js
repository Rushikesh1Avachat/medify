export const saveBooking = (booking) => {
  const existing = JSON.parse(localStorage.getItem("bookings")) || [];
  existing.push(booking);
  localStorage.setItem("bookings", JSON.stringify(existing));
};

export const getBookings = () => {
  return JSON.parse(localStorage.getItem("bookings")) || [];
};
