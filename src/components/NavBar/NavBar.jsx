import { Link } from 'react-router-dom'

 function NavBar() {
  return (
    <header style={{
      background: '#2563eb',
      color: 'white',
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Medify</h1>
      <nav>
        <ul style={{
          display: 'flex',
          gap: '32px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>FIND DOCTORS</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>HOSPITALS</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>MEDICINES</a></li>
          <li>
            <Link to="/my-bookings" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
              MY BOOKINGS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default NavBar
