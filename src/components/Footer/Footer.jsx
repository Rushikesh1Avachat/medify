 function Footer() {
  return (
    <footer style={{
      background: '#1e3a8a',
      color: 'white',
      padding: '48px 16px 24px',
      marginTop: '60px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '32px',
      }}>
        <div>
          <h3 style={{ margin: '0 0 16px' }}>Medify</h3>
          <p>Trusted platform for booking medical appointments.</p>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#dbeafe' }}>Find Doctors</a></li>
            <li><a href="#" style={{ color: '#dbeafe' }}>Hospitals</a></li>
            <li><a href="#" style={{ color: '#dbeafe' }}>Medicines</a></li>
            <li><a href="/my-bookings" style={{ color: '#dbeafe' }}>My Bookings</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px' }}>Contact</h4>
          <p>support@medify.com</p>
          <p>+91 98765 43210</p>
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '48px', opacity: 0.8 }}>
        © 2026 Medify. All rights reserved.
      </p>
    </footer>
  )
}
export default Footer