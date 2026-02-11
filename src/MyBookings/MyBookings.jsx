import { getBookings } from "../utils/bookingStorage";

 function MyBookings() {
  const bookings = getBookings();

  return (
    <>
      <h1>My Bookings</h1>

      {bookings.map((b, i) => (
        <div key={i}>
          <h3>{b.hospital}</h3>
          <p>{b.date}</p>
          <p>{b.time}</p>
        </div>
      ))}
    </>
  );
}
export default MyBookings